# Historical fresh-checkout execution receipt

This record was produced from a clean checkout of published source
50eb3ac8b8fa54f20e8ba91b316d7698c98c404f on Linux x86-64, using the exact
dependency commits in `producer.receipt.tsv` and the compiler/runtime/artifact
hashes in `identities.sha256`.

The actual three-stage Flexible Pipes run passed. Kitchen compiled the real
Idriç/Chez geometry, mathematical tests, figure generator and AICI oracle.
All 39 mathematical checks passed. HTML and TSV regeneration matched the
committed figure byte-for-byte. AICI independently hashed and directly executed
the compiled geometry artifact, checked its mathematical outputs against
independent formulas and rejected invalid/mutated cases.

The source and artifact identities are historical evidence, not a receipt for
later revisions. The current exact-head workflow produces new receipts. Browser
checks were still pending when this host record was captured; the local browser
download failed and is not a browser PASS. The committed SVG was separately
rasterized and visually inspected as a static figure.

`fp.receipt.json` is the existing FP runner's external receipt format. The TSV
files are the separate producer and AICI receipts. Absolute paths identify
the actual host execution; they are observations rather than installation paths
for another machine. Do not copy them as a guessed workbench layout.
