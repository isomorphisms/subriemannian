# Horizontal loops

Open `heisenberg-loop.html` in a browser. It works offline and has loop-size,
orientation, and travel controls. `heisenberg-loop.tsv` contains the exact
binary64 samples emitted by the compiled Idriç loop program.

`loop-template.html` owns presentation only. `Figure.idric` obtains its path
from `Integration.loop_samples`, inserts those samples into the template, and
writes the table. Rendering applies the derived Carnot dilation and orientation
reflection to this path; it does not integrate another set of equations.

The developing PostScript-like language could consume the same sampled path or
the horizontal-lift construction. A useful semantic interface distinguishes a
closed base loop, its oriented area, its horizontal lift, and its weighted
dilation. A movement of the size control should preserve these relationships.
No claim is made that the proposed graphics-language interface is implemented.
