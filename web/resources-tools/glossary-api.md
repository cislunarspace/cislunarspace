---
title: 词典数据接口与 MCP 接入
description: 把地月空间术语词典作为公开数据文件使用的说明，含字段表、按关键词检索的本地 MCP server 配置与缓存建议。
keywords: 术语词典, 数据接口, MCP, JSON, 检索, Claude Desktop, Cursor
author: 天疆说
date: 2026-10-22
lastUpdated: 2026-10-22
wechatShare:
  title: 词典数据接口与 MCP 接入
  desc: 用 HTTP 或 MCP 把站内术语词典接进自己的工具链。
  image: /logo.png
og:
  title: 词典数据接口与 MCP 接入 | 地月空间术语检索
  description: 把地月空间术语词典作为公开数据文件使用的说明，含字段表、MCP 配置与缓存建议。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 词典数据接口与 MCP 接入 | 地月空间术语检索
  description: 把地月空间术语词典作为公开数据文件使用的说明，含字段表、MCP 配置与缓存建议。
  image: /logo.png
permalink: /resources-tools/glossary-api/
---

# 词典数据接口与 MCP 接入

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

站内术语词典是一份公开数据文件，可以直接用 HTTP 取，也可以接进 AI 客户端当检索工具用。这一页说明数据长什么样、怎么取、怎么接。

## 数据文件

地址是 `https://cislunarspace.cn/glossary-dictionary.json`，约 320 KB，当前 720 条词条，分 8 个类别。构建期从词条 markdown 生成，随站点一起发布。不需要鉴权，允许跨域读取。

顶层按类别分组：

```json
{
  "categories": [
    {
      "slug": "orbits",
      "label": "任务轨道",
      "entries": []
    }
  ]
}
```

`entries` 里每条词条的字段：

| 字段         | 类型             | 说明                                       |
| ------------ | ---------------- | ------------------------------------------ |
| `slug`       | 字符串           | 词条标识，在同一类别内唯一                 |
| `title`      | 字符串           | 中文名，标题括注部分已拆出                 |
| `otherTitle` | 字符串或 null    | 标题括注里的英文名                         |
| `definition` | 字符串           | 定义正文，已去掉引用标记与公式定界符       |
| `url`        | 字符串           | 词条页面路径，例如 `/glossary/orbits/aro/` |
| `keywords`   | 字符串数组       | 检索关键词，含缩写与别名                   |
| `aliases`    | 字符串数组或缺失 | 仅在词条声明时出现                         |
| `citations`  | 字符串数组或缺失 | 引用键，映射到题录                         |

词条身份是类别 slug 加词条 slug。不同类别下存在同名词条，例如 `vsi` 在 `fundamentals` 与 `dynamics` 各有一条，内容不同，不要只按 `slug` 建索引。

## 引用键与题录

`citations` 里是 `\cite` 的键，例如 `vaqueroLeveragingResonantorbitManifolds2014`。题录在 `https://cislunarspace.cn/bibliography.json`，顶层 `entries` 是 `{键: {number, formatted}}` 映射，`formatted` 是可直接显示的题录文本。顶层 `citedBy` 是同一个键到引用来源页面的反向映射。

## 兼容承诺

字段只增不改，不引入版本路径。将来可能新增字段，读取方应忽略不认识的字段。已有字段的语义不会改变，可以放心按上表解析。

## 直接取数据

命令行取一次并在本地按关键词筛：

```bash
curl -s https://cislunarspace.cn/glossary-dictionary.json -o glossary.json
jq -r '.categories[].entries[] | select(.keywords[]? | test("NRHO")) | .title + "\t" + .url' glossary.json
```

浏览器或其他工具里使用时注意两点。数据约 320 KB，取一次存在本地比每次重新下载划算。服务端返回 `ETag` 与 `Last-Modified`，重复拉取时带上 `If-None-Match`，没更新会得到 304。

## MCP 接入

把词典接进 AI 客户端需要一个本地 MCP server，它负责拉取数据并在本地做检索。仓库在 [cislunarspace-mcp](https://github.com/cislunarspace/cislunarspace-mcp)，提供两个工具。`search` 按关键词检索，返回标题、英文名、分类、页面链接与定义摘要。`get` 按类别与词条 slug 取完整定义与参考文献题录。

需要 Node 20 以上。npm 12 起 git 依赖默认关闭，所以要带 `--allow-git=all`。包发布到 npm 官方仓库之后这一串可以缩短，进度见[发布 issue](https://github.com/cislunarspace/cislunarspace-mcp/issues/1)。

Claude Desktop，写入 `claude_desktop_config.json`：

```json
{
  "mcpServers": {
    "cislunarspace": {
      "command": "npx",
      "args": ["--allow-git=all", "-y", "github:cislunarspace/cislunarspace-mcp#v0.1.2"]
    }
  }
}
```

Claude Code：

```bash
claude mcp add cislunarspace -- npx --allow-git=all -y github:cislunarspace/cislunarspace-mcp#v0.1.2
```

Cursor，写入 `~/.cursor/mcp.json`，形状与 Claude Desktop 相同：

```json
{
  "mcpServers": {
    "cislunarspace": {
      "command": "npx",
      "args": ["--allow-git=all", "-y", "github:cislunarspace/cislunarspace-mcp#v0.1.2"]
    }
  }
}
```

VS Code，写入 `.vscode/mcp.json`：

```json
{
  "servers": {
    "cislunarspace": {
      "type": "stdio",
      "command": "npx",
      "args": ["--allow-git=all", "-y", "github:cislunarspace/cislunarspace-mcp#v0.1.2"]
    }
  }
}
```

配好之后在客户端里问“什么是轴向共振轨道”，模型会调用 `search` 取到站内定义与链接。

## 检索是怎么做的

检索在本地完成，站点不提供按关键词查询的接口。server 把数据读进内存后按分层权重打分。标题括号前的中文名完全命中最高，关键词或英文名拆词后完全命中其次，标题包含再次，定义包含最低。多个检索词要求全部命中。这个策略对术语原文查询效果好，错字与同义改写召回有限。

## 使用建议

公开数据没有鉴权，也没有配额，请按需拉取并缓存，不要高频轮询。数据每周随内容更新。词典内容以站内页面为准，页面链接就在 `url` 字段里，引用时请链接到页面而不是直接复制定义。

## 反馈

字段缺项、解析异常、检索排序不合理，都可以提到 [站点仓库](https://github.com/cislunarspace/cislunarspace/issues)。MCP server 本身的问题提到 [cislunarspace-mcp 仓库](https://github.com/cislunarspace/cislunarspace-mcp/issues)。
