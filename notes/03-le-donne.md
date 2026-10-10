# Le Donne: Carnot groups from the metric and Lie-group viewpoint

## Main sources

- Enrico Le Donne, [*Metric Lie Groups: Carnot–Carathéodory Spaces from the Homogeneous Viewpoint*](https://arxiv.org/abs/2410.07291), arXiv:2410.07291, 2024 manuscript.
- Enrico Le Donne, [*Lecture Notes on Sub-Riemannian Geometry: Carnot–Carathéodory Spaces from the Lie Group Viewpoint*](https://cvgmt.sns.it/media/doc/paper/5339/sub-Riem_notes%202023-5%20submitted_for_proposal.pdf), 2023 version.
- Enrico Le Donne, [sub-Riemannian geometry reading page](https://sites.google.com/view/enricoledonne/research/subriemannian-geometry).
- Enrico Le Donne, [“A Primer on Carnot Groups”](https://arpi.unipi.it/bitstream/11568/976019/1/A%20Primer%20on%20Carnot%20Groups%20.pdf), for a shorter entry into the definitions and metric characterization.

The later book is the preferred spine. The 2023 lecture notes remain useful because their chapter diagram and pedagogical route make the architecture unusually explicit.

## What Le Donne changes in the viewpoint

Montgomery moves from constrained motion to geodesics and abnormality. Le Donne moves from the Heisenberg group to a classification of the homogeneous tangent models that organize the entire subject.

The core thesis is:

> Learn Carnot groups first as exact, translation-invariant, self-similar metric spaces; then use them as local tangents, large-scale limits, and arenas for analysis.

This shifts attention from a single control problem to a reusable category of metric Lie groups.

## The chapter route

The 2023 notes proceed roughly as follows:

1. the Heisenberg group;
2. metric and differential geometry background;
3. general Carnot–Carathéodory spaces;
4. Lie groups;
5. sub-Finsler Lie groups;
6. nilpotent Lie groups;
7. Riemannian Lie groups;
8. Carnot groups;
9. limits and tangents of Riemannian and sub-Riemannian manifolds;
10. rank-one symmetric spaces;
11. Heintze groups and parabolic boundaries;
12. large-scale geometry and asymptotic cones;
13. geometric measure theory and open problems.

The order is deliberate. The text does not introduce Carnot groups as an isolated algebraic definition. It builds enough metric, differential, and Lie theory to show why the same objects recur in several different limits.

## Sub-Finsler and sub-Riemannian structures

A sub-Finsler manifold consists of

$$
(M,\Delta,\lVert\cdot\rVert),
$$

where $\Delta\subset TM$ is bracket-generating and $\lVert\cdot\rVert$ is a smoothly varying norm on $\Delta$. If the norm comes from an inner product, the structure is sub-Riemannian.

The Carnot–Carathéodory distance is the infimum of lengths of horizontal curves. Chow’s theorem gives local reachability and, on connected manifolds, finiteness of the distance.

The sub-Finsler category is not a minor generalization. It is required naturally by large-scale limits of word metrics and by homogeneous metric geometry, where the limiting norm on the first layer need not be Euclidean.

## Stratified Lie algebras and Carnot groups

A stratified nilpotent Lie algebra has a vector-space decomposition

$$
\mathfrak g=V_1\oplus V_2\oplus\cdots\oplus V_s
$$

such that

$$
[V_1,V_j]=V_{j+1}
$$

for $1\le j<s$, with $[V_1,V_s]=0$. The first layer $V_1$ generates the entire Lie algebra by iterated brackets.

Let $G$ be the connected, simply connected Lie group with Lie algebra $\mathfrak g$. Left translation of $V_1$ defines the horizontal distribution:

$$
\Delta_g=(L_g)_*V_1.
$$

A norm on $V_1$ extends left-invariantly to $\Delta$. The resulting path metric makes $G$ a sub-Finsler Carnot group. An inner product gives a sub-Riemannian Carnot group.

The group is nilpotent, simply connected, and diffeomorphic to its Lie algebra through the exponential map.

## Dilations

The stratification defines anisotropic dilations on the Lie algebra:

$$
\widetilde\delta_\lambda(v_1+v_2+\cdots+v_s)
=
\lambda v_1+\lambda^2v_2+\cdots+\lambda^sv_s.
$$

These integrate to group automorphisms $\delta_\lambda:G\to G$ satisfying

$$
d(\delta_\lambda p,\delta_\lambda q)=\lambda d(p,q).
$$

The weight $j$ of $V_j$ records how expensive that direction is to synthesize from horizontal motion. A second-layer displacement of Euclidean size $\varepsilon^2$ is produced by a horizontal loop of length on the order of $\varepsilon$.

This is not merely a scaling trick. It is the exact form of the anisotropy already visible in the commutator formula.

## Homogeneous dimension

The natural volume-scaling exponent is

$$
Q=\sum_{j=1}^s j\,\dim V_j.
$$

Under dilation,

$$
\operatorname{vol}(\delta_\lambda A)=\lambda^Q\operatorname{vol}(A).
$$

For the three-dimensional Heisenberg group,

$$
\dim V_1=2,
\qquad
\dim V_2=1,
\qquad
Q=2+2=4.
$$

Thus topological dimension and metric/Hausdorff dimension differ. This is a first concrete sign that the geometry is not locally bi-Lipschitz to a Riemannian manifold.

## The Heisenberg group as the model example

For the Heisenberg algebra,

$$
\mathfrak h=V_1\oplus V_2,
\qquad
V_1=\operatorname{span}\{X,Y\},
\qquad
V_2=\operatorname{span}\{Z\},
$$

with

$$
[X,Y]=Z.
$$

Dilations are

$$
\delta_\lambda(x,y,z)=(\lambda x,\lambda y,\lambda^2z).
$$

The group is simultaneously:

- the first non-Riemannian Carnot group;
- a contact sub-Riemannian manifold;
- the tangent of every equiregular three-dimensional contact structure;
- the boundary model for complex hyperbolic geometry;
- a model for subelliptic analysis;
- the simplest place to see Pansu differentiation and anisotropic Hausdorff dimension.

Le Donne keeps returning to it because each general theorem should be checked there first.

## Metric tangents and nilpotentization

At an equiregular point of a sub-Riemannian manifold, anisotropic blow-up produces a Carnot group. Mitchell’s theorem identifies the pointed metric tangent with the nilpotent approximation of the horizontal structure.

Schematic form:

$$
(M,\lambda d,p)
\longrightarrow
(G_p,d_p,e)
$$

as $\lambda\to\infty$, where $G_p$ is the Carnot group associated with the graded Lie algebra

$$
\operatorname{gr}_p(\Delta)
=
\Delta_p^1
\oplus
\Delta_p^2/\Delta_p^1
\oplus\cdots.
$$

The quotient layers record genuinely new directions appearing at each bracket depth.

This is the sub-Riemannian analogue of replacing a smooth Riemannian manifold by its Euclidean tangent space, except the tangent generally becomes noncommutative and anisotropically graded.

## Why equiregularity matters

A distribution is equiregular when the dimensions

$$
\dim\Delta_p^k
$$

are locally constant for every $k$. Then the graded tangent structure varies coherently.

At singular points, such as the Martinet surface, the growth vector changes. Tangent objects, Hausdorff dimension, and volume asymptotics become subtler. Statements proved in the equiregular setting should not be carried across these points silently.

## Metric characterization of Carnot groups

One of Le Donne’s cleanest organizing results says that sub-Finsler Carnot groups are exactly the metric spaces that are:

1. locally compact;
2. geodesic;
3. isometrically homogeneous;
4. self-similar by a nontrivial dilation.

The proof combines several deep results:

- Gleason–Montgomery–Zippin: suitable homogeneous spaces are Lie spaces;
- Berestovskii: invariant geodesic distances on homogeneous manifolds are sub-Finsler;
- Mitchell: tangents of equiregular sub-Finsler manifolds are Carnot groups;
- self-similarity identifies the original space with its tangent.

This theorem is valuable because it removes the Lie algebra from the hypotheses. The algebraic stratification emerges from purely metric properties.

## Pansu differentiation

Euclidean differentiability compares a function with a linear map under isotropic rescaling. Between Carnot groups, the appropriate differential is a homogeneous group homomorphism.

For a Lipschitz map $f:G\to H$, the Pansu differential at $p$, when it exists, is the blow-up limit

$$
D_Pf(p)(q)
=
\lim_{\lambda\to\infty}
\delta^{H}_{\lambda}
\left(
 f(p)^{-1}
 f\bigl(p\,\delta^{G}_{1/\lambda}(q)\bigr)
\right).
$$

The resulting map respects both group operations and dilations. Pansu’s Rademacher theorem says that Lipschitz maps between Carnot groups, and more generally in suitable sub-Riemannian settings, are Pansu differentiable almost everywhere.

This is the basic calculus compatible with noncommutative tangents.

## Microscopic and macroscopic appearances

Carnot groups occur at both ends of scale.

### Microscopic

They are metric tangents of equiregular sub-Riemannian manifolds. Nilpotentization throws away higher-order terms while preserving the leading bracket structure.

### Macroscopic

They arise as asymptotic cones of finitely generated nilpotent groups equipped with word metrics. Pansu’s work identifies the large-scale limit with a graded nilpotent Lie group carrying a sub-Finsler metric.

The same class therefore controls:

- infinitesimal geometry of smooth constrained systems;
- large-scale geometry of discrete nilpotent groups.

This scale duality is one of the strongest reasons to use Le Donne’s text as the modern backbone.

## Boundaries and Heintze groups

The text also places Carnot-type geometries on boundaries of negatively curved homogeneous spaces. Rank-one symmetric spaces have parabolic boundaries modeled by Euclidean spaces or Heisenberg-type groups with natural visual metrics. More general negatively curved homogeneous manifolds lead to Heintze groups and graded boundary geometries.

This connects sub-Riemannian geometry with:

- hyperbolic geometry;
- quasiconformal maps;
- rigidity;
- complex and quaternionic geometry;
- geometric group theory.

It also provides a route toward the user’s existing interests in Möbius dynamics, hyperbolic geometry, and high-dimensional rotation without forcing those themes into the first notes.

## Analysis and geometric measure theory

Once a Carnot group supplies translations and dilations, one can rebuild familiar analytic constructions in anisotropic form:

- homogeneous norms;
- Haar measure and $Q$-dimensional scaling;
- horizontal gradients;
- sub-Laplacians;
- finite-perimeter sets;
- rectifiability;
- blow-ups of measures and sets;
- differentiability of Lipschitz maps.

The point is not that Euclidean analysis transfers unchanged. The group law, horizontal bundle, and weighted scaling dictate which definitions survive.

## First-pass reading order

1. **Introduction and Heisenberg chapter.** Verify every formula by hand.
2. **General CC spaces.** Definitions, Chow, topology induced by $d_{CC}$, and existence of geodesics.
3. **Lie groups.** Left-invariant vector fields, exponential coordinates, and Baker–Campbell–Hausdorff.
4. **Nilpotent groups.** Lower central series and why the exponential map is global.
5. **Carnot groups.** Stratifications, dilations, homogeneous dimension, and examples.
6. **Limits and tangents.** Graded tangent algebra, nilpotent approximation, Mitchell’s theorem.
7. **Metric characterization.** Understand how each hypothesis is used and find counterexamples when one is removed.
8. **Pansu derivative.** Compute it first for group homomorphisms and coordinate maps.
9. **Asymptotic cones and boundaries.** Only after the local theory is stable.
10. **Geometric measure theory and open problems.** Treat this as a second course.

## Calculations to do rather than merely read

- Derive the Heisenberg group law from Baker–Campbell–Hausdorff.
- Check that $\delta_\lambda$ is a Lie-group automorphism.
- Compute $Q$ for Heisenberg, Engel, and free step-two groups.
- Verify the ball-box exponents in a low-dimensional example.
- Construct the graded algebra from a bracket flag at an equiregular point.
- Compute the Pansu differential of a graded homomorphism.
- Compare a Euclidean sphere, a Korányi sphere, and a true CC sphere.
- Track how Haar measure scales under dilations.

## Questions for a second pass

- Which homogeneous distances are geodesic, and which are only bi-Lipschitz models?
- How canonical is the tangent Carnot group under choices of frames and privileged coordinates?
- What changes at non-equiregular points?
- How do abnormal minimizers appear in nilpotent approximations?
- Which Carnot groups admit especially rigid quasiconformal maps?
- Where do sub-Riemannian and sub-Finsler results diverge materially?
- Which metric characterizations survive without local compactness or exact self-similarity?
- How much of the smooth manifold can be reconstructed from its field of metric tangents?

## Cross-links

- Montgomery supplies the geodesic and endpoint-map machinery that Le Donne’s metric-Lie organization does not foreground.
- Carathéodory supplies the historical Pfaffian accessibility problem, but his integrable conclusion lies on the opposite side of the bracket-generating condition.
- Mitchell, Bellaïche, Gromov, and Pansu form the central bridge from local constrained geometry to tangent groups, differentiation, and large-scale geometry.
