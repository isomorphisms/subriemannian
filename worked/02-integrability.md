# Turning on the missing direction

Start with the planes dz=0. Every allowed curve stays at its initial height.
Now introduce a real parameter ε and use

αε = dz − ε(x dy−y dx)/2,
Xε = ∂ₓ−εy∂𝓏/2,   Yε = ∂ᵧ+εx∂𝓏/2.

These planes approach the horizontal planes smoothly as ε→0, but their
reachability changes immediately when ε becomes nonzero. This is a family of
distributions with Xε,Yε orthonormal, not just a family of renderings.

## Flag and differential form

[Xε,Yε] = ε∂𝓏. All further brackets with ∂𝓏 vanish. Therefore:

| Parameter | First three flag ranks | Allowed endpoints |
| --- | --- | --- |
| ε=0 | (2,2,2) | the initial plane z=z₀ |
| ε≠0 | (2,3,3) | all of ℝ³ |

The ranks here are computed over exact rational values of ε and the coordinates.
A very small nonzero rational is still nonzero. A numerical rank tolerance
would misclassify this family near ε=0, so the rank calculation uses exact
fraction comparisons.

dαε = −ε dx∧dy, and αε∧dαε = −ε dx∧dy∧dz. When ε=0, the distribution
is involutive and the height is a first integral. When ε≠0, the wedge product
never vanishes, so it is contact everywhere. The flag is defined through smooth
vector fields before evaluating at a point. Taking brackets of isolated point
vectors would discard the derivative information that creates accessibility.

## An actual route to any endpoint

The four constant-control sides of a planar square of side length s produce
vertical displacement εs². Reverse orientation to reverse the displacement.
Thus, for ε≠0, a vertical displacement h can be achieved by a square of side
√(|h/ε|) with the appropriate orientation. A straight planar segment from the
origin to (a,b) adds no height, so a vertical loop followed by that segment
reaches (a,b,h). Starting elsewhere uses the corresponding translated endpoint
formula in [the Heisenberg chapter](01-heisenberg.md).

The optimal purely vertical distance is √(4π|h/ε|): the same isoperimetric
argument applies because Δz=ε×signed_area. It diverges for fixed h≠0 as ε→0.
At ε=0 the distance is infinite. Hence smooth convergence of plane fields does
not imply ordinary convergence of all their finite distance values.

## Three different theorems

Frobenius starts with an involutive, smooth, constant-rank distribution and
produces local integral leaves. For a nonvanishing one-form in this corank-one
setting, its condition is α∧dα=0. It does not assert accessibility between
different leaves.

Chow–Rashevskii starts with a smooth bracket-generating distribution at every
point of a connected manifold and gives horizontal connection between points.
Its metric version gives the manifold topology to the resulting CC distance
under the usual smooth sub-Riemannian hypotheses [L-2023 §§3.1–3.2]. The theorem
does not infer bracket generation merely from failure of Frobenius at one point.

Carathéodory's original §4 considers a normalized Pfaffian equation with finite,
continuous, differentiable coefficients. Its hypothesis requires inaccessible
points in every neighborhood of each point. It concludes that locally a
multiplier makes the form an exact differential [C-1909 §4, pp.369–370,
equations (16)–(17)]. For our ε=0 example, the multiplier is already one and the
first integral is z. For ε≠0, the inaccessibility hypothesis fails.

This is a reachability comparison, not an assertion that the three theorems
have the same hypotheses. A thermodynamic process class also contains physical
assumptions. Carathéodory's §3 establishes reversibility of quasistatic adiabatic
changes for his simple systems; it does not identify all irreversible adiabatic
processes with reversible horizontal curves [C-1909 pp.367–369; §9].

## A caution supplied by the next example

The Martinet form has α∧dα=0 on an entire surface, yet the distribution is
bracket-generating there at the next bracket depth. Vanishing at a point or on
a surface is weaker than Frobenius's vanishing throughout an open region. The
parameter family above is special because ε is constant in space. It should
not be promoted to a general classification of all nonintegrable distributions.
