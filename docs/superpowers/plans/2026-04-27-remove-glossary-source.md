# 删除技术词典首页来源 — 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 从技术词典首页删除"来源"行，保留作者和网站地址。

**Architecture:** 直接编辑两个 markdown 文件，删除 blockquote 中的来源行。

**Tech Stack:** Markdown, VuePress

---

## 文件结构

| 文件 | 操作 |
|------|------|
| `web/glossary/README.md` | 修改 — 删除来源行 |
| `web/en/glossary/README.md` | 修改 — 删除来源行 |

---

### Task 1: 删除中文首页来源

**Files:**
- Modify: `web/glossary/README.md`

- [ ] **Step 1: 删除来源行**

打开 `web/glossary/README.md`，找到第 26 行：
```
> 来源：央视新闻/扬子晚报 (https://finance.sina.com.cn/jjxw/2026-04-24/doc-inhvqfhn3315713.shtml)
```

删除该行，使 blockquote 变为：
```
> 本文作者：天疆说 (https://blog.csdn.net/qq_33254264)
> 本站地址：https://cislunarspace.cn
```

- [ ] **Step 2: 验证修改**

确认 blockquote 格式正确，无多余空行。

- [ ] **Step 3: 提交**

```bash
git add web/glossary/README.md
git commit -m "fix(glossary): remove source line from Chinese homepage"
```

---

### Task 2: 删除英文首页来源

**Files:**
- Modify: `web/en/glossary/README.md`

- [ ] **Step 1: 删除来源行**

打开 `web/en/glossary/README.md`，找到第 26 行：
```
> Source: CCTV News / Yangtze Evening News (https://finance.sina.com.cn/jjxw/2026-04-24/doc-inhvqfhn3315713.shtml)
```

删除该行，使 blockquote 变为：
```
> Author: CislunarSpace (https://gitee.com/cislunarspace)
> Website: https://cislunarspace.cn
```

- [ ] **Step 2: 验证修改**

确认 blockquote 格式正确，无多余空行。

- [ ] **Step 3: 提交**

```bash
git add web/en/glossary/README.md
git commit -m "fix(glossary): remove source line from English homepage"
```

---

## 验收标准

- [ ] `web/glossary/README.md` 来源行已删除
- [ ] `web/en/glossary/README.md` 来源行已删除
- [ ] 两个文件的 blockquote 格式正确
