# A singular plane with a reachable third direction

Use ω=dz−y²dx/2 and declare

A=∂ₓ+(y²/2)∂𝓏,   B=∂ᵧ

orthonormal. The factor ½ differs from the normalization in Montgomery's
survey; it agrees with the flat Martinet model used here. It changes numerical
bracket coefficients, not the rank changes or abnormal trajectories. Background:
[M-SURVEY §3.4, Theorem 5; ABB-2017 §13.9](../sources/ledger.md).

## Every bracket needed for the flag

[A,B] = −y∂𝓏,
[B,[A,B]] = −∂𝓏,
[A,[A,B]] = 0.

The first identity follows because B differentiates y²/2 to y and appears with
the negative sign in [A,B]. The second differentiates −y once more. Thus the
growth vector is (2,3) for y≠0 and (2,2,3) for y=0. This remains a rank-two
distribution everywhere; only its bracket flag changes rank. The surface y=0
is the Martinet surface. The structure is bracket-generating everywhere and
is not equiregular across that surface.

dω = y dx∧dy and ω∧dω = y dx∧dy∧dz. The contact condition fails exactly on
y=0. The depth-three bracket explains why that failure does not mean an
integrable neighborhood. Tests evaluate the flag on the surface and at both
positive and negative y. The parameter-family tests separately exercise a
nonzero rational ε as small as 10⁻¹².

## Horizontal endpoint equations

Controls (u,v) give ẋ=u, ẏ=v, ż=y²u/2 and length ∫√(u²+v²)dt.
If y(0)=y₀, then y=y₀+∫v, and

z(T) = z₀ + ½∫₀ᵀ(y₀+∫₀ᵗv)²u(t)dt.

For constant controls over duration τ the exact integral is

Δz = u(y₀²τ+y₀vτ²+v²τ³/3)/2.

The executable implementation uses that polynomial integral for each control
segment. For example, move from y=0 to y=a, move distance b along A, return
to y=0, then move distance −b along A. The planar projection closes and the
height changes by a²b/2. The missing direction appears with cubic weight in
the two small displacements a,b. Negative b gives negative height.

## The endpoint map exposes abnormality

Fix the origin and time T. The endpoint map sends a square-integrable control
pair to the final point of its horizontal curve. Consider any base control
(u₀,0), whose path is (∫u₀,0,0). Perturb it by ε(a,b), and put
B(t)=∫₀ᵗb. Then

xε(T)=∫u₀+ε∫a,   yε(T)=ε∫b,
zε(T)=½ε²∫B(t)²u₀(t)dt + ½ε³∫B(t)²a(t)dt.

The differential at ε=0 is (∫a,∫b,0). Its rank is exactly two: independent
constant a and b supply the first two directions, and no first-order
variation supplies height. The nonzero covector dz annihilates its image.
This is an explicit endpoint-map singularity, hence an abnormal lift. It
does not require a metric or assert optimality.

The abnormal covector equations give the same result. Write the covector
(pₓ,pᵧ,p𝓏). It must annihilate A and B, so pₓ+y²p𝓏/2=0 and pᵧ=0.
Differentiating along a nonconstant abnormal path forces yp𝓏=0. Since the
covector is nonzero, p𝓏≠0 on y=0 and the path must stay on that surface.
Differentiating yp𝓏=0 again gives v=0. The abnormal trajectories are therefore
x-directed paths on y=0 [ABB-2017 §13.9.1, Proposition 13.50]. Pauses and
reparametrizations require the usual almost-everywhere interpretation.

## Which of these curves minimize in the chosen metric?

For any horizontal curve, L=∫√(u²+v²)≥∫|u|≥|x(T)−x(0)|. A monotone
x-directed curve at fixed y=0,z=z₀ attains equality and is globally shortest
between its endpoints in this flat metric. A path from x=0 to x=2 and then
back to x=1 has length three; the monotone path has length one. Both lie in the
abnormal endpoint-map locus, but the first is not minimizing. This is a
deterministic negative fixture, not just a warning in prose.

Constant-speed minimizing lines are also normal in the flat metric. Its normal
Hamiltonian is H=½[(pₓ+y²p𝓏/2)²+pᵧ²], with

ẋ=pₓ+y²p𝓏/2, ẏ=pᵧ, ż=y²(pₓ+y²p𝓏/2)/2,
ṗₓ=0, ṗᵧ=−yp𝓏(pₓ+y²p𝓏/2), ṗ𝓏=0.

At y=0, choose p=(c,0,k). The projected normal trajectory is (x₀+ct,0,z₀).
It admits both kinds of lift. Calling this particular minimizer strictly
abnormal would be wrong.

For other smooth metrics, the abnormal locus stays fixed while the normal
equations and minimizing behavior change. Montgomery's short-subarc theorem
requires the actual regularity and locality assumptions; his rigidity argument
alone is not a global minimization proof. For perturbations with ẋ>0,
Δz=½∫y²ẋ≥0, and equality forces y=0. This demonstrates local rigidity among
such perturbations, not a general theorem about every singular curve under
every metric. We do not claim to implement the generic-metric theorem or a
full Martinet optimal synthesis.

## Questions left open here

The solver implements Heisenberg normal flow, not Martinet's pendulum-based
normal flow or its cut locus. Varying the Martinet metric, constructing strictly
abnormal minimizers, and interpreting singular-point volume asymptotics remain
research tasks. The pointwise weighted sum at y=0 is five; it must not be
silently identified with the Hausdorff dimension of the whole non-equiregular
space by applying the equiregular formula.
