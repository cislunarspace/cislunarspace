# 飞行器轨道栏目全面更新实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 `cislunar-orbits` 栏目从单篇 README.md 扩充为 3 个专题（NRHO / DRO / 地月转移轨道）、每个专题 5 篇中英文文章的完整双语知识库，并更新 sidebar 导航结构。

**Architecture:** 文档内容项目，按 Phase 分阶段实施：Phase 1 建目录结构 + 3 篇中文总览；Phase 2 补全 12 篇中文子文章；Phase 3 同步英文版；Phase 4 更新 sidebar；Phase 5 仿真实验外链补充。

**Tech Stack:** VuePress 2 (Markdown + YAML frontmatter + KaTeX 数学公式)

---

## 文件结构总览

```
web/cislunar-orbits/
├── README.md            # 重构：栏目首页（更新内容）
├── nrho/
│   ├── README.md        # NRHO 总览
│   ├── l1-nrho.md
│   ├── l2-nrho.md
│   ├── stability-maintenance.md
│   ├── gateway-cases.md
│   └── design-parameters.md
├── dro/
│   ├── README.md        # DRO 总览
│   ├── mechanics.md
│   ├── family-classification.md
│   ├── applications.md
│   └── design-method.md
├── transfer/
│   ├── README.md        # 转移轨道总览
│   ├── tli-overview.md
│   ├── ballistic-capture.md
│   ├── corridor-design.md
│   └── launch-windows.md
└── figures/             # .gitkeep

web/en/cislunar-orbits/   # 结构完全对应，英文内容
```

---

## Task 1: 建立目录结构与 figures 占位

**Files:**
- Create: `web/cislunar-orbits/nrho/`
- Create: `web/cislunar-orbits/dro/`
- Create: `web/cislunar-orbits/transfer/`
- Create: `web/cislunar-orbits/figures/.gitkeep`
- Create: `web/en/cislunar-orbits/nrho/`
- Create: `web/en/cislunar-orbits/dro/`
- Create: `web/en/cislunar-orbits/transfer/`
- Create: `web/en/cislunar-orbits/figures/.gitkeep`

- [ ] **Step 1: 创建中文子目录**

```bash
mkdir -p web/cislunar-orbits/nrho
mkdir -p web/cislunar-orbits/dro
mkdir -p web/cislunar-orbits/transfer
touch web/cislunar-orbits/figures/.gitkeep
```

- [ ] **Step 2: 创建英文子目录**

```bash
mkdir -p web/en/cislunar-orbits/nrho
mkdir -p web/en/cislunar-orbits/dro
mkdir -p web/en/cislunar-orbits/transfer
touch web/en/cislunar-orbits/figures/.gitkeep
```

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/nrho web/cislunar-orbits/dro web/cislunar-orbits/transfer web/cislunar-orbits/figures web/en/cislunar-orbits/nrho web/en/cislunar-orbits/dro web/en/cislunar-orbits/transfer web/en/cislunar-orbits/figures
git commit -m "feat(web): create cislunar-orbits subdirectories for nrho/dro/transfer"
```

---

## Task 2: 重构栏目首页 README.md（中文 + 英文）

**Files:**
- Modify: `web/cislunar-orbits/README.md`
- Modify: `web/en/cislunar-orbits/README.md`

**内容要求：**
- 中文版：更新现有 README.md，增加三大专题（NRHO / DRO / 转移轨道）的简介，各 2-3 段文字
- 英文版：同步更新英文 README.md
- frontmatter 保留现有 title/description/keywords/permalink 等字段，仅更新 `lastUpdated: 2026-04-26`
- 底部增加「仿真实验」小节，链接到 `/satellite-simulation/`

- [ ] **Step 1: 写入中文首页**

路径：`web/cislunar-orbits/README.md`

frontmatter 保留 `title: 地月空间轨道`，更新 `lastUpdated: 2026-04-26`。正文在现有「常见任务轨道族」表格之后，增加三大专题的详细概念说明段落，每专题 2-3 段。末尾加：

```markdown
## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中交互式探索各类轨道的动力学特性。
```

- [ ] **Step 2: 写入英文首页**

路径：`web/en/cislunar-orbits/README.md`

同步更新，英文正文与中文对应。

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/README.md web/en/cislunar-orbits/README.md
git commit -m "docs(web): expand cislunar-orbits hub with detailed topic overviews"
```

---

## Task 3: 撰写 NRHO 总览 README.md（中英文）

**Files:**
- Create: `web/cislunar-orbits/nrho/README.md`
- Create: `web/en/cislunar-orbits/nrho/README.md`

**内容要求（中文 ~400 字）：**
- 标题：NRHO（近直线晕轨道）
- frontmatter：`title: NRHO（近直线晕轨道）`，`permalink: /cislunar-orbits/nrho/`
- 作者块：同项目惯例
- 章节：
  1. **定义与物理背景**：L1/L2 点附近近直线构型，晕轨道与 NRHO 的区别（振幅）
  2. **动力学特性**：准周期性、L1 vs L2 的稳定方向差异、雅可比常数约束
  3. **轨道族分类**：L1 南族/L2 北族，L1 北族/L2 南族（按振幅 Ax/Az 分类）
  4. **工程应用**：Gateway 加油舱/SSPS，中继与探测
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入中文 README**

路径：`web/cislunar-orbits/nrho/README.md`

- [ ] **Step 2: 写入英文 README**

路径：`web/en/cislunar-orbits/nrho/README.md`，`permalink: /en/cislunar-orbits/nrho/`

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/nrho/README.md web/en/cislunar-orbits/nrho/README.md
git commit -m "docs(web): add NRHO overview article (zh/en)"
```

---

## Task 4: 撰写 NRHO 子文章 - L1 NRHO（中英文）

**Files:**
- Create: `web/cislunar-orbits/nrho/l1-nrho.md`
- Create: `web/en/cislunar-orbits/nrho/l1-nrho.md`

**内容要求（中文 ~500 字）：**
- 标题：L1 近直线晕轨道
- 章节：
  1. **位置与几何**：地月 L1 点位置（~84% 地月距离），航天器相对运动
  2. **动力学特性**：L1 NRHO 的稳定流形方向，偶极子冻结倾角
  3. **设计约束**：振幅比 $A_z/A_x$ 要求，最小脉冲维持策略
  4. **典型任务**：早期的 ISEE-3、ACE 的类似轨道，现代 Gateway 任务
- KaTeX 公式：雅可比常数 $C_J$ 表达式、振幅关系
- 末尾「仿真实验」小节：链接 `/satellite-simulation/`

- [ ] **Step 1: 写入 `l1-nrho.md`（中文）**

- [ ] **Step 2: 写入 `l1-nrho.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/nrho/l1-nrho.md web/en/cislunar-orbits/nrho/l1-nrho.md
git commit -m "docs(web): add L1 NRHO article (zh/en)"
```

---

## Task 5: 撰写 NRHO 子文章 - L2 NRHO（中英文）

**Files:**
- Create: `web/cislunar-orbits/nrho/l2-nrho.md`
- Create: `web/en/cislunar-orbits/nrho/l2-nrho.md`

**内容要求（中文 ~500 字）：**
- 与 L1 NRHO 对比：L2 距离（~115% 地月距离）、相同族分类、用途侧重（月球背面通信）
- 章节结构同 Task 4
- 重点：L2 适合月球背面任务，与 L1 形成互补覆盖

- [ ] **Step 1: 写入 `l2-nrho.md`（中文）**

- [ ] **Step 2: 写入 `l2-nrho.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/nrho/l2-nrho.md web/en/cislunar-orbits/nrho/l2-nrho.md
git commit -m "docs(web): add L2 NRHO article (zh/en)"
```

---

## Task 6: 撰写 NRHO 子文章 - 稳定性与轨道维持（中英文）

**Files:**
- Create: `web/cislunar-orbits/nrho/stability-maintenance.md`
- Create: `web/en/cislunar-orbits/nrho/stability-maintenance.md`

**内容要求（中文 ~500 字）：**
- 章节：
  1. **初值敏感性与 Lyapunov 指数**：NRHO 对轨道偏差的放大特性
  2. **ΔV 维持预算**：L1/L2 NRHO 的典型 station-keeping ΔV/yr
  3. **维持策略**：脉冲式 vs 连续推力，维持时机选择
  4. **大气与太阳辐射压力**：高轨干扰对 NRHO 的额外影响
- KaTeX 公式：线性化方程、ΔV 预算估算公式
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入 `stability-maintenance.md`（中文）**

- [ ] **Step 2: 写入 `stability-maintenance.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/nrho/stability-maintenance.md web/en/cislunar-orbits/nrho/stability-maintenance.md
git commit -m "docs(web): add NRHO stability and station-keeping article (zh/en)"
```

---

## Task 7: 撰写 NRHO 子文章 - Gateway 工程案例（中英文）

**Files:**
- Create: `web/cislunar-orbits/nrho/gateway-cases.md`
- Create: `web/en/cislunar-orbits/nrho/gateway-cases.md`

**内容要求（中文 ~500 字）：**
- 章节：
  1. **月球门户（Gateway）**：NRHO 作为其轨道选择原因，轨道参数（近直线晕轨道 $A_x \approx 3100$ km）
  2. **国际合作**：NASA Artemis、ESA、JAXA、CSA 的轨道策略差异
  3. **燃料效率**：从 NRHO 到月面的转移设计，与极地登陆的配合
  4. **替代方案对比**：DRO 的优缺点，与 NRHO 的对比
- 表格：Gateway 各舱段的轨道分配
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入 `gateway-cases.md`（中文）**

- [ ] **Step 2: 写入 `gateway-cases.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/nrho/gateway-cases.md web/en/cislunar-orbits/nrho/gateway-cases.md
git commit -m "docs(web): add Gateway engineering case study (zh/en)"
```

---

## Task 8: 撰写 NRHO 子文章 - 设计参数（中英文）

**Files:**
- Create: `web/cislunar-orbits/nrho/design-parameters.md`
- Create: `web/en/cislunar-orbits/nrho/design-parameters.md`

**内容要求（中文 ~500 字）：**
- 章节：
  1. **典型参数表**：L1/L2 NRHO 的周期（~6.5-8 天）、振幅范围、倾角约束
  2. **初始条件选取**：CRTBP 参数 $\mu$ 下的状态向量选取方法
  3. **周期轨道计算**：伪弧长延续法（pseudo-arclength continuation）简介
  4. **敏感性分析**：质量比不确定性对轨道周期的影响
- KaTeX 公式：周期与半长轴关系，$\mu_{EM} = 0.0121505853$
- 表格：L1/L2 NRHO 典型参数对比
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入 `design-parameters.md`（中文）**

- [ ] **Step 2: 写入 `design-parameters.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/nrho/design-parameters.md web/en/cislunar-orbits/nrho/design-parameters.md
git commit -m "docs(web): add NRHO design parameters article (zh/en)"
```

---

## Task 9: 撰写 DRO 总览 README.md（中英文）

**Files:**
- Create: `web/cislunar-orbits/dro/README.md`
- Create: `web/en/cislunar-orbits/dro/README.md`

**内容要求（中文 ~400 字）：**
- 标题：DRO（远距离逆行轨道）
- 章节：
  1. **定义**：远距离逆行轨道，在地月旋转坐标系中逆行（$\dot{\theta}<0$），但相对地月质心保持较大距离
  2. **动力学背景**：CR3BP 中 $C_J > 3$ 的无碰撞区域，逆行特性降低轨道不稳定性
  3. **与 NRHO 的对比**：稳定性、ΔV 维持、用途差异（表格对比）
  4. **应用场景**：地月空间驻留、应急返回、编队飞行
- 引用 glossary 中的 `/glossary/orbits/dro/` 词条
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入中文 README**

路径：`web/cislunar-orbits/dro/README.md`，`permalink: /cislunar-orbits/dro/`

- [ ] **Step 2: 写入英文 README**

路径：`web/en/cislunar-orbits/dro/README.md`，`permalink: /en/cislunar-orbits/dro/`

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/dro/README.md web/en/cislunar-orbits/dro/README.md
git commit -m "docs(web): add DRO overview article (zh/en)"
```

---

## Task 10: 撰写 DRO 子文章 - 动力学机理（中英文）

**Files:**
- Create: `web/cislunar-orbits/dro/mechanics.md`
- Create: `web/en/cislunar-orbits/dro/mechanics.md`

**内容要求（中文 ~500 字）：**
- 章节：
  1. **逆行几何**：旋转坐标系中的速度方向，角动量方向与轨道倾角关系
  2. **雅可比常数约束**：$C_J = 2 - v^2 + 2(1-\mu)/r_1 + 2\mu/r_2$，逆行轨道对应的 $C_J$ 范围
  3. **稳定性来源**：逆行降低 Coriolis 效应的不稳定倾向，在 CR3BP 中自然更稳定
  4. **与 Lyapunov 轨道的联系**：同源分支（bifurcation）关系
- KaTeX 公式：雅可比常数定义、速度分量关系
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入 `mechanics.md`（中文）**

- [ ] **Step 2: 写入 `mechanics.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/dro/mechanics.md web/en/cislunar-orbits/dro/mechanics.md
git commit -m "docs(web): add DRO mechanics article (zh/en)"
```

---

## Task 11: 撰写 DRO 子文章 - 轨道族分类（中英文）

**Files:**
- Create: `web/cislunar-orbits/dro/family-classification.md`
- Create: `web/en/cislunar-orbits/dro/family-classification.md`

**内容要求（中文 ~500 字）：**
- 章节：
  1. **L1 DRO vs L2 DRO**：在地月 L1/L2 影响球内/外的区分，典型距离
  2. **周期与振幅**：DRO 的周期范围（数天到数周），振幅 $A_x$、$A_z$ 的典型值
  3. **同源分支图**：L1 DRO ↔ Lyapunov 轨道 ↔ L2 DRO 的分支演化关系
  4. **南北对称性**：旋转坐标系的反射对称产生南北两族
- KaTeX 公式：周期与雅可比常数关系
- 表格：L1/L2 DRO 典型参数
- 引用 `/glossary/Figures/DRO/` 中的图示
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入 `family-classification.md`（中文）**

- [ ] **Step 2: 写入 `family-classification.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/dro/family-classification.md web/en/cislunar-orbits/dro/family-classification.md
git commit -m "docs(web): add DRO family classification article (zh/en)"
```

---

## Task 12: 撰写 DRO 子文章 - 工程应用（中英文）

**Files:**
- Create: `web/cislunar-orbits/dro/applications.md`
- Create: `web/en/cislunar-orbits/dro/applications.md`

**内容要求（中文 ~500 字）：**
- 章节：
  1. **应急返回轨道**：DRO 的自然返回特性，从 DRO 到再入大气的低 ΔV 走廊
  2. **中继与通信**：大视场覆盖优势，配合月球背面任务
  3. **编队与星座**：多航天器 DRO 协同，可降低编队维持 ΔV
  4. **案例**：CAPSTONE（地月 DRO 验证），Artemis 计划中的 DRO 角色
- 表格：各应用场景的 ΔV 预算对比
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入 `applications.md`（中文）**

- [ ] **Step 2: 写入 `applications.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/dro/applications.md web/en/cislunar-orbits/dro/applications.md
git commit -m "docs(web): add DRO applications article (zh/en)"
```

---

## Task 13: 撰写 DRO 子文章 - 设计方法（中英文）

**Files:**
- Create: `web/cislunar-orbits/dro/design-method.md`
- Create: `web/en/cislunar-orbits/dro/design-method.md`

**内容要求（中文 ~500 字）：**
- 章节：
  1. **初始条件搜索**：在 CR3BP 相空间中找到满足周期性的状态向量，网格搜索与延续法
  2. **Floquet 模态分析**：确定轨道稳定性指标（Floquet 乘数），筛选稳定周期轨道
  3. **星历提升**：从 CRTBP 初始条件到真实星历（JPL DE440）的轨道传播与偏差修正
  4. **轨道维持设计**：DRO 的 station-keeping ΔV 预算（低于 NRHO），典型维持策略
- KaTeX 公式：Floquet 乘数方程、CRTBP → 真实星历的修正框架
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入 `design-method.md`（中文）**

- [ ] **Step 2: 写入 `design-method.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/dro/design-method.md web/en/cislunar-orbits/dro/design-method.md
git commit -m "docs(web): add DRO design method article (zh/en)"
```

---

## Task 14: 撰写转移轨道总览 README.md（中英文）

**Files:**
- Create: `web/cislunar-orbits/transfer/README.md`
- Create: `web/en/cislunar-orbits/transfer/README.md`

**内容要求（中文 ~400 字）：**
- 标题：地月转移轨道
- 章节：
  1. **定义与分类**：从 LEO 到地月空间的转移方式（高能弹道、低能走廊、弹道捕获）
  2. **能量预算**：$C_3$（双曲面超速）概念，从 LEO 到 TLI 的典型 $\Delta V \approx 3.13$ km/s
  3. **转移时间 vs 能量权衡**： Hohmann vs 低能转移，时间/燃料双目标优化
  4. **与 NRHO/DRO 的衔接**：到达后如何插入目标轨道
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入中文 README**

路径：`web/cislunar-orbits/transfer/README.md`，`permalink: /cislunar-orbits/transfer/`

- [ ] **Step 2: 写入英文 README**

路径：`web/en/cislunar-orbits/transfer/README.md`，`permalink: /en/cislunar-orbits/transfer/`

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/transfer/README.md web/en/cislunar-orbits/transfer/README.md
git commit -m "docs(web): add transfer orbit overview article (zh/en)"
```

---

## Task 15: 撰写转移轨道子文章 - TLI 概览（中英文）

**Files:**
- Create: `web/cislunar-orbits/transfer/tli-overview.md`
- Create: `web/en/cislunar-orbits/transfer/tli-overview.md`

**内容要求（中文 ~500 字）：**
- 章节：
  1. **TLI 定义**：地月转移轨道插入机动，历史上 Apollo、SLIM、嫦娥均使用
  2. **发射窗口**：月球相位（近地点/远地点），发射机会每朔望月一次
  3. **能量预算**：$C_3$ 表征，LEO 到 TLI 的 $\Delta V \approx 3.1-3.3$ km/s
  4. **发射后路径**：从 LEO 停泊轨道到 TLI 机动，到达月球影响球的过程
- KaTeX 公式：$v_{escape} = \sqrt{2\mu/r}$，$C_3 = v^2 - 2\mu/r$
- 表格：Apollo 任务 TLI 参数
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入 `tli-overview.md`（中文）**

- [ ] **Step 2: 写入 `tli-overview.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/transfer/tli-overview.md web/en/cislunar-orbits/transfer/tli-overview.md
git commit -m "docs(web): add TLI overview article (zh/en)"
```

---

## Task 16: 撰写转移轨道子文章 - 弹道捕获（中英文）

**Files:**
- Create: `web/cislunar-orbits/transfer/ballistic-capture.md`
- Create: `web/en/cislunar-orbits/transfer/ballistic-capture.md`

**内容要求（中文 ~500 字）：**
- 章节：
  1. **弹道捕获原理**：利用月球引力辅助，在无推进情况下被月球引力捕获
  2. **Ballistic capture vs 动力捕获**：前者在到达前无需推进，后者需推进减速
  3. **低能转移中的角色**：弱稳定边界（Weak Stability Boundary, WSB）理论的工程实现
  4. **优势与局限**：省燃料但时间长（数月），对发射窗口敏感
- KaTeX 公式：弱稳定边界能量判据
- 引用 `/glossary/dynamics/cr3bp/` 的相关内容
- 末尾「仿真实验」小节

- [ ] **Step 1: 写入 `ballistic-capture.md`（中文）**

- [ ] **Step 2: 写入 `ballistic-capture.md`（英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/transfer/ballistic-capture.md web/en/cislunar-orbits/transfer/ballistic-capture.md
git commit -m "docs(web): add ballistic capture article (zh/en)"
```

---

## Task 17: 撰写转移轨道子文章 - 转移走廊与发射窗口（中英文）

**Files:**
- Create: `web/cislunar-orbits/transfer/corridor-design.md`
- Create: `web/cislunar-orbits/transfer/launch-windows.md`
- Create: `web/en/cislunar-orbits/transfer/corridor-design.md`
- Create: `web/en/cislunar-orbits/transfer/launch-windows.md`

**corridor-design.md 内容（中文 ~500 字）：**
- 章节：
  1. **转移走廊概念**：低能走廊与高能走廊的带宽差异（$\Delta V$ 差异 ~200-300 m/s）
  2. **晕轨道插入**：NRHO 插入的时机窗口设计
  3. **Pork-chop 图**：发射机会的 $C_3$ 等高线图，解释如何读图
  4. **多目标优化**：时间/燃料/窗口宽度的 Pareto 前沿

**launch-windows.md 内容（中文 ~500 字）：**
- 章节：
  1. **发射窗口形成**：地月几何（相位角、远地点方向），朔望月周期
  2. **窗口频率**：每 14-15 天出现一次最佳 TLI 机会
  3. **偏离窗口的后果**：$C_3$ 变化，ΔV 惩罚
  4. **发射窗口规划工具**：GMAT、STK 中的窗口计算方法

- [ ] **Step 1: 写入 `corridor-design.md`（中英文）**

- [ ] **Step 2: 写入 `launch-windows.md`（中英文）**

- [ ] **Step 3: 提交**

```bash
git add web/cislunar-orbits/transfer/corridor-design.md web/cislunar-orbits/transfer/launch-windows.md
git add web/en/cislunar-orbits/transfer/corridor-design.md web/en/cislunar-orbits/transfer/launch-windows.md
git commit -m "docs(web): add transfer corridor design and launch windows articles (zh/en)"
```

---

## Task 18: 更新 sidebar 配置（中英文）

**Files:**
- Modify: `web/.vuepress/sidebar.ts:15-19`
- Modify: `web/.vuepress/sidebar-en.ts:14-18`

**内容要求：**

将现有的 `orbitsSection` 从单层结构更新为三层结构（中文版）：

```typescript
const orbitsSection = {
  text: '地月空间飞行器运行轨道（任务轨道基础）',
  collapsible: false,
  children: [
    '/cislunar-orbits/',
    {
      text: 'NRHO（近直线晕轨道）',
      link: '/cislunar-orbits/nrho/',
      collapsible: true,
      children: [
        '/cislunar-orbits/nrho/',
        '/cislunar-orbits/nrho/l1-nrho',
        '/cislunar-orbits/nrho/l2-nrho',
        '/cislunar-orbits/nrho/stability-maintenance',
        '/cislunar-orbits/nrho/gateway-cases',
        '/cislunar-orbits/nrho/design-parameters',
      ],
    },
    {
      text: 'DRO（远距离逆行轨道）',
      link: '/cislunar-orbits/dro/',
      collapsible: true,
      children: [
        '/cislunar-orbits/dro/',
        '/cislunar-orbits/dro/mechanics',
        '/cislunar-orbits/dro/family-classification',
        '/cislunar-orbits/dro/applications',
        '/cislunar-orbits/dro/design-method',
      ],
    },
    {
      text: '地月转移轨道',
      link: '/cislunar-orbits/transfer/',
      collapsible: true,
      children: [
        '/cislunar-orbits/transfer/',
        '/cislunar-orbits/transfer/tli-overview',
        '/cislunar-orbits/transfer/ballistic-capture',
        '/cislunar-orbits/transfer/corridor-design',
        '/cislunar-orbits/transfer/launch-windows',
      ],
    },
  ],
}
```

英文版对应调整为 `/en/` 路径。

- [ ] **Step 1: 更新 sidebar.ts**

- [ ] **Step 2: 更新 sidebar-en.ts**

- [ ] **Step 3: 运行 gen-sidebar 验证**

```bash
cd web && npm run gen-sidebar
```

- [ ] **Step 4: 提交**

```bash
git add web/.vuepress/sidebar.ts web/.vuepress/sidebar-en.ts
git commit -m "feat(web): restructure orbits sidebar to 3-level hierarchy"
```

---

## Task 19: 验证与验收

**验收标准检查：**

- [ ] 三个专题目录下各有 5 篇中文章（含 README 总览）：`nrho/`、`dro/`、`transfer/`
- [ ] 每篇中文文章均有对应英文版本（同步提交保证）
- [ ] sidebar 中两个语言均正确显示三级结构（`npm run gen-sidebar` 后 `sidebar.auto.json` 更新）
- [ ] 每篇设计类文章含「仿真实验」外链（文章末尾小节）

- [ ] **Step 1: 运行构建验证**

```bash
cd web && npm run docs:build 2>&1 | tail -20
```

- [ ] **Step 2: 检查无 404 链接**

通过 VuePress 构建警告确认所有 permalink 有效。

- [ ] **Step 3: 提交最终验收 commit**

```bash
git add -A
git commit -m "docs(web): complete cislunar-orbits bilingual content expansion"
```

---

## 实施顺序

| Task | 内容 | 预计 commit |
|------|------|-------------|
| 1 | 目录结构 | 1 |
| 2 | 栏目首页重构 | 1 |
| 3-8 | NRHO 专题（5篇中英） | 6 |
| 9-13 | DRO 专题（5篇中英） | 5 |
| 14-17 | 转移轨道专题（4篇中英） | 4 |
| 18 | sidebar 更新 | 1 |
| 19 | 验证与验收 | 1 |

**合计约 19 个 Task，~19 个 commit。**
