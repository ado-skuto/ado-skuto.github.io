# Personal Fitness Coach Landing Page

Static one-page website for a Slovak personal fitness coach. The site is built with plain `HTML`, `CSS`, and vanilla `JavaScript`, and is intended to be deployed as a static site on GitHub Pages.

## Stack

- `index.html`: page structure and modal questionnaire shell
- `styles.css`: layout, responsive behavior, modal, and form styling
- `theme.css`: design tokens and visual theme variables
- `config.js`: editable site content and questionnaire configuration
- `script.js`: rendering, navigation, modal flow, validation, and Web3Forms submission
- `assets/images/`: local images and placeholders

## Run locally

Open `index.html` in a browser, or serve the directory with a small static server.

Example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This repo is intended for GitHub Pages deployment.

Because GitHub Pages is static hosting:

- there is no backend runtime
- form submission must go to a third-party endpoint
- the current questionnaire submits to Web3Forms

If you deploy through GitHub Pages, no server changes are needed for the site itself.

## Editable content

Most site content is centralized in `config.js`.

You can update there:

- coach name
- SEO title and description
- hero text
- service cards
- testimonials
- footer labels and links
- questionnaire labels, steps, fields, and messages
- Web3Forms settings

## Theme and design

All reusable visual tokens live in `theme.css`.

You can change the site identity there by updating values such as:

- colors
- fonts
- spacing
- border radius
- shadows
- transitions

`styles.css` consumes those theme variables and contains the actual component/layout rules.

## Images

Put site images into `assets/images/` and update the matching `src` and `alt` values in `config.js`.

The questionnaire also supports per-step images and captions through each step's `media` object in `config.js`.

## Questionnaire

The service cards open a multi-step modal questionnaire.

Current behavior:

- step-by-step flow
- client-side validation
- radio, checkbox, textarea, and text fields
- `Other` options where configured
- pending state to prevent double submit
- success and error status messages
- Web3Forms submission
- hCaptcha via Web3Forms

## Web3Forms

The current form submits to:

- `https://api.web3forms.com/submit`

The implementation includes:

- `access_key`
- `subject`
- hCaptcha widget
- client-side captcha presence check

Relevant settings are in `config.js`.

If you change the form provider later, the main submit logic lives in `script.js`.

## Notes

- This is a static GitHub Pages site.
- There is no backend in this repo.
- If you later need custom lead routing, CRM sync, or server-side validation, you will need an external backend or serverless function.