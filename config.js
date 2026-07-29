window.SITE_CONFIG = {
  // Basic brand and SEO values. Safe to edit.
  brand: {
    coachName: "Aďo Škuťo",
    eyebrow: "Osobný koučing",
    pageTitle: "Aďo Škuťo - Osobný tréner",
    metaDescription:
      "Osobný tréner pre ľudí, ktorí chcú výsledky, nie výhovorky. Praktický tréningový systém, jasný plán a dlhodobé vedenie.",
    ogImage: "assets/images/coach-hero-placeholder.svg",
    language: "sk"
  },

  contact: {
    email: "ado.skuto.business@gmail.com",
    phone: "+421 900 000 000",
    socialLinks: [
      { label: "Instagram", href: "https://www.instagram.com/ado_skuto/", icon: "instagram" },
      { label: "YouTube", href: "https://www.youtube.com/@AdoSkuto1", icon: "youtube" }
    ]
  },

  navigation: [
    { label: "Spolupráca", href: "#offers" },
    { label: "Referencie", href: "#testimonials" }
  ],

  testimonialsSection: {
    kicker: "Referencie",
    title: "Skúsenosti klientov"
  },

  hero: {
    kicker: "Prémiový osobný coaching",
    headline: "Osobný tréner pre ľudí, ktorí chcú výsledky, nie výhovorky",
    subheadline:
      "Jednoduchý tréningový systém, jasný plán a vedenie, ktoré ťa udrží v pohybe.",
    secondaryCta: { label: "Pozrieť možnosti spolupráce", href: "#offers" },
    // Replace with a real image in assets/images/ and update alt text here.
    image: {
      src: "assets/images/coach-hero.jpg",
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
      ctaLabel: "Zistiť viac",
      flow: "personalTraining"
    },
    {
      id: "online-coaching",
      title: "Online coaching",
      description:
        "Vedenie na diaľku, tréningový plán, kontrola progresu a pravidelná spätná väzba.",
      ctaLabel: "Zistiť viac",
      flow: "onlineCoaching"
    },
    {
      id: "training-plan",
      title: "Zostavenie tréningového plánu",
      description:
        "Individuálny tréningový plán postavený podľa tvojho cieľa, režimu a aktuálnej úrovne.",
      ctaLabel: "Zistiť viac",
      flow: "trainingPlan"
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
    flows: {
      personalTraining: {
        submission: {
          provider: "web3forms",
          endpointUrl: "https://api.web3forms.com/submit",
          accessKey: "d500eaea-022c-4cee-a9fc-ba8c504a2f3b",
          subject: "Osobny trening - new website form submission"
        },
        pageGroups: [
          ["goals"],
          ["trainingApproach"],
          ["currentFrustration"],
          ["blockers"],
          ["trainingExperience"],
          ["limitations"],
          ["sessionsPerWeek"],
          {
            id: "body-stats",
            title: "Základné údaje",
            description: "Doplň vek, výšku a váhu pre lepší kontext.",
            fields: ["age", "height", "weight"]
          },
          {
            id: "contact-details",
            title: "Kontakt",
            description: "Doplň meno, pohlavie a kontakt, aby som sa ti vedel ozvať.",
            fields: ["contactHandle", "gender", "fullName"]
          },
          ["whyNow"]
        ],
        steps: [
          {
            id: "goals",
            kicker: "Krok 1",
            title: "Hlavný cieľ",
            description: "Najprv si nastavme, čo chceš dosiahnuť.",
            media: {
              src: "assets/images/form-step-coach-placeholder.svg",
              alt: "Detail tréningového coachingu",
              caption: "Krátko a vecne. Nezaberie to viac než chvíľu."
            },
            fields: [
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
                options: ["Nič"],
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
                options: ["1x", "2x", "3x", "4x", "5x", "6x", "7x"]
              },
              {
                name: "age",
                label: "Tvoj vek (roky)",
                type: "text",
                required: false,
                inputmode: "numeric",
                placeholder: "Napríklad 29",
                pattern: "^[0-9]+$",
                invalidMessage: "Zadaj číslo."
              },
              {
                name: "height",
                label: "Výška (cm)",
                type: "text",
                required: false,
                inputmode: "numeric",
                placeholder: "Napríklad 182",
                pattern: "^[0-9]+$",
                invalidMessage: "Zadaj číslo."
              },
              {
                name: "weight",
                label: "Váha (kg)",
                type: "text",
                required: false,
                inputmode: "numeric",
                placeholder: "Napríklad 84",
                pattern: "^[0-9]+$",
                invalidMessage: "Zadaj číslo."
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
                options: ["Žena", "Muž"]
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
      onlineCoaching: {
        submission: {
          provider: "web3forms",
          endpointUrl: "https://api.web3forms.com/submit",
          accessKey: "072ef63a-acf7-43df-8fd9-145abc6749f8",
          subject: "Online coaching - new website form submission"
        },
        pageGroups: [
          ["goals"],
          ["trainingApproach"],
          ["currentFrustration"],
          ["blockers"],
          ["trainingExperience"],
          ["limitations"],
          ["sessionsPerWeek"],
          {
            id: "body-stats",
            title: "Základné údaje",
            description: "Doplň vek, výšku a váhu pre lepší kontext.",
            fields: ["age", "height", "weight"]
          },
          {
            id: "contact-details",
            title: "Kontakt",
            description: "Doplň meno, pohlavie a kontakt, aby som sa ti vedel ozvať.",
            fields: ["contactHandle", "gender", "fullName"]
          },
          ["whyNow"]
        ],
        steps: [
          {
            id: "goals",
            kicker: "Krok 1",
            title: "Hlavný cieľ",
            description: "Najprv si nastavme, čo chceš dosiahnuť.",
            media: {
              src: "assets/images/form-step-coach-placeholder.svg",
              alt: "Detail online coachingu",
              caption: "Krátko a vecne. Nezaberie to viac než chvíľu."
            },
            fields: [
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
              alt: "Plánovanie online coachingu",
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
              alt: "Praktické nastavenie online coachingu",
              caption: "Čím presnejší kontext, tým lepší návrh spolupráce."
            },
            fields: [
              {
                name: "limitations",
                label: "Máš nejaké zdravotné obmedzenia, zranenia, bolesť alebo iné veci ktoré by som mal vedieť pred tréningom?",
                type: "radio",
                required: true,
                options: ["Nič"],
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
                options: ["1x", "2x", "3x", "4x", "5x", "6x", "7x"]
              },
              {
                name: "age",
                label: "Tvoj vek (roky)",
                type: "text",
                required: false,
                inputmode: "numeric",
                placeholder: "Napríklad 29",
                pattern: "^[0-9]+$",
                invalidMessage: "Zadaj číslo."
              },
              {
                name: "height",
                label: "Výška (cm)",
                type: "text",
                required: false,
                inputmode: "numeric",
                placeholder: "Napríklad 182",
                pattern: "^[0-9]+$",
                invalidMessage: "Zadaj číslo."
              },
              {
                name: "weight",
                label: "Váha (kg)",
                type: "text",
                required: false,
                inputmode: "numeric",
                placeholder: "Napríklad 84",
                pattern: "^[0-9]+$",
                invalidMessage: "Zadaj číslo."
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
              alt: "Záver online coachingu",
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
                options: ["Žena", "Muž"]
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
      trainingPlan: {
        submission: {
          provider: "web3forms",
          endpointUrl: "https://api.web3forms.com/submit",
          accessKey: "192e9762-0b1f-4d08-862d-a1916d603a2f",
          subject: "Training plan - new website form submission"
        },
        pageGroups: [
          ["mainPriority"],
          ["sessionsPerWeek"],
          ["workoutLength"],
          ["equipmentAccess"],
          ["weakPoints"],
          ["legApproach"],
          ["legPriority"],
          ["splitPreference"],
          ["trainingLevel"],
          ["cardioApproach"],
          ["dietStatus"],
          ["additionalInfo"],
          {
            id: "contact-details",
            title: "Kontakt",
            description: "Na záver doplň meno a kontakt, aby som ti mohol plán doručiť a ozvať sa.",
            fields: ["contactHandle", "fullName"]
          }
        ],
        steps: [
          {
            id: "training-plan-intro",
            kicker: "Krok 1",
            title: "Cieľ plánu",
            description:
              "Podpora po kúpe — Po doručení splitu máš 2 týždne na otázky a úpravy. Zľava na coaching — k plánu vieš neskôr nadviazať coachingom za výhodnejších podmienok.",
            media: {
              src: "assets/images/form-step-goal-placeholder.svg",
              alt: "Plánovanie tréningového cieľa",
              caption: "Dobrý plán začína jasným cieľom."
            },
            fields: [
              {
                name: "mainPriority",
                label: "Čo je tvoja hlavná priorita?",
                type: "radio",
                required: true,
                options: [
                  "Budovanie svalov",
                  "Zlepšenie daného cviku (SBD)",
                  "Oboje"
                ]
              },
              {
                name: "sessionsPerWeek",
                label: "Koľko dní v týždni môžeš trénovať?",
                type: "radio",
                required: true,
                options: ["2×", "3×", "4×", "5×", "6×", "Chcem si nechať odporučiť"]
              }
            ]
          },
          {
            id: "training-plan-setup",
            kicker: "Krok 2",
            title: "Nastavenie plánu",
            description: "Potrebujem vedieť, koľko času máš na tréning a s akým vybavením počítať.",
            media: {
              src: "assets/images/form-step-details-placeholder.svg",
              alt: "Nastavenie tréningového plánu",
              caption: "Čím presnejšie zadanie, tým použiteľnejší plán."
            },
            fields: [
              {
                name: "workoutLength",
                label: "Aká dĺžka tréningu ti vyhovuje najviac?",
                type: "radio",
                required: true,
                options: [
                  "45 minút a menej",
                  "1 hodina",
                  "1,5 hodiny",
                  "2 hodiny",
                  "2,5+ hodiny"
                ]
              },
              {
                name: "equipmentAccess",
                label: "Kde budeš cvičiť najčastejšie?",
                type: "radio",
                required: true,
                options: [
                  "Posilňovňa (plné vybavenie)",
                  "Domáca posilňovňa",
                  "Minimálne vybavenie (jednoručky, odporové gumy)",
                  "Vonku / bez vybavenia"
                ]
              }
            ]
          },
          {
            id: "training-plan-focus",
            kicker: "Krok 3",
            title: "Priority",
            description: "Chcem pochopiť, čo chceš v tréningu najviac zlepšiť.",
            media: {
              src: "assets/images/form-step-details-placeholder.svg",
              alt: "Priority tréningového plánu",
              caption: "Čím presnejšie priority, tým lepšie nastavený split."
            },
            fields: [
              {
                name: "weakPoints",
                label: "Čo sú tvoje slabiny alebo čo by si chcel najviac zlepšiť?",
                type: "radio",
                required: true,
                options: [
                  "Prsia",
                  "Chrbát (šírka)",
                  "Chrbát (hrúbka)",
                  "Ramená",
                  "Biceps",
                  "Triceps",
                  "Nič neuprednostňujem, nechám to na tebe",
                  "Neviem to posúdiť sám (pošlem ti fotky)"
                ]
              },
              {
                name: "legApproach",
                label: "Ako pristupuješ k nohám?",
                type: "radio",
                required: true,
                options: [
                  "Chcem ich aktívne rozvíjať a zlepšovať",
                  "Stačí mi ich udržiavať / precvičovať",
                  "Nohy nechcem prioritizovať",
                  "Prioritou je zadok"
                ]
              },
              {
                name: "legPriority",
                label: "Ktorú časť nôh chceš najviac zlepšiť?",
                type: "radio",
                required: true,
                options: [
                  "Kvadricepsy (predná strana stehien)",
                  "Hamstringy (zadná strana stehien)",
                  "Zadok (gluteálne svaly)",
                  "Adduktory",
                  "Lýtka"
                ]
              }
            ]
          },
          {
            id: "training-plan-preferences",
            kicker: "Krok 4",
            title: "Preferencie",
            description: "Ešte pár otázok k štýlu tréningu a aktuálnej úrovni.",
            media: {
              src: "assets/images/form-step-goal-placeholder.svg",
              alt: "Preferencie tréningového plánu",
              caption: "Tieto detaily rozhodujú o tom, ako bude split vyzerať."
            },
            fields: [
              {
                name: "splitPreference",
                label: "Preferuješ určitý typ splitu?",
                type: "radio",
                required: true,
                options: [
                  "Nie",
                  "Preferujem cvičiť celé telo",
                  "Chcem mať partie rozdelené"
                ]
              },
              {
                name: "trainingLevel",
                label: "Ako by si opísal svoju úroveň?",
                type: "radio",
                required: true,
                options: [
                  "Začiatočník (menej ako 6 mesiacov)",
                  "Mierne pokročilý (1 – 2 roky)",
                  "Pokročilý (3 – 5 rokov)",
                  "Súťažná / vysoká úroveň"
                ]
              },
              {
                name: "cardioApproach",
                label: "Robíš alebo plánuješ robiť kardio?",
                type: "radio",
                required: true,
                options: [
                  "Nie",
                  "Áno, ľahké (chôdza, bicykel)",
                  "Áno, intenzívne (beh, HIIT)",
                  "Nechám to na tebe",
                  "Venujem sa aj inému športu"
                ]
              },
              {
                name: "dietStatus",
                label: "Si momentálne v diéte alebo ju plánuješ?",
                type: "radio",
                required: true,
                options: [
                  "Áno",
                  "Nie",
                  "Neriešim to"
                ]
              }
            ]
          },
          {
            id: "training-plan-notes",
            kicker: "Krok 5",
            title: "Doplňujúce informácie",
            description: "Ak je niečo dôležité, sem to určite napíš.",
            media: {
              src: "assets/images/form-step-coach-placeholder.svg",
              alt: "Doplňujúce informácie k plánu",
              caption: "Zranenia, špecifiká alebo čokoľvek, čo by som mal vedieť."
            },
            fields: [
              {
                name: "additionalInfo",
                label: "Chceš mi povedať niečo ďalšie?",
                type: "textarea",
                required: false,
                rows: 5,
                placeholder: "Zranenia, špecifické požiadavky alebo čokoľvek, čo by som mal vedieť."
              },
              {
                name: "contactHandle",
                label: "Kde ťa viem kontaktovať? Instagram, Whatsapp alebo telefón",
                type: "text",
                required: true,
                placeholder: "Napríklad IG: @tvojprofil alebo telefón"
              },
              {
                name: "gender",
                label: "Pohlavie",
                type: "radio",
                required: true,
                options: ["Žena", "Muž"]
              },
              {
                name: "fullName",
                label: "Meno",
                type: "text",
                autocomplete: "name",
                required: true,
                placeholder: "Tvoje meno"
              }
            ]
          }
        ]
      }
    },
    pageGroups: [
      ["goals"],
      ["trainingApproach"],
      ["currentFrustration"],
      ["blockers"],
      ["trainingExperience"],
      ["limitations"],
      ["sessionsPerWeek"],
      {
        id: "body-stats",
        title: "Základné údaje",
        description: "Doplň vek, výšku a váhu pre lepší kontext.",
        fields: ["age", "height", "weight"]
      },
      {
        id: "contact-details",
        title: "Kontakt",
        description: "Doplň meno, pohlavie a kontakt, aby som sa ti vedel ozvať.",
        fields: ["contactHandle", "gender", "fullName"]
      },
      ["whyNow"]
    ],
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
        title: "Hlavný cieľ",
        description: "Najprv si nastavme, čo chceš dosiahnuť.",
        media: {
          src: "assets/images/form-step-coach-placeholder.svg",
          alt: "Detail tréningového coachingu",
          caption: "Krátko a vecne. Nezaberie to viac než chvíľu."
        },
        fields: [
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
              "4x",
              "5x",
              "6x",
              "7x"
            ]
          },
          {
            name: "age",
            label: "Tvoj vek (roky)",
            type: "text",
            required: false,
            inputmode: "numeric",
            placeholder: "Napríklad 29",
            pattern: "^[0-9]+$",
            invalidMessage: "Zadaj číslo."
          },
          {
            name: "height",
            label: "Výška (cm)",
            type: "text",
            required: false,
            inputmode: "numeric",
            placeholder: "Napríklad 182",
            pattern: "^[0-9]+$",
            invalidMessage: "Zadaj číslo."
          },
          {
            name: "weight",
            label: "Váha (kg)",
            type: "text",
            required: false,
            inputmode: "numeric",
            placeholder: "Napríklad 84",
            pattern: "^[0-9]+$",
            invalidMessage: "Zadaj číslo."
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
      "© <span data-current-year></span> Aďo Škuťo. Všetky práva vyhradené.",
    backToTopLabel: "Späť hore"
  }
};
