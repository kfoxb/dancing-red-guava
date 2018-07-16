## Dancing Red Guava

This repo serves two primary purposes:

1. To explore the intricacies and performance implications of rendering anatomical representations of the human body with a Psidium cattleianum replacing the cranium.

2. Hopefully get a courtesy chuckle from someone that works at Red Guava

#### Implementation so far
Currently, the Dancing Red Guava is implemented as React components using Styled Components for CSS. CSS animations are used for the actual animations as well as pause/play. Each limb, the spine, and head are separate components with separate animations.

#### Current problems
 - It's not possible to scale the size of the Dancer up or down, doing so causes the animations to not work coherently, gaps are introduced between each component.
 - Firefox can't handle many dancers. The current implementation reduces the number of dancers on the screen when running in Firefox to compensate for this.
 - Pausing animations causes the dancers to go back to their first keyframe, making the animations look a little janky when pausing and playing again.
 - All animations are the same, they start at a staggered phase, but some variety would be good.

#### What's next?
To try and optimize things further with CSS animations doesn't seem like the most efficient way to solve the above problems, a switch in technology is probably the best solution. Moving to SVG based animations will probably be the easier solution for development, especially if a library like Snap.svg is used. From a little bit of initial research though it looks like using canvas would be the most performant option (well, truthfully, probably making a .gif is the most performant, but that's not as fun so we're ignoring that). Using a library like EaselJS may help canvas development move faster, I've never worked with canvas before so I'm not sure how difficult it is, but both SVG and canvas look more difficult than CSS animations.
