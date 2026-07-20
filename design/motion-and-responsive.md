# Motion and Responsive Behavior

## Motion principles

Motion should make the editorial composition feel assembled.

It must not delay access to content.

Default duration range:

```css
--motion-fast: 160ms;
--motion-base: 320ms;
--motion-slow: 480ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

## Scroll reveals

Headings:

- fade in
- move upward 20–30px

Coach photo:

- reveal using a simple clipping mask
- no large horizontal travel

Service panels:

- fade upward
- stagger by 80–120ms

Illustrations:

- enter after their related text
- move no more than 30px
- may rotate by up to 2deg

Hatched shapes:

- fade in after primary content
- remain visually secondary

## Hover behavior

Interactive cards may:

- move upward 3–5px
- gain a soft shadow
- strengthen their blue border
- shift their illustration slightly

Avoid continuous floating or looping animations.

## Testimonial carousel

When changing the active item:

- selected screenshot moves to the center
- selected screenshot scales up
- rotation settles toward zero
- previous screenshot moves outward
- overlay text fades separately

Use a duration of 350–500ms.

Do not use heavy 3D perspective.

## Responsive breakpoints

Suggested breakpoints:

```css
--bp-tablet: 900px;
--bp-mobile: 640px;
```

Below tablet:

- reduce overlaps
- simplify irregular shapes
- stack complex grids
- reduce decorative illustration size

Below mobile:

- use one-column layout
- show partial neighboring testimonials only
- make questionnaire fullscreen
- keep touch targets at least 44px
- prevent horizontal page scrolling

## Reduced motion

For prefers-reduced-motion: reduce:

- remove sliding
- remove rotation
- remove clipping reveals
- remove decorative line drawing
- use short opacity transitions only

Functional state changes must remain visible.
