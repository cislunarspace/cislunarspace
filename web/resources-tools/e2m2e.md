---
title: e2m2e - 地月空间算法工具集
description: Python + Rust 计算内核的地月空间算法工具集，覆盖任务轨道设计、转移设计、轨道保持、轨道预报与时空坐标转换
keywords: e2m2e, CR3BP, BCR4BP, 转移轨道, 轨道设计, 轨道保持, 历表动力学, SPICE, MCP, 低推力
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-09-24
wechatShare:
  title: e2m2e 地月空间算法工具集
  desc: Python + Rust 计算内核的地月空间算法工具集，覆盖任务轨道设计、转移设计、轨道保持、轨道预报与时空坐标转换
  image: /logo.png
og:
  title: e2m2e - 地月空间算法工具集
  description: Python + Rust 计算内核的地月空间算法工具集，覆盖任务轨道设计、转移设计、轨道保持、轨道预报与时空坐标转换
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: e2m2e 地月空间算法工具集
  description: Python + Rust 计算内核的地月空间算法工具集，覆盖任务轨道设计、转移设计、轨道保持、轨道预报与时空坐标转换
  image: /logo.png
permalink: /resources-tools/e2m2e/
---

# e2m2e: Earth to Moon, Moon to Earth

[e2m2e](https://github.com/cislunarspace/CODE-core)（Earth to Moon, Moon to Earth）是地月空间算法工具集，提供 Python 接口与 Rust 计算内核，采用 Apache 2.0 协议开源。仓库原名为 e2m2e，现已改名为 CODE-core，原仓库地址会自动跳转到新地址。本文按 e2m2e 5.9.5 说明。

## 核心功能

### 时空系统

- 坐标系转换：J2000 / ITRF93（SPICE 高精度）/ IAU 2006，GMAT 兼容的原生 ITRF，动态坐标轴 VNB / LVLH。
- 时空联合转换：TDT+GCRS ↔ TDB+EBCRS（r2s2 后端，含相对论项）。
- SPICE 星历与时间管理：内核加载、UTC / TDB / TAI 时间尺度、天体状态与帧旋转查询。

### 积分器与动力学

- Rust 积分器内核：单步 RK（PD45 / PD78 / RK89）、Adams 多步、Störmer–Cowell 二阶积分；状态转移矩阵（STM）传播；事件检测（terminal / direction 语义）。
- 动力学模型：CR3BP（快速设计）、星历 N 体（SPICE，精确外推）、含太阳解析摄动的 BCR4BP，以及三者之间的转换。
- 高精度力模型：点质量与第三体引力、球谐重力场（含固体潮）、ECOM 9 系数光压、大气阻力、太阳光压、连续推力。

### 任务轨道设计

- 周期轨道族：DRO、Halo、Lyapunov、Lissajous、共振轨道（RO）、DPO、Axial、三角平动点 SPO / LPO、Horseshoe。
- 数值算法：微分修正、多重打靶、延拓；全链路 CR3BP 初猜 → 星历修正 → 高精度预报。
- 名义轨道契约（NominalOrbit）：等间距状态表 + Floquet 基 + 投影因子，供轨道保持直接消费。

### 转移轨道设计

- 脉冲转移：Lambert 求解与 porkchop 扫描、多脉冲优化（Lawden 主矢量检验）、霍曼直接转移（HMN）。
- 低能量转移：月球引力辅助（LGA）、WSB 太阳引力辅助弹道捕获、不变流形与庞加莱截面拼接。
- 低推力转移：Q-law 初猜 + 打靶 / 配点。
- 网格搜索 + 非线性规划两步法（Rust Rayon 并行）。

### 轨道控制

- 三种控制律：特征点、目标点严格、目标点宽松；蒙特卡洛测定轨与推力误差仿真。
- 角动量管理：姿态发动机联合控制。

## 支持的轨道类型

| 轨道类型 | 描述 |
| --------- | ------ |
| **DRO** | 远距离逆行轨道（Distant Retrograde Orbit） |
| **Halo** | Halo 轨道，包含 NRHO（近直线晕轨道）变体 |
| **Lyapunov** | Lyapunov 轨道，平面周期轨道 |
| **Lissajous** | Lissajous 轨道，拟周期轨道 |
| **RO** | 共振轨道，支持 2:1、3:1、3:2、4:1、4:3，缺省为 3:1 |
| **DPO** | 远距离顺行轨道（Distant Prograde Orbit） |
| **Axial** | Axial 轨道 |
| **SPO / LPO** | 三角平动点轨道，包含 SPO 与 LPO |
| **Horseshoe** | 马蹄形轨道 |

## 接口方式

### Python Facade

Python 调用通过 `Facade` 统一进入任务级接口。Facade、MCP 与 CLI 共用同一份工具清单和请求模型，保持 19 个工具的接口定义同源。

### MCP

e2m2e 为 19 个工具提供 MCP 接口。

安装 MCP 额外依赖：

```bash
uv pip install "e2m2e[mcp]"
```

在 MCP 客户端配置中注册服务器（`command` 指向安装了 e2m2e 的环境里的可执行文件，多数 MCP 客户端都采用这一 `mcpServers` 格式）：

```json
{
  "mcpServers": {
    "e2m2e": {
      "command": "/path/to/venv/bin/e2m2e",
      "args": ["mcp-serve"],
      "cwd": "/path/to/e2m2e-repo"
    }
  }
}
```

配置完成后在客户端直接用自然语言驱动，例如：

> 设计一条 L2 南族 NRHO，近月点高度 3000 km。

### CLI

CLI 子命令与 MCP 工具一一对应，命令行中的下划线转换为连字符；使用 `e2m2e --help` 查看完整帮助。

## 快速开始

设计一条地月 L2 Halo 轨道：

```python
from e2m2e.api import Facade

facade = Facade()

result = facade.design_orbit(
    orbit_type="Halo",
    collinear_point=2,
    amplitude=30000.0,
    epoch=[2024, 1, 1, 0, 0, 0.0],
    duration=365.25 * 86400.0,
)

print(result.orbit_type)
print(result.initial_state)
```

## 安装

使用 [uv](https://docs.astral.sh/uv/) 安装：

```bash
uv pip install e2m2e
```

从源码开发：

```bash
git clone https://github.com/cislunarspace/CODE-core.git
cd e2m2e
make dev
```

e2m2e 所需的全部星历数据已打包在 [GitHub Release](https://github.com/cislunarspace/CODE-core/releases) 的 `kernels-v1` 中，`make dev` 会自动下载到 `kernels/`；也可手动下载解压到该目录。

## 项目架构

项目采用 ADR 0011 定义的五层架构，由内到外严格单向依赖：`data/` 是数据层，负责常数、星历、坐标系数据、类型与模板及轨道库存储；`crates/` 是 Rust 数值层，包含 `cspice`、`e2m2e-integrators`、`e2m2e-spice`、`e2m2e-propagation`、`e2m2e-levelset`、`e2m2e-hjb-dynamics`、`e2m2e-forces` 7 个 crate；`algorithm/` 是算法层，负责动力学与力模型编排、轨道族、微分修正、转移等算法；`api/` 是接口层，提供 Facade、MCP、CLI 与 sidecar；`tools/` 是工具层。

## 相关资源

- [在线文档](https://cislunarspace.github.io/CODE-core/)
- [GitHub 仓库](https://github.com/cislunarspace/CODE-core)
- [PyPI](https://pypi.org/project/e2m2e/)
