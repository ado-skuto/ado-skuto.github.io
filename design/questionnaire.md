# Questionnaire Modal

Each service opens a separate multi-step questionnaire.

Forms are configured independently but share one visual system.

## Modal opening

When a questionnaire opens:

- lock page scrolling
- apply a dark translucent overlay
- blur the page behind the modal
- move focus into the modal

Suggested backdrop:

```css
background: rgb(16 42 67 / 45%);
backdrop-filter: blur(10px);
```

## Desktop layout

Use a centered modal with:

- width between 700px and 800px
- warm near-white surface
- 16px corner radius
- strong but soft shadow
- generous internal spacing

A common step layout is:

- question and controls on the left
- illustration on the right

## Mobile layout

Below 640px, use a fullscreen modal.

Use:

- fixed or sticky header
- scrollable content area
- stable bottom navigation
- reduced decoration
- illustration above the question

## Progress bar

Display progress on every step.

Show either:

- Krok 3 z 7
- percentage
- both

Use a pale track with a blue filled section.

Progress must move backward when navigating to an earlier step.

## Step structure

Each step contains:

- Progress information
- Illustration
- Question
- Optional supporting text
- Answer controls
- Inline validation
- Back and forward controls

Each step must have its own illustration.

Keep illustration containers at a stable size to prevent layout jumping.

## Answer controls

Radio and choice options should appear as large selectable cards.

Selected state:

- blue border
- pale-blue background
- visible selection indicator

Error state:

- error-colored border
- concise inline message
- no shaking animation

Radio options may auto-advance after a brief delay.

## Navigation

Forward movement:

- current step exits left
- next step enters from right

Backward movement:

- reverse the direction

Back and forward buttons must remain in stable positions.

## Final step

The final step includes:

- email field
- hCaptcha
- back button
- submit button
- final illustration

Use a positive but restrained illustration such as a finish pose or relaxed post-training figure.
