[English](domain.md) | English

# Domain Docs

How engineering skills use this repo's domain documents when exploring the codebase.

## Read before exploring

- **`CONTEXT.md`** at the repo root, or
- **`CONTEXT-MAP.md`** at the repo root (if present), which points at each context's own `CONTEXT.md`. Read the ones relevant to your current topic.
- **`docs/adr/`**: read ADRs relevant to the area you're about to work on. In multi-context repos, also check `src/<context>/docs/adr/` for context-level decisions.

If these files don't exist, **continue silently**. Don't flag the absence, don't proactively suggest creating them. The `/domain-modeling` skill creates them on demand, once terminology or decisions actually solidify.

## File layout

Multi-context repos (`CONTEXT-MAP.md` at root):

```
/
├── CONTEXT-MAP.md
├── docs/adr/                          ← system-wide decisions
└── src/
    ├── ordering/
    │   ├── CONTEXT.md
    │   └── docs/adr/                  ← context-specific decisions
    └── billing/
        ├── CONTEXT.md
        └── docs/adr/
```

## Use the glossary's vocabulary

When your output mentions domain concepts (issue titles, refactoring proposals, assumptions, test names), use the terms defined in `CONTEXT.md`. Don't drift into synonyms the glossary explicitly avoids.

If a concept you need isn't in the glossary yet, that's a signal: either you're inventing language the project doesn't use (reconsider), or there's a real gap (note it for `/domain-modeling`).

## Flag ADR conflicts

If your output contradicts an existing ADR, say so explicitly instead of silently overriding:

> _Conflicts with ADR-0001 (Unified Taxonomy Module), but worth revisiting because..._
