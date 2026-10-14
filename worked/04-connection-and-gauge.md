# The Heisenberg planes are an actual connection

Take the trivial principal additive ℝ-bundle P=ℝ²×ℝ with projection
π(x,y,z)=(x,y). The right action is (x,y,z)·a=(x,y,z+a); its fundamental
vertical vector is ∂𝓏. Define the principal connection form

α = dz + A,   A = (y/2)dx − (x/2)dy.

It satisfies α(∂𝓏)=1 and is unchanged by vertical translation. These are the
reproduction and equivariance conditions for an additive abelian structure
group. Its kernel is exactly the requested span of X,Y. Thus this is a
principal-bundle connection, not a vocabulary analogy. Montgomery develops
this interpretation in [M-SURVEY §§2.1–2.2 and 3.2](../sources/ledger.md).

## Horizontal lift and curvature

Given an absolutely continuous base path (x(t),y(t)) and initial height z₀,
the unique horizontal lift has

z(t)=z₀−∫₀ᵗA(ẋ,ẏ)dt=z₀+½∫₀ᵗ(xẏ−yẋ)dt.

The Euclidean metric on the base pulls back to the horizontal metric making
X,Y orthonormal. The connection specifies the lift; the base metric specifies
its length. They are distinct pieces of data.

Because ℝ is abelian, the curvature is Ω=dα=π*F, where F=dA=−dx∧dy.
With our convention, Ω(X,Y)=−1 and α([X,Y])=1, consistently with
Ω(X,Y)=−α([X,Y]) for horizontal fields. A source that calls the curvature
the positive area form may use the opposite fiber or connection convention.
Changing that convention cannot change just one of these signs.

For a closed base loop, holonomy is the additive fiber translation

holonomy(loop) = −∮A = −∫F = signed_area(loop).

For the counterclockwise unit square it is +1. A loop may have nonzero
holonomy even though this bundle is trivial: bundle topology and curvature
are different questions. For self-intersections the integral uses winding
numbers; Stokes's ordinary embedded-region wording needs that qualification.

## Changing the local section

The initial section is s₀(x,y)=(x,y,0). Replace it by
sφ(x,y)=(x,y,φ(x,y)). Then its pulled-back potential is

Aφ = sφ*α = A+dφ.

The same point of P has new fiber coordinate zφ=z−φ. Therefore
dzφ+Aφ = dz−dφ+A+dφ = α. Along a lift,

Δzφ = −∫Aφ = Δz−φ(final)+φ(initial).

For a closed base loop, the φ terms cancel. For an open path they generally
do not; an open-path coordinate increment is not gauge invariant. The tests
include this noninvariant open-path result so that a gauge implementation
which simply ignores φ cannot pass merely by reproducing closed-loop values.

The implementation uses the explicit section
φ=strength×(x²+xy+2y), with
dφ=strength×[(2x+y)dx+(x+2)dy]. Its mixed second derivatives agree, so
d(A+dφ)=dA. Segment integration includes the endpoint difference of φ,
which is exact for this polynomial section; it is not an approximate derivative
sample passed off as a line integral. Closed-loop holonomy is tested for both
orientations, several sizes, and positive and negative section strengths.

## What remains invariant

The principal connection α and its horizontal subspaces describe the same
geometry in both sections. Curvature, closed-loop holonomy, the lifted path in
P, and horizontal length remain unchanged. The local potential A, local fiber
coordinate z, and open-path fiber increment change. The display's height uses
the declared initial section s₀; changing gauge changes coordinate labels,
not the underlying lifted path.

## Generalizations and limits

For a general principal Lie-group bundle, a connection must still reproduce
fundamental vertical vectors and be equivariant under the right action.
Curvature becomes dα+½[α,α]; local potentials transform as
A′=g⁻¹Ag+g⁻¹dg in the usual right-action convention. Holonomy solves a
group-valued transport equation with ordered products. A gauge change conjugates
holonomy at the base point; its conjugacy class, rather than an arbitrary
matrix representative, is invariant. The scalar area integral and simple
addition used here rely on the abelian ℝ group and this particular curvature.

An arbitrary sub-Riemannian distribution does not automatically come with a
bundle projection, free group action, equivariance, or a horizontal complement
to that action's vertical tangent spaces. Those extra conditions must be
checked before interpreting it as a principal connection. In our specific
parameter family they hold, with curvature −ε dx∧dy. They also hold for this
Martinet example on the same trivial ℝ-bundle, with potential −y²dx/2 and
curvature y dx∧dy. Zero curvature on y=0 does not mean zero curvature on an
open neighborhood; derivatives of curvature supply its depth-three bracket.

The induced metric must also be basic if it is to come from a metric on the
base. A general metric varying in the fiber need not have that property.
These examples illustrate the boundary concretely without asserting that all
sub-Riemannian geometry is gauge theory.
