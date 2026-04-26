# 死内容清理 — 设计文档

## 目标

对 cislunarspace 网站进行全面内容审计，清理死文件、修复双语不对称、删除无用资源。

## 已完成

| 项目 | 状态 |
|------|------|
| `glossary/Figures/image.png` (191KB) | ✅ 已删除 — 未被任何 md 引用 |
| 旧主题残留 (theme/, components-v1/) | ✅ 不存在，已确认清理完毕 |

## 待执行

### 1. `blue-team-research/doctrine-strategy/` — 翻译 zh → en

将以下3个中文文件翻译为英文，补充到 en 侧：

| zh 文件 | 行数 | en 目标文件 |
|--------|------|------------|
| `us-doctrine-system.md` | 96L | `en/blue-team-research/doctrine-strategy/us-doctrine-system.md`（已存在44L → 需替换为翻译版） |
| `cyberspace-operations-doctrine.md` | 18L | `en/blue-team-research/doctrine-strategy/cyberspace-operations-doctrine.md`（新建） |
| `joint-warfighting-doctrine.md` | 18L | `en/blue-team-research/doctrine-strategy/joint-warfighting-doctrine.md`（新建） |

**注意**：`en/blue-team-research/doctrine-strategy/us-strategy-doctrine.md` (44L) 保留，与 zh 的 `us-doctrine-system.md` 为不同内容（zh 的更学术，en 的更偏索引规范）。

### 2. `research-frontiers/institutions/` — 翻译 zh → en

翻译以下5个机构文件为英文：

| 文件 | zh 行数 | en 状态 |
|------|---------|---------|
| `nudt.md` | 267L | ❌ 缺失 → 新建 |
| `npu.md` | 72L | ❌ 缺失 → 新建 |
| `seu.md` | 48L | ❌ 缺失 → 新建 |
| `thu.md` | 73L | ❌ 缺失 → 新建 |
| `dfhscl.md` | 92L | ❌ 缺失 → 新建 |

参考 `en/research-frontiers/institutions/hit.md` 的格式和 frontmatter 模板。

### 3. `glossary/` — 批量翻译 zh → en

翻译以下35个文件，按类别分组：

**dynamics (7个)**：ephemeris-model, qbcp, action-angle, birkhoff-gustavson, central-manifold, cr3bp, poincare-section
（cr3bp en 已有，其余5个缺失）

**navigation (10个)**：cislunar-spatiotemporal-reference, earth-moon-hybrid-navigation, gnss-weak-signal-navigation, inter-satellite-link-navigation, lunanet, lunar-navigation-constellation, moonlight, orbit-identification, tiandu-1, xray-pulsar-navigation
（xray-pulsar-navigation en 已有，其余9个缺失）

**orbits (3个)**：dro, nrho, dro-constellation, eml-halo
（eml-halo en 已有，其余3个缺失）

**other (5个)**：cislunar-navigation-prospects, exosims, nuclear-thermal-propulsion, pogo, space-traffic-management, starshade
（starshade en 已有，其余5个缺失）

**programs (2个)**：artemis, lugre

**organizations (13个)**：anduril, booz-allen-hamilton, general-dynamics-mission-systems, gitai-usa, lockheed-martin, northrop-grumman, quindar, raytheon, sci-tec, spacex, true-anomaly, turion-space

**翻译原则**：
- 保留 zh frontmatter（permalink、wechatShare、og、twitter 等仅调整语言标签）
- 标题和正文翻译为英文
- 图注、表格标题一并翻译
- 参考文献保留，若有 URL 则保留

### 4. 清理空目录

- 删除 `cislunar-orbits/figures/.gitkeep`（目录本身为空）

## 执行顺序

1. `blue-team-research/doctrine-strategy/` 翻译（3个文件）
2. `research-frontiers/institutions/` 翻译（5个文件）
3. `glossary/` 批量翻译（按 dynamics → navigation → orbits → other → programs → organizations 顺序）
4. 删除 `cislunar-orbits/figures/.gitkeep`
5. 重新生成 sidebar：`npm run gen-sidebar`
6. 验证构建：`npm run docs:build`

## 验收标准

- 所有 zh 文件均有对应 en 翻译
- `npm run docs:build` 构建成功，无错误
- `npm run gen-sidebar` 生成正常，sidebar 结构完整
