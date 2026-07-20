# AGENTS

## Overview

This repository contains a static landing page for `Aďo Škuťo - Osobný tréner`.

It is a GitHub Pages style frontend-only site with no backend in the repo. The site is meant to act as a premium but simple personal-coaching landing page with clear service presentation and lead capture through modal questionnaires.

## Primary Goal

The page should:

- present Aďo Škuťo as a personal trainer in a credible, clean, premium way
- explain the available services clearly
- convert visitors into leads through short service-specific forms
- remain fully deployable as a static site

## Technical Constraints

- static site only
- no backend in this repository
- GitHub-hostable deployment target
- form submissions are handled through Web3Forms
- hCaptcha is used on the final submit step

Because this is a public static repo, do not assume browser-side keys are secret. Anything shipped to the client should be treated as public.

## Repository Location

Working directory:

- `C:\Mato\#osobne\ado-skuto.github.io`

## Important Files

- `index.html`
  Page structure, modal shell, static head/meta setup.

- `config.js`
  Main content source. Service cards, brand text, testimonials, social links, and form definitions live here.

- `script.js`
  Runtime rendering, modal logic, validation, service-specific form flow selection, and submission handling.

- `styles.css`
  Layout, components, modal styling, responsive behavior, and form presentation.

- `theme.css`
  Theme tokens such as colors, spacing, shadows, typography variables.

- `assets/images/`
  Images, placeholders, and favicon assets.

## Form Architecture

There are currently 3 service entrypoints on the page:

1. `Osobný tréning`
2. `Online coaching`
3. `Zostavenie tréningového plánu`

These should be treated as 3 separate forms.

Important implementation detail:

- the UI engine is shared in `script.js`
- the actual form definitions are config-driven
- each service uses its own flow in `config.js`
- each flow can have its own submission settings, including its own Web3Forms access key and subject

The shared final submit page currently contains:

- email field
- hCaptcha
- back button
- submit button

## Content Editing Guidance

When changing text or questionnaire content, prefer editing `config.js` rather than hardcoding copy into `index.html` or `script.js`.

When changing flow behavior, keep the current approach:

- service-specific form definitions in config
- shared rendering/runtime logic in JS

Avoid unnecessary refactors that move large amounts of content out of config unless there is a strong reason.

## Design Guidance

For design changes, review the design docs first:

- `design/`
- [README.md](design/README.md)

Do not improvise a totally different visual language if the design docs or existing page already establish direction. Preserve the current intent:

- premium
- calm
- minimal
- masculine-leaning but not exclusionary in copy
- soft brown + muted blue palette

## Working Style Notes

- keep implementation simple
- preserve static deployability
- avoid backend assumptions
- prefer config-driven changes where possible
- be careful with public secrets or public API keys
- if adding new service logic, first check whether it belongs in `config.js` instead of `script.js`
