# 地月空间内容管理器（本地 GUI）

一个纯本地运行的网页内容管理器，用于管理本仓库 `web/` 下的术语词典与知识库章节页面。

技术栈：后端 Express（`server.js` 与 `lib/`），前端 Vue 3 + Naive UI + Vite（`web/src/`，构建产物在 `web/dist/`）。前端支持深浅双主题，跟随系统默认，可在页面头部切换。

管理器的基本约束：

- 只监听 `localhost`，不部署线上。
- 不做任何 git 操作，提交与推送由使用者手动完成。
- 删除不直接执行 `rm`，而是移入回收站，可恢复。常规内容进入 `web/.trash/<时间戳>/`，分类连带删除进入 `admin/trash/<时间戳>/`，后者目前不在回收站 tab 中列出。
- 所有增删改追加记录到 `admin/logs/manager.log`。

现状说明：本管理器早于站点单语化。站点已改为中文单语（ADR-0006），代码与界面仍保留中英镜像的旧假设，例如分类拖动提示与新建分类说明中的 `web/en/` 路径。这些提示对当前内容没有实际意义，其余功能仍可在本地使用。

## 启动

```bash
cd admin
npm install
npm start
```

浏览器访问 `http://localhost:8765`。

- 端口可用环境变量覆盖：`PORT=9000 npm start`。
- 首次启动时如果 `admin/web/dist/` 不存在，会自动用 Vite 构建前端，需要十几秒。
- 修改 `admin/web/src/` 下的前端代码后，手动重新构建：

```bash
cd admin
npm run build
```

## 功能

### 内容浏览

内容浏览 tab 分 Glossary 与知识库章节两类，列出路径、标题（frontmatter `title`）、日期、分类、草稿状态与 YAML 错误状态。

- 分类筛选：顶部下拉按分类过滤。Glossary 按目录，知识库按章节，每项带条目数。
- 关键字过滤：支持按标题、路径与分类检索。
- 排序与筛选：标题与日期可排序，分类与状态可按值筛选。
- 多选与批量删除：勾选多条后执行批量删除，同样经过删除预览与回收站流程。
- 拖动修改分类：拖动表格行时，表格上方浮现分类放置条。拖到目标分类即可批量改分类，Glossary 条目文件移动到目标目录，分类索引页与首页分类板块计数同步更新。
- 图片预览：条目若有 `image` frontmatter，列表内显示缩略图，点击放大。
- 整站预览：点「预览」在弹窗中以 iframe 展示该页在 VuePress 站点中的效果。

### 编辑器

点击编辑进入单个页面文件。常用字段以表单编辑：`title`、`description`、`keywords`、`author`、`date`、`lastUpdated`、`category`、`draft`、`permalink`、`image`、`layout`。

- 高级选项可展开原始 YAML frontmatter，直接编辑完整块。
- 正文 markdown 直接用 textarea 编辑。
- 保存前校验 YAML，校验通过才允许保存。
- 编辑页提供「预览」按钮，展示已保存的内容。dev server 热更新，保存后刷新即可。

### 分类管理

顶部「分类管理」按钮打开管理弹窗，目前管理 Glossary 目录。

添加分类时创建 `web/glossary/<name>/` 目录并注册 taxonomy 节点。选择父分类则创建一级子分类 `web/glossary/<parent>/<name>/`，不支持更深层级。词条也可以直接放在分类根目录，表示未细分。

删除分类有两种方式：

- 仅删分类，保留条目。该目录下的条目移到选定的目标分类。
- 连同条目一起删除。条目移入 `admin/trash/<时间戳>/`，目录一并删除。该路径不在回收站 tab 中，需要手动恢复。

所有操作记日志，并自动重跑 `gen-sidebar`。

### 删除流程

1. 点击删除。
2. 确认框预览删除范围：目标 `.md` 文件、正文引用的 `./figures/...` 图片、Glossary 分类索引中引用该条目的行，以及其他页面对该条目的引用。其他页面的引用只提示，不自动修改。
3. 确认后执行：文件移动到 `web/.trash/<时间戳>/`，保留原相对路径。自动更新 Glossary 分类索引，移除引用行并刷新 `lastUpdated`。在 `web/` 目录重跑 `gen-sidebar`。
4. 全部写入 `admin/logs/manager.log`。

### 回收站

回收站 tab 列出 `web/.trash/` 中的删除批次与文件。点恢复把文件移回 `web/` 原位置，先复制后删除回收站副本。

手动恢复时，被删文件位于 `web/.trash/<时间戳>/<原相对路径>`。把它移回 `web/` 下的原相对位置即可。例如：

```bash
mv web/.trash/2026-08-05T12-00-00-000Z/glossary/orbits/xxx.md \
   web/glossary/orbits/xxx.md
```

删除时已经更新了分类 README 索引并重跑了 `gen-sidebar`。手动恢复后，需要补回 README 行并重跑 `npm run gen-sidebar`。

分类连带删除的文件位于 `admin/trash/<时间戳>/`，恢复方式相同，目标根目录换成 `web/`。

### 整站预览

预览依赖站点的 VuePress dev server（`web/` 下 `npm run dev`，默认 8080 端口）。

- 预览弹窗检测 dev server 是否在运行。未运行时点「启动站点预览服务」，由管理器代为启动。首次启动需要几十秒，日志在 `admin/logs/site-preview.log`，admin 退出时 dev server 随之结束。
- 可用环境变量 `SITE_PREVIEW_URL` 指向另外启动的站点实例。
- 编辑页的预览展示已保存的内容。

### AI 润色

- 头部按钮打开「AI 设置」，选择接口协议（OpenAI 兼容或 Anthropic），填写 Base URL、API key 与 model。配置保存在服务端 `admin/ai-config.json`，该文件已 gitignore。AI 请求由本地后端代理，key 不经过浏览器。
- 编辑页每个内容输入框的标签旁有「AI」按钮。先选中要修改的文字再点按钮，与 AI 多轮对话，用「替换选区」或「替换整个字段」把结果写回。
- 未选中文字时作用于整个字段。

## 内容操作架构

数据操作走 `web/.vuepress/content` 模块。路径约定、删除回收与索引刷新的规则都在 content 模块内，本服务只做 HTTP 形状适配（`lib/content-bridge.ts`）。

保存后自动刷新派生索引，后台执行 gen，编辑器不等待。当前管理端提供列表、读取、保存、删除与索引刷新，新建内容的前端入口尚未实现。列表与读取仍走本地 scan，迁移到 content 模块为后续批次。

## 后端 API

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/api/contents?type=glossary\|kb&q=&cat=` | 列出内容，支持关键字与分类过滤 |
| GET | `/api/categories?type=` | 列出某类内容的分类及条目数 |
| POST | `/api/categories/add` | 添加分类。Glossary 建目录并注册 taxonomy 节点，支持 `parent` 建一级子分类与 `labelZh` 设中文名 |
| POST | `/api/categories/delete` | 删除分类，可保条目或连删，可指定目标分类 |
| POST | `/api/categories/assign` | 批量修改分类。Glossary 移动条目目录并更新索引 |
| GET | `/api/content?path=` | 读取单个 md 文件 |
| GET | `/api/image?path=` | 读取图片或附件，供预览 |
| POST | `/api/content` | 保存一个或多个 md 文件，包含 frontmatter 与正文 |
| POST | `/api/validate` | 校验 frontmatter，接受 `frontmatterRaw` 或 `path` |
| POST | `/api/delete/preview` | 预览删除范围 |
| POST | `/api/delete/execute` | 执行删除，移入回收站并刷新索引 |
| GET | `/api/trash` | 列出回收站 |
| POST | `/api/trash/restore` | 恢复回收站文件 |

## 文件系统安全

后端所有路径都做白名单校验（`admin/lib/paths.js`）：

- 只允许读写仓库 `web/` 内的 `.md` 文件，以及 `figures/` 目录下的图片。
- 拒绝绝对路径、`..` 穿越与越界访问。
- 编辑器只允许编辑 `.md` 文件。
- 删除只接受 `.md` 路径，自动带出关联图片与 README 引用。

## 操作日志

所有增删改操作追加到 `admin/logs/manager.log`，每行格式：

```text
[ISO 时间] 操作 :: 路径1 | 路径2 | ...
```

## 目录结构

```text
admin/
├── README.md          本说明
├── package.json       独立依赖（express、yaml、vite、vue）
├── server.js          Express 后端入口
├── lib/
│   ├── paths.js       路径白名单与安全校验
│   ├── log.js         操作日志
│   ├── frontmatter.js frontmatter 读写
│   ├── validate.js    YAML 校验
│   ├── scan.js        内容扫描
│   ├── categories.js  分类管理（glossary 目录）
│   └── delete.js      删除预览、执行与回收站
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
