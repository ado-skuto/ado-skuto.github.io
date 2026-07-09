(function () {
  const config = window.SITE_CONFIG;

  if (!config) {
    return;
  }

  const dom = {
    brand: document.querySelector("[data-brand]"),
    navList: document.querySelector("[data-nav-list]"),
    nav: document.querySelector("[data-nav]"),
    navToggle: document.querySelector("[data-nav-toggle]"),
    header: document.querySelector("[data-header]"),
    heroSection: document.querySelector('[data-section="hero"]'),
    heroImage: document.querySelector("[data-hero-image]"),
    offersList: document.querySelector("[data-offers-list]"),
    testimonialsList: document.querySelector("[data-testimonials-list]"),
    footerContent: document.querySelector("[data-footer-content]"),
    modal: document.querySelector("[data-form-modal]"),
    modalCloseButtons: document.querySelectorAll("[data-modal-close]"),
    modalTitle: document.querySelector("[data-step-title]"),
    modalDescription: document.querySelector("[data-step-description]"),
    modalMediaKicker: document.querySelector("[data-step-media-kicker]"),
    modalImage: document.querySelector("[data-step-image]"),
    modalMediaCaption: document.querySelector("[data-step-media-caption]"),
    selectedService: document.querySelector("[data-selected-service]"),
    stepCounter: document.querySelector("[data-step-counter]"),
    stepProgress: document.querySelector("[data-step-progress]"),
    stepFields: document.querySelector("[data-step-fields]"),
    questionnaireForm: document.querySelector("[data-questionnaire-form]"),
    formStatus: document.querySelector("[data-form-status]"),
    backButton: document.querySelector("[data-step-back]"),
    nextButton: document.querySelector("[data-step-next]"),
    submitButton: document.querySelector("[data-step-submit]")
  };

  const questionnaireState = {
    isOpen: false,
    activeStepIndex: 0,
    selectedServiceId: "",
    values: {}
  };

  function resetInitialScroll() {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  function setMeta() {
    document.documentElement.lang = config.brand.language || "sk";
    document.title = config.brand.pageTitle;
    updateMetaTag('meta[name="description"]', "content", config.brand.metaDescription);
    updateMetaTag('meta[property="og:title"]', "content", config.brand.pageTitle);
    updateMetaTag('meta[property="og:description"]', "content", config.brand.metaDescription);
    updateMetaTag('meta[property="og:image"]', "content", config.brand.ogImage);
  }

  function updateMetaTag(selector, attribute, value) {
    const element = document.querySelector(selector);

    if (element && value) {
      element.setAttribute(attribute, value);
    }
  }

  function renderNavigation() {
    if (!dom.navList || !config.navigation) {
      return;
    }

    dom.navList.innerHTML = config.navigation
      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join("");
  }

  function renderBrand() {
    if (!dom.brand) {
      return;
    }

    dom.brand.innerHTML = `
      <span class="site-brand__eyebrow">${config.brand.eyebrow}</span>
      <span class="site-brand__name">${config.brand.coachName}</span>
    `;
  }

  function renderHero() {
    if (!dom.heroSection) {
      return;
    }

    const content = dom.heroSection.querySelector(".hero__content");
    const actionWrap = dom.heroSection.querySelector("[data-hero-actions]");

    content.querySelector(".section-kicker").textContent = config.hero.kicker;
    content.querySelector("h1").textContent = config.hero.headline;
    content.querySelector(".hero__lead").textContent = config.hero.subheadline;
    actionWrap.innerHTML = `<a class="button button--ghost" href="${config.hero.secondaryCta.href}">${config.hero.secondaryCta.label}</a>`;
    updateImage(dom.heroImage, config.hero.image);
  }

  function updateImage(element, imageConfig) {
    if (!element || !imageConfig) {
      return;
    }

    element.src = imageConfig.src;
    element.alt = imageConfig.alt;
  }

  function renderOffers() {
    if (!dom.offersList) {
      return;
    }

    dom.offersList.innerHTML = config.offers
      .map(
        (offer) => `
          <article class="info-card reveal" data-reveal>
            <h3>${offer.title}</h3>
            <p>${offer.description}</p>
            <button class="button button--ghost" type="button" data-service-trigger="${offer.id}">
              ${offer.ctaLabel || config.questionnaire.triggerLabelFallback}
            </button>
          </article>
        `
      )
      .join("");
  }

  function renderTestimonials() {
    if (!dom.testimonialsList) {
      return;
    }

    dom.testimonialsList.innerHTML = config.testimonials
      .map(
        (item) => `
          <blockquote class="quote-card reveal" data-reveal>
            <p>“${item.quote}”</p>
            <footer>${item.author}</footer>
          </blockquote>
        `
      )
      .join("");
  }

  function renderFooter() {
    if (!dom.footerContent) {
      return;
    }

    const mailLink = `
      <a class="footer-link" href="mailto:${config.contact.email}" aria-label="Email">
        ${getIconMarkup("mail")}
        <span class="sr-only">Email</span>
      </a>
    `;

    const socialLinks = config.contact.socialLinks
      .map(
        (link) => `
          <a
            class="footer-link"
            href="${link.href}"
            target="_blank"
            rel="noreferrer"
            aria-label="${link.label}"
          >
            ${getIconMarkup(link.icon)}
            <span class="sr-only">${link.label}</span>
          </a>
        `
      )
      .join("");

    dom.footerContent.innerHTML = `
      <p>${config.brand.coachName}</p>
      <div class="footer-socials">
        ${mailLink}
        ${socialLinks}
      </div>
      <a href="#top">${config.footer.backToTopLabel}</a>
      <p>${config.footer.copyright}</p>
    `;

    const currentYearNode = dom.footerContent.querySelector("[data-current-year]");
    if (currentYearNode) {
      currentYearNode.textContent = String(new Date().getFullYear());
    }
  }

  function getIconMarkup(icon) {
    const icons = {
      mail: `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 6.75h16a1.25 1.25 0 0 1 1.25 1.25v8A1.25 1.25 0 0 1 20 17.25H4A1.25 1.25 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Zm0 1.5.05.04L12 13.6l7.95-5.31.05-.04H4Zm16 7.5V10.1l-7.58 5.06a.75.75 0 0 1-.84 0L4 10.1v5.65h16Z" fill="currentColor"/>
        </svg>
      `,
      instagram: `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M7.75 3.75h8.5a4 4 0 0 1 4 4v8.5a4 4 0 0 1-4 4h-8.5a4 4 0 0 1-4-4v-8.5a4 4 0 0 1 4-4Zm0 1.5a2.5 2.5 0 0 0-2.5 2.5v8.5a2.5 2.5 0 0 0 2.5 2.5h8.5a2.5 2.5 0 0 0 2.5-2.5v-8.5a2.5 2.5 0 0 0-2.5-2.5h-8.5Zm8.9 1.35a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.76 4.76 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Z" fill="currentColor"/>
        </svg>
      `,
      youtube: `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M21.02 7.2a2.77 2.77 0 0 0-1.95-1.96C17.36 4.75 12 4.75 12 4.75s-5.36 0-7.07.49A2.77 2.77 0 0 0 2.98 7.2C2.5 8.92 2.5 12 2.5 12s0 3.08.48 4.8a2.77 2.77 0 0 0 1.95 1.96c1.71.49 7.07.49 7.07.49s5.36 0 7.07-.49a2.77 2.77 0 0 0 1.95-1.96c.48-1.72.48-4.8.48-4.8s0-3.08-.48-4.8ZM10.25 15.55V8.45L15.87 12l-5.62 3.55Z" fill="currentColor"/>
        </svg>
      `
    };

    return icons[icon] || "";
  }

  function renderQuestionnaireChrome() {
    if (!dom.modal) {
      return;
    }

    const closeButton = dom.modal.querySelector(".modal__close");

    if (closeButton) {
      closeButton.setAttribute("aria-label", config.questionnaire.closeLabel);
    }

    if (dom.backButton) {
      dom.backButton.textContent = config.questionnaire.backLabel;
    }

    if (dom.nextButton) {
      dom.nextButton.textContent = config.questionnaire.nextLabel;
    }

    if (dom.submitButton) {
      dom.submitButton.textContent = config.questionnaire.submitLabel;
    }
  }

  function setupMobileNavigation() {
    if (!dom.navToggle || !dom.nav) {
      return;
    }

    dom.navToggle.addEventListener("click", () => {
      const isOpen = dom.nav.classList.toggle("is-open");
      dom.navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    dom.nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        dom.nav.classList.remove("is-open");
        dom.navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setupScrollState() {
    if (!dom.header) {
      return;
    }

    const toggleHeaderState = () => {
      dom.header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    toggleHeaderState();
    window.addEventListener("scroll", toggleHeaderState, { passive: true });
  }

  function setupRevealAnimations() {
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  function setupQuestionnaireTriggers() {
    const triggers = document.querySelectorAll("[data-service-trigger]");

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        openQuestionnaire(trigger.getAttribute("data-service-trigger") || "");
      });
    });
  }

  function openQuestionnaire(serviceId) {
    if (!dom.modal) {
      return;
    }

    const serviceDefaults = getServiceDefaults(serviceId);

    questionnaireState.isOpen = true;
    questionnaireState.activeStepIndex = 0;
    questionnaireState.selectedServiceId = serviceId;
    questionnaireState.values = serviceDefaults;

    dom.modal.hidden = false;
    requestAnimationFrame(() => dom.modal.classList.add("is-open"));
    document.body.classList.add("has-modal-open");
    renderQuestionnaireStep();
  }

  function getServiceDefaults(serviceId) {
    if (serviceId === "personal-training") {
      return { cooperationType: "Osobné tréningy" };
    }

    if (serviceId === "online-coaching") {
      return { cooperationType: "Online coaching" };
    }

    return {};
  }

  function closeQuestionnaire() {
    if (!dom.modal) {
      return;
    }

    questionnaireState.isOpen = false;
    dom.modal.classList.remove("is-open");
    document.body.classList.remove("has-modal-open");
    window.setTimeout(() => {
      dom.modal.hidden = true;
      clearStatus();
    }, 220);
  }

  function getSelectedService() {
    return config.offers.find((offer) => offer.id === questionnaireState.selectedServiceId) || null;
  }

  function renderQuestionnaireStep() {
    const step = config.questionnaire.steps[questionnaireState.activeStepIndex];

    if (!step || !dom.stepFields) {
      return;
    }

    clearStatus();
    renderStepHeader(step);
    transitionStepFields(step);
    updateStepControls();
  }

  function renderStepHeader(step) {
    const selectedService = getSelectedService();
    const current = questionnaireState.activeStepIndex + 1;
    const total = config.questionnaire.steps.length;
    const counterText = config.questionnaire.stepCounterLabel
      .replace("{current}", String(current))
      .replace("{total}", String(total));

    if (dom.modalMediaKicker) {
      dom.modalMediaKicker.textContent = step.kicker;
    }

    if (dom.modalTitle) {
      dom.modalTitle.textContent = step.title;
    }

    if (dom.modalDescription) {
      dom.modalDescription.textContent = step.description;
    }

    if (dom.modalImage && step.media) {
      dom.modalImage.src = step.media.src;
      dom.modalImage.alt = step.media.alt;
    }

    if (dom.modalMediaCaption) {
      dom.modalMediaCaption.textContent = step.media && step.media.caption ? step.media.caption : "";
    }

    if (dom.selectedService) {
      const serviceLabel = selectedService ? selectedService.title : "";
      dom.selectedService.textContent = `${config.questionnaire.selectedServiceLabel}: ${serviceLabel}`;
    }

    if (dom.stepCounter) {
      dom.stepCounter.textContent = counterText;
    }

    if (dom.stepProgress) {
      dom.stepProgress.style.width = `${(current / total) * 100}%`;
    }
  }

  function transitionStepFields(step) {
    dom.stepFields.classList.remove("is-active");

    window.setTimeout(() => {
      dom.stepFields.innerHTML = step.fields.map(renderFieldMarkup).join("");
      hydrateStepValues();
      dom.stepFields.classList.add("is-active");
      const firstField = dom.stepFields.querySelector("input, select, textarea");
      if (firstField) {
        firstField.focus();
      }
    }, 110);
  }

  function renderFieldMarkup(field) {
    const commonAttributes = [
      `name="${field.name}"`,
      `id="${field.name}"`,
      field.required ? "required" : "",
      field.placeholder ? `placeholder="${field.placeholder}"` : "",
      field.autocomplete ? `autocomplete="${field.autocomplete}"` : "",
      field.inputmode ? `inputmode="${field.inputmode}"` : ""
    ]
      .filter(Boolean)
      .join(" ");

    if (field.type === "radio") {
      return `
        <fieldset class="form-field form-field--group">
          <legend>${field.label}</legend>
          <div class="choice-list">
            ${field.options
              .map(
                (option, index) => `
                  <label class="choice-item">
                    <input
                      type="radio"
                      name="${field.name}"
                      value="${option}"
                      ${field.required && index === 0 ? "required" : ""}
                    >
                    <span>${option}</span>
                  </label>
                `
              )
              .join("")}
            ${field.other && field.other.enabled ? renderOtherOption(field, "radio") : ""}
          </div>
        </fieldset>
      `;
    }

    if (field.type === "checkbox") {
      return `
        <fieldset class="form-field form-field--group" data-max-selections="${field.maxSelections || ""}">
          <legend>${field.label}</legend>
          <div class="choice-list">
            ${field.options
              .map(
                (option) => `
                  <label class="choice-item">
                    <input
                      type="checkbox"
                      name="${field.name}"
                      value="${option}"
                    >
                    <span>${option}</span>
                  </label>
                `
              )
              .join("")}
            ${field.other && field.other.enabled ? renderOtherOption(field, "checkbox") : ""}
          </div>
        </fieldset>
      `;
    }

    if (field.type === "textarea") {
      return `
        <div class="form-field">
          <label for="${field.name}">${field.label}</label>
          <textarea ${commonAttributes} rows="${field.rows || 4}"></textarea>
        </div>
      `;
    }

    if (field.type === "select") {
      return `
        <div class="form-field">
          <label for="${field.name}">${field.label}</label>
          <select ${commonAttributes}>
            <option value="">Vyber možnosť</option>
            ${field.options.map((option) => `<option value="${option}">${option}</option>`).join("")}
          </select>
        </div>
      `;
    }

    return `
      <div class="form-field">
        <label for="${field.name}">${field.label}</label>
        <input ${commonAttributes} type="${field.type}">
      </div>
    `;
  }

  function renderOtherOption(field, type) {
    const otherName = `${field.name}__other`;
    const otherValue = "__other__";

    return `
      <label class="choice-item choice-item--other">
        <input type="${type}" name="${field.name}" value="${otherValue}">
        <span>${field.other.label}</span>
        <input
          class="choice-item__other-input"
          type="text"
          name="${otherName}"
          placeholder="${field.other.placeholder || "Doplň odpoveď"}"
          data-other-input-for="${field.name}"
        >
      </label>
    `;
  }

  function hydrateStepValues() {
    const fields = dom.stepFields.querySelectorAll("input, select, textarea");

    fields.forEach((field) => {
      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLSelectElement ||
        field instanceof HTMLTextAreaElement
      ) {
        const value = questionnaireState.values[field.name];
        const otherFieldName = field.getAttribute("data-other-input-for");

        if (field.type === "radio") {
          if (typeof value === "string") {
            if (field.value === value) {
              field.checked = true;
            }

            if (field.value === "__other__" && questionnaireState.values[`${field.name}__other`]) {
              field.checked = true;
            }
          }
          return;
        }

        if (field.type === "checkbox") {
          if (Array.isArray(value) && value.includes(field.value)) {
            field.checked = true;
          }

          if (
            field.value === "__other__" &&
            questionnaireState.values[`${field.name}__other`] &&
            Array.isArray(value) &&
            value.includes("__other__")
          ) {
            field.checked = true;
          }
          return;
        }

        if (otherFieldName) {
          const otherValue = questionnaireState.values[`${otherFieldName}__other`];
          if (typeof otherValue === "string") {
            field.value = otherValue;
          }
          return;
        }

        if (typeof value === "string") {
          field.value = value;
        }
      }
    });

    setupChoiceFieldInteractions();
  }

  function persistVisibleValues() {
    const step = config.questionnaire.steps[questionnaireState.activeStepIndex];

    if (!step) {
      return;
    }

    step.fields.forEach((fieldConfig) => {
      if (fieldConfig.type === "radio") {
        const selected = dom.stepFields.querySelector(`input[type="radio"][name="${fieldConfig.name}"]:checked`);
        questionnaireState.values[fieldConfig.name] = selected ? selected.value : "";

        if (fieldConfig.other && fieldConfig.other.enabled) {
          const otherInput = dom.stepFields.querySelector(`input[name="${fieldConfig.name}__other"]`);
          questionnaireState.values[`${fieldConfig.name}__other`] =
            otherInput instanceof HTMLInputElement ? otherInput.value.trim() : "";
        }

        return;
      }

      if (fieldConfig.type === "checkbox") {
        const selected = Array.from(
          dom.stepFields.querySelectorAll(`input[type="checkbox"][name="${fieldConfig.name}"]:checked`)
        ).map((input) => input.value);

        questionnaireState.values[fieldConfig.name] = selected;

        if (fieldConfig.other && fieldConfig.other.enabled) {
          const otherInput = dom.stepFields.querySelector(`input[name="${fieldConfig.name}__other"]`);
          questionnaireState.values[`${fieldConfig.name}__other`] =
            otherInput instanceof HTMLInputElement ? otherInput.value.trim() : "";
        }

        return;
      }

      const input = dom.stepFields.querySelector(`[name="${fieldConfig.name}"]`);
      if (
        input instanceof HTMLInputElement ||
        input instanceof HTMLSelectElement ||
        input instanceof HTMLTextAreaElement
      ) {
        questionnaireState.values[fieldConfig.name] = input.value.trim();
      }
    });
  }

  function updateStepControls() {
    const isFirst = questionnaireState.activeStepIndex === 0;
    const isLast = questionnaireState.activeStepIndex === config.questionnaire.steps.length - 1;

    if (dom.backButton) {
      dom.backButton.hidden = isFirst;
    }

    if (dom.nextButton) {
      dom.nextButton.hidden = isLast;
    }

    if (dom.submitButton) {
      dom.submitButton.hidden = !isLast;
    }
  }

  function validateCurrentStep() {
    const step = config.questionnaire.steps[questionnaireState.activeStepIndex];

    if (!step) {
      return false;
    }

    for (const fieldConfig of step.fields) {
      if (fieldConfig.type === "radio") {
        const selected = dom.stepFields.querySelector(`input[type="radio"][name="${fieldConfig.name}"]:checked`);
        if (fieldConfig.required && !selected) {
          return false;
        }

        if (selected && selected.value === "__other__") {
          const otherInput = dom.stepFields.querySelector(`input[name="${fieldConfig.name}__other"]`);
          if (otherInput instanceof HTMLInputElement && otherInput.value.trim() === "") {
            otherInput.focus();
            return false;
          }
        }

        continue;
      }

      if (fieldConfig.type === "checkbox") {
        const selected = Array.from(
          dom.stepFields.querySelectorAll(`input[type="checkbox"][name="${fieldConfig.name}"]:checked`)
        );

        if (fieldConfig.required && selected.length === 0) {
          return false;
        }

        if (fieldConfig.maxSelections && selected.length > fieldConfig.maxSelections) {
          return false;
        }

        const otherChecked = selected.find((input) => input.value === "__other__");
        if (otherChecked) {
          const otherInput = dom.stepFields.querySelector(`input[name="${fieldConfig.name}__other"]`);
          if (otherInput instanceof HTMLInputElement && otherInput.value.trim() === "") {
            otherInput.focus();
            return false;
          }
        }

        continue;
      }

      const input = dom.stepFields.querySelector(`[name="${fieldConfig.name}"]`);
      if (
        input instanceof HTMLInputElement ||
        input instanceof HTMLSelectElement ||
        input instanceof HTMLTextAreaElement
      ) {
        if (!input.reportValidity()) {
          return false;
        }
      }
    }

    persistVisibleValues();
    return true;
  }

  function buildGoogleFormsPayload(values) {
    return values;
  }

  async function submitQuestionnaire() {
    if (!validateCurrentStep()) {
      setStatus(config.questionnaire.errorMessage, "error");
      return;
    }

    const captchaResponse = dom.questionnaireForm.querySelector('[name="h-captcha-response"]');
    if (!(captchaResponse instanceof HTMLInputElement) || !captchaResponse.value.trim()) {
      setStatus("Please complete the captcha.", "error");
      return;
    }

    const selectedService = getSelectedService();
    const payload = buildSubmissionPayload({
      ...questionnaireState.values,
      selectedService: selectedService ? selectedService.title : questionnaireState.selectedServiceId
    });

    setLoadingState(true);

    try {
      const formData = new FormData(dom.questionnaireForm);
      Object.entries(payload).forEach(([key, value]) => {
        appendFormDataValue(formData, key, value);
      });

      const response = await fetch(config.questionnaire.submission.endpointUrl, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      let result = null;
      try {
        result = await response.json();
      } catch (error) {
        result = null;
      }

      if (!response.ok || (result && result.success === false)) {
        throw new Error(config.questionnaire.submitErrorMessage);
      }

      setStatus(config.questionnaire.successMessage, "success");
      dom.questionnaireForm.reset();
      questionnaireState.values = {};
      if (window.hcaptcha && typeof window.hcaptcha.reset === "function") {
        window.hcaptcha.reset();
      }
      window.setTimeout(closeQuestionnaire, 900);
    } catch (error) {
      setStatus(config.questionnaire.submitErrorMessage, "error");
    } finally {
      setLoadingState(false);
    }
  }

  function buildSubmissionPayload(values) {
    return {
      access_key: config.questionnaire.submission.accessKey,
      subject: config.questionnaire.submission.subject,
      submittedAt: new Date().toISOString(),
      pageTitle: config.brand.pageTitle,
      service: values.selectedService || "",
      cooperationType: normalizeFieldValue(values.cooperationType, values.cooperationType__other),
      goals: normalizeFieldValue(values.goals, values.goals__other),
      trainingApproach: normalizeFieldValue(values.trainingApproach, values.trainingApproach__other),
      currentFrustration: values.currentFrustration || "",
      blockers: normalizeFieldValue(values.blockers, values.blockers__other),
      trainingExperience: normalizeFieldValue(values.trainingExperience, values.trainingExperience__other),
      limitations: normalizeFieldValue(values.limitations, values.limitations__other),
      sessionsPerWeek: normalizeFieldValue(values.sessionsPerWeek, values.sessionsPerWeek__other),
      age: values.age || "",
      height: values.height || "",
      weight: values.weight || "",
      contactHandle: values.contactHandle || "",
      gender: normalizeFieldValue(values.gender, values.gender__other),
      fullName: values.fullName || "",
      whyNow: values.whyNow || ""
    };
  }

  function normalizeFieldValue(value, otherValue) {
    if (Array.isArray(value)) {
      return value
        .map((item) => (item === "__other__" ? otherValue || "" : item))
        .filter(Boolean);
    }

    if (value === "__other__") {
      return otherValue || "";
    }

    return value || "";
  }

  function appendFormDataValue(formData, key, value) {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        formData.append(key, item);
      });
      return;
    }

    formData.append(key, value);
  }

  function setupChoiceFieldInteractions() {
    const groups = dom.stepFields.querySelectorAll(".form-field--group");

    groups.forEach((group) => {
      const maxSelections = Number(group.getAttribute("data-max-selections") || "0");
      const checkboxes = group.querySelectorAll('input[type="checkbox"]');
      const radios = group.querySelectorAll('input[type="radio"]');

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          if (!(checkbox instanceof HTMLInputElement)) {
            return;
          }

          if (maxSelections > 0) {
            const checked = Array.from(checkboxes).filter(
              (input) => input instanceof HTMLInputElement && input.checked
            );

            if (checked.length > maxSelections) {
              checkbox.checked = false;
            }
          }

          syncOtherInputs(group);
        });
      });

      radios.forEach((radio) => {
        radio.addEventListener("change", () => {
          syncOtherInputs(group);
        });
      });

      syncOtherInputs(group);
    });
  }

  function syncOtherInputs(group) {
    const otherWrappers = group.querySelectorAll(".choice-item--other");

    otherWrappers.forEach((wrapper) => {
      const choiceInput = wrapper.querySelector('input[type="radio"], input[type="checkbox"]');
      const textInput = wrapper.querySelector(".choice-item__other-input");

      if (
        choiceInput instanceof HTMLInputElement &&
        textInput instanceof HTMLInputElement
      ) {
        textInput.disabled = !choiceInput.checked;
        if (!choiceInput.checked) {
          textInput.value = "";
        }
      }
    });
  }

  function setLoadingState(isLoading) {
    if (!dom.questionnaireForm || !dom.backButton || !dom.nextButton || !dom.submitButton) {
      return;
    }

    dom.questionnaireForm.classList.toggle("is-loading", isLoading);
    dom.backButton.disabled = isLoading;
    dom.nextButton.disabled = isLoading;
    dom.submitButton.disabled = isLoading;
    dom.submitButton.textContent = isLoading
      ? config.questionnaire.loadingLabel
      : config.questionnaire.submitLabel;
  }

  function setStatus(message, state) {
    if (!dom.formStatus) {
      return;
    }

    dom.formStatus.textContent = message;
    dom.formStatus.classList.remove("is-success", "is-error");

    if (state === "success") {
      dom.formStatus.classList.add("is-success");
    }

    if (state === "error") {
      dom.formStatus.classList.add("is-error");
    }
  }

  function clearStatus() {
    setStatus("", "");
  }

  function setupQuestionnaireNavigation() {
    if (!dom.modal || !dom.questionnaireForm || !dom.backButton || !dom.nextButton || !dom.submitButton) {
      return;
    }

    dom.nextButton.addEventListener("click", () => {
      if (!validateCurrentStep()) {
        setStatus(config.questionnaire.errorMessage, "error");
        return;
      }

      questionnaireState.activeStepIndex += 1;
      renderQuestionnaireStep();
    });

    dom.backButton.addEventListener("click", () => {
      persistVisibleValues();
      questionnaireState.activeStepIndex -= 1;
      renderQuestionnaireStep();
    });

    dom.questionnaireForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      await submitQuestionnaire();
    });

    dom.modalCloseButtons.forEach((button) => {
      button.addEventListener("click", closeQuestionnaire);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && questionnaireState.isOpen) {
        closeQuestionnaire();
      }
    });
  }

  function init() {
    resetInitialScroll();
    setMeta();
    renderBrand();
    renderNavigation();
    renderHero();
    renderOffers();
    renderTestimonials();
    renderFooter();
    renderQuestionnaireChrome();
    setupMobileNavigation();
    setupScrollState();
    setupRevealAnimations();
    setupQuestionnaireTriggers();
    setupQuestionnaireNavigation();
  }

  init();
})();
