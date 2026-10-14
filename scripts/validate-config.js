"use strict";

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
global.window = {};
require(path.join(repoRoot, "config.js"));

const config = global.window.SITE_CONFIG;
const errors = [];

function check(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getFields(questionnaireConfig) {
  return (questionnaireConfig.steps || []).flatMap((step) => step.fields || []);
}

function getPageFieldNames(pageGroup) {
  if (Array.isArray(pageGroup)) {
    return pageGroup;
  }

  return pageGroup && Array.isArray(pageGroup.fields) ? pageGroup.fields : [];
}

function validateFlow(flowName, flowConfig) {
  const fields = getFields(flowConfig);
  const fieldNames = fields.map((field) => field.name);
  const uniqueFieldNames = new Set(fieldNames);
  const pageFieldNames = (flowConfig.pageGroups || []).flatMap(getPageFieldNames);
  const referencedFieldNames = new Set(pageFieldNames);
  const submission = {
    ...(config.questionnaire.submission || {}),
    ...(flowConfig.submission || {})
  };

  check(fields.length > 0, `Questionnaire flow "${flowName}" has no fields.`);
  check(
    uniqueFieldNames.size === fieldNames.length,
    `Questionnaire flow "${flowName}" contains duplicate field names.`
  );
  check(
    Array.isArray(flowConfig.pageGroups) && flowConfig.pageGroups.length > 0,
    `Questionnaire flow "${flowName}" has no page groups.`
  );

  pageFieldNames.forEach((fieldName) => {
    check(
      uniqueFieldNames.has(fieldName),
      `Questionnaire flow "${flowName}" references unknown field "${fieldName}".`
    );
  });

  fieldNames.forEach((fieldName) => {
    check(
      referencedFieldNames.has(fieldName),
      `Questionnaire flow "${flowName}" does not place field "${fieldName}" on a page.`
    );
  });

  check(
    new Set(pageFieldNames).size === pageFieldNames.length,
    `Questionnaire flow "${flowName}" places a field on more than one page.`
  );
  check(isNonEmptyString(submission.endpointUrl), `Questionnaire flow "${flowName}" has no endpoint URL.`);
  check(isNonEmptyString(submission.accessKey), `Questionnaire flow "${flowName}" has no access key.`);
  check(isNonEmptyString(submission.subject), `Questionnaire flow "${flowName}" has no subject.`);
}

function validateAssetReferences(value, location = "config") {
  if (Array.isArray(value)) {
    value.forEach((item, index) => validateAssetReferences(item, `${location}[${index}]`));
    return;
  }

  if (!value || typeof value !== "object") {
    return;
  }

  Object.entries(value).forEach(([key, childValue]) => {
    const childLocation = `${location}.${key}`;

    if (key === "src" && typeof childValue === "string" && childValue.startsWith("assets/")) {
      const assetPath = path.join(repoRoot, ...childValue.split("/"));
      check(fs.existsSync(assetPath), `Missing asset "${childValue}" referenced by ${childLocation}.`);
      return;
    }

    validateAssetReferences(childValue, childLocation);
  });
}

check(config && typeof config === "object", "config.js did not create window.SITE_CONFIG.");

if (config) {
  const offers = Array.isArray(config.offers) ? config.offers : [];
  const flows = config.questionnaire && config.questionnaire.flows
    ? config.questionnaire.flows
    : {};
  const offerIds = offers.map((offer) => offer.id);

  check(offers.length > 0, "No offers are configured.");
  check(new Set(offerIds).size === offerIds.length, "Offer IDs must be unique.");

  offers.forEach((offer) => {
    check(isNonEmptyString(offer.id), "Every offer must have an ID.");
    check(isNonEmptyString(offer.title), `Offer "${offer.id || "unknown"}" has no title.`);
    check(Boolean(offer.image && offer.image.src), `Offer "${offer.id || "unknown"}" has no image.`);
    check(
      isNonEmptyString(offer.flow) && Boolean(flows[offer.flow]),
      `Offer "${offer.id || "unknown"}" references missing flow "${offer.flow || ""}".`
    );
  });

  Object.entries(flows).forEach(([flowName, flowConfig]) => validateFlow(flowName, flowConfig));
  validateAssetReferences(config);
}

if (errors.length) {
  console.error(`Configuration validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log("Configuration validation passed.");
}
