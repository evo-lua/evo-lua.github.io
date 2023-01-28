# The Evo Philosophy

This document specifies the general approach to development for Evo

## It's All About Evolutionary Design

No one can predict the future, least of all me. It should therefore be considered of utmost priority to keep the code changeable at all times, and eliminate complexity that could prevent changes from accumulating whenever feasible. If code cannot evolve it's doomed to wither and die, just like biological organisms in nature do. Evo's logo is a caterpillar for this reason (if the name didn't give it away).

## Don't Be Clever, Be Clear

I'd rather have someone go through the codebase (or even documentation) and say, *I get what you were going for, but this is really stupid! Why not do it this way, or do that instead?* than leave in bewilderment, wondering just what they were looking at. This kind of feedback is a huge win, because it means they were actually able to understand the code and come up with ideas for improvement!

## Quality MUST Be Built In

In order to maintain a rapid pace of development, a reasonably high standard of quality must be maintained at all times. What exactly that means is of course up for debate, but the core idea is this: Poorly-done work must be done twice (or more), and that's to be avoided at all costs. This isn't to say every feature will turn out great, but *deliberately* taking shortcuts which *disproportionately* hinder future development, such as skimping on tests and/or documentation work, must be avoided - at least outside of prototyping phases.
