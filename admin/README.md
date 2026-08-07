# 地月空间内容管理器（本地 GUI）

一个**纯本地**运行的网页内容管理器，用于管理本仓库 `web/` 下的三块内容：
Space News（航天动态）、Glossary（术语词典）、知识库章节页面。

技术栈：后端 Express（`server.js` + `lib/`），前端 Vue 3 + Naive UI + Vite（`web/src/`，构建产物在 `web/dist/`）。前端支持深浅双主题，跟随系统默认，可在页面头部切换。

- 只跑在 `localhost`，不部署线上。
- **不做任何 git 操作**（`add` / `commit` / `push` 都不做），git 交给你手动。
- 删除不直接 `rm`，而是移动到回收站 `admin/trash/<时间戳>/`，可恢复。
- 所有增删改都会追加记录到 `admin/logs/manager.log`。

---

## 启动方式

```bash
cd admin
npm install          # 首次
node server.js
```

启动后浏览器访问 **http://localhost:8765**。

- 端口可用环境变量覆盖：`PORT=9000 node server.js`
- 首次启动如果 `admin/web/dist/` 不存在，会自动用 Vite 构建前端（需十几秒）。
  之后如果改了 `admin/web/src/` 下的前端代码，手动重新构建：
  ```bash
  cd admin && npm run build
  ```

---

## 功能

### 1. 内容浏览（三个 tab）

- **Space News** / **Glossary** / **知识库章节**
- 列出：路径、标题（frontmatter `title`）、日期、分类、翻译状态（中英镜像是否齐全）、
  草稿 / YAML 错误状态
- **分类筛选**：顶部下拉按分类过滤（Space News 按 `category` 标签、Glossary 按目录、
  知识库按章节），每项带条目数
- 支持按标题、路径、分类关键字过滤
- **列排序与筛选**：标题/日期可排序，分类/翻译/状态可按值筛选（列表头操作）
- **多选与批量删除**：表格首列勾选多条后，可一键批量删除（同样走删除预览 + 回收站流程）
- **拖动修改分类**（Space News / Glossary）：拖动表格行（拖动已选中的行则拖动整个选中集）
  时表格上方浮现分类放置条，拖到目标分类即可批量改分类——
  Space News 改 frontmatter `category` 标签（可选「替换」或「追加」）；
  Glossary 移动条目文件到目标目录（中英镜像一起），`glossary/README.md` 索引同步更新
- **图片预览**：条目若有 `image` frontmatter（news 配图），列表内直接显示缩略图，点击放大
- **整站预览**：点「预览」在弹窗中以 iframe 展示该页在最终网站（VuePress 站点）中的真实效果

### 整站效果预览

预览依赖站点的 VuePress dev server（`web/` 下 `npm run dev`，默认 8080 端口）：

- 预览弹窗会检测 dev server 是否在跑；未运行时点「启动站点预览服务」由管理器代为启动
  （首次启动需几十秒，日志在 `admin/logs/site-preview.log`），admin 退出时 dev server 随之结束
- 可用环境变量 `SITE_PREVIEW_URL` 指向自己另外启动的站点实例
- 编辑页也有「预览」按钮；预览展示的是**已保存**的内容（dev server 热更新，保存后刷新即可）

### AI 润色

- 头部 ✨ 按钮打开「AI 设置」：选择接口协议（**OpenAI 兼容** / **Anthropic**）、
  填 Base URL、API key、model。配置保存在服务端 `admin/ai-config.json`（已 gitignore），
  AI 请求由本地后端代理，key 不经过浏览器
- 编辑页每个内容输入框（frontmatter 字段、正文 markdown、原始 YAML）标签旁有「✨ AI」按钮：
  **先选中要修改的文字**再点按钮，与 AI 多轮对话，用「替换选区 / 替换整个字段」把结果写回
- 未选中文字时作用于整个字段

### 2. 分类管理（Space News 标签 / Glossary 目录）

顶部「分类管理」按钮打开管理弹窗：

- **添加分类**：
  - Space News：在 `web/.vuepress/taxonomy/data.ts` 注册 news-category 节点（含配色），
    站点侧边栏/分类页即可显示；不修改任何文章
  - Glossary：创建 `web/glossary/<name>/` 与 `web/en/glossary/<name>/` 目录并注册
    taxonomy 节点；选择父分类则创建**子分类**（`web/glossary/<parent>/<name>/`，
    只支持一层；词条也可直接放在分类根目录，表示未细分）
- **删除分类**：
  - 默认「仅删分类，保留条目」
    - Space News：从所有文章 frontmatter 移除该 `category` 标签（文章保留）
    - Glossary：把该目录下所有条目移到选定的目标分类
  - 可选「连同条目一起删除」
    - Space News：删除带该标签的全部文章（中英镜像，进回收站）
    - Glossary：删除该目录下全部条目（中英镜像，进回收站），目录一并删除
  - 所有操作记日志，gen-sidebar 自动重跑

### 2. 编辑器

- 点击“编辑”进入，**中英镜像页并排**（同 slug 的 zh / en 文件）
- 常用字段表单：title、description、keywords、author、date、lastUpdated、
  category、draft、permalink、image、layout
- 高级：可展开“原始 YAML frontmatter”直接编辑完整块
- 正文 markdown 直接用 textarea 编辑
- 保存前可“校验 YAML”，校验通过才允许保存

### 3. 删除流程

1. 点击“删除”
2. 弹出确认框，**预览删除范围**：
   - 同 slug 的中英 `.md` 文件
   - 该文章正文引用的 `./figures/...` 图片
   - README 索引中引用该条目的行（新闻的月份 README、glossary 主 README）
   - 其它页面的引用（仅提示，不自动改动）
3. 确认后执行：
   - 文件移动到 `admin/trash/<时间戳>/`（保留原相对路径）
   - 自动更新 README 索引（移除引用行，刷新 `lastUpdated`）
   - 在 `web/` 目录重跑 `npm run gen-sidebar` 重新生成站点 JSON
4. 全部写入 `admin/logs/manager.log`

### 4. YAML 校验

- 编辑器里即时校验；后端 `POST /api/validate` 支持校验一段 frontmatter
  或直接校验某个文件

### 5. 回收站

- “回收站”tab 列出所有删除批次与文件
- 点“恢复”把文件移回 `web/` 原位置（非破坏性复制后删除回收站副本）

---

## 回收站恢复方式

**界面恢复**：打开“回收站”tab，找到对应批次，点文件旁的“恢复”。

**手动恢复**：被删文件位于 `admin/trash/<时间戳>/<原相对路径>`，
把它移回 `web/` 下的原相对位置即可。例如：

```bash
# 把 2026 年 1 月某篇文章恢复
mv admin/trash/2026-08-05T12-00-00-000Z/space-news/2026/01/xxx.md \
   web/space-news/2026/01/xxx.md
```

注意：删除时更新了月份 README 索引、重跑了 `gen-sidebar`；手动恢复后如
需要，应自行补回 README 行并重跑 `npm run gen-sidebar`。

---

## 后端 API

| 方法 | 路径 | 说明 |
|------|------|------|
| GET  | `/api/contents?type=news\|glossary\|kb&q=&cat=` | 列出内容（按镜像分组，支持关键字与分类过滤） |
| GET  | `/api/categories?type=` | 列出某类内容的分类及条目数 |
| POST | `/api/categories/add` | 添加分类（news 注册 taxonomy 节点 / glossary 建目录并注册节点，glossary 支持 `parent` 建一级子分类、`labelZh` 设中文名） |
| POST | `/api/categories/delete` | 删除分类（保条目或连删，glossary 可指定目标分类） |
| POST | `/api/categories/assign` | 批量修改分类（news 改 category 标签，replace/append；glossary 移动条目目录并更新 README 索引） |
| GET  | `/api/content?path=` | 读取单个 md（含中英镜像） |
| GET  | `/api/image?path=` | 读取图片/附件（供预览） |
| POST | `/api/content` | 保存一个或多个 md（frontmatter + 正文） |
| POST | `/api/validate` | 校验 frontmatter（`frontmatterRaw` 或 `path`） |
| POST | `/api/delete/preview` | 预览删除范围 |
| POST | `/api/delete/execute` | 执行删除（移回收站 + 更新 README + gen-sidebar） |
| GET  | `/api/trash` | 列出回收站 |
| POST | `/api/trash/restore` | 恢复回收站文件 |

---

## 文件系统安全

- 后端所有路径都做**白名单校验**（`admin/lib/paths.js`）：
  - 只允许读写仓库 `web/` 内的 `.md` 文件，以及 `figures/` 目录下的图片
  - 拒绝绝对路径、`..` 穿越、越界访问
- 编辑器只允许编辑 `.md` 文件
- 删除只接受 `.md` 路径，自动带出关联图片与 README 引用

---

## 操作日志

所有增删改（`SAVE` / `DELETE` / `RESTORE`）追加到：

```
admin/logs/manager.log
```

每行格式：`[ISO 时间] 操作 :: 路径1 | 路径2 | ...`

---

## 目录结构

```
admin/
├── README.md          本说明
├── package.json       独立依赖（express / yaml / vite / vue）
├── server.js          Express 后端入口
├── lib/
│   ├── paths.js       路径白名单与安全校验
│   ├── log.js         操作日志
│   ├── frontmatter.js frontmatter 读写
│   ├── validate.js    YAML 校验
│   ├── scan.js        内容扫描与镜像分组
│   ├── categories.js  分类管理（news 标签 / glossary 目录）
│   └── delete.js      删除预览 / 执行 / 回收站
├── trash/             回收站（删除的文件按时间戳存放）
├── logs/              操作日志
└── web/               Vue 3 + Vite 前端
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── App.vue
        ├── api.js
        ├── style.css
        └── components/ (BrowseView / EditorView / TrashView)
```
