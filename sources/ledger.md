# Source ledger

Checked on 2026-10-13/14. Page numbers below mean printed page numbers unless
explicitly labeled PDF pages. A bibliographic link is not evidence that the
text was read. The worked chapters distinguish our explicit calculations from
the general theorems that require these sources.

## Original sources

| Key | Source | Inspected location and use |
| --- | --- | --- |
| C-1909 | Carathéodory, *Untersuchungen über die Grundlagen der Thermodynamik*, Math. Ann. 67 (1909), 355–386, [DOI](https://doi.org/10.1007/BF01450409), [German scan](https://academicweb.nd.edu/~powers/ame.20231/caratheodory1909.pdf) | §3, pp.367–369: simple systems and quasistatic reversibility; §4, pp.369–370, (16)–(17): normalized Pfaffian equation, neighborhood inaccessibility, multiplier and local first integral. These locations were checked in the German scan against the translation. |

The bracket coefficients, endpoint equations, Hamiltonian component equations,
gauge signs, Martinet linearization, and flat-metric length comparisons in
`worked/` are explicitly derived in this repository and checked by executable
examples. They are not presented as newly discovered general theorems.

## Verified secondary sources and author expositions

| Key | Source/version | Precise location and evidence boundary |
| --- | --- | --- |
| C-TRANSLATION | Delphenich, [English translation of C-1909](https://neo-classical-physics.info/uploads/3/0/6/5/3065888/caratheodory_-_thermodynamics.pdf) | §3, translation pp.11–12; §4, pp.12–14, (16)–(17). Used as a translation, not a replacement for the original's section and equation identities. |
| M-DIDO | Montgomery, [preliminary *Dido Meets Heisenberg* book chapters](https://indico.ictp.it/event/a0151/material/3/7.pdf) | Chapter 1, §§1.1–1.4: coastline problem and area lift; §1.7, pp.28–30: geodesic equations; §1.8, pp.31–32: group law. Preliminary pagination is not silently transferred to the final AMS edition. |
| M-SURVEY | Montgomery, [*A survey of singular curves in sub-Riemannian geometry*](https://peopleweb.prd.web.aws.ucsc.edu/~rmont/papers/surveySR.pdf), author-hosted preprint | Preprint §§2.1–2.4, pp.3–7: bundle, Heisenberg, bracket flag, dimension; §3.2, pp.9–10: bundle geodesics; §3.4, pp.12–13, Theorem 5: Martinet short subarcs and rigidity. This exposition uses dz−y²dx; our factor ½ is stated explicitly. Its historical/open-problem statements are not assumed current. |
| L-2023 | Le Donne, [*Lecture notes on sub-Riemannian geometry*, May 22, 2023](https://cvgmt.sns.it/media/doc/paper/5339/sub-Riem_notes%202023-5%20submitted_for_proposal.pdf) | §§1.1–1.4: Dido, Heisenberg and geodesics; §1.4.2, Lemma 1.4.4 and Corollaries 1.4.8, 1.4.10: dilations, volume, Hausdorff dimension; §§3.1–3.2: bracket generation and accessibility. Version has 343 PDF pages. |
| ABB-2017 | Agrachev–Barilari–Boscain, [author-hosted November 17, 2017 draft](https://people.sissa.it/~agrachev/agrachev_files/2017-11-17-ABB.pdf) | §13.9, printed pp.388–391 (PDF pages 394–397): flat Martinet model; §13.9.1, Proposition 13.50: abnormal trajectories versus optimal ones; §13.9.2: normal Hamiltonian. The draft is 525 PDF pages; its numbering is not asserted to equal the 2019 final edition. |

The inspected ABB draft's frame display (13.66), printed p.388, actually prints
X₂=(0,0,1). Its subsequent control equations use ẏ=u₂, and its Hamiltonian uses
h₂=pᵧ. Thus that display has a typographical error, confirmed in the page image;
it is not merely an OCR problem. Our B=∂ᵧ follows those equations and is checked
directly against ω. Using ∂𝓏 would violate ω(B)=0.

## Unverified leads

| Lead | What was verified | What remains unverified |
| --- | --- | --- |
| Montgomery, *A Tour of Subriemannian Geometries, Their Geodesics and Applications*, AMS 2002, [book](https://doi.org/10.1090/SURV/091) | Author/title and chapter organization; the separate preliminary sample was inspected. | Final-edition page correspondence and chapters absent from that sample. |
| Montgomery, *Abnormal Minimizers*, SIAM J. Control Optim. 32 (1994), 1605–1620, [DOI](https://doi.org/10.1137/S0363012993244945) | Bibliographic identity and the theorem's account in M-SURVEY. | Original article's complete assumptions and proof were not inspected here. |
| Le Donne, *Metric Lie Groups*, [arXiv:2410.07291](https://arxiv.org/abs/2410.07291) | Existing reading structure and bibliographic lead. | Full later-version reconciliation. L-2023 is the actual inspected edition for the worked claims. |
| ABB, final Cambridge 2019 edition, [author book page](https://www.math.unipd.it/~barilari/Notes.php) | Bibliographic identity and availability of author drafts. | Final-edition numbering and full text. No claim here relies on guessed final-page numbers. |

## Claim-to-calculation map

| Claim | Calculation | Executable check |
| --- | --- | --- |
| [X,Y]=∂𝓏; horizontality | worked/01-heisenberg.md | exact polynomial bracket, horizontal-segment constraint |
| Loop height is signed area | worked/01-heisenberg.md | regular polygons, both orientations; independent analytic polygon-area oracle |
| δλ weights (1,1,2) | worked/01-heisenberg.md | exact group law and pushforward values |
| ε=0 versus ε≠0 accessibility | worked/02-integrability.md | exact rational ranks including ε=10⁻¹² |
| Martinet flag (2,2,3) on y=0 | worked/03-martinet.md | symbolic next bracket, exact rank on/off surface |
| Abnormality does not imply minimality | worked/03-martinet.md | length-three backtracking curve versus length-one competitor |
| Closed holonomy gauge invariance | worked/04-connection-and-gauge.md | several sections, sizes and orientations; open-path negative control |
| Normal solver matches Hamiltonian equations | worked/01-heisenberg.md | full-state RK4 convergence and energy checks in producer and AICI |
