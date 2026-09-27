
# Issue tracker: GitHub

本仓库的 issue 和 PRD 存放在 GitHub Issues 中。所有操作使用 `gh` CLI。

## 约定

- **创建 issue**：`gh issue create --title "..." --body "..."`。多行正文用 heredoc。
- **读取 issue**：`gh issue view <number> --comments`，用 `jq` 过滤评论，同时获取标签。
- **列出 issue**：`gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'`，按需加 `--label` 和 `--state` 过滤。
- **评论 issue**：`gh issue comment <number> --body "..."`
- **添加 / 移除标签**：`gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **关闭**：`gh issue close <number> --comment "..."`

- **手动入板**：`gh project item-add 4 --owner cislunarspace --url <issue 的 URL>`（组织共用项目 `cislunarspace Issue Management`；普通 issue 建成后须手动加入，入板后状态自动置为 Inbox）。

从 `git remote -v` 推导仓库，`gh` 在 clone 内运行时自动识别。

## Pull requests 作为分诊渠道

**PR 作为请求渠道：是。** 外部 PR 与 issue 走相同的标签和状态，使用 `gh pr` 等价命令：

- **读取 PR**：`gh pr view <number> --comments`，`gh pr diff <number>` 看 diff。
- **列出待分诊的外部 PR**：`gh pr list --state open --json number,title,body,labels,author,authorAssociation,comments`，只保留 `authorAssociation` 为 `CONTRIBUTOR`、`FIRST_TIME_CONTRIBUTOR` 或 `NONE` 的（去掉 `OWNER`/`MEMBER`/`COLLABORATOR`）。
- **评论 / 打标签 / 关闭**：`gh pr comment`、`gh pr edit --add-label`/`--remove-label`、`gh pr close`。

GitHub 的 issue 和 PR 共享编号空间，所以 `#42` 可能是其中任一，用 `gh pr view 42` 确认，回退到 `gh issue view 42`。

## 当技能说"发布到 issue tracker"时

创建一个 GitHub issue。

## 当技能说"获取相关 ticket"时

运行 `gh issue view <number> --comments`。

## GitHub Project

**使用 Project：是。** `/github-project`、`/triage`、`/open-pr`、`/merge-pr` 读取本节；缺字段或选项 ID 时停止，叫用户重跑 `/setup-ouyangjiahong-skills`。

| 项 | 值 |
| --- | --- |
| Owner | `cislunarspace` |
| Project 编号 | `4` |
| Project 标题 | cislunarspace Issue Management |
| Project ID | `PVT_kwDOE3ZAg84BkgBr` |
| Status 字段 ID | `PVTSSF_lADOE3ZAg84BkgBrzhjQaF8` |
| Priority 字段 ID | `PVTSSF_lADOE3ZAg84BkgBrzhjQaGs` |
| Start Date 字段 ID | `PVTF_lADOE3ZAg84BkgBrzhjQaGw`（DATE 类型，无选项） |

Status 选项 ID：

| 选项 | 选项 ID |
| --- | --- |
| `Inbox` | `f75ad846` |
| `Backlog` | `c63ae0e5` |
| `Ready` | `871e53fc` |
| `In progress` | `47fc9ee4` |
| `In review` | `7b94b6f5` |
| `Done` | `98236657` |
| `No action` | `58b611df` |

Priority 选项 ID：

| 选项 | 选项 ID |
| --- | --- |
| `P0` | `bff420ad` |
| `P1` | `4679013b` |
| `P2` | `380c4288` |
| `P3` | `826b89d3` |

面板与 e2m2e、transfer-orbit-design 共用，`Repository` 字段区分来源（系统字段，技能不写）。状态与 Issue 开合的对应语义见 [CONTRIBUTING.md](../../CONTRIBUTING.md) 的 Project 流水线一节。
