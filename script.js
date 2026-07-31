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
    contentSectionSlots: document.querySelectorAll("[data-content-sections]"),
    finalCta: document.querySelector("[data-final-cta]"),
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
    captchaWrap: document.querySelector(".captcha-wrap"),
    nextButton: document.querySelector("[data-step-next]"),
    submitButton: document.querySelector("[data-step-submit]")
  };

  const questionnaireState = {
    isOpen: false,
    activeStepIndex: 0,
    selectedServiceId: "",
    config: null,
    runtime: null,
    values: {},
    isSubmitting: false,
    autoAdvanceTimer: 0,
    captchaSyncTimer: 0
  };

  function isFormControl(element) {
    return (
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement
    );
  }

  function getQuestionPageFields(page) {
    if (!page || page.kind !== "questions" || !questionnaireState.runtime) {
      return [];
    }

    return page.fieldNames
      .map((fieldName) => questionnaireState.runtime.fieldsByName[fieldName])
      .filter(Boolean)
      .map((entry) => entry.field);
  }

  function getCurrentFields() {
    return getQuestionPageFields(getCurrentPage());
  }

  function getFieldControls(fieldName) {
    return {
      radios: dom.stepFields.querySelectorAll(`input[type="radio"][name="${fieldName}"]`),
      checkboxes: dom.stepFields.querySelectorAll(`input[type="checkbox"][name="${fieldName}"]`),
      otherInput: dom.stepFields.querySelector(`input[name="${fieldName}__other"]`),
      input: dom.stepFields.querySelector(`[name="${fieldName}"]`)
    };
  }

  function getStoredOtherValue(fieldName) {
    return questionnaireState.values[`${fieldName}__other`] || "";
  }

  function getSelectedChoiceValue(inputs) {
    const selected = Array.from(inputs).find((input) => input instanceof HTMLInputElement && input.checked);
    return selected instanceof HTMLInputElement ? selected.value : "";
  }

  function resetInitialScroll() {
    if (window.location.hash) {
      return;
    }

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
    actionWrap.innerHTML = "";
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
        (offer, index) => {
          const image = getOfferImage(offer, index);

          return `
          <article class="info-card reveal" data-reveal>
            <div class="info-card__visual" aria-hidden="true">
              <img src="${image.src}" alt="" width="320" height="240" loading="lazy">
            </div>
            <div class="info-card__body">
              <h3>${offer.title}</h3>
              <p>${offer.description}</p>
            </div>
            <button
              class="button button--ghost"
              type="button"
              data-service-trigger="${offer.id}"
              ${offer.disabled ? "disabled" : ""}
            >
              ${offer.ctaLabel || config.questionnaire.triggerLabelFallback}
            </button>
          </article>
        `;
        }
      )
      .join("");
  }

  function getContentSectionsForSlot(slotName) {
    const placement = config.contentSectionPlacement || {};
    const sectionIds = Array.isArray(placement[slotName]) ? placement[slotName] : [];
    const sections = Array.isArray(config.contentSections) ? config.contentSections : [];
    const sectionsById = new Map(sections.map((section) => [section.id, section]));

    return sectionIds.map((sectionId) => sectionsById.get(sectionId)).filter(Boolean);
  }

  function renderContentSections() {
    if (!dom.contentSectionSlots.length) {
      return;
    }

    dom.contentSectionSlots.forEach((slot) => {
      const slotName = slot.getAttribute("data-content-sections");
      const sections = getContentSectionsForSlot(slotName);

      slot.innerHTML = sections
        .map((section) => {
          return `
        <section class="content-section section" id="${escapeHtml(section.id)}" data-section="${escapeHtml(section.id)}" data-content-expand-section>
          <div class="container content-section__inner">
            <div class="content-section__clip reveal" data-reveal data-content-expand>
              ${renderContentSectionImages(section)}
              <div class="content-section__copy">
                <p class="section-kicker">${escapeHtml(section.kicker)}</p>
                <h2>${escapeHtml(section.title)}</h2>
                ${renderParagraphs(section.intro)}
                <div class="content-expand__body" data-content-expand-body>
                  ${renderParagraphs(section.expanded)}
                </div>
              </div>
            </div>
            <button
              class="content-expand__button"
              type="button"
              data-content-expand-toggle
              data-expand-label="${escapeHtml(section.expandLabel || "Čítať viac")}"
              data-collapse-label="${escapeHtml(section.collapseLabel || "Zobraziť menej")}"
            >
              <span>${escapeHtml(section.expandLabel || "Čítať viac")}</span>
            </button>
          </div>
        </section>
      `;
        })
        .join("");
    });
  }

  function renderParagraphs(value) {
    const paragraphs = Array.isArray(value) ? value : [value];

    return paragraphs
      .filter((paragraph) => paragraph)
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
  }

  function renderContentSectionImages(section) {
    const images = Array.isArray(section.images) && section.images.length
      ? section.images
      : [section.image].filter(Boolean);

    if (!images.length) {
      return "";
    }

    return `
      <figure class="content-section__media">
        ${images
          .map(
            (image) => `
          <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || "")}" loading="lazy">
        `
          )
          .join("")}
      </figure>
    `;
  }

  function setupContentExpands() {
    document.querySelectorAll("[data-content-expand-section]").forEach((section) => {
      const expand = section.querySelector("[data-content-expand]");
      const button = section.querySelector("[data-content-expand-toggle]");

      if (!expand || !button) {
        return;
      }

      button.addEventListener("click", () => {
        const isOpen = section.classList.toggle("is-open");
        const expandLabel = button.getAttribute("data-expand-label") || "Čítať viac";
        const collapseLabel = button.getAttribute("data-collapse-label") || "Zobraziť menej";

        const label = button.querySelector("span");

        if (label) {
          label.textContent = isOpen ? collapseLabel : expandLabel;
        }

        button.setAttribute("aria-expanded", String(isOpen));
      });

      button.setAttribute("aria-expanded", "false");
    });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getOfferImage(offer, index) {
    if (typeof offer.image === "string") {
      return {
        src: offer.image,
        alt: ""
      };
    }

    if (offer.image) {
      return offer.image;
    }

    const fallbackImages = [
      {
        src: "assets/images/form-step-coach-placeholder.svg",
        alt: ""
      },
      {
        src: "assets/images/form-step-goal-placeholder.svg",
        alt: ""
      },
      {
        src: "assets/images/form-step-details-placeholder.svg",
        alt: ""
      }
    ];

    return fallbackImages[index % fallbackImages.length];
  }

  function renderTestimonials() {
    if (!dom.testimonialsList) {
      return;
    }

    const section = document.querySelector('#testimonials .section-heading');
    if (section && config.testimonialsSection) {
      const kicker = section.querySelector(".section-kicker");
      const title = section.querySelector("h2");

      if (kicker) {
        kicker.textContent = config.testimonialsSection.kicker;
      }

      if (title) {
        title.textContent = config.testimonialsSection.title;
      }
    }

    dom.testimonialsList.classList.remove("card-grid", "card-grid--quotes");
    dom.testimonialsList.classList.add("testimonial-carousel");

    const screenshotTestimonials = Array.isArray(window.TESTIMONIAL_SCREENSHOTS)
      ? window.TESTIMONIAL_SCREENSHOTS
      : [];
    const testimonials = screenshotTestimonials.length ? screenshotTestimonials : config.testimonials;

    dom.testimonialsList.innerHTML = `
      <button
        class="testimonial-carousel__button"
        type="button"
        aria-label="Predchádzajúca referencia"
        data-testimonial-prev
      >
        ‹
      </button>
      <div class="testimonial-carousel__track" data-testimonial-track>
        ${testimonials
          .map(
            (item, index) => {
              const stateClass =
                index === 0 ? "is-active" : index === 1 ? "is-next" : index === testimonials.length - 1 ? "is-prev" : "is-hidden";

              if (item && item.src) {
                return `
          <figure
            class="quote-card quote-card--image ${stateClass}"
            data-testimonial-index="${index}"
          >
            <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || "Screenshot referencie od klienta")}" loading="lazy">
            <span class="quote-card__overlay">Výsledok z praxe</span>
          </figure>
        `;
              }

              return `
          <blockquote
            class="quote-card ${stateClass}"
            data-testimonial-index="${index}"
          >
            <p>“${escapeHtml(item.quote)}”</p>
            <footer>${escapeHtml(item.author)}</footer>
            <span class="quote-card__overlay">Výsledok z praxe</span>
          </blockquote>
        `;
            }
          )
          .join("")}
      </div>
      <button
        class="testimonial-carousel__button"
        type="button"
        aria-label="Nasledujúca referencia"
        data-testimonial-next
      >
        ›
      </button>
    `;
  }

  function setupTestimonialCarousel() {
    if (!dom.testimonialsList) {
      return;
    }

    const cards = Array.from(dom.testimonialsList.querySelectorAll("[data-testimonial-index]"));
    const prevButton = dom.testimonialsList.querySelector("[data-testimonial-prev]");
    const nextButton = dom.testimonialsList.querySelector("[data-testimonial-next]");
    let activeIndex = 0;

    if (!cards.length) {
      return;
    }

    const updateCarousel = (nextIndex) => {
      activeIndex = (nextIndex + cards.length) % cards.length;
      const previousIndex = (activeIndex - 1 + cards.length) % cards.length;
      const nextVisibleIndex = (activeIndex + 1) % cards.length;

      cards.forEach((card, index) => {
        card.classList.toggle("is-active", index === activeIndex);
        card.classList.toggle("is-prev", index === previousIndex);
        card.classList.toggle("is-next", index === nextVisibleIndex);
        card.classList.toggle(
          "is-hidden",
          index !== activeIndex && index !== previousIndex && index !== nextVisibleIndex
        );

        if (card instanceof HTMLElement) {
          card.tabIndex = index === activeIndex || index === previousIndex || index === nextVisibleIndex ? 0 : -1;
        }
      });
    };

    prevButton && prevButton.addEventListener("click", () => updateCarousel(activeIndex - 1));
    nextButton && nextButton.addEventListener("click", () => updateCarousel(activeIndex + 1));

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const index = Number(card.getAttribute("data-testimonial-index") || "0");
        updateCarousel(index);
      });

      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        const index = Number(card.getAttribute("data-testimonial-index") || "0");
        updateCarousel(index);
      });
    });

    updateCarousel(activeIndex);
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

  function renderFinalCta() {
    if (!dom.finalCta || !config.finalCta) {
      return;
    }

    dom.finalCta.innerHTML = `
      <div class="container final-cta__inner reveal" data-reveal>
        <p class="section-kicker">${escapeHtml(config.finalCta.kicker)}</p>
        <h2>${renderFinalCtaTitle(config.finalCta.title)}</h2>
        <a class="button button--primary final-cta__button" href="${escapeHtml(config.finalCta.href)}">
          ${escapeHtml(config.finalCta.label)}
        </a>
      </div>
    `;
  }

  function renderFinalCtaTitle(title) {
    const parts = String(title || "").split(" zadarmo");

    if (parts.length < 2) {
      return escapeHtml(title);
    }

    return `${escapeHtml(parts[0])}<br>zadarmo`;
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

  function setupBackgroundMotion() {
    // Drives only the decorative background rules in styles.css.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches) {
      return;
    }

    let isQueued = false;

    const updateBackgroundOffset = () => {
      document.documentElement.style.setProperty("--background-scroll-y", `${Math.round(window.scrollY)}px`);
      isQueued = false;
    };

    const queueBackgroundOffset = () => {
      if (isQueued) {
        return;
      }

      isQueued = true;
      window.requestAnimationFrame(updateBackgroundOffset);
    };

    updateBackgroundOffset();
    window.addEventListener("scroll", queueBackgroundOffset, { passive: true });
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
    const questionnaireConfig = getQuestionnaireConfigForService(serviceId);

    questionnaireState.isOpen = true;
    questionnaireState.activeStepIndex = 0;
    questionnaireState.selectedServiceId = serviceId;
    questionnaireState.config = questionnaireConfig;
    questionnaireState.runtime = buildQuestionnaireRuntime(questionnaireConfig);
    questionnaireState.values = serviceDefaults;
    window.clearTimeout(questionnaireState.autoAdvanceTimer);
    window.clearInterval(questionnaireState.captchaSyncTimer);

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
    questionnaireState.config = null;
    questionnaireState.runtime = null;
    window.clearTimeout(questionnaireState.autoAdvanceTimer);
    window.clearInterval(questionnaireState.captchaSyncTimer);
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

  function getQuestionnaireConfigForService(serviceId) {
    const selectedService = config.offers.find((offer) => offer.id === serviceId);
    const flowKey = selectedService && selectedService.flow ? selectedService.flow : "";
    const flowOverride =
      flowKey && config.questionnaire.flows && config.questionnaire.flows[flowKey]
        ? config.questionnaire.flows[flowKey]
        : {};

    return {
      ...config.questionnaire,
      ...flowOverride,
      submitStep: {
        ...config.questionnaire.submitStep,
        ...(flowOverride.submitStep || {})
      },
      submission: {
        ...config.questionnaire.submission,
        ...(flowOverride.submission || {})
      }
    };
  }

  function buildQuestionnaireRuntime(questionnaireConfig) {
    const fieldEntries = questionnaireConfig.steps.flatMap((step, stepIndex) =>
      step.fields.map((field, fieldIndex) => ({
        id: field.name,
        field,
        step,
        stepIndex,
        fieldIndex
      }))
    );

    const fieldsByName = Object.fromEntries(fieldEntries.map((entry) => [entry.field.name, entry]));
    const configuredGroups = Array.isArray(questionnaireConfig.pageGroups)
      ? questionnaireConfig.pageGroups
      : [];
    const questionPages = configuredGroups.length
      ? configuredGroups.map((group, index) => buildGroupedPage(group, index, fieldsByName))
      : fieldEntries.map((entry, index) => buildSingleFieldPage(entry, index));
    const lastQuestionPage = questionPages[questionPages.length - 1];
    const submitStep = questionnaireConfig.submitStep || {};

    const pages = [
      ...questionPages,
      {
        id: "submit",
        kind: "submit",
        fieldNames: [],
        kicker: submitStep.kicker || "Posledný krok",
        title: submitStep.title || "Potvrdenie a odoslanie",
        description:
          submitStep.description ||
          "Skontroluj si odpovede, dokonči captcha a odošli dotazník.",
        media: lastQuestionPage ? lastQuestionPage.media : null
      }
    ];

    return { fieldEntries, fieldsByName, pages };
  }

  function buildSingleFieldPage(entry, index) {
    return {
      id: `${entry.step.id}-${entry.field.name}-${index + 1}`,
      kind: "questions",
      fieldNames: [entry.field.name],
      kicker: entry.field.kicker || entry.step.kicker,
      title: entry.field.modalTitle || entry.step.title,
      description: entry.field.modalDescription || entry.step.description,
      media: entry.field.media || entry.step.media
    };
  }

  function buildGroupedPage(group, index, fieldsByName) {
    const normalizedGroup = Array.isArray(group) ? { fields: group } : group;
    const fieldNames = Array.isArray(normalizedGroup.fields) ? normalizedGroup.fields : [];
    const firstEntry = fieldsByName[fieldNames[0]];

    return {
      id: normalizedGroup.id || `page-group-${index + 1}`,
      kind: "questions",
      fieldNames,
      kicker: normalizedGroup.kicker || (firstEntry ? firstEntry.step.kicker : ""),
      title: normalizedGroup.title || (firstEntry ? firstEntry.step.title : ""),
      description: normalizedGroup.description || (firstEntry ? firstEntry.step.description : ""),
      media: normalizedGroup.media || (firstEntry ? firstEntry.step.media : null)
    };
  }

  function getCurrentPage() {
    if (!questionnaireState.runtime) {
      return null;
    }

    return questionnaireState.runtime.pages[questionnaireState.activeStepIndex] || null;
  }

  function renderQuestionnaireStep() {
    const page = getCurrentPage();

    if (!page || !dom.stepFields) {
      return;
    }

    clearStatus();
    renderStepHeader(page);
    transitionStepFields(page);
    updateStepControls();
  }

  function renderStepHeader(page) {
    const selectedService = getSelectedService();
    const current = questionnaireState.activeStepIndex + 1;
    const total = questionnaireState.runtime ? questionnaireState.runtime.pages.length : 0;
    const counterText = config.questionnaire.stepCounterLabel
      .replace("{current}", String(current))
      .replace("{total}", String(total));

    if (dom.modalMediaKicker) {
      dom.modalMediaKicker.textContent = page.kicker;
    }

    if (dom.modalTitle) {
      dom.modalTitle.textContent = page.title;
    }

    if (dom.modalDescription) {
      dom.modalDescription.textContent = page.description;
    }

    if (dom.modalImage && page.media) {
      dom.modalImage.src = page.media.src;
      dom.modalImage.alt = page.media.alt;
    }

    if (dom.modalMediaCaption) {
      dom.modalMediaCaption.textContent = page.media && page.media.caption ? page.media.caption : "";
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

  function transitionStepFields(page) {
    dom.stepFields.classList.remove("is-active");
    window.clearTimeout(questionnaireState.autoAdvanceTimer);

    window.setTimeout(() => {
      if (page.kind === "submit") {
        dom.stepFields.innerHTML = renderSubmitStepMarkup();
      } else {
        dom.stepFields.innerHTML = getQuestionPageFields(page).map(renderFieldMarkup).join("");
        hydrateStepValues();
      }
      dom.stepFields.classList.add("is-active");
      const firstField = dom.stepFields.querySelector("input, select, textarea");
      if (firstField) {
        firstField.focus();
      }
      syncStepActionState();
    }, 110);
  }

  function renderFieldMarkup(field) {
    const commonAttributes = [
      `name="${field.name}"`,
      `id="${field.name}"`,
      field.required ? "required" : "",
      field.placeholder ? `placeholder="${field.placeholder}"` : "",
      field.autocomplete ? `autocomplete="${field.autocomplete}"` : "",
      field.inputmode ? `inputmode="${field.inputmode}"` : "",
      field.pattern ? `pattern="${field.pattern}"` : ""
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
        ${field.invalidMessage ? `<p class="field-error" data-field-error-for="${field.name}" aria-live="polite"></p>` : ""}
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
      if (!isFormControl(field)) {
        return;
      }

      const value = questionnaireState.values[field.name];
      const otherFieldName = field.getAttribute("data-other-input-for");

      if (field.type === "radio") {
        if (typeof value === "string") {
          field.checked =
            field.value === value || (field.value === "__other__" && Boolean(getStoredOtherValue(field.name)));
        }
        return;
      }

      if (field.type === "checkbox") {
        if (Array.isArray(value)) {
          field.checked =
            value.includes(field.value) ||
            (field.value === "__other__" && Boolean(getStoredOtherValue(field.name)) && value.includes("__other__"));
        }
        return;
      }

      if (otherFieldName) {
        field.value = getStoredOtherValue(otherFieldName);
        return;
      }

      if (typeof value === "string") {
        field.value = value;
      }
    });

    setupChoiceFieldInteractions();
    setupStepValuePersistence();
  }

  function persistVisibleValues() {
    const fields = getCurrentFields();

    if (!fields.length) {
      return;
    }

    fields.forEach((fieldConfig) => {
      const controls = getFieldControls(fieldConfig.name);
      const otherValue =
        controls.otherInput instanceof HTMLInputElement ? controls.otherInput.value.trim() : "";

      if (fieldConfig.type === "radio") {
        questionnaireState.values[fieldConfig.name] = getSelectedChoiceValue(controls.radios);
      } else if (fieldConfig.type === "checkbox") {
        questionnaireState.values[fieldConfig.name] = Array.from(controls.checkboxes)
          .filter((input) => input instanceof HTMLInputElement && input.checked)
          .map((input) => input.value);
      } else if (isFormControl(controls.input)) {
        questionnaireState.values[fieldConfig.name] = controls.input.value.trim();
      }

      if (fieldConfig.other && fieldConfig.other.enabled) {
        questionnaireState.values[`${fieldConfig.name}__other`] = otherValue;
      }
    });
  }

  function updateStepControls() {
    const isFirst = questionnaireState.activeStepIndex === 0;
    const page = getCurrentPage();
    const isSubmitPage = page && page.kind === "submit";

    if (dom.backButton) {
      dom.backButton.hidden = isFirst;
    }

    if (dom.nextButton) {
      dom.nextButton.hidden = Boolean(isSubmitPage);
    }

    if (dom.submitButton) {
      dom.submitButton.hidden = !isSubmitPage;
    }

    if (dom.captchaWrap) {
      dom.captchaWrap.hidden = !isSubmitPage;
    }
  }

  function validateCurrentStep(options) {
    const settings = {
      focusInvalid: true,
      ...options
    };
    const page = getCurrentPage();
    const fields = getCurrentFields();

    if (page && page.kind === "submit") {
      return validateSubmitStep(settings.focusInvalid);
    }

    if (!fields.length) {
      return true;
    }

    persistVisibleValues();

    for (const fieldConfig of fields) {
      if (!validateField(fieldConfig, settings.focusInvalid)) {
        return false;
      }
    }

    return true;
  }

  function validateSubmitStep(focusInvalid) {
    const emailInput = dom.stepFields.querySelector('[name="email"]');

    if (!(emailInput instanceof HTMLInputElement)) {
      return true;
    }

    questionnaireState.values.email = emailInput.value.trim();
    syncSubmitEmailError(emailInput);

    if (!emailInput.value.trim()) {
      if (focusInvalid) {
        emailInput.focus();
      }
      return false;
    }

    return focusInvalid ? emailInput.reportValidity() : emailInput.checkValidity();
  }

  function syncSubmitEmailError(emailInput) {
    const errorNode = dom.stepFields.querySelector("[data-email-error]");

    if (!errorNode || !(emailInput instanceof HTMLInputElement)) {
      return;
    }

    const hasValue = emailInput.value.trim().length > 0;
    const showInvalidMessage = hasValue && emailInput.validity.typeMismatch;
    errorNode.textContent = showInvalidMessage
      ? config.questionnaire.submitStep.emailInvalidMessage
      : "";
  }

  function hasCaptchaResponse() {
    if (!dom.questionnaireForm) {
      return false;
    }

    const formData = new FormData(dom.questionnaireForm);
    const captchaResponse = formData.get("h-captcha-response");
    return typeof captchaResponse === "string" && captchaResponse.trim().length > 0;
  }

  function validateField(fieldConfig, focusInvalid) {
    if (!fieldConfig) {
      return false;
    }

    const controls = getFieldControls(fieldConfig.name);

    if (fieldConfig.type === "radio") {
      const selectedValue = getSelectedChoiceValue(controls.radios);
      const isOtherSelected = selectedValue === "__other__";

      if (fieldConfig.required && !selectedValue) {
        return false;
      }

      if (isOtherSelected && controls.otherInput instanceof HTMLInputElement && controls.otherInput.value.trim() === "") {
        if (focusInvalid) {
          controls.otherInput.focus();
        }
        return false;
      }

      return true;
    }

    if (fieldConfig.type === "checkbox") {
      const selected = Array.from(controls.checkboxes).filter(
        (input) => input instanceof HTMLInputElement && input.checked
      );

      if (fieldConfig.required && selected.length === 0) {
        return false;
      }

      if (fieldConfig.maxSelections && selected.length > fieldConfig.maxSelections) {
        return false;
      }

      const otherChecked = selected.find((input) => input.value === "__other__");
      if (
        otherChecked &&
        controls.otherInput instanceof HTMLInputElement &&
        controls.otherInput.value.trim() === ""
      ) {
        if (focusInvalid) {
          controls.otherInput.focus();
        }
        return false;
      }

      return true;
    }

    if (isFormControl(controls.input)) {
      if (controls.input instanceof HTMLInputElement && fieldConfig.invalidMessage) {
        const hasValue = controls.input.value.trim().length > 0;
        const isPatternMismatch = controls.input.validity.patternMismatch;
        controls.input.setCustomValidity(hasValue && isPatternMismatch ? fieldConfig.invalidMessage : "");
        syncInlineFieldError(controls.input);
      }

      return focusInvalid ? controls.input.reportValidity() : controls.input.checkValidity();
    }

    return !fieldConfig.required;
  }

  async function submitQuestionnaire() {
    if (!validateCurrentStep()) {
      setStatus(config.questionnaire.errorMessage, "error");
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
      if (!hasCaptchaResponse()) {
        setStatus(config.questionnaire.captchaErrorMessage, "error");
        return;
      }

      Object.entries(payload).forEach(([key, value]) => {
        appendFormDataValue(formData, key, value);
      });

      const response = await fetch(questionnaireState.config.submission.endpointUrl, {
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
      questionnaireState.activeStepIndex = 0;
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
    const submissionConfig = questionnaireState.config
      ? questionnaireState.config.submission
      : config.questionnaire.submission;

    return {
      access_key: submissionConfig.accessKey,
      subject: submissionConfig.subject,
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
      mainPriority: normalizeFieldValue(values.mainPriority, values.mainPriority__other),
      weakPoints: normalizeFieldValue(values.weakPoints, values.weakPoints__other),
      legApproach: normalizeFieldValue(values.legApproach, values.legApproach__other),
      legPriority: normalizeFieldValue(values.legPriority, values.legPriority__other),
      splitPreference: normalizeFieldValue(values.splitPreference, values.splitPreference__other),
      trainingLevel: normalizeFieldValue(values.trainingLevel, values.trainingLevel__other),
      sessionsPerWeek: normalizeFieldValue(values.sessionsPerWeek, values.sessionsPerWeek__other),
      workoutLength: normalizeFieldValue(values.workoutLength, values.workoutLength__other),
      equipmentAccess: normalizeFieldValue(values.equipmentAccess, values.equipmentAccess__other),
      cardioApproach: normalizeFieldValue(values.cardioApproach, values.cardioApproach__other),
      dietStatus: normalizeFieldValue(values.dietStatus, values.dietStatus__other),
      age: values.age || "",
      height: values.height || "",
      weight: values.weight || "",
      contactHandle: values.contactHandle || "",
      email: values.email || "",
      gender: normalizeFieldValue(values.gender, values.gender__other),
      fullName: values.fullName || "",
      whyNow: values.whyNow || "",
      additionalInfo: values.additionalInfo || ""
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
      formData.delete(key);
      value.forEach((item) => {
        formData.append(key, item);
      });
      return;
    }

    formData.set(key, value);
  }

  function setupChoiceFieldInteractions() {
    const page = getCurrentPage();
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
          persistVisibleValues();
          syncStepActionState();
        });
      });

      radios.forEach((radio) => {
        radio.addEventListener("change", () => {
          syncOtherInputs(group);
          persistVisibleValues();
          syncStepActionState();
          scheduleAutoAdvance(page);
        });
      });

      syncOtherInputs(group);
    });
  }

  function setupStepValuePersistence() {
    const inputs = dom.stepFields.querySelectorAll("input, select, textarea");

      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          persistVisibleValues();
          syncInlineFieldError(input);
          syncStepActionState();
        });

        input.addEventListener("change", () => {
          persistVisibleValues();
          syncInlineFieldError(input);
          syncStepActionState();
        });
      });
    }

  function syncInlineFieldError(input) {
    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    const errorNode = dom.stepFields.querySelector(`[data-field-error-for="${input.name}"]`);
    const fieldConfig = getCurrentFields().find((field) => field.name === input.name);

    if (!errorNode || !fieldConfig || !fieldConfig.invalidMessage) {
      return;
    }

    const hasValue = input.value.trim().length > 0;
    const showInvalidMessage = hasValue && input.validity.patternMismatch;
    errorNode.textContent = showInvalidMessage ? fieldConfig.invalidMessage : "";
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

    questionnaireState.isSubmitting = isLoading;
    dom.questionnaireForm.classList.toggle("is-loading", isLoading);
    dom.backButton.disabled = isLoading;
    syncStepActionState();
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

  function shouldAutoAdvancePage(page) {
    if (!page || page.kind !== "questions") {
      return false;
    }

    const fields = getQuestionPageFields(page);
    return fields.length === 1 && fields[0].type === "radio";
  }

  function scheduleAutoAdvance(page) {
    if (!shouldAutoAdvancePage(page) || !validateCurrentStep({ focusInvalid: false })) {
      return;
    }

    if (!questionnaireState.runtime) {
      return;
    }

    if (questionnaireState.activeStepIndex >= questionnaireState.runtime.pages.length - 2) {
      window.clearTimeout(questionnaireState.autoAdvanceTimer);
      questionnaireState.autoAdvanceTimer = window.setTimeout(() => {
        questionnaireState.activeStepIndex += 1;
        renderQuestionnaireStep();
      }, config.questionnaire.autoAdvanceDelay || 160);
      return;
    }

    window.clearTimeout(questionnaireState.autoAdvanceTimer);
    questionnaireState.autoAdvanceTimer = window.setTimeout(() => {
      questionnaireState.activeStepIndex += 1;
      renderQuestionnaireStep();
    }, config.questionnaire.autoAdvanceDelay || 160);
  }

  function syncStepActionState() {
    const page = getCurrentPage();
    const isSubmitPage = page && page.kind === "submit";
    const canProceed = validateCurrentStep({ focusInvalid: false });
    const hasCaptcha = !isSubmitPage || hasCaptchaResponse();

    if (dom.nextButton) {
      const disableNext = questionnaireState.isSubmitting || !canProceed;
      dom.nextButton.disabled = disableNext;
      dom.nextButton.classList.toggle("is-inactive", disableNext);
    }

    if (dom.submitButton) {
      dom.submitButton.disabled = questionnaireState.isSubmitting || !canProceed || !hasCaptcha;
      dom.submitButton.classList.toggle("is-inactive", dom.submitButton.disabled);
    }

    if (isSubmitPage && dom.backButton) {
      dom.backButton.disabled = questionnaireState.isSubmitting;
    }

    syncCaptchaStateWatcher(isSubmitPage);
  }

  function syncCaptchaStateWatcher(isSubmitPage) {
    window.clearInterval(questionnaireState.captchaSyncTimer);

    if (!isSubmitPage || questionnaireState.isSubmitting) {
      return;
    }

    questionnaireState.captchaSyncTimer = window.setInterval(() => {
      const currentPage = getCurrentPage();
      if (!currentPage || currentPage.kind !== "submit") {
        window.clearInterval(questionnaireState.captchaSyncTimer);
        questionnaireState.captchaSyncTimer = 0;
        return;
      }

      const emailValid = validateSubmitStep(false);
      const captchaReady = hasCaptchaResponse();

      if (dom.submitButton) {
        const shouldDisable = questionnaireState.isSubmitting || !emailValid || !captchaReady;
        dom.submitButton.disabled = shouldDisable;
        dom.submitButton.classList.toggle("is-inactive", shouldDisable);
      }
    }, 300);
  }

  function renderSubmitStepMarkup() {
    return `
      <div class="questionnaire-review">
        <p class="questionnaire-review__hint">${config.questionnaire.submitStep.editHint}</p>
        <div class="form-field">
          <label for="submit-email">${config.questionnaire.submitStep.emailLabel}</label>
          <input
            id="submit-email"
            name="email"
            type="email"
            inputmode="email"
            autocomplete="email"
            placeholder="${config.questionnaire.submitStep.emailPlaceholder}"
            value="${questionnaireState.values.email || ""}"
            required
          >
          <p class="field-error" data-email-error aria-live="polite"></p>
        </div>
      </div>
    `;
  }

  function init() {
    resetInitialScroll();
    setMeta();
    renderBrand();
    renderNavigation();
    renderHero();
    renderOffers();
    renderContentSections();
    renderTestimonials();
    renderFinalCta();
    renderFooter();
    renderQuestionnaireChrome();
    setupMobileNavigation();
    setupScrollState();
    setupBackgroundMotion();
    setupContentExpands();
    setupTestimonialCarousel();
    setupRevealAnimations();
    setupQuestionnaireTriggers();
    setupQuestionnaireNavigation();
  }

  init();
})();
