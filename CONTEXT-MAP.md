# CONTEXT-MAP — Cislunar Space Beginner's Guide

This file points at one `CONTEXT.md` per context. Read each one relevant to the topic.

## Contexts

| Context | Location | Description |
|---------|----------|-------------|
| Root | `CONTEXT.md` | Site-wide domain vocabulary, taxonomy, and bilingual conventions |
| Web | `web/CONTEXT.md` | VuePress configuration, theme, plugins, and build tooling |

## How to use

1. **For domain vocabulary and taxonomy concepts**: Read `CONTEXT.md` at the repo root.
2. **For VuePress configuration, theme, or build issues**: Read `web/CONTEXT.md`.
3. **For architecture decisions**: Check `docs/adr/` for system-wide decisions, and `web/docs/adr/` for context-specific decisions (if they exist).
4. **For content priorities, audience, and presentation decisions**: Read `docs/content-strategy.md`.

## File structure

```text
/
├── CONTEXT-MAP.md
├── CONTEXT.md                          ← site-wide domain vocabulary
├── docs/adr/                          ← system-wide decisions
│   ├── 0001-unified-taxonomy-module.md
│   └── ...
└── web/
    ├── CONTEXT.md                     ← VuePress configuration context
    └── docs/adr/                      ← context-specific decisions (if any)
```

## Notes

- The root `CONTEXT.md` is the authoritative source for domain vocabulary.
- The web context is primarily for build tooling and VuePress configuration.
- When working on content (markdown files, glossary, space news), refer to the root `CONTEXT.md`.
- When working on build tools, theme, or plugins, refer to `web/CONTEXT.md`.
