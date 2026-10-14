# Reading map

These notes begin with sources rather than a rendering or software plan. The first pass follows three distinct lines into the subject:

1. **Constantin Carathéodory:** admissible changes of thermodynamic state, Pfaffian equations, local inaccessibility, and integrating factors.
2. **Richard Montgomery:** horizontal paths, the endpoint map, normal and abnormal geodesics, mechanics, and control.
3. **Enrico Le Donne:** Carnot groups, metric tangents, homogeneous distances, Lie groups, and large-scale geometry.

The three lines meet, but they should not be collapsed into a false single history. Carathéodory did not define the modern sub-Riemannian metric. His thermodynamic argument studies a codimension-one constraint whose local inaccessibility yields integrability. Modern sub-Riemannian geometry usually imposes the opposite kind of hypothesis—bracket generation—so that horizontal curves can reach every nearby point.

## Four recurring objects

| Object | Working notation | Question |
| --- | --- | --- |
| Horizontal distribution | $\Delta\subset TM$ | Which instantaneous velocities are allowed? |
| Horizontal curve | $\dot\gamma(t)\in\Delta_{\gamma(t)}$ almost everywhere | Which states can be joined by an admissible motion? |
| Length on $\Delta$ | $\lVert\dot\gamma(t)\rVert$ | Which admissible motion is shortest? |
| Derived flag | $\Delta^1=\Delta$, $\Delta^{k+1}=\Delta^k+[\Delta,\Delta^k]$ | Do iterated commutators recover every tangent direction? |

For a Pfaffian constraint given by a nonvanishing one-form $\omega$, the distribution is

$$
\Delta=\ker\omega.
$$

The basic fork is then:

- **Frobenius/integrable:** $\omega\wedge d\omega=0$ in the codimension-one case. Horizontal curves remain in leaves.
- **Contact or bracket-generating:** commutators supply missing directions. Chow–Rashevskii accessibility makes the Carnot–Carathéodory distance finite on connected components.

## First reading sequence

### 1. Keep one model in view: the Heisenberg group

Before general definitions, use the three-dimensional Heisenberg group as the running example. In exponential coordinates $(x,y,z)$, one common convention is

$$
\alpha=dz-\frac12(x\,dy-y\,dx),\qquad \Delta=\ker\alpha.
$$

The horizontal plane field is rank two, but its two generating vector fields have a bracket in the missing vertical direction. A horizontal loop in the $(x,y)$ projection accumulates a $z$-displacement proportional to signed area. This one example already contains:

- nonholonomy;
- the isoperimetric problem;
- horizontal lifting;
- anisotropic dilation $(x,y,z)\mapsto(\lambda x,\lambda y,\lambda^2z)$;
- topological dimension $3$ but homogeneous/Hausdorff dimension $4$;
- a nilpotent Lie group as an exact self-similar metric model.

### 2. Carathéodory, §§1–5 of the 1909 paper

Read the setup of state coordinates, the two axioms, the definition of a simple system, and the Pfaffian lemma before reading the later thermodynamic normalization. The key mathematical sentence is:

> nearby states inaccessible along curves satisfying a Pfaffian equation imply that the Pfaffian form has a local integrating factor.

The important comparison is not “Carathéodory already had sub-Riemannian geometry.” It is:

> Carathéodory and later sub-Riemannian geometry ask reachability questions for constrained curves, but they exploit opposite sides of the integrability/accessibility divide.

See [`01-caratheodory.md`](01-caratheodory.md).

### 3. Montgomery: Dido, Heisenberg, Chow, then singular curves

Montgomery’s route is geometrically efficient:

1. turn Dido’s isoperimetric problem into a geodesic problem on the Heisenberg group;
2. define a sub-Riemannian structure $(M,\Delta,g_\Delta)$;
3. use bracket generation and Chow’s theorem to obtain connectivity by horizontal paths;
4. derive normal geodesics from a Hamiltonian on $T^*M$;
5. study singular points of the endpoint map, hence abnormal extremals.

The endpoint-map viewpoint is central. It explains why the usual Lagrange-multiplier argument can miss minimizers: the constraint map itself can be singular.

See [`02-montgomery.md`](02-montgomery.md).

### 4. Le Donne: examples first, then the Lie-group and metric organization

Le Donne’s text deliberately makes Carnot groups the central exact models. A useful first pass is:

1. Heisenberg group;
2. general Carnot–Carathéodory spaces and Chow’s theorem;
3. Lie groups and left-invariant sub-Finsler structures;
4. nilpotent and stratified Lie groups;
5. Carnot groups and dilations;
6. metric tangents and limits;
7. asymptotic cones, Pansu differentiation, and geometric measure theory.

This route explains why Carnot groups occur both microscopically—as tangents of equiregular sub-Riemannian manifolds—and macroscopically—as asymptotic cones of nilpotent groups.

See [`03-le-donne.md`](03-le-donne.md).

## Questions to carry through all three sources

1. What exactly is fixed: a distribution, a control system, a norm, or a thermodynamic process class?
2. Is reachability local or global?
3. Is the distribution integrable, contact, bracket-generating, or equiregular?
4. Does a statement depend only on $\Delta$, or also on the metric on $\Delta$?
5. Is a geodesic normal, abnormal, or both?
6. What is the correct tangent object under anisotropic blow-up?
7. Which claims are metric, smooth, symplectic, Lie-theoretic, or measure-theoretic?
8. Where does an argument use an unproved regularity or Sard-type assertion for the endpoint map?

## Initial sources

- Constantin Carathéodory, “Untersuchungen über die Grundlagen der Thermodynamik,” *Mathematische Annalen* 67 (1909), 355–386. [English translation by D. H. Delphenich](https://neo-classical-physics.info/uploads/3/0/6/5/3065888/caratheodory_-_thermodynamics.pdf).
- Richard Montgomery, *A Tour of Subriemannian Geometries, Their Geodesics and Applications*, AMS, 2002. [AMS book page](https://www.ams.org/books/surv/091/).
- Richard Montgomery, [“A survey of singular curves in sub-Riemannian geometry”](https://peopleweb.prd.web.aws.ucsc.edu/~rmont/papers/surveySR.pdf).
- Enrico Le Donne, [*Metric Lie Groups: Carnot–Carathéodory Spaces from the Homogeneous Viewpoint*](https://arxiv.org/abs/2410.07291), arXiv:2410.07291.
- Enrico Le Donne, [2023 lecture notes](https://cvgmt.sns.it/media/doc/paper/5339/sub-Riem_notes%202023-5%20submitted_for_proposal.pdf).

The bibliography and acknowledgments are collected in [`05-bibliography-and-acknowledgments.md`](05-bibliography-and-acknowledgments.md).
