[简体中文](glossary-cleanup-report.md) | English

# Glossary cleanup scan report

- **Date:** 2026-08-20
- **Data:** full scan via content module `list('glossary')` (1538 zh-side entries); grading details in [glossary-cleanup-graded.json](glossary-cleanup-graded.json)
- **Background:** [content strategy §5](../content-strategy.md): delete short & low-value entries; survivors serve as both AI corpus and dictionary.

## 1. What the library is made of (statistical evidence)

- Body lengths are strikingly uniform: non-whitespace character counts P10–P90 = 520–788, median 646 — a homogeneous distribution from batch generation, with no natural "short entry" cutoff.
- **97.7% (1502/1538) share one four-section template** (definition | application value | related concepts | references).
- **97.1% (1494) have definition sections identical word-for-word to their frontmatter description** — a batch-generation fingerprint.
- Category distribution: dynamics 816, orbits 377, fundamentals 218, navigation 65, observation 24, programs 18, communication 10, other 10.

Conclusion: the cleanup criterion is not "short" — it's **depth signals** (formulas, real reference volume, structure departing from the template, unusual length).

## 2. Grading rules & counts

| Grade | Rule | Count | Category breakdown |
|---|---|---|---|
| Pathological | filename >80 chars (whole-sentence definitions used as slugs — generation defects) | 8 | dynamics 4, orbits 2, fundamentals 1, other 1 |
| Deep | deep≥3 (combined signals: formulas / non-template structure / extra-long / many references) | 49 | dynamics 28, orbits 14, fundamentals 3, navigation 2, other 2 |
| Medium | deep==2 | 93 | dynamics 48, orbits 21, fundamentals 14, navigation 8, observation 1, programs 1 |
| Light | deep==1 (template + ordinary length) | 1333 | dynamics 714, orbits 332, fundamentals 187, navigation 52, observation 22, programs 17, communication 6, other 3 |
| Pure template | deep==0 | 55 | dynamics 22, fundamentals 13, orbits 8, communication 4, other 4, navigation 3, observation 1 |

The deep grade is where the library's value lives: cr3bp (4540 chars), nrho, poincare-map, differential-correction — core concepts of orbital dynamics with formulas and real references, most with independent section structure.

## 3. Proposed cleanup options (magnitude undecided)

- **Must delete**: pathological 8 + pure-template 55 — uncontroversial.
- **Must keep**: deep grade, 49 entries.
- **The magnitude decision lies in the middle 1426** (medium 93 + light 1333):
  - **Option A (dictionary-first)**: keep only deep + medium (~142), delete all light. A compact, high-quality dictionary page; AI corpus loses its "one-sentence definition" coverage.
  - **Option B (corpus-first)**: keep all middle grades (~1475 total), delete only pathological + pure template. Maximum coverage; low information density on the dictionary page.
  - **Option C (category shrink)**: core categories (dynamics/orbits/fundamentals) keep medium-or-better; edge categories (navigation/observation/programs/communication/other, 127 total) keep only deep.

## 4. Magnitude decision (confirmed: Option C)

On 2026-08-20 the site owner confirmed **Option C (category shrink)**: core categories (dynamics / orbits / fundamentals) keep medium and above; edge categories keep only deep; pathological and pure-template all deleted.

- **Keep 132**: dynamics 76, orbits 35, fundamentals 17, navigation 2, other 2
- **Delete 1406** (zh; 1403 have English counterparts — 2809 files actually removed)
- Execution list in [glossary-cleanup-decision.json](glossary-cleanup-decision.json)

## 5. Execution

Batch deletion waits for ADR-0003 follow-up 3's `content.delete` (recycle bin, README index-line cleanup, automatic AI-index refresh); then execute per the decision list — no bare scripts.
