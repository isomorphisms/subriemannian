# subriemannian

Executable calculations and reading notes on sub-Riemannian and
Carnot–Carathéodory geometry, following Carathéodory, Montgomery, Le Donne,
and Agrachev–Barilari–Boscain.

The Idriç core computes polynomial fields and brackets with exact rational
coefficients, bracket-flag ranks, horizontal endpoints and lengths, and
Heisenberg Hamiltonian geodesics. It compiles through the pinned existing Chez
runtime. Definitions, numerical algorithms, and presentation are separate.

## Worked geometry

- [Heisenberg: area, group law, geodesics and dimension](worked/01-heisenberg.md)
- [Integrability and accessibility under a parameter change](worked/02-integrability.md)
- [Martinet: singular flag, endpoint map, abnormality and minimality](worked/03-martinet.md)
- [The principal ℝ-bundle connection and explicit gauge transformations](worked/04-connection-and-gauge.md)
- [Offline horizontal-loop explorer](figures/heisenberg-loop.html)
- [Inspected sources and exact claim locations](sources/ledger.md)
- [Reproducible build, tests, figures and receipts](_/reproduce.md)
- [Captured fresh-checkout FP/Kitchen/AICI receipts](evidence/host-2026-10-14/README.md)

The explorer's two views use the same path samples emitted by the compiled core.
Size and orientation controls apply the derived transformations to those samples.
The shown polygon has its actual computed area, rather than an invented circle
endpoint. The developing PostScript-like graphics language is a possible
consumer, not a required dependency.

The mathematical tests exercise exact brackets/ranks, weighted dilations,
horizontal loops, gauge changes, Martinet behavior, and numerical convergence.
The separately compiled AICI oracle executes the digest-bound compiled producer
and compares independent formulas, complete state samples, process exits and
negative controls. See the unfiltered exact-head CI workflow for fresh-checkout
execution and retained FP/Kitchen/AICI receipts.

## Initial notes

- [Reading map](notes/00-reading-map.md)
- [Carathéodory: inaccessibility, Pfaffian forms, and integrability](notes/01-caratheodory.md)
- [Montgomery: horizontal motion, geodesics, and singular curves](notes/02-montgomery.md)
- [Le Donne: Carnot groups from the metric and Lie-group viewpoint](notes/03-le-donne.md)
- [The integrability/accessibility bridge](notes/04-integrability-accessibility-bridge.md)
- [Bibliography and acknowledgments](notes/05-bibliography-and-acknowledgments.md)

## Governing distinction

For a Pfaffian constraint $\Delta=\ker\omega$:

- Carathéodory’s nearby inaccessibility hypothesis leads toward an integrating factor and a foliation;
- Chow–Rashevskii bracket generation leads toward horizontal accessibility and a finite Carnot–Carathéodory distance.

The same constrained-curve language appears on both sides, but the conclusions are structurally opposite. These notes keep that distinction visible rather than attributing the complete modern subject to one historical source.

## Remaining research

The Heisenberg initial-value solver does not solve an arbitrary endpoint
shortest-path problem or certify every normal trajectory as minimizing.
Generic-metric Martinet minimizers, its normal optimal synthesis/cut locus,
singular volume asymptotics, wider bundle examples, and the future graphics
language interface remain open here. The source ledger identifies inspected
editions separately from unverified leads.
