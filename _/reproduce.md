# Reproduce from a fresh checkout

The complete tested recipe is `.github/workflows/geometry.yml`: exact PR-head
checkout, immutable dependency checkouts, the pinned Idriç bootstrap, compiled
controller, Flexible Pipes/Kitchen build, independent AICI execution, figure
regeneration, and browser interaction checks. It has no path filter.

The mathematical build needs Git, the pinned Idriç source/host runtime, and the
existing Flexible Pipes runner's Python 3 interpreter. Python is FP's existing
orchestration implementation; the geometry, tests, generator, Kitchen producer,
reproduction controller and AICI oracle are `.idric` compiled through Chez.
No Python mathematical fallback is used.

Prepare the four dependencies at the exact commits in `ci/dependencies.tsv`.
Bootstrap the compiler with its existing `edric bootstrap` entrypoint. That is
the compiler's own host bootstrap procedure, not a C application build path.
The consumer explicitly selects `--cg chez`. The compiled `.so` programs require
the corresponding Chez runtime and `libidris2_support.so`; they are not claimed
to be standalone ELF programs from the separate direct-x86 backend.

Compile `Reproduce.idric` with the pinned compiler. Set `CHEZ` to the verified
compiler checkout's `_/.tools/bin/scheme` path,
`IDRIS2_PREFIX` to its `_/bootstrap-build`, and `IDRIS2_PATH` to its
`_/libs/prelude/build/ttc` and `_/libs/base/build/ttc` joined by a colon.
The workflow gives the literal environment and compiler arguments. Both
`--source-dir` and output/build directories are absolute, so no initial working
directory is assumed.

Run the resulting `reproduce` executable with six absolute arguments:

| Argument | Meaning |
| --- | --- |
| PROJECT_ROOT | This fresh subriemannian checkout |
| IDRIC_ROOT | Pinned compiler checkout with completed bootstrap |
| FP_ROOT | Pinned Flexible Pipes checkout |
| KITCHEN_ROOT | Pinned Kitchen checkout |
| AICI_ROOT | Pinned ai-ci checkout |
| NEW_EVIDENCE_ROOT | New output directory; an existing directory is rejected |

The controller checks all dependency heads and rejects tracked local changes.
Kitchen independently checks the producer/acceptance source heads and requires
a new artifact directory. FP compiles the Kitchen driver, then Kitchen compiles
the actual geometry, tests, figure generator and AICI program. The third
required FP stage runs AICI against the producer's digest-bound compiled `.so`
directly. A generated launcher alone cannot establish artifact identity.

## Outputs

`artifacts/` contains the `subriemannian`, `mathematical-tests`, `figure` and
`aici-accept` launchers with their respective `_app` compiled programs/runtime
support. It also contains `producer.receipt.tsv`, `aici.receipt.tsv`,
`identities.sha256`, captured tests, and the regenerated HTML/TSV figure.
`fp/` retains the FP receipt plus every stage's stdout/stderr and exit status.

Useful producer commands are `models`, `algebra`, `loop RADIUS ORIENTATION COUNT
GAUGE`, `segment GAUGE`, and `geodesic PX PY PZ DURATION COUNT`. The geodesic
command returns every six-coordinate sample as well as its endpoint, error,
energy drift and length. Integration consumes positive time/count values,
rejects malformed and nonfinite inputs, and refuses arithmetic overflow.
Piecewise constant controls are the implemented horizontal-path input class;
arbitrary nonsampled controls and a general shortest-path boundary solver are
not implemented.

The browser check is additional renderer evidence. It uses the pinned
Playwright driver and its downloaded browser; browser failure cannot be
silently reclassified as a passing geometry build. Its screenshot is retained
alongside the generated figure in CI artifacts.
