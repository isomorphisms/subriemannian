# Montgomery: horizontal motion, geodesics, and singular curves

## Main sources

- Richard Montgomery, *A Tour of Subriemannian Geometries, Their Geodesics and Applications*, Mathematical Surveys and Monographs 91, American Mathematical Society, 2002. [AMS page](https://www.ams.org/books/surv/091/).
- Richard Montgomery, [“A survey of singular curves in sub-Riemannian geometry”](https://peopleweb.prd.web.aws.ucsc.edu/~rmont/papers/surveySR.pdf), *Journal of Dynamical and Control Systems* **1** (1995), 49–90.
- Richard Montgomery, [preliminary lecture notes, “Dido Meets Heisenberg”](https://indico.ictp.it/event/a0151/material/3/7.pdf).
- Richard Montgomery, “Abnormal Minimizers,” *SIAM Journal on Control and Optimization* **32** (1994), 1605–1620, DOI [10.1137/S0363012993244945](https://doi.org/10.1137/S0363012993244945).

Montgomery’s presentation is unusually good at keeping geometry, mechanics, control, and concrete examples in one picture. His distinctive contribution to this reading path is the endpoint-map treatment of singular or abnormal curves.

## Basic structure

A sub-Riemannian structure consists of

$$
(M,\Delta,g_\Delta),
$$

where:

- $M$ is a smooth manifold;
- $\Delta\subset TM$ is a smooth distribution of allowed directions;
- $g_\Delta$ is a smoothly varying inner product on $\Delta$.

An absolutely continuous curve $\gamma:[0,1]\to M$ is horizontal when

$$
\dot\gamma(t)\in\Delta_{\gamma(t)}
$$

for almost every $t$. Its length is

$$
L(\gamma)=\int_0^1\sqrt{g_\Delta(\dot\gamma,
\dot\gamma)}\,dt.
$$

The Carnot–Carathéodory distance is

$$
d_{CC}(p,q)=\inf\{L(\gamma):\gamma(0)=p,\ \gamma(1)=q,\ \gamma\text{ horizontal}\}.
$$

Without an accessibility hypothesis, this infimum may be infinite.

## Bracket generation and Chow’s theorem

Write $\Delta$ also for the module of smooth horizontal vector fields and define

$$
\Delta^1=\Delta,
\qquad
\Delta^{k+1}=\Delta^k+[\Delta,\Delta^k].
$$

The distribution is bracket-generating at $q$ when

$$
\Delta_q^s=T_qM
$$

for some finite $s$. If this holds at every point, Chow–Rashevskii’s theorem implies that points in the same connected component can be joined by horizontal curves.

The geometric meaning is that commutator motions simulate missing directions. For flows of horizontal vector fields $X$ and $Y$, the small loop

$$
e^{-\varepsilon Y}e^{-\varepsilon X}e^{\varepsilon Y}e^{\varepsilon X}
$$

produces, to leading order, displacement in the $[X,Y]$ direction of size $\varepsilon^2$.

This anisotropic cost is the beginning of Carnot scaling.

## Dido meets Heisenberg

Montgomery begins from the planar isoperimetric problem. Add a coordinate $z$ that records signed area swept out by a planar curve. The lifted curve in $\mathbb R^3$ must satisfy a horizontal constraint.

A standard Heisenberg form is

$$
\alpha=dz-\frac12(x\,dy-y\,dx).
$$

Then

$$
\Delta=\ker\alpha
$$

is spanned by

$$
X=\partial_x-\frac{y}{2}\partial_z,
\qquad
Y=\partial_y+\frac{x}{2}\partial_z,
$$

up to sign convention. Their bracket is

$$
[X,Y]=\partial_z.
$$

Thus $\Delta+[\Delta,\Delta]=T\mathbb R^3$ in one step. The missing vertical direction is not allowed instantaneously but is obtained by a horizontal loop.

For a horizontal curve,

$$
\dot z=\frac12(x\dot y-y\dot x),
$$

so vertical displacement equals signed planar area. Minimizing horizontal length with fixed vertical displacement becomes the classical planar isoperimetric problem. The planar projections of Heisenberg geodesics are circles or straight lines.

This example unifies:

- a constrained control system;
- a contact distribution;
- a nilpotent Lie group;
- a Hamiltonian geodesic flow;
- the isoperimetric problem;
- geometric phase or holonomy.

## Normal geodesics

Choose a local orthonormal frame $X_1,\ldots,X_m$ for $\Delta$. The sub-Riemannian Hamiltonian on $T^*M$ is

$$
H(q,p)=\frac12\sum_{i=1}^m p(X_i(q))^2.
$$

Integral curves of the Hamiltonian vector field $\vec H$ project to normal extremals. Sufficiently short normal extremals, before conjugate or cut phenomena intervene, are locally minimizing.

This is the robust part of the analogy with Riemannian geometry. The cotangent bundle is essential because the metric is degenerate on the full tangent bundle but the cometric

$$
H:T^*M\to\mathbb R
$$

is well-defined.

Montgomery repeatedly emphasizes that Hamiltonian methods survive more cleanly than a Levi-Civita-connection formulation.

## The endpoint map

Fix an initial point $q_0$. Let $\Omega_\Delta(q_0)$ be the space of horizontal paths starting at $q_0$. The endpoint map is

$$
\operatorname{End}_{q_0}:\Omega_\Delta(q_0)\to M,
\qquad
\operatorname{End}_{q_0}(\gamma)=\gamma(1).
$$

The fiber

$$
\operatorname{End}_{q_0}^{-1}(q_1)
$$

is the constraint space over which one minimizes energy or length.

A horizontal curve $\gamma$ is **singular** when it is a critical point of the endpoint map:

$$
d\operatorname{End}_{q_0}|_\gamma
$$

is not surjective. In control language, the linearized input-output system along $\gamma$ is not controllable.

This definition depends on the distribution $\Delta$, not on the chosen inner product on $\Delta$.

## Why abnormal extremals appear

The usual constrained-optimization argument says that a minimizer of energy $E$ on a constraint $F=0$ satisfies

$$
\lambda_0\,dE+\lambda\,dF=0
$$

for multipliers not all zero.

At a regular point of the constraint map one can normalize $\lambda_0\neq0$ and obtain the normal equations. At a singular point one may have

$$
\lambda_0=0.
$$

These are abnormal or singular extremals. Their existence is not an exotic failure of smoothness; it is forced by the geometry of the endpoint map.

Pontryagin’s maximum principle yields the basic dichotomy:

> every minimizing geodesic is normal, abnormal, or both.

The alternatives are not mutually exclusive.

## What depends on the distribution and what depends on the metric

| Feature | Depends on $\Delta$? | Depends on $g_\Delta$? |
| --- | ---: | ---: |
| Horizontal paths | yes | no |
| Endpoint map | yes | no |
| Singular/abnormal candidate | yes | no |
| Length and energy | yes | yes |
| Which singular curves minimize | yes | generally yes |
| Normal Hamiltonian | yes | yes |
| Cut and conjugate loci | yes | yes |

This distinction is important. Calling a curve abnormal is a statement about the constraint geometry. Calling it a minimizing abnormal geodesic adds a variational statement.

## The Martinet-type example

Montgomery’s survey gives a rank-two distribution on $\mathbb R^3$ defined by

$$
dz-y^2\,dx=0.
$$

It is contact away from the plane $y=0$ and has growth vector $(2,2,3)$ on that plane. The singular curves lie in $y=0$ and run parallel to the $x$-axis. Short subarcs are minimizing for any metric on the distribution, and for generic metrics they are strictly abnormal.

The example matters because it defeats the tempting claim that all minimizers arise from the normal Hamiltonian system. It also shows why equiregularity is not a harmless technical assumption: the growth vector changes on the Martinet surface.

Montgomery’s elementary rigidity argument uses

$$
\dot z=y^2\dot x.
$$

For perturbations with $\dot x>0$, the vertical coordinate is monotone, and equality forces $y\equiv0$. This isolates the singular curve among sufficiently smooth horizontal curves with the same endpoints.

## Contact distributions versus abnormal curves

A contact distribution in dimension $2n+1$ is locally

$$
\Delta=\ker\alpha,
\qquad
\alpha\wedge(d\alpha)^n\neq0.
$$

Contact distributions are maximally nonintegrable. In the basic corank-one contact case, nontrivial abnormal extremals are absent. The Heisenberg group is therefore a clean first model: it exhibits nonholonomy and normal geodesics without the additional complication of strictly abnormal minimizers.

The Martinet distribution is the next model because it is contact off a singular hypersurface and degenerates exactly where abnormal behavior appears.

## Montgomery’s larger architecture

The book uses sub-Riemannian geometry as a meeting place for:

- isoperimetric problems;
- geometric mechanics and nonholonomic motion;
- principal bundles, connections, and holonomy;
- control theory and Pontryagin’s principle;
- Cartan’s equivalence method for distributions;
- discrete groups and Gromov’s polynomial-growth theorem;
- singularity theory of the endpoint map;
- open problems around Sard properties and regularity.

This breadth is not decorative. A recurring message is that a horizontal distribution can be read simultaneously as a mechanical constraint, a control system, a connection, and a metric structure.

## First-pass reading order

1. **Dido and the Heisenberg group.** Understand the area-lift construction completely.
2. **Bracket generation and Chow.** Work through at least one commutator path calculation.
3. **Hamiltonian normal geodesics.** Derive $H$ from an orthonormal horizontal frame.
4. **Endpoint map.** Treat it as the actual constraint map, not merely a definition.
5. **Abnormal extremals.** Separate singularity, extremality, and minimality.
6. **Martinet example.** Check the growth vector on and off $y=0$.
7. **Principal-bundle examples.** Relate curvature to vertical displacement and geometric phase.
8. **Open problems.** In particular, the Sard problem for the endpoint map and regularity of minimizers.

## Questions for a second pass

- Under which hypotheses is every minimizer smooth?
- Which distributions admit no nontrivial abnormal extremals?
- What is the sharp relation between abnormality and failure of Sard’s theorem for the endpoint map?
- How do conjugate points differ along normal and abnormal extremals?
- Which rigid curves remain minimizing under perturbation of the metric or distribution?
- How do nilpotent approximation and Carnot-group tangents simplify the endpoint map near a point?
- Can the Martinet example be displayed as a family of horizontal planes whose contact condition collapses on a surface?

## Immediate cross-links

- Carathéodory’s Pfaffian equation and Montgomery’s horizontal distribution use the same local object $\ker\omega$, but Carathéodory exploits inaccessibility while Montgomery generally assumes bracket-generated accessibility.
- Le Donne’s viewpoint explains why the Heisenberg group is not only an example but the tangent model for every equiregular three-dimensional contact structure.
- The endpoint-map singularity is the natural place to connect geometric control with singularity theory, stratification, and any later computational experiment.
