# The Evo Philosophy

This document specifies the general approach to development for Evo

## It's All About Evolutionary Design

No one can predict the future, least of all me. That's why it's important to keep the code changeable, iterate swiftly and implement a fast feedback cycle. This approach is supported by sticking to simple designs, so that making changes to the codebase doesn't become too difficult over time. Projects that can't evolve quickly are doomed to wither and die, just like biological organisms in nature do.

## Don't Be Clever, Be Clear

I'd rather have someone go through the codebase (or even documentation) and say, *I get what you were going for, but this is really stupid! Why not do it this way, or do that instead?* than leave in bewilderment, wondering just what they were looking at. This kind of feedback is a huge win, because it means they were actually able to understand the code and come up with ideas for improvement!

## Quality MUST Be Built In

In order to maintain a rapid pace of development, a reasonably high standard of quality must be pursued at all times. What exactly that means is of course up for debate, but the core idea is this: Poorly-done work has to be done twice (or more), and that's to be avoided at all costs. This isn't to say every feature will turn out great, but *deliberately* taking shortcuts which will *disproportionately* hinder future development, such as skimping on tests and/or documentation updates, must be avoided - at least outside of prototyping phases.
