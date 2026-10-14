# Carathéodory: inaccessibility, Pfaffian forms, and integrability

## Primary source

Constantin Carathéodory, “Untersuchungen über die Grundlagen der Thermodynamik,” *Mathematische Annalen* **67** (1909), 355–386, DOI [10.1007/BF01450409](https://doi.org/10.1007/BF01450409).

The working text for these notes is D. H. Delphenich’s [English translation](https://neo-classical-physics.info/uploads/3/0/6/5/3065888/caratheodory_-_thermodynamics.pdf). Terminology and equation numbering should be checked against the German original before making historical claims that depend on exact wording.

## What problem Carathéodory is solving

The paper is not a treatise on sub-Riemannian metric geometry. Its aim is to reconstruct equilibrium thermodynamics from experimentally interpretable axioms without taking heat, temperature, or entropy as primitive quantities.

The mathematical structure is nevertheless directly relevant. A thermodynamic system has a finite-dimensional state space with coordinates

$$
(x_0,x_1,\ldots,x_n).
$$

Certain changes of state are declared **adiabatic**. For a simple system, quasistatic work is represented by a Pfaffian one-form. The admissible infinitesimal changes satisfy a Pfaffian equation, and Carathéodory asks which states can be connected by curves tangent to that constraint.

This is a reachability problem for a distribution. The modern translation is useful, but it must not be mistaken for Carathéodory’s own vocabulary or full physical setup.

## Sections 1–3: state space and the two axioms

### State coordinates

Carathéodory represents equilibrium states as points in a region of an $(n+1)$-dimensional coordinate space. Changes of state are described by their endpoints, external work, and whether they are adiabatic.

This geometric move matters. Thermodynamics is no longer organized around a privileged cycle in a two-dimensional diagram. It becomes a local problem on a state manifold of arbitrary finite dimension.

### Axiom I: internal energy

For an adiabatic change of state, the change in internal energy and the external work satisfy an energy-balance relation. In the translation’s sign convention,

$$
\varepsilon_{\mathrm{final}}-\varepsilon_{\mathrm{initial}}+A=0.
$$

The point for later geometry is that internal energy is a state function, while work depends on the path.

### Axiom II: nearby adiabatic inaccessibility

The second axiom says, roughly, that in every neighborhood of every state, some state cannot be approximated arbitrarily closely by adiabatic changes beginning at the original state.

This is much stronger than merely saying that some distant states are unreachable. The obstruction occurs in every neighborhood, so it constrains the local differential geometry of the admissible directions.

A first warning: later expositions differ over the exact physical interpretation, reversibility assumptions, and the route from local to global entropy. The clean mathematical core used here is the local accessibility statement and its Pfaffian consequence.

## Section 4: the Pfaffian lemma

Carathéodory considers a Pfaffian equation of the form

$$
\omega
=dx_0+X_1(x)\,dx_1+\cdots+X_n(x)\,dx_n
=0.
$$

A curve $\gamma$ is admissible when

$$
\omega_{\gamma(t)}(\dot\gamma(t))=0.
$$

Equivalently, admissible velocities lie in the hyperplane distribution

$$
\Delta=\ker\omega\subset TM.
$$

The lemma states that if every neighborhood of every point contains a point not reachable by an admissible curve, then locally $\omega$ has a nonvanishing integrating factor. Thus there are functions $\mu$ and $F$ with

$$
\mu\omega=dF.
$$

The admissible curves therefore lie in level hypersurfaces

$$
F=\text{constant}.
$$

The inaccessible transverse direction has become a first integral.

### Modern Frobenius compression

For a nonvanishing one-form defining a codimension-one distribution, local integrability is equivalent to

$$
\omega\wedge d\omega=0.
$$

When $\mu\omega=dF$, this condition follows immediately. Conversely, under the usual smoothness hypotheses, Frobenius gives local leaves and an integrating factor.

This modern statement is cleaner than Carathéodory’s proof but should be presented as a later reformulation, not retroactively inserted into the 1909 text.

## Sections 5–8: integrating factor, temperature, and entropy

For a simple thermodynamic system, the relevant Pfaffian form can be normalized so that an integrating factor appears. In later thermodynamic notation one writes the reversible heat form as

$$
\delta Q_{\mathrm{rev}}=T\,dS,
$$

where $T$ is absolute temperature and $S$ is entropy. In Carathéodory’s construction these are derived objects, not initial state coordinates.

Geometrically:

- $S=\text{constant}$ gives the local adiabatic leaves;
- $T$ rescales the Pfaffian form into an exact differential;
- reversible adiabatic curves are tangent to $\ker dS$;
- states with different entropy values cannot be joined by such a curve inside the same local foliation chart.

This is a **holonomic** constraint after multiplication by the integrating factor.

## The central comparison with sub-Riemannian geometry

Let $\Delta=\ker\omega$.

### Carathéodory’s side

Nearby inaccessibility implies that $\Delta$ is locally tangent to hypersurfaces. The admissible directions fail to generate transverse motion. In codimension one, the distribution is integrable.

### Chow’s side

Sub-Riemannian geometry usually assumes that iterated brackets of horizontal vector fields span the full tangent bundle:

$$
\Delta+[\Delta,\Delta]+[\Delta,[\Delta,\Delta]]+\cdots=TM.
$$

Then horizontal paths connect nearby points. The missing instantaneous directions can be synthesized by commutator motions.

### Therefore

Carathéodory’s theorem and Chow’s theorem are not two statements of the same conclusion. They describe opposite outcomes for constrained paths:

| Differential behavior | Reachability behavior |
| --- | --- |
| $\Delta$ integrable | motion remains inside leaves; nearby transverse states are inaccessible |
| $\Delta$ bracket-generating | horizontal curves reach every nearby point |

The historical bridge is real: both study accessibility under differential constraints, and Chow explicitly developed a line of thought connected to Carathéodory. But the modern Carnot–Carathéodory metric lives primarily on the bracket-generating side.

## A two-dimensional caution

For a one-form on a two-dimensional manifold, $\omega\wedge d\omega$ is automatically a three-form and hence vanishes. A one-dimensional distribution is locally integrable. The genuinely nonholonomic codimension-one contrast first appears in dimension three, where a contact form can satisfy

$$
\omega\wedge d\omega\neq 0.
$$

This is one reason the three-dimensional Heisenberg group is the first useful model for comparison.

## What not to claim

1. **Do not say Carathéodory invented sub-Riemannian geometry.** He supplied an important accessibility and Pfaffian antecedent.
2. **Do not identify all adiabatic processes with modern horizontal curves without qualification.** The physical process class and its reversibility assumptions matter.
3. **Do not infer a metric from the Pfaffian equation alone.** A distribution specifies allowed directions; a sub-Riemannian structure also needs an inner product on those directions.
4. **Do not jump from a local integrating factor to a global entropy function without checking topology and thermodynamic hypotheses.**
5. **Do not treat “inaccessible” as symmetric by default.** Reachability relations in thermodynamics may encode an order, while the horizontal path relation for a smooth distribution is usually reversible under time reversal.

## Questions for a second pass

- Exactly which changes of state in the 1909 paper are reversible, quasistatic, or merely adiabatic?
- Which hypotheses are needed to pass from the local Pfaffian lemma to a globally defined entropy?
- How does Carathéodory’s proof compare with the modern Frobenius theorem and with Buchdahl’s later proof?
- Which part of the thermodynamic accessibility relation is genuinely represented by $\ker\omega$?
- How did Chow read Carathéodory, and which precise theorem did he generalize?
- How should the asymmetric thermodynamic preorder be compared with symmetric Carnot–Carathéodory distance?

## Related reading

- L. Pogliani and M. N. Berberan-Santos, [“Constantin Carathéodory and the axiomatic thermodynamics”](http://jupiter.chem.uoa.gr/thanost/papers/papers2/JMC_28(2000)313.pdf), *Journal of Mathematical Chemistry* 28 (2000), 313–324.
- J. Uffink, writings on formulations of the second law and the foundations of thermodynamics.
- H. A. Buchdahl, work on Carathéodory’s theorem and integrating factors.
- T. Frankel, *The Geometry of Physics*, for the differential-form and foliation viewpoint.
- E. H. Lieb and J. Yngvason, work on entropy from adiabatic accessibility, for a different axiomatic construction based on an order relation.

See also [`04-integrability-accessibility-bridge.md`](04-integrability-accessibility-bridge.md), where the comparison with contact geometry and Chow’s theorem is written out directly.
