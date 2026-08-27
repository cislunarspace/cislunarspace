[简体中文](glossary-rescan-2026-08-20.md) | English

# Glossary cleanup closing rescan report

- **Date:** 2026-08-20
- **Data:** full rescan of surviving zh-side glossary entries (714 md files); grading details in [glossary-rescan-2026-08-20.json](glossary-rescan-2026-08-20.json)
- **Background:** the decision record requires a fresh scan of surviving entries plus a spot-check of 10–20 merge results, confirming main entries carry no template shells.

## 1. Grading results

Depth signals follow option C's criteria: formulas (`$$`/`\begin`), non-template section structure, length >1500 characters, ≥3 real references — 1 point each.

| Grade | Count | Notes |
|---|---|---|
| deep=2 | 77 | formulas or extra-long; the backbone of main entries |
| deep=1 | 42 | single depth signal |
| deep=0 | 595 | no formulas, template sections, short, no references |

Category distribution: dynamics 358, orbits 143, fundamentals 86, navigation 65, observation 24, programs 18, communication 10, other 10.

## 2. Spot check (16 entries)

- **Deep-grade samples** (adams-cowell-integrator, bang-bang-control, battin-giorgi-method, bcr4bp, etc.): thousands of characters, formula derivations and real application context. bcr4bp is already a main entry rewritten in the 08-09 merge (covering the BCP/BCR4BP/FER4BP lineage); merge quality good.
- **Shallow-grade samples** (dld, collision-belt, control-curve-ui, nsga-ii, etc.): ~380–730 characters, bodies mostly definition sentences plus generic filler; frontmatter still bears the 2026-07-31 batch-generation dates — **template shells remain in the library**.

## 3. Conclusions

1. Main entries from the 08-09 merges (orbits 143, part of deep-grade dynamics) meet quality standards; no template shells among them.
2. **The 595 surviving deep=0 entries are batch-generated short-definition stubs**, untouched by the 08-09 merge and absent from d324ecc6's deletion list (built on an older pre-merge scan). If option C is applied strictly (core categories keep medium-or-better), one more round of reduction is available here.
3. The AI corpus pipeline is unaffected: this report is bookkeeping only; no entries were deleted. Whether to cut the 595 shallow entries further is the site owner's call (deleting shrinks coverage but tightens the dictionary; keeping gives AI one-sentence definitions broader coverage).
