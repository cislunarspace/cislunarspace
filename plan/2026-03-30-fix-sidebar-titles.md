# 修复侧边栏标题过长问题

## 目标
将页面 frontmatter 中 `title` 字段去除冗长的栏目前缀，只保留简洁的页面名。长标题移入 `wechatShare.title` 中保留。

## 问题分析
VuePress 默认主题会将 `title` 直接用于侧边栏显示。当前许多页面的 title 格式为 `栏目介绍 | 页面名`（如 `地月空间研究机构与团队盘点 | 西北工业大学`），导致侧边栏显示过长。

## 需修改的文件

### 中文页面（14个）
| 文件 | 当前 title | 修改后 title |
|------|-----------|-------------|
| forum.md | 地月空间入门指南 \| 社区论坛 | 社区论坛 |
| ai-chat.md | 地月空间入门指南 \| AI问答 | AI问答 |
| glossary/README.md | 地月空间术语词典 | (不变) |
| glossary/cr3bp.md | 圆形限制性三体问题(CR3BP)模型详解 \| 深空探测自主导航方法 | (无\|但需检查) |
| glossary/xray-pulsar-navigation.md | X射线脉冲星导航技术详解 \| 深空探测自主导航方法 | (无\|但需检查) |
| research-frontiers/directions/README.md | 地月空间研究方向与前沿热点 | (不变) |
| research-frontiers/directions/orbital-game/README.md | 地月空间研究方向与前沿热点 \| 轨道博弈 | 轨道博弈 |
| research-frontiers/institutions/nudt.md | 地月空间研究机构与团队盘点 \| 国防科技大学 | 国防科技大学 |
| research-frontiers/institutions/npu.md | 地月空间研究机构与团队盘点 \| 西北工业大学 | 西北工业大学 |
| research-frontiers/institutions/hit.md | 地月空间研究机构与团队盘点 \| 哈尔滨工业大学 | 哈尔滨工业大学 |
| research-frontiers/institutions/seu.md | 地月空间研究机构与团队盘点 \| 航天工程大学 | 航天工程大学 |
| research-frontiers/institutions/dfhscl.md | 地月空间研究机构与团队盘点 \| 航天东方红卫星有限公司 | 航天东方红卫星有限公司 |
| research-frontiers/institutions/thu.md | 地月空间研究机构与团队盘点 \| 清华大学 | 清华大学 |
| research-frontiers/journals-conferences.md | 地月空间研究期刊与会议指南 \| 学术发表与交流平台 | 学术发表与交流平台 |
| research-frontiers/major-projects.md | 地月空间重大工程项目盘点 \| 国内外任务与技术验证 | 国内外任务与技术验证 |
| resources-tools/datasets.md | 地月空间研究数据集资源大全 \| 星历、轨道、环境数据下载 | 星历、轨道、环境数据下载 |

### 英文页面（8个）
| 文件 | 当前 title | 修改后 title |
|------|-----------|-------------|
| en/README.md | Comprehensive Cislunar Space Beginner's Guide \| Research Frontiers, Terminology, Tools | Cislunar Space Beginner's Guide |
| en/forum.md | Cislunar Space Guide \| Community Forum | Community Forum |
| en/what-is-cislunarspace/README.md | Cislunar Space Definition and Strategic Value Analysis \| Earth-Moon Gravitational Interaction Region | What Is Cislunar Space |
| en/research-frontiers/directions.md | Cislunar Space Research Directions and Frontier Analysis \| Future Development Trends | Research Directions and Frontier Analysis |
| en/research-frontiers/institutions/hit.md | Research Institutions in Cislunar Space \| Harbin Institute of Technology | Harbin Institute of Technology |
| en/glossary/README.md | Cislunar Space Glossary \| Core Terminology for Earth-Moon Space Research | Cislunar Space Glossary |
| en/glossary/cr3bp.md | Circular Restricted Three-Body Problem (CR3BP) Model Explained \| Cislunar Space Dynamics Fundamentals | CR3BP Model Explained |
| en/glossary/xray-pulsar-navigation.md | X-ray Pulsar Navigation Technology Explained \| Autonomous Navigation for Deep Space Exploration | X-ray Pulsar Navigation |
| en/resources-tools/datasets.md | Comprehensive Cislunar Space Research Datasets \| Ephemeris, Orbit, Environment Data Downloads | Cislunar Space Research Datasets |

## 任务列表
- [x] 1. 修正中文页面 title（14个文件）
- [x] 2. 修正英文页面 title（9个文件）
- [x] 3. 验证 wechatShare.title 保留原长标题
- [x] 4. 更新 seo-frontmatter-template.md 模板说明
- [ ] 5. 本地构建验证侧边栏标题显示正常

## 备注
- 对于没有 wechatShare 配置的页面，需确保不丢失 SEO 信息（可通过 og.title 保留）
- docs/seo-frontmatter-template.md 中的模板说明也需要同步更新
- space-news 下的文章页面 title 本身就是简洁的新闻标题，不需要修改
