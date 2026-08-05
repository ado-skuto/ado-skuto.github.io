window.SITE_CONFIG = {
  // Basic brand and SEO values. Safe to edit.
  brand: {
    coachName: "Aďo Škuťo",
    eyebrow: "Osobný tréner",
    pageTitle: "Aďo Škuťo - Osobný tréner",
    metaDescription:
      "Osobný tréner, ktorý pomáha ľuďom budovať silu a svaly jednoducho bez zbytočného blúdenia v posilke.",
    ogImage: "assets/images/coach-hero.jpg",
    language: "sk"
  },

  contact: {
    email: "ado.skuto.business@gmail.com",
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

  finalCta: {
    kicker: "Začni spoluprácu",
    title: "Neváhaj, prvý tréning máš odo mňa zadarmo",
    label: "Späť na služby",
    href: "#offers"
  },

  // Move section ids between these arrays to change their position on the page.
  contentSectionPlacement: {
    afterOffers: ["is-it-for-you"],
    afterTestimonials: ["about-me", "how-i-work"]
  },

  contentSections: [
    {
      id: "is-it-for-you",
      kicker: "Je to pre teba?",
      title: "Možno len potrebuješ jasný smer",
      image: {
        src: "assets/images/comparison-coach.jpg",
        alt: "Tréningová fotografia"
      },
      intro: [
        "Niekedy je to únava. Inokedy len pocit, že telo už nie je také, aké bývalo a nevieš presne prečo. Inokedy si zahltený príliš veľa informáciami a nemáš jasný plán.",
        "Možno si skúšal cvičiť sám, no zatiaľ si nenašiel spôsob, ktorý naozaj sedí tebe. Alebo nevieš, čo funguje a nechceš strácať čas. A to je v poriadku. Každý niekde začínal, aj ja."
      ],
      expanded: [
        "Predstav si o pár mesiacov seba, silnejšieho, s väčšou energiou, niekoho, kto sa ráno pozrie do zrkadla a je spokojný s tým, čo vidí. Niekoho, kto nemusí premýšľať, či zvládne schody, kto sa cíti dobre vo vlastnej koži.",
        "To nie je len predstava. Je to len otázka konzistencie a robenia vecí, ktoré fungujú.",
        "Robím to preto, že ma teší, keď vidím ľudí napredovať. Nič mi neurobí väčšiu radosť, ako keď za mnou niekto príde a povie, že sa cíti lepšie, silnejšie, sebavedomejšie, že mu moja rada pomohla a že sa nevie dočkať ďalšieho tréningu. Presne to je dôvod, prečo to robím.",
        "Klienti mi hovoria to isté: viac energie, lepšia pohyblivosť, menej bolesti a pocit, že sa konečne cítia dobre vo vlastnom tele. Nie preto, že by mali niečo výnimočné, ale preto, že mali niekoho, kto ich viedol správnym smerom, bol s nimi a dal im jednoduchý systém, ktorého sa držia.",
        "Ak sa nerozhodneš pre spoluprácu so mnou, nič sa nestane. Ale vrelo ti cvičenie odporúčam, nie kvôli mne, nie len kvôli tomu, aby si vyzeral dobre, ale aby si sa cítil lepšie a bol zdravý a spokojný. Telo samo od seba lepšie nebude, len ak preň niečo urobíš. A to sa oplatí nielen tebe, ale aj ľuďom okolo teba, ktorí ťa chcú mať pri sebe zdravého a silného čo najdlhšie."
      ],
      expandLabel: "Čítať viac"
    },
    {
      id: "about-me",
      kicker: "O mne",
      title: "Som Aďo, osobný tréner z Kysúc",
      image: {
        src: "assets/images/form-2.jpg",
        alt: "Portrét trénera"
      },
      intro:
        "Som Aďo — certifikovaný osobný tréner z Kysuckého Nového Mesta.",
      expanded: [
        "Prešiel som si pár súťažami a naposledy som sa pripravil na Majstrovstvá Slovenska v kulturistike, kde som síce neuspel, ale získal som veľa hodnotných skúseností.",
        "Cvičeniu sa venujem už cez 10 rokov. Vždy som sa snažil hľadať najefektívnejší spôsob cvičenia, aby som všetok čas a úsilie dával do vecí, ktoré majú zmysel.",
        "Odkedy cvičím, vyskúšal som na sebe veľa vecí a učím tie, ktoré sú vedecky podložené a naozaj mi fungovali."
      ],
      expandLabel: "Čítať viac"
    },
    {
      id: "how-i-work",
      kicker: "Ako pracujem",
      title: "Plán nastavím podľa teba",
      image: {
        src: "assets/images/comparison-coach-2.jpg",
        alt: "Ilustrácia tréningového plánovania"
      },
      intro:
        "Ak si môj klient, dostaneš plán prispôsobený tebe na mieru, cviky, ktoré ti sedia a sú zamerané na tvoje silné aj slabé stránky, s dôrazom na to, čo chceš zlepšiť.",
      expanded: [
        "Na tréningu ťa naučím správnu techniku, budem kontrolovať, že cvičíš bezpečne a efektívne, s postupným upravovaním podľa miery tvojho progresu.",
        "A budem pri tom, aby si to nevzdal po dvoch týždňoch ako väčšina ľudí, čo to skúša sama.",
        "Nezáleží na veku ani na tom, kde práve si, či chceš schudnúť, nabrať svaly, alebo sa jednoducho cítiť lepšie vo vlastnom tele. Poď so mnou do toho."
      ],
      expandLabel: "Čítať viac"
    }
  ],

  hero: {
    kicker: "Prémiový osobný coaching",
    headline: "Pomôžem budovať silu a svaly jednoducho bez zbytočného blúdenia v posilke",
    subheadline:
      "Prvý tréning máš odo mňa zadarmo (Kysucké Nové Mesto).",
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
        "Prebieha v Riecky Fitness KNM. Pre teba, ak chceš niekoho vedľa seba, kto ťa opraví, podrží a nakopne.",
      bullets: [
        "Tréning šitý na mieru tvojmu telu a cieľom",
        "Kontrola techniky naživo",
        "Motivácia a podpora, keď to najviac potrebuješ"
      ],
      price: "Cena: dohodneme na konzultácii",
      ctaLabel: "Zistiť viac",
      flow: "personalTraining"
    },
    {
      id: "online-coaching",
      title: "Online coaching",
      description:
        "Pre teba, ak chceš plán a podporu, ale tréning zvládneš sám.",
      bullets: [
        "Tréningový plán prispôsobený tvojmu progresu",
        "Priebežné úpravy podľa toho, ako napredujeme",
        "Video spätná väzba na tvoju techniku",
        "Konzultácie cez WhatsApp, pýtaj sa kedykoľvek",
        "Základné odporúčania k stravovaniu a suplementom"
      ],
      price: "Cena: 99 € / mesiac",
      ctaLabel: "Zistiť viac",
      flow: "onlineCoaching"
    },
    {
      id: "training-plan",
      title: "Zostavenie tréningového plánu",
      description:
        "Pre teba, ak cvičíš sám a potrebuješ efektívny plán šitý na mieru tvojim cieľom.",
      bullets: [
        "Kompletný tréningový plán prispôsobený tebe",
        "Voľba cvikov podľa tvojich preferencií a možností",
        "Štruktúra na niekoľko týždňov dopredu",
        "Jasný spôsob progresovania",
        "2-týždňová podpora, ak budeš chcieť niečo zmeniť alebo upraviť"
      ],
      price: "Cena: 49 € / jednorazovo",
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
          ["scheduleRegularity"],
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
                required: false,
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
                options: ["0x", "1x", "2x", "3x"]
              },
              {
                name: "scheduleRegularity",
                label: "Vieš chodiť trénovať v pravidelné dní a časi?",
                type: "radio",
                required: true,
                options: [
                  "Áno",
                  "Nie, pracujem na zmeny",
                  "Nie, mám chaotický rozvrh"
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
                required: false,
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
            required: false,
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
