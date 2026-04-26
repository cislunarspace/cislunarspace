---
title: ATK (Aerospace Tool Kit)
description: NUDT's domestically developed aerospace mission analysis and design software
---

## Overview

ATK (Aerospace Tool Kit) is a domestically developed aerospace mission analysis and design software independently developed by the School of Aerospace Science at the National University of Defense Technology (NUDT) in China. Version 4.0 was officially released on April 11, 2026, featuring fully self-controlled core code. It currently serves over 300 organizations and 53 universities, supporting major missions including Tiangong, Shenzhou, and Tianzhou.

## Key Information

| Item | Details |
|------|---------|
| **Developer** | School of Aerospace Science, NUDT |
| **License** | Commercial software (serving 300+ organizations) |
| **Latest Version** | 4.0 (released April 11, 2026) |
| **Platform** | Compatible with domestic OS and CPUs |
| **Documentation** | [https://atkdocs.smsat.space](https://atkdocs.smsat.space) |

## Main Capabilities

ATK 4.0 comprises **5 categories and 29 modules**, covering the full lifecycle of aerospace missions:

- **Orbit Design & Simulation**: Supports complex scenarios including LEO, cislunar space, and deep space orbit design and simulation
- **Orbital Maneuver Planning**: General-purpose maneuver planning tools that can complete in minutes what previously required significant human effort
- **Rendezvous & Docking Simulation**: Planning and simulation for crewed space station and spacecraft rendezvous and docking missions
- **Collision Warning & Avoidance**: Spacecraft collision risk assessment and avoidance strategy generation
- **Deviation Analysis**: Mission deviation evaluation and sensitivity analysis
- **Advanced Constellation Design**: Large-scale constellation deployment, optimization, and coverage analysis
- **Visibility & Coverage Analysis**: Multi-target visibility and regional coverage performance analysis
- **Lifetime Prediction**: Orbital lifetime prediction and atmospheric decay analysis
- **Digital Earth Visualization**: Plugin-based scene visualization engine supporting massive object loading and cross-scale display (from solar system to individual satellites)
- **Scripting (ATKS)**: Built-in ATK Script language supporting automated mission workflows and batch simulation
- **SDK / APIs**: Provides both CONNECT mode (Python/MATLAB) and COMPONENT mode (C++) for secondary development

## Application Scenarios

- Full-process launch and return simulation for launch vehicles
- Orbit design and mission planning for satellites, spacecraft, and space stations
- Cislunar transfer orbit and Earth-Moon L1/L2 point (NRHO, Halo, etc.) mission design
- Spacecraft rendezvous, docking, and relative proximity operations (RPO) mission planning
- Deep space exploration mission simulation and orbit optimization
- Large-scale constellation deployment and operations analysis

## Technical Architecture

- **Frontend Framework**: Vue 3 + TypeScript
- **Documentation Engine**: VuePress 2 + vuepress-theme-hope (supports both online and offline modes)
- **Visualization Engine**: Self-developed digital globe engine with plugin-based extensibility
- **Computing Kernel**: High-precision, high-efficiency orbital computing kernel supporting multi-coordinate-system cross-scale situational awareness
- **Scripting Language**: ATKS (ATK Script) with syntax highlighting and IDE integration
- **Compatibility**: Supports Windows and Linux; adapted for domestic Kylin OS and domestic CPUs

## Key Features & Advantages

- **Fully Self-Controlled**: 100% independently developed core code, closely aligned with China's aerospace mission requirements
- **Domestic Platform Compatible**: Highly compatible with domestic operating systems and CPUs
- **WYSIWYG**: Visual interface supporting click-and-drag sketching of aerospace mission trajectory curves
- **Efficient Maneuver Planning**: General-purpose orbital maneuver planning significantly shortens mission design cycles
- **Full-Chain Coverage**: Complete toolchain from orbit design, mission simulation, visualization to secondary development
- **Multi-Mode Deployment**: Supports online documentation site, offline standalone version, and Kylin OS dedicated version

## Official Resources

- **Online Documentation**: [https://atkdocs.smsat.space](https://atkdocs.smsat.space)
- **Release Coverage**: [NUDT Official Report (in Chinese)](https://new.qq.com/rain/a/20260411A06VRP00)
- **Python Development Guide**: [ATK Connect Mode Python Guide (in Chinese)](https://blog.csdn.net/qq_33254264/article/details/150386978)
- **Open-Source Docs Repo**: [https://gitcode.com/jinke18/atk-doc](https://gitcode.com/jinke18/atk-doc)
