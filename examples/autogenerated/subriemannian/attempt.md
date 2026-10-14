# Program attempt: executable sub-Riemannian geometry

Status: PASS — the mathematical core, tests and generator compile and execute
through the pinned Idriç/Chez host runtime. The original Unicode-minus slice is
retained separately as a failed language-capability attempt.

## Purpose and intended behavior

Compute brackets, pointwise bracket flags, horizontal endpoints and lengths,
Heisenberg normal geodesics, dilations, and connection holonomy. Generate the
loop figure from the same computed path. This is executable mathematics, not
a general symbolic differential-geometry system or a solution of all cut-locus
and abnormal-minimizer problems.

## Type-system sketch

Values: rational polynomials in three real coordinates, polynomial vector
fields, points, horizontal controls, cotangent states, positive durations,
positive subdivision counts, oriented loops, and changes of local section.

Central signatures:

- evaluate_field : polynomial_field → point → tangent_vector
- lie_bracket : polynomial_field → polynomial_field → polynomial_field
- bracket_flag : List polynomial_field → point → positive_depth → List rank
- horizontal_endpoint : distribution → point → List timed_control → point
- horizontal_length : List timed_control → nonnegative_length
- normal_geodesic : cotangent_state → positive_duration → positive_count → path
- dilation : positive_scale → point → point
- holonomy : connection → closed_base_path → fiber_translation

Exact rational coefficients and point evaluations establish bracket identities
and ranks without finite-difference tolerances. Floating-point integration is
separate, explicitly binary64 in the reference. Required laws: antisymmetry,
Jacobi, horizontality, area/displacement agreement, weighted dilation,
Hamiltonian conservation, and section-independent closed-loop holonomy.
Errors include nonfinite numbers, invalid durations/counts, open loops supplied
to signed_area, rank tolerances replacing exact ranks, and unsupported geometry.

Pure objects and laws belong in Objects.idric; numerical algorithms in
Integration.idric; file/terminal actions in Main.idric and Figure.idric. Rational
coefficients and pointwise ranks are exact. Double is deliberately the inherited
runtime's IEEE binary64 representation for numerical calculations. It does not
redefine the ordinary Idriç numeric default.

## Runtime and backend boundary

Preferred target: maintained Idriç on Linux x86-64, using existing compiler and
runtime work. The first actual slice is the doubled vertical coefficient of
the Heisenberg bracket, using Integer arithmetic to preserve the half factors.
The complete solver also needs explicit binary64 arithmetic, trigonometry,
collections, loops, and file output. These run through the existing Chez backend.
The separate direct x86 backend qualifies bounded fixtures; its primitive
support is not claimed as acceptance of this solver.

## Idriç attempt

Source: Subriemannian.idric. Compiler source: isomorphisms/Idric,
Idriç branch, 2734ac5a86610eddfab73b1644d72b4ac85a65ee.
Invocation: `edric --emit-one-step Subriemannian.idric -o bracket.one-step`
(actual run used the verified absolute source/output paths).

After the supported compiler bootstrap succeeded, the first preserved slice
failed with `Undefined name −` at its subtraction expression. An attempted
local `infixl 6 −` declaration also failed parsing. The full core uses accepted
ASCII subtraction, alongside the compiler's supported Unicode arrows, ×, ÷,
and ≟. No speculative phrase syntax is claimed compilable. Missing host runtime
was resolved by the compiler's own bootstrap; it is not an outstanding blocker.

The production files were compiled with `--cg chez`, executed as real compiled
programs, and checked by a separately compiled AICI oracle. The fresh workflow
and retained receipts record exact sources, runtime and artifact identities.

## Fallback

None for the mathematical implementation. The browser's small JavaScript DOM/SVG
renderer is an explicit presentation boundary, described in browser-attempt.md.

## Idriç language work exposed

First observed language gap: the documented/desirable Unicode minus is not
accepted by the pinned compiler as the subtraction operator. The narrow next
language change is filename-scoped normalization of that glyph, with a matching
ordinary .idr compatibility check. The preserved bracket slice should then emit
and execute the exact answer 2. This project does not modify the compiler.

A separate backend-development task could qualify this solver through the
direct x86 handoff. That is not required to use its already-tested Chez runtime.

## Evidence boundary

Compiled Idriç/Chez host execution is established; direct-x86-backend, Android,
physical-device, generic-metric Martinet synthesis and formal verification of
all mathematical claims are not claimed. The exact polynomial and executable
numerical checks establish their stated invariants, not a general theorem prover.
