---
permalink: /resources-tools/
title: 地月空间资源与工具
description: 星历与数据集、开源轨道库与编程工具入口；配合仿真教学与术语检索使用。
lastUpdated: 2026-04-26
wechatShare:
  title: 地月空间资源与工具
  desc: 数据、代码库与数据集索引。
  image: /logo.png
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

# 引言

在学习和研究地月空间相关领域的内容时，首先面临的是资料查询问题。资料主要包括文献和各类数据，如星历数据等。对于中国学者而言，访问国外网站下载内容常存在障碍。因此，建立一个专门的地月空间资料库十分必要，该库能提供各类数据资源，便于研究人员查询与下载。

其次，各类工具的获取与使用也存在困难。例如，地月空间轨道设计与分析需使用STK、GMAT等专业软件，而这些工具对初学者而言门槛较高。建立专门的工具资源库，提供下载链接、使用教程和技术支持，有助于研究人员更高效地利用这些工具开展研究。

为实现研究落地，还需进行算法实现，这要求研究人员具备程序设计与编程能力。同时，借鉴开源代码至关重要。然而，根据观察，航空宇航科学与技术专业的本科生和研究生在学习过程中，普遍缺乏系统的程序设计与编程训练，对 GitHub 等平台上的开源代码学习与使用也不够熟悉。因此，该知识库还将提供高阶编程技巧，帮助研究人员提升编程能力，更好地开展地月空间相关的算法开发与应用。

## 与本站其他栏目的关系

- 概念与轨道背景：[地月空间是什么](/what-is-cislunarspace/)、[地月空间轨道](/cislunar-orbits/)
- 术语与缩写：[术语词典](/glossary/)
- 交互演示：[卫星轨道仿真](/satellite-simulation/)
- 文献与项目线索：[研究前沿](/research-frontiers/)

## 轨道设计与仿真软件

| 工具 | 说明 |
|------|------|
| [GMAT](#gmat) | NASA 开源通用任务分析工具，支持地月转移轨道设计与优化 |
| [STK / Systems Tool Kit](#stk) | AGI（Ansys）商业航天仿真软件，支持深空任务全周期分析 |
| [e2m2e](./e2m2e/) | 地月空间转移轨道设计库（CR3BP） |
| [scipy](./scipy/) | Python 科学计算库 |
| [r2s2](./r2s2/) | 地月空间时空坐标转换库 |

## Python 天体力学与轨道库

| 工具 | 说明 |
|------|------|
| [Orekit](#orekit) | ESA 开源低层航天动力学库（Java，附 Python 封装） |
| [poliastro](#poliastro) | Python 天体力学与轨道仿真库 |
| [Basilisk](#basilisk) | JPL 开源航天器动力学仿真框架 |
| [pykep](#pykep) | ESA / 意大利航天社区行星际轨迹设计科学库 |

## 数据资源

| 资源 | 说明 |
|------|------|
| [数据集](./datasets/) | JPL星历、月球重力场模型、空间环境参数等 |

## 月球探测数据与智能工具

| 工具 | 说明 |
|------|------|
| [数字月球云平台](#数字月球云平台) | 中科院地化所建设的国际最全月球探测数据云平台 |
| [月球科学多模态大模型 V2.0](#月球科学多模态大模型) | 国际首个月球科学多模态专业大模型（2025数博会发布） |
| [月球与行星数据发布系统](#月球与行星数据发布系统) | 中科院国家天文台主办的行星科学数据门户 |

---

## GMAT

[GMAT](https://github.com/NASA-AMMOS/GMAT)（General Mission Analysis Tool）是 NASA 和工业界合作开发的开源空间任务设计、优化和导航系统，是目前世界上唯一用于空间任务设计的全开源软件。支持从低地球轨道到月球、自由点及深空飞行任务的全流程分析，内置轨道传播器、轨迹优化器和可视化界面。

- **官网**：[https://gmat.sourceforge.net/](https://gmat.sourceforge.net/)
- **GitHub**：[https://github.com/NASA-AMMOS/GMAT](https://github.com/NASA-AMMOS/GMAT)
- **最新版本**：R2024a
- **许可**：NASA Open Source Agreement
- **适用场景**：地月转移轨道设计、DRO 稳定点搜索、脉冲机动优化、任务仿真

## STK

[STK](https://www.agi.com/products/stk)（Systems Tool Kit，原 Satellite Tool Kit）由美国 AGI 公司（现 Ansys）开发，是航天领域领先的商用现货（COTS）分析软件。支持航天任务全周期，覆盖轨道设计、通信链路分析、姿态仿真、覆盖分析和深空任务设计。内置 Astrogator 模块可进行复杂轨道机动设计，包括地月 L1/L2 点转移和 Halo 轨道设计。

- **官网**：[https://www.agi.com/products/stk](https://www.agi.com/products/stk)
- **教育版申请**：[AGI 学术计划](https://www.agi.com/pages/academic)
- **适用场景**：深空任务仿真、星座设计、通信窗口分析、传感器覆盖分析

## Orekit

[Orekit](https://www.orekit.org/) 是一个用 Java 编写的底层航天飞行动力学库，由 CS GROUP 维护。其起源可追溯至航天机构，自 2008 年起开源。Orekit 提供轨道传播、姿态定义、坐标参考系、时间系统、事件检测、轨道确定等功能，广泛应用于全球 operational 飞行动力学系统和学术研究。

- **官网**：[https://www.orekit.org/](https://www.orekit.org/)
- **GitLab**：[https://gitlab.orekit.org/orekit/orekit](https://gitlab.orekit.org/orekit/orekit)
- **GitHub 镜像**：[https://github.com/CS-SI/Orekit](https://github.com/CS-SI/Orekit)
- **Python 封装**：
  - [JCC 封装](https://gitlab.orekit.org/orekit-labs/python-wrapper/-/wikis/home)
  - [JPype 封装](https://gitlab.orekit.org/orekit/orekit_jpype/-/tree/master)
- **许可**：Apache License 2.0
- **语言**：Java 8+
- **数学依赖**：[Hipparchus](https://hipparchus.org/) 4.0.3
- **适用场景**：轨道传播（解析法、半解析法、数值法、TLE）、轨道确定（最小二乘、卡尔曼）、低推力轨迹设计、大气密度建模、坐标系转换、日食与可见性事件检测

## poliastro

[poliastro](https://www.poliastro.space/) 是一个纯 Python 开源天体力学库，专注于轨道力学计算和航天器轨迹仿真。提供直观的 API，支持轨道传播、机动设计、轨迹可视化和行星际任务分析。**注意：poliastro 已归档，不再积极维护**（详见 [poliastro#1640](https://github.com/poliastro/poliastro/issues/1640)），但欢迎基于 MIT 许可进行 Fork 和二次开发。

- **官网**：[https://www.poliastro.space/](https://www.poliastro.space/)
- **文档**：[https://docs.poliastro.space](https://docs.poliastro.space)
- **GitHub**：[https://github.com/poliastro/poliastro](https://github.com/poliastro/poliastro)
- **许可**：MIT
- **Python 版本**：3.8 – 3.11
- **核心功能**：解析与数值轨道传播（Kepler、Cowell）、经典轨道要素 ↔ 位置速度矢量转换、坐标系变换、脉冲机动设计（霍曼转移、双椭圆转移、Lambert 问题）、2D/3D 静态与交互式轨迹绘图、基于 SPICE kernels 的行星历表、近地天体（NEO）计算、大气模型（COESA 1962/1976、Jacchia）
- **技术特点**：Numba JIT 加速、`astropy.units` 物理量单位系统、NumPy/SciPy 数值计算、Matplotlib/Plotly 可视化
- **适用场景**：LEO/MEO/GEO 轨道设计、行星际转移轨道、Lambert 问题求解、低推力轨迹分析、快速任务原型开发与可视化

## Basilisk

[Basilisk](https://bsk-lair.com/) 是 JPL（NASA 喷气推进实验室）开发的高级航天器动力学仿真框架，采用模块化架构，支持姿态控制、轨道传播、传感器仿真和任务场景分析。采用 BSK_Main 框架管理仿真任务，包含丰富的动力学子模块。

- **官网**：[https://bsk-lair.com/](https://bsk-lair.com/)
- **GitHub**：[https://github.com/AstroYuvPA/basilisk](https://github.com/AstroYuvPA/basilisk)
- **许可**：NASA Open Source Agreement
- **适用场景**：航天器姿态控制仿真、轨道机动分析、多体动力学

## pykep

[pykep](https://esa.github.io/pykep/)（C++ 核心库名为 **kep3**）是 ESA 先进概念团队（ACT）主导开发的行星际轨迹设计与轨道力学科学库，与意大利航天社区共同维护。其定位是航天轨迹优化与轨道力学研究的**快速原型开发工具**，不直接用于实际飞行任务。

库的核心由现代 C++23 编写，通过 pybind11 提供 Python 接口，因此兼具计算性能与脚本化便利。pykep 集成了丰富的算法模块，涵盖从经典轨道力学到现代低推力优化的多个层次：Lambert 问题求解、开普勒/拉格朗日传播、Sims–Flanagan 与 ZOH（Zero-Order Hold）轨迹段、基于 heyoka 的泰勒自适应积分器（支持受限三体问题 CR3BP、双圆限制四体问题 BCP、庞特里亚金极大值原理等），以及用户自定义行星接口（UDPLA，支持开普勒轨道、JPL 星历、VSOP2013、SPICE kernels、TLE 等）。

- **官网 / 文档**：[https://esa.github.io/pykep/](https://esa.github.io/pykep/)
- **GitHub**：[https://github.com/esa/pykep](https://github.com/esa/pykep)
- **许可**：MPL-2.0（Mozilla Public License 2.0）
- **语言**：C++23 + Python（3.11 – 3.14）
- **核心依赖**：heyoka（泰勒积分 / LLVM JIT）、xtensor（多维数组）、pagmo（优化框架）、Boost、fmt、spdlog
- **适用场景**：行星际转移轨道设计、引力辅助序列优化、低推力轨迹优化、Sims–Flanagan 编班、CR3BP/BCP 动力学仿真、泰勒积分快速原型、轨道要素与历表转换

## 数字月球云平台

[数字月球云平台](http://moon.bao.ac.cn/) 由中科院地球化学研究所牵头建设，是目前国际上月球探测数据最齐全的云平台，集科学研究、工程应用和科普教育于一体。平台已汇聚海量月球探测与研究数据，包括影像、地形、光谱、雷达、重力以及地质图等多源数据，提供科研态势感知、着陆区自动选址等智能分析工具。

2025 年数博会上，平台完成与月球科学多模态专业大模型 V2.0 的 API 对接集成，实现智能化升级。

- **平台地址**：[http://moon.bao.ac.cn/](http://moon.bao.ac.cn/)
- **数据覆盖**：嫦娥系列、LRO、GRAIL 等探月工程数据

## 月球科学多模态大模型

月球科学多模态专业大模型由中科院地球化学研究所与阿里云联合研发，于 2024 年数博会首发 V1.0，2025 年数博会发布 V2.0 版本。该模型以阿里云通义系列为基模，结合 RAG 检索增强技术，在月球撞击坑年代和形态判别准确率达 80% 以上。V2.0 版本已集成到数字月球云平台，提供更强大的智能分析能力。

- **研究机构**：中科院地球化学研究所 × 阿里云
- **核心能力**：月球撞击坑识别与分类、多模态月球数据分析
- **技术基础**：通义视觉模型 + 多模态大模型 + RAG 知识库

## 月球与行星数据发布系统

[月球与行星数据发布系统](https://moon.bao.ac.cn/) 由中科院国家天文台主办，提供丰富的行星科学研究数据，包括月球遥感影像、地形模型、重力场数据等，是月球与行星科学研究的重要数据来源。

- **平台地址**：[https://moon.bao.ac.cn/](https://moon.bao.ac.cn/)
- **主办单位**：中国科学院国家天文台
