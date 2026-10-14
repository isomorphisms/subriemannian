# A planar loop that changes height

Walking east or north changes height according to where the walk starts.
Returning to the same planar point need not return to the same height. A unit
square followed counterclockwise from the origin lifts to the successive points
(0,0,0), (1,0,0), (1,1,½), (0,1,1), (0,0,1). Each side is horizontal.

We use exactly the convention in SUN SUBRIEMANNIAN-01:

X = ∂ₓ − (y/2)∂𝓏,   Y = ∂ᵧ + (x/2)∂𝓏,

α = dz + (y/2)dx − (x/2)dy.

The metric makes X and Y orthonormal. A distribution alone does not determine
length. The calculations below are our derivations; background locations are
[M-DIDO §§1.2–1.4, 1.7–1.8; L-2023 §§1.2–1.4](../sources/ledger.md).

## The bracket, calculated component by component

For vector fields, [X,Y]ʲ = Σᵢ(Xⁱ∂ᵢYʲ − Yⁱ∂ᵢXʲ). The x and y components
vanish because those coefficients are constant. The vertical component is
∂ₓ(x/2) − ∂ᵧ(−y/2) = ½ + ½ = 1. Consequently

[X,Y] = ∂𝓏,   [X,∂𝓏] = [Y,∂𝓏] = 0.

The bracket flag has ranks (2,3) at every point. The instantaneous plane still
has rank two; the third direction belongs to the bracket flag. Also
dα = −dx ∧ dy and α ∧ dα = −dx ∧ dy ∧ dz, so the distribution is contact.
The executable polynomial representation differentiates these coefficients
exactly, using integer fractions; it does not estimate derivatives numerically.

## Endpoints and signed area

A control pair (u,v) means γ̇ = uX + vY. Thus ẋ = u, ẏ = v and
ż = (xv − yu)/2. With initial point (x₀,y₀,z₀), define
U(t) = ∫₀ᵗu and V(t) = ∫₀ᵗv. Integration gives

$$
x(T)=x_0+U(T),\quad y(T)=y_0+V(T),\quad
z(T)=z_0+\frac12[x_0V(T)-y_0U(T)]
       +\frac12\int_0^T(Uv-Vu)\,dt.
$$

For a closed projection, the first bracketed term vanishes. Green's theorem
identifies Δz = ½∮(x dy − y dx) with oriented area. For self-intersections,
this is algebraic area counted with winding number, rather than the unsigned
area of the image. For an open projection, the integral is a line integral;
calling it enclosed area requires specifying a closing path.

A straight planar segment with displacements (Δx,Δy) has an exact lift:

(x,y,z) → (x+Δx, y+Δy, z+(xΔy−yΔx)/2).

The cross terms along the segment cancel. Summing this formula over a polygon
produces exactly its shoelace area, up to floating arithmetic when coordinates
are binary64. Orientation reversal changes the sign. A circle
x=r(cos θ−1), y=r sin θ has z=r²(θ−sin θ)/2; one circuit ends at height πr².
Our explorable figure draws the lift of a sampled polygon, and displays its
actual polygon area. It does not label a polygon's endpoint as exactly πr².

## The group law follows the same endpoint equation

Compose a displacement from the origin with a displacement starting at the
current point. The extra cross term gives

(x,y,z)·(a,b,c) = (x+a, y+b, z+c+(xb−ya)/2).

The identity is (0,0,0) and the inverse is (−x,−y,−z). Bilinearity of
(xb−ya)/2 proves associativity: both parenthesizations have the same pairwise
cross terms. Differentiating left translation along (t,0,0) and (0,t,0)
recovers X and Y, respectively. This verifies the sign of the law rather than
borrowing a possibly opposite convention from a source.

For scale λ>0, δλ(x,y,z) = (λx,λy,λ²z). Substitution proves
δλ(p·q)=δλ(p)·δλ(q). At the image point, its derivative sends X to λX,
Y to λY, and ∂𝓏 to λ²∂𝓏. Equivalently δλ*α = λ²α. The code verifies the
group identity and these weights separately.

## Length, Dido, and the vertical shortest path

Horizontal length is ∫√(u²+v²)dt, which is exactly the Euclidean length of the
projection. Carnot–Carathéodory distance is the infimum of those lengths over
horizontal paths joining the endpoints. The bracket condition ensures finite
distance here [L-2023 §3.2]. Dilation multiplies the length of every horizontal
path by λ; applying its inverse proves d(δλp,δλq)=λd(p,q).

To go from (0,0,0) to (0,0,height), solve the planar problem: among closed
curves with signed area height, find the shortest. The planar isoperimetric
inequality L²≥4π|height| gives the sharp distance

d((0,0,0),(0,0,height)) = √(4π|height|).

A once-traversed circle attains it. A twice-traversed circle can be a normal
extremal but cannot attain this bound for its endpoint. Montgomery's Dido
example begins with an arc whose endpoints lie on a coastline; doubling across
the line reduces that version to the closed isoperimetric problem. Fixing the
area-lift endpoint turns both variants into constrained shortest-path problems
[M-DIDO §§1.1–1.4]. Arbitrary circular arcs are candidates, not a declaration
that every duration remains globally shortest.

## Normal geodesics and the implemented solver

A covector records three momenta (pₓ,pᵧ,p𝓏). Its horizontal components are
hₓ=pₓ−yp𝓏/2 and hᵧ=pᵧ+xp𝓏/2. The normal Hamiltonian is
H=(hₓ²+hᵧ²)/2. Hamilton's equations give

ẋ=hₓ, ẏ=hᵧ, ż=(xhᵧ−yhₓ)/2,
ṗₓ=−p𝓏hᵧ/2, ṗᵧ=p𝓏hₓ/2, ṗ𝓏=0.

Put c=p𝓏. Then ḣₓ=−chᵧ and ḣᵧ=chₓ, so the horizontal velocity rotates
at constant rate c and has constant size. From the origin, with initial
horizontal velocity (a,b), direct integration gives, for c≠0,

$$
x(t)=\frac{a\sin(ct)+b(\cos(ct)-1)}{c},\qquad
y(t)=\frac{a(1-\cos(ct))+b\sin(ct)}{c},\qquad
z(t)=\frac{(a^2+b^2)(ct-\sin(ct))}{2c^2}.
$$

For c=0, the continuous limit is (at,bt,0). Length over time T is
T√(a²+b²). Left translation produces curves from other initial points; the
Hamiltonian solver itself accepts general initial cotangent states.
RK4 advances the full six-coordinate state, not a separately prescribed
circle. Tests compare its endpoint with the closed form for both signs of c,
halve the step size, and measure the maximum drift of H over the entire path.
RK4 is not an exactly energy-preserving method. Neither the solver nor its
tests identify a general cut locus or certify arbitrary endpoints as shortest.

## Why dimension four describes a three-dimensional space

The two horizontal directions have weight one and the vertical direction has
weight two. Thus the homogeneous dimension is 1+1+2=4. The dilation's ordinary
Jacobian is λ⁴, so a CC ball's Lebesgue volume scales as its radius to the
fourth power. In this equiregular Carnot group, this also gives Hausdorff
dimension four [L-2023 §1.4.2, Corollaries 1.4.8 and 1.4.10]. The underlying
manifold remains ℝ³. No extra coordinate has been added.
