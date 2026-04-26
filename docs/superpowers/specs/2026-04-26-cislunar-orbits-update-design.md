# 飞行器轨道栏目全面更新设计

**日期：** 2026-04-26
**状态：** 已批准
**范围：** cislunar-orbits 栏目内容重构 + 扩充 + 双语同步

---

## 1. 目标

对 `cislunar-orbits` 栏目进行内容深度扩充、结构重组、全双语同步更新，并集成仿真交互内容。

---

## 2. 栏目结构

```
cislunar-orbits/                      # 栏目首页（重构现有 README.md）
├── nrho/                             # NRHO 专题
│   ├── README.md                     # NRHO 总览（动力学背景、分类、工程应用）
│   ├── l1-nrho.md                    # L1 NRHO：位置、特性、设计约束
│   ├── l2-nrho.md                   # L2 NRHO：与 L1 的差异、用途
│   ├── stability-maintenance.md      # 稳定性与轨道维持：偏差敏感度、ΔV 预算
│   ├── gateway-cases.md              # 工程案例：Gateway 任务、国际合作
│   └── design-parameters.md          # 设计参数：周期、振幅、倾角约束
├── dro/                              # DRO 专题
│   ├── README.md                     # DRO 总览（CR3BP 逆行族、动力学图景）
│   ├── mechanics.md                  # 动力学机理：逆行特性、雅可比常数
│   ├── family-classification.md      # 轨道族分类：L1/L2 DRO、Lyapunov 关联
│   ├── applications.md               # 工程应用：救援轨道、中继、编队
│   └── design-method.md              # 设计方法：初始条件选取、周期轨道计算
├── transfer/                         # 地月转移轨道专题
│   ├── README.md                     # 转移轨道总览（分类、TLI 时谱）
│   ├── tli-overview.md              # TLI 概览：原理、发射窗口、能量预算
│   ├── ballistic-capture.md         # 弹道捕获：Ballistic capture 原理
│   ├── corridor-design.md            # 转移走廊：低能 vs 高能、晕轨道插入
│   └── launch-windows.md            # 发射窗口：月球相位、发射机会分析
└── figures/                          # 共享轨道图示（.gitkeep）

英文版：en/cislunar-orbits/ 下结构完全对应。
```

---

## 3. 文章内容规划

| 轨道类型 | 文章数量 | 内容覆盖 |
|----------|----------|----------|
| NRHO | 5 篇 | 总览、L1 NRHO、L2 NRHO、稳定性与维持、Gateway 案例 |
| DRO | 5 篇 | 总览、动力学机理、轨道族分类、工程应用、设计方法 |
| 转移 | 5 篇 | 总览、TLI 概览、弹道捕获、转移走廊、发射窗口 |

**每篇文章深度：概念 + 设计方法**，包含基本动力学模型、设计约束、案例分析，有适量公式。

---

## 4. 交互内容集成

- 每篇设计类文章末尾加「仿真实验」小节，链接到 `/satellite-simulation/` 中对应预置场景
- 在 `satellite-simulation/` 下新增 NRHO / DRO / Transfer 三组仿真配置
- 交互内容不增加文章数量，作为现有文章的延伸补充

---

## 5. Sidebar 更新

中英文 sidebar 均重构 `orbitsSection`，将三个专题（NRHO / DRO / Transfer）作为二级目录展开，每专题含 4-5 个子页面。

---

## 6. 实施顺序

| 阶段 | 内容 |
|------|------|
| Phase 1 | 创建目录结构 + 编写中文版各专题 README.md |
| Phase 2 | 补全中文子文章（每专题 4-5 篇） |
| Phase 3 | 同步英文版（与中文一一对应） |
| Phase 4 | 更新 sidebar 配置（zh + en） |
| Phase 5 | 仿真实验场景补充 |

---

## 7. 验收标准

- [ ] 三个专题目录下各有 5 篇中文章（含 README 总览）
- [ ] 每篇中文文章均有对应英文版本
- [ ] sidebar 中两个语言均正确显示三级结构
- [ ] 每篇设计类文章含「仿真实验」外链
