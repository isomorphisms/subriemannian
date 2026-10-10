# The integrability/accessibility bridge

This note isolates the mathematical hinge joining Carathéodory’s Pfaffian argument to modern sub-Riemannian geometry.

## One local object

Let $M$ be a smooth manifold and let $\omega$ be a nonvanishing one-form. It defines a codimension-one distribution

$$
\Delta=\ker\omega\subset TM.
$$

A curve $\gamma$ is horizontal or admissible when

$$
\omega(\dot\gamma)=0.
$$

The same equation can be read as:

- a Pfaffian differential constraint;
- a control system with allowed velocities in $\Delta$;
- a nonholonomic mechanical constraint;
- a connection-like horizontal bundle;
- the tangent condition for a Carnot–Carathéodory path metric, once a norm is put on $\Delta$.

The distribution alone determines admissibility. A metric or norm on $\Delta$ is additional data used to measure length.

## Integrable side: Frobenius

For a codimension-one distribution, the Frobenius condition is

$$
\omega\wedge d\omega=0.
$$

Locally this is equivalent to the existence of a nonvanishing function $\mu$ and a function $F$ such that

$$
\mu\omega=dF.
$$

Then

$$
\Delta=\ker dF,
$$

so $\Delta$ is tangent to the hypersurfaces

$$
F=\text{constant}.
$$

Every horizontal curve remains inside one leaf. Points on different leaves are inaccessible from one another by horizontal curves.

This is the geometric conclusion produced by Carathéodory’s local inaccessibility hypothesis.

## Bracket-generating side: Chow–Rashevskii

For a general distribution, form the derived flag

$$
\Delta^1=\Delta,
\qquad
\Delta^{k+1}=\Delta^k+[\Delta,\Delta^k].
$$

If

$$
\Delta^s_p=T_pM
$$

for some $s$ at every point, then $\Delta$ is bracket-generating. Chow–Rashevskii’s theorem implies that points in the same connected component can be joined by horizontal curves.

The missing tangent directions are synthesized through commutators. The local model is the flow commutator

$$
\Phi^{-\varepsilon}_Y
\Phi^{-\varepsilon}_X
\Phi^{\varepsilon}_Y
\Phi^{\varepsilon}_X(p)
=
 p+\varepsilon^2[X,Y]_p+O(\varepsilon^3).
$$

No single allowed velocity points along $[X,Y]$, but a small horizontal loop produces displacement in that direction.

## In dimension three: the sharp codimension-one contrast

Let $M$ be three-dimensional and $\Delta=\ker\omega$ have rank two.

- If $\omega\wedge d\omega=0$, the plane field is integrable.
- If $\omega\wedge d\omega\neq0$, it is a contact structure.

A contact plane field is maximally nonintegrable, and

$$
\Delta+[\Delta,\Delta]=TM.
$$

Thus in this setting the Pfaffian expression itself cleanly separates local leafwise confinement from local horizontal accessibility.

## Two model forms

### Integrable model

Let

$$
\omega=dz.
$$

Then

$$
\Delta=\operatorname{span}\{\partial_x,\partial_y\}.
$$

Horizontal curves satisfy $\dot z=0$ and stay in planes $z=\text{constant}$. The missing direction cannot be recovered by brackets because

$$
[\partial_x,\partial_y]=0.
$$

### Heisenberg/contact model

Let

$$
\alpha
=dz-\frac12(x\,dy-y\,dx).
$$

Then

$$
d\alpha=-dx\wedge dy
$$

and

$$
\alpha\wedge d\alpha=-dz\wedge dx\wedge dy\neq0.
$$

A horizontal frame is

$$
X=\partial_x-\frac y2\partial_z,
\qquad
Y=\partial_y+\frac x2\partial_z,
$$

with

$$
[X,Y]=\partial_z.
$$

The vertical direction is absent from $\Delta$ but appears at bracket depth two. A horizontal loop in the $(x,y)$ plane produces vertical displacement equal to its signed area.

## Thermodynamic model

Suppose the reversible heat form has an integrating factor:

$$
\delta Q_{\mathrm{rev}}=T\,dS.
$$

The adiabatic condition is

$$
\delta Q_{\mathrm{rev}}=0,
$$

hence

$$
dS=0
$$

when $T\neq0$. The admissible tangent planes are

$$
\Delta=\ker dS,
$$

and reversible adiabatic curves lie in entropy level sets.

This resembles the integrable model $dz=0$, not the contact Heisenberg model.

The names “Carnot–Carathéodory” and “Carathéodory distance” therefore should not obscure a structural reversal:

- thermodynamic nearby inaccessibility leads to a foliation;
- sub-Riemannian bracket generation destroys the foliation and restores accessibility.

## A useful contrapositive in the three-dimensional case

Carathéodory’s Pfaffian lemma says that local nearby inaccessibility forces an integrating factor. In a three-dimensional rank-two setting, its contrapositive can be read heuristically as follows:

> If the Pfaffian plane field is genuinely nonintegrable at a point, there cannot be inaccessible points arbitrarily close for the reversible differential constraint alone.

A contact structure makes this precise through bracket generation and Chow’s theorem.

This is the shortest route from the thermodynamic theorem to the modern control-geometric picture.

## Reachability is not automatically a metric

A distribution gives a relation: which points can be connected by horizontal curves. To obtain a Carnot–Carathéodory metric one must also specify a norm on $\Delta$.

If the norm is $\lVert\cdot\rVert$, define

$$
L(\gamma)=\int\lVert\dot\gamma(t)\rVert\,dt
$$

and

$$
d_{CC}(p,q)=\inf_\gamma L(\gamma).
$$

Bracket generation makes $d_{CC}$ finite. It does not determine the norm, geodesics, or cut locus by itself.

This separates three layers:

1. **distribution:** allowed directions;
2. **Lie closure:** reachability and weighted infinitesimal structure;
3. **norm on the first layer:** length, distance, and optimization.

## Symmetry warning

For a smooth distribution with a symmetric norm, reversing a horizontal curve remains horizontal with the same length. Hence $d_{CC}$ is symmetric.

Thermodynamic adiabatic accessibility, especially when irreversible processes are included, can define a directed preorder rather than a symmetric relation. One should not identify the two without first restricting to the reversible differential system.

This distinction also explains why entropy can orient physical processes even though the local Pfaffian kernel itself is an unoriented hyperplane field.

## Higher-dimensional caution

For codimension one in dimensions greater than three, failure of Frobenius does not by itself say that the distribution is contact or bracket-generating in the strongest possible sense. One must inspect the rank of $d\omega|_\Delta$ and the full derived flag.

Likewise, for higher-codimension distributions no single form $\omega$ suffices. If

$$
\Delta=\bigcap_{a=1}^k\ker\omega^a,
$$

integrability and bracket generation are conditions on the whole differential ideal or derived flag.

## The four theorems to keep separate

| Theorem | Input | Output |
| --- | --- | --- |
| Frobenius | involutivity / differential-ideal condition | local integral leaves |
| Carathéodory’s Pfaffian lemma | nearby inaccessibility for a corank-one equation | local integrating factor and first integral |
| Chow–Rashevskii | bracket generation | horizontal accessibility |
| Mitchell tangent theorem | equiregular sub-Finsler structure | tangent metric is a Carnot group |

They form a coherent progression, but none is a synonym for another.

## Questions opened by the bridge

- Can Carathéodory’s original proof be rewritten as an early orbit theorem for a corank-one distribution?
- What precise statement of Chow’s theorem is historically derived from Carathéodory’s result?
- How should irreversible adiabatic accessibility be represented: cone field, semigroup control system, or order relation rather than a distribution?
- What geometric data distinguish a thermodynamic foliation from a contact or bracket-generating system under perturbation?
- Can one display the transition $dz-\varepsilon x\,dy=0$ as $\varepsilon$ moves from $0$ to nonzero, showing leaves collapse into nonholonomic accessibility?
- How does nilpotentization encode the first nonvanishing failure of integrability?
