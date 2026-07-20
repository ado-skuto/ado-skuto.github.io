# Design Tokens

All visual values should be defined in `theme.css`.

Components should consume CSS variables instead of raw values.

## Colors

| Token | Value | Purpose |
|---|---|---|
| `--color-bg` | `#F1E9DC` | Main cream background |
| `--color-surface` | `#FCFAF6` | Cards and modal surfaces |
| `--color-navy` | `#102A43` | Main text and actions |
| `--color-blue` | `#567C9D` | Secondary actions and accents |
| `--color-camel` | `#B48961` | Shapes and hatching |
| `--color-brown` | `#6A4A34` | Dark warm details |
| `--color-muted` | `#D9D0C3` | Borders and inactive controls |
| `--color-error` | `#A63D40` | Validation errors |

Blue is the main functional color.

Brown is decorative and should not dominate buttons or form controls.

## Typography

Use two font families:

- Display serif for hero and section headings
- Modern sans-serif for all other content and UI

Suggested stacks:

```css
--font-display: "DM Serif Display", Georgia, serif;
--font-ui: "Inter", "Segoe UI", sans-serif;
```

Use the display font only for short prominent text.

Forms must use the UI font exclusively.

## Type scale

```css
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.25rem;
--text-xl: 1.75rem;
--text-2xl: clamp(2.25rem, 5vw, 4.75rem);
```

## Shape

```css
--radius-control: 8px;
--radius-card: 12px;
--radius-modal: 16px;
```

Avoid pill-shaped buttons and excessively rounded cards.

## Spacing

Use an 8px base spacing system.

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 48px;
--space-6: 72px;
--space-7: 96px;
```

## Shadows

Shadows should be soft and slightly blue-toned.

```css
--shadow-card: 0 12px 30px rgb(16 42 67 / 10%);
--shadow-modal: 0 24px 80px rgb(16 42 67 / 24%);
```
