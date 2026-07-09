window.SITE_CONFIG = {
  // Basic brand and SEO values. Safe to edit.
  brand: {
    coachName: "Matej Kovac",
    eyebrow: "Osobný koučing",
    pageTitle: "Matej Kovac | Osobný tréner pre chlapov",
    metaDescription:
      "Osobný tréner pre chlapov, ktorí chcú výsledky, nie výhovorky. Praktický tréningový systém, jasný plán a dlhodobé vedenie.",
    ogImage: "assets/images/coach-hero-placeholder.svg",
    language: "sk"
  },

  contact: {
    email: "coach@example.com",
    phone: "+421 900 000 000",
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
      { label: "YouTube", href: "https://youtube.com/", icon: "youtube" }
    ]
  },

  navigation: [
    { label: "Spolupráca", href: "#offers" },
    { label: "Referencie", href: "#testimonials" }
  ],

  hero: {
    kicker: "Prémiový osobný coaching pre mužov",
    headline: "Osobný tréner pre chlapov, ktorí chcú výsledky, nie výhovorky",
    subheadline:
      "Jednoduchý tréningový systém, jasný plán a vedenie, ktoré ťa udrží v pohybe — bez zbytočných rečí.",
    secondaryCta: { label: "Pozrieť možnosti spolupráce", href: "#offers" },
    // Replace with a real image in assets/images/ and update alt text here.
    image: {
      src: "assets/images/coach-hero-placeholder.svg",
      alt: "Portrét osobného trénera v štúdiu"
    }
  },

  // Offer cards are repeatable. You can add, remove, or rename services here.
  offers: [
    {
      id: "personal-training",
      title: "Osobný tréning",
      description:
        "Tréning naživo s technikou, plánom a jasným postupom podľa tvojej úrovne.",
      ctaLabel: "Zistiť viac"
    },
    {
      id: "online-coaching",
      title: "Online coaching",
      description:
        "Vedenie na diaľku, tréningový plán, kontrola progresu a pravidelná spätná väzba.",
      ctaLabel: "Zistiť viac"
    },
    {
      id: "training-plan",
      title: "Zostavenie tréningového plánu",
      description:
        "Individuálny tréningový plán postavený podľa tvojho cieľa, režimu a aktuálnej úrovne.",
      ctaLabel: "Zistiť viac"
    }
  ],

  // Update testimonials here. Keep quotes short for best layout.
  testimonials: [
    {
      quote: "Konečne som mal plán, ktorému som rozumel a ktorý som vedel dodržať.",
      author: "Martin, 34"
    },
    {
      quote: "Tréning prestal byť chaos. Vedel som presne, čo mám robiť a prečo.",
      author: "Peter, 29"
    },
    {
      quote: "Nešlo len o formu. Získal som systém, ktorý funguje aj pri práci a rodine.",
      author: "Juraj, 41"
    }
  ],

  // Multi-step questionnaire used by all services.
  // To connect a real Google Form:
  // 1. Put your Google Forms formResponse URL into actionUrl.
  // 2. Replace the entry.* ids in entryKeys with your real field keys.
  // 3. Keep the "name" values in step fields aligned with entryKeys below.
  questionnaire: {
    triggerLabelFallback: "Zistiť viac",
    selectedServiceLabel: "Vybraná služba",
    stepCounterLabel: "Krok {current} z {total}",
    nextLabel: "Pokračovať",
    backLabel: "Späť",
    submitLabel: "Odoslať",
    loadingLabel: "Odosielam...",
    successMessage: "Ďakujem. Správa bola úspešne odoslaná.",
    errorMessage: "Skontroluj prosím vyplnené polia.",
    submitErrorMessage: "Odoslanie sa nepodarilo. Skús to prosím znova o chvíľu.",
    captchaErrorMessage: "Prosím, potvrď captcha.",
    closeLabel: "Zavrieť formulár",
    autoAdvanceDelay: 160,
    submitStep: {
      kicker: "Posledný krok",
      title: "Potvrdenie a odoslanie",
      description: "Skontroluj si odpovede, dokonči captcha a odošli dotazník.",
      emptyAnswerLabel: "Nezadané",
      editHint: "Ak chceš niečo upraviť, použi Späť.",
      emailLabel: "Email",
      emailPlaceholder: "tvoj@email.sk",
      emailRequiredMessage: "Zadaj prosím email.",
      emailInvalidMessage: "Zadaj email v správnom formáte."
    },
    // Optional future grouping:
    // pageGroups: [
    //   ["fullName", "contactHandle"],
    //   {
    //     id: "contact",
    //     title: "Kontakt",
    //     fields: ["fullName", "contactHandle"]
    //   }
    // ],
    submission: {
      provider: "web3forms",
      endpointUrl: "https://api.web3forms.com/submit",
      accessKey: "5dee312d-3731-4444-81ac-a702c785035d",
      subject: "New website form submission"
    },
    steps: [
      {
        id: "cooperation",
        kicker: "Krok 1",
        title: "Typ spolupráce a hlavný cieľ",
        description: "Najprv si nastavme, o aký typ spolupráce máš záujem a čo chceš dosiahnuť.",
        media: {
          src: "assets/images/form-step-coach-placeholder.svg",
          alt: "Detail tréningového coachingu",
          caption: "Krátko a vecne. Nezaberie to viac než chvíľu."
        },
        fields: [
          {
            name: "cooperationType",
            label: "Typ spolupráce",
            type: "radio",
            required: true,
            options: [
              "Osobné tréningy",
              "Online coaching"
            ]
          },
          {
            name: "goals",
            label: "Čo by si chcel dosiahnuť? Vyber maximálne 2 možnosti, ktoré chceš najviac.",
            type: "checkbox",
            required: true,
            maxSelections: 2,
            options: [
              "Nabrať svaly",
              "Schudnúť",
              "Spevniť postavu",
              "Cítiť sa lepšie / mať viac energie",
              "Len sa začať hýbať"
            ],
            other: {
              enabled: true,
              label: "Iné",
              placeholder: "Doplň vlastnú odpoveď"
            }
          }
        ]
      },
      {
        id: "mindset",
        kicker: "Krok 2",
        title: "Prístup a prekážky",
        description: "Tu chcem pochopiť, ako to berieš a čo ťa doteraz brzdilo.",
        media: {
          src: "assets/images/form-step-goal-placeholder.svg",
          alt: "Plánovanie tréningového cieľa",
          caption: "Jasný cieľ znamená jasnejší plán."
        },
        fields: [
          {
            name: "trainingApproach",
            label: "Ako chceš pristupovať k tréningom?",
            type: "radio",
            required: true,
            options: [
              "Chcem sa hýbať a cítiť sa lepšie, bez veľkého tlaku",
              "Chcem vidieť výsledky a som ochotný maknúť",
              "Beriem to vážne, chcem zmenu naplno"
            ]
          },
          {
            name: "currentFrustration",
            label: "Čo ťa na tvojej aktuálnej situácii štve najviac?",
            type: "textarea",
            required: true,
            rows: 4,
            placeholder: "Napíš stručne, čo chceš zmeniť"
          },
          {
            name: "blockers",
            label: "Čo ti doteraz stálo v ceste?",
            type: "checkbox",
            required: true,
            options: [
              "Nedostatok času",
              "Nevedel som kde začať",
              "Chýbala motivácia",
              "Financie",
              "Zdravotné problémy"
            ],
            other: {
              enabled: true,
              label: "Iné",
              placeholder: "Doplň vlastnú odpoveď"
            }
          },
          {
            name: "trainingExperience",
            label: "Aké máš skúsenosti s cvičením?",
            type: "radio",
            required: true,
            options: [
              "Žiadne",
              "Cvičil som, ale nepravidelne",
              "Mám základy, chcem posunúť ďalej",
              "Cvičím pravidelne, chcem optimalizovať"
            ]
          }
        ]
      },
      {
        id: "details",
        kicker: "Krok 3",
        title: "Praktické detaily",
        description: "Doplň zdravotné obmedzenia, tréningovú frekvenciu a základné údaje.",
        media: {
          src: "assets/images/form-step-details-placeholder.svg",
          alt: "Praktické nastavenie spolupráce",
          caption: "Čím presnejší kontext, tým lepší návrh spolupráce."
        },
        fields: [
          {
            name: "limitations",
            label: "Máš nejaké zdravotné obmedzenia, zranenia, bolesť alebo iné veci ktoré by som mal vedieť pred tréningom?",
            type: "radio",
            required: true,
            options: [
              "Nič"
            ],
            other: {
              enabled: true,
              label: "Iné",
              placeholder: "Popíš obmedzenia alebo dôležité informácie"
            }
          },
          {
            name: "sessionsPerWeek",
            label: "Koľko krát do týždňa vieš alebo by si chcel cvičiť?",
            type: "radio",
            required: true,
            options: [
              "1x",
              "2x",
              "3x",
              "4x"
            ]
          },
          {
            name: "age",
            label: "Tvoj vek",
            type: "text",
            required: false,
            inputmode: "numeric",
            placeholder: "Napríklad 29"
          },
          {
            name: "height",
            label: "Výška",
            type: "text",
            required: false,
            inputmode: "numeric",
            placeholder: "Napríklad 182 cm"
          },
          {
            name: "weight",
            label: "Váha",
            type: "text",
            required: false,
            inputmode: "numeric",
            placeholder: "Napríklad 84 kg"
          }
        ]
      },
      {
        id: "contact",
        kicker: "Krok 4",
        title: "Kontakt a záver",
        description: "Posledný krok. Potrebujem meno, kontakt a prípadne krátky kontext navyše.",
        media: {
          src: "assets/images/form-step-coach-placeholder.svg",
          alt: "Záver dotazníka",
          caption: "Po odoslaní sa ti ozvem s ďalším postupom."
        },
        fields: [
          {
            name: "contactHandle",
            label: "Kde ťa viem kontaktovať? Facebook, Instagram, Whatsapp",
            type: "text",
            required: true,
            placeholder: "Napríklad IG: @tvojprofil alebo telefón"
          },
          {
            name: "gender",
            label: "Pohlavie",
            type: "radio",
            required: true,
            options: [
              "Žena",
              "Muž"
            ]
          },
          {
            name: "fullName",
            label: "Meno",
            type: "text",
            autocomplete: "name",
            required: true,
            placeholder: "Tvoje meno"
          },
          {
            name: "whyNow",
            label: "Bonus: Prečo práve teraz?",
            type: "textarea",
            required: false,
            rows: 4,
            placeholder: "Ak chceš, doplň krátky dôvod"
          }
        ]
      }
    ]
  },

  footer: {
    copyright:
      "© <span data-current-year></span> Matej Kovac. Všetky práva vyhradené.",
    backToTopLabel: "Späť hore"
  }
};
