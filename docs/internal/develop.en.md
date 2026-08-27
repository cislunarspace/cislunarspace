[简体中文](develop.md) | English

# Development Guide

How the site's code and content are organized, and how to run it locally.

## Repository layout

```text
/
├── README.md               ← project introduction
├── CONTEXT.md              ← site-wide domain vocabulary & bilingual conventions
├── CONTEXT-MAP.md          ← index of per-context CONTEXT files
├── AGENTS.md               ← AI collaboration guidelines
├── docs/
│   ├── adr/                ← architecture decision records
│   ├── agents/             ← how agents use domain docs
│   ├── audits/             ← content audits & research notes
│   ├── internal/           ← internal conventions
│   └── research/           ← pre-merge academic research notes
├── web/                    ← VuePress 2 site (zh at / , en at /en/)
│   ├── .vuepress/          ← config, theme customization, generators & plugins
│   ├── glossary/           ← Chinese glossary entries
│   └── en/                 ← English mirror content
└── admin/                  ← local content manager (Express + Vue 3 GUI)
```

## Local development

```bash
cd web
npm install
npm run dev        # start the dev server
npm run build      # generate sidebar & build for production
npm run test       # run Vitest tests
npm run check      # bilingual-mirror / zh-en / link consistency checks
```

Content manager (optional):

```bash
cd admin
npm install
npm start          # start the local GUI for glossary & section pages
```
