# Manual to Code Mapping

The website uses:

- `config.js`
- `theme.css`
- `styles.css`
- `script.js`

## `config.js`

Store editable content only:

- coach branding
- hero text
- CTA labels
- services
- testimonials
- social links
- questionnaire definitions
- illustration asset paths
- Web3Forms keys and subjects

Do not store CSS values or animation timings here.

## `theme.css`

Store all visual tokens:

- colors
- typography
- spacing
- radii
- shadows
- breakpoints
- animation durations
- easing functions

Avoid raw color values in `styles.css`.

## `styles.css`

Implement:

- page layout
- hero composition
- service panels
- testimonial carousel
- footer
- modal layout
- form controls
- responsive rules
- animation classes

Use component-style class names.

Example:

```css
.hero {}
.hero__content {}
.hero__photo {}
.service-card {}
.testimonial-carousel {}
.form-modal {}
.form-step {}
```

## `script.js`

Implement:

- content rendering
- modal opening and closing
- focus handling
- step navigation
- progress calculation
- validation
- radio auto-advance
- testimonial carousel state
- reduced-motion detection
- form submission

Do not define visual tokens in JavaScript.

## Agent checklist

Before completing UI work, verify:

- Hero uses the real coach photograph.
- Services contain no visible numbers.
- Every questionnaire step has an image.
- Modal background is blurred.
- Progress bar reflects the current step.
- Testimonials use the layered screenshot carousel.
- Mobile modal is fullscreen.
- Colors come from theme.css.
- Generated art follows visual-ai-prompts.md.
- Reduced-motion behavior is implemented.
