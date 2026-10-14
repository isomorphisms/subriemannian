# Browser rendering acceptance

The mathematical implementation and HTML/sample generation are compiled Idriç.
The browser template needs DOM/SVG actions. The pinned host Idriç runtime has no
implemented browser DOM/SVG bridge; presentation therefore uses a small explicit
JavaScript renderer of computed samples. It neither solves an ODE nor invents
another trajectory. This is a target-interface boundary, not Idriç acceptance.

Types: canonical sampled horizontal path → weighted/reflected path → SVG path;
radius/orientation/travel controls → redraw. Laws: radius two gives height four
times radius one; reflection reverses signed height; both SVG views consume the
same revealed sample prefix; zero travel returns to the initial point.

Browser acceptance uses Playwright's actual DOM/runtime, records JS errors, moves
the controls, checks displayed values, and captures the rendered page. The host
Playwright version is a QA dependency, not a required mathematical build tool.
Removing this JavaScript boundary requires a maintained Idriç browser interface
that implements the same sample-to-view contract.
