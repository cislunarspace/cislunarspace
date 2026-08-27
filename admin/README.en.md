[简体中文](README.md) | English

# Cislunar Space Content Manager (local GUI)

A **purely local** web content manager for the two content areas under this repo's `web/`: the Glossary and knowledge-base section pages.

Stack: Express backend (`server.js` + `lib/`), Vue 3 + Naive UI + Vite frontend (`web/src/`, build output in `web/dist/`). The frontend supports light/dark themes, follows the system default, and can be switched in the page header.

- Runs on `localhost` only; never deployed.
- **Performs no git operations** (no `add` / `commit` / `push`) — git stays in your hands.
- Deletions don't `rm` directly; files move to a recycle bin at `web/.trash/<timestamp>/` (managed by the content module) and are recoverable.
- Every create/delete/update is appended to `admin/logs/manager.log`.

---

## Getting started

```bash
cd admin
npm install          # first time
npm start    # runs via tsx (can import the TS content module from web/)
```

Then open **http://localhost:8765** in your browser.

- Override the port via env var: `PORT=9000 npm start`
- On first start, if `admin/web/dist/` doesn't exist, the frontend is built automatically with Vite (takes ~10s).
  If you change frontend code under `admin/web/src/` later, rebuild manually:
  ```bash
  cd admin && npm run build
  ```

---

## Features

### 1. Content browsing (three tabs)

- **Glossary** / **Knowledge-base sections**
- Lists: path, title (frontmatter `title`), date, category, translation status (zh/en mirror completeness), draft / YAML error status
- **Category filter**: dropdown at the top filters by category (Glossary by directory, KB by section), each option shows its entry count
- Filter by title, path, or category keyword
- **Column sorting & filtering**: title/date sortable; category/translation/status filterable by value (via column header actions)
- **Multi-select & batch delete**: tick multiple rows in the first column, then delete them in one go (same delete-preview + recycle-bin flow)
- **Drag to recategorize** (Glossary): drag table rows (dragging selected rows drags the whole selection); a category drop bar appears above the table — drop onto the target category to batch-move: Glossary moves entry files to the target directory (zh/en mirrors together) and updates the `glossary/README.md` index
- **Image preview**: entries with an `image` frontmatter show thumbnails inline; click to enlarge
- **Full-site preview**: click "Preview" to open a modal iframe showing the page as rendered on the real site (the VuePress site)

### Full-site preview

Preview relies on the site's VuePress dev server (`npm run dev` under `web/`, port 8080 by default):

- The preview modal detects whether the dev server is running; if not, click "Start site preview service" and the manager starts it for you (first start takes tens of seconds; logs in `admin/logs/site-preview.log`). The dev server shuts down when admin exits.
- Use the `SITE_PREVIEW_URL` env var to point at a site instance you started yourself.
- The editor also has a "Preview" button; previews show **saved** content (dev server hot-reloads — refresh after saving).

### AI polish

- The ✨ button in the header opens "AI settings": choose protocol (**OpenAI-compatible** / **Anthropic**), fill Base URL, API key, model. Config is stored server-side in `admin/ai-config.json` (gitignored); AI requests are proxied by the local backend so the key never touches the browser.
- Each content input in the editor (frontmatter fields, body markdown, raw YAML) has an "✨ AI" button next to its label: **select the text you want changed**, then click, chat with the AI over multiple turns, and write results back via "Replace selection / Replace entire field".
- With no text selected, it applies to the whole field.

### 2. Category management (Glossary directories)

The "Category management" button in the header opens the manager modal:

- **Add category**:
  - Glossary: creates `web/glossary/<name>/` and `web/en/glossary/<name>/` directories and registers taxonomy nodes; choosing a parent creates a **subcategory** (`web/glossary/<parent>/<name>/`, one level only; entries may also sit directly in the category root, meaning uncategorized)
- **Delete category**:
  - Default "remove category only, keep entries": moves all entries under that directory into a chosen target category
  - Optional "delete entries too": deletes all entries under the directory (zh/en mirrors, into the recycle bin) and removes the directory
  - All operations are logged; gen-sidebar reruns automatically

### 2. Editor

- Click edit to enter — **zh/en mirror pages side by side** (zh / en files of the same slug)
- Common-fields form: title、description、keywords、author、date、lastUpdated、category、draft、permalink、image、layout
- Advanced: expandable raw YAML frontmatter for editing the whole block
- Body markdown edited directly in a textarea
- YAML validation before saving; saving allowed only after validation passes

### 3. Delete flow

1. Click delete.
2. A confirmation dialog appears with a **preview of the deletion scope**:
   - zh/en `.md` files of the same slug
   - `./figures/...` images referenced by the body
   - Lines in README indexes referencing this entry (glossary main README)
   - References on other pages (warning only, no automatic edits)
3. On confirm:
   - Files move to `web/.trash/<timestamp>/` (original relative paths preserved)
   - README indexes updated automatically (reference lines removed, `lastUpdated` refreshed)
   - `npm run gen-sidebar` reruns in `web/` to regenerate site JSON
4. Everything logged to `admin/logs/manager.log`.

### 4. YAML validation

- Real-time validation in the editor; backend `POST /api/validate` validates a frontmatter block or a file directly.

### 5. Recycle bin

- The Recycle-bin tab lists all deletion batches and their files.
- Restore moves files back to their original location under `web/` (non-destructive copy, then the bin copy is removed).

---

## Content operation architecture (ADR-0003 follow-up 3b)

- Data operations go through the `web/.vuepress/content` module: path conventions, bilingual pairing, deletion recovery (`web/.trash`), index refresh — truth lives in content; this service only adapts HTTP shapes (`lib/content-bridge.ts`).
- **Derived indexes refresh automatically after save** (gen runs in background, editor doesn't wait) — fixing stale list/sidebar data after saves.
- **Create content**: `POST /api/content/create` (content.create, auto-resolves path, creates monthly README index line); frontend creation UI comes later.
- List/read still use local scan (migration to content.list planned in a later batch).

## Recycle bin restore

**Via UI**: open the Recycle-bin tab, find the batch, click restore next to the file.

**Manually**: deleted files live at `web/.trash/<timestamp>/<original-relative-path>`; move them back to the original relative location under `web/`. For example:

```bash
# restore a glossary entry
mv admin/trash/2026-08-05T12-00-00-000Z/glossary/orbits/xxx.md \
   web/glossary/orbits/xxx.md
```

Note: deletion updated monthly README indexes and reran `gen-sidebar`; after manual restore, add back README lines if needed and rerun `npm run gen-sidebar`.

---

## Backend API

| Method | Path | Description |
|--------|------|-------------|
| GET  | `/api/contents?type=glossary\|kb&q=&cat=` | List content (grouped by mirror, keyword & category filters) |
| GET  | `/api/categories?type=` | List categories of a content kind with entry counts |
| POST | `/api/categories/add` | Add category (glossary creates directories and registers taxonomy nodes; `parent` creates one-level subcategories, `labelZh` sets the Chinese name) |
| POST | `/api/categories/delete` | Delete category (keep or delete entries; target category selectable) |
| POST | `/api/categories/assign` | Batch-recategorize (glossary moves entry directories and updates the README index) |
| GET  | `/api/content?path=` | Read a single md (with zh/en mirror) |
| GET  | `/api/image?path=` | Read images/attachments (for preview) |
| POST | `/api/content` | Save one or more md files (frontmatter + body) |
| POST | `/api/validate` | Validate frontmatter (`frontmatterRaw` or `path`) |
| POST | `/api/delete/preview` | Preview deletion scope |
| POST | `/api/delete/execute` | Execute deletion (to recycle bin + update README + gen-sidebar) |
| GET  | `/api/trash` | List recycle bin |
| POST | `/api/trash/restore` | Restore files from the bin |

---

## Filesystem safety

- All backend paths pass **whitelist validation** (`admin/lib/paths.js`):
  - Only `.md` files inside the repo's `web/`, plus images under `figures/` directories, are readable/writable
  - Absolute paths, `..` traversal, and out-of-bounds access are rejected
- The editor only edits `.md` files
- Deletion accepts `.md` paths only, automatically gathering associated images and README references

---

## Operation log

All create/delete/update operations (`SAVE` / `DELETE` / `RESTORE`) append to:

```
admin/logs/manager.log
```

Line format: `[ISO time] operation :: path1 | path2 | ...`

---

## Directory layout

```
admin/
├── README.md          this document
├── package.json       standalone deps (express / yaml / vite / vue)
├── server.js          Express backend entry
├── lib/
│   ├── paths.js       path whitelist & safety checks
│   ├── log.js         operation log
│   ├── frontmatter.js frontmatter read/write
│   ├── validate.js    YAML validation
│   ├── scan.js        content scanning & mirror grouping
│   ├── categories.js  category management (glossary directories)
│   └── delete.js      delete preview / execute / recycle bin
├── trash/             recycle bin (deleted files stored by timestamp)
├── logs/              operation logs
└── web/               Vue 3 + Vite frontend
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── App.vue
        ├── api.js
        ├── style.css
        └── components/ (BrowseView / EditorView / TrashView)
```
