---
permalink: /en/resources-tools/
title: Resources & Tools
description: Ephemerides, datasets, open-source orbit libraries, and programming notes—used together with the glossary and simulation lab.
lastUpdated: 2026-04-26
wechatShare:
  title: Cislunar Space Resources & Tools
  desc: Data, code libraries, and dataset index.
  image: /logo.png
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

# Introduction

When studying and researching content related to cislunar space, the first challenge is finding reference materials. These mainly include literature and various types of data, such as ephemeris data. For Chinese scholars, accessing and downloading content from foreign websites often presents difficulties. Therefore, establishing a dedicated cislunar space data repository is essential — one that provides various data resources for researchers to query and download.

Secondly, the acquisition and use of various tools also presents challenges. For example, cislunar orbit design and analysis require professional software such as STK and GMAT, which have a steep learning curve for beginners. Establishing a dedicated tool resource repository with download links, usage tutorials, and technical support helps researchers utilize these tools more efficiently.

To translate research into practice, algorithm implementation is required, demanding programming and coding skills. At the same time, learning from open-source code is crucial. However, based on observation, undergraduate and graduate students in aerospace engineering often lack systematic programming training and are unfamiliar with open-source workflows on platforms such as GitHub. This section therefore also points to practical programming notes where available.

## How this fits with the rest of the site

- Context: [what is cislunar space](/en/what-is-cislunarspace/), [orbits](/en/cislunar-orbits/)
- Terms: [glossary](/en/glossary/)
- Hands-on: [orbit simulation lab](/en/satellite-simulation/)
- Literature & programs: [research frontiers](/en/research-frontiers/)

## Orbit Design & Simulation Software

| Tool | Description |
|------|-------------|
| [GMAT](#gmat) | NASA open-source General Mission Analysis Tool for transfer trajectory design |
| [STK / Systems Tool Kit](#stk) | AGI (Ansys) commercial space simulation software for full mission lifecycle |
| [e2m2e](./e2m2e/) | Cislunar transfer trajectory design library (CR3BP) |
| [scipy](./scipy/) | Python Scientific Computing Library |
| [r2s2](./r2s2/) | Cislunar space-time coordinate transformation library |

## Python Astrodynamics & Orbit Libraries

| Tool | Description |
|------|-------------|
| [Orekit](#orekit) | ESA open-source low-level flight dynamics library (Java + Python wrapper) |
| [poliastro](#poliastro) | Pure Python astrodynamics and orbit simulation library |
| [Basilisk](#basilisk) | JPL open-source spacecraft dynamics simulation framework |
| [pykep](#pykep) | ESA / Italian aerospace community interplanetary trajectory design library |

## Data Resources

| Resource | Description |
|----------|-------------|
| [Datasets](./datasets/) | JPL ephemerides, lunar gravity models, space environment parameters |

## Lunar Exploration Data & AI Tools

| Tool | Description |
|------|-------------|
| [Digital Lunar Cloud Platform](#digital-lunar-cloud-platform) | World's most comprehensive lunar exploration data cloud by CAS |
| [Lunar Science Multimodal LLM V2.0](#lunar-science-multimodal-llm) | World's first lunar science multimodal AI model (2025 Digital Expo) |
| [Lunar & Planetary Data Distribution System](#lunar--planetary-data-distribution-system) | Planetary science data portal by CAS National Astronomical Observatory |

---

## GMAT

[GMAT](https://github.com/NASA-AMMOS/GMAT) (General Mission Analysis Tool) is NASA's open-source space trajectory design, optimization and navigation system, developed collaboratively with industry. It is the world's only fully open-source software for space mission design. GMAT supports full workflow from LEO to the Moon, libration points and deep space, with built-in propagators, trajectory optimizers and visualization.

- **Website**: [https://gmat.sourceforge.net/](https://gmat.sourceforge.net/)
- **GitHub**: [https://github.com/NASA-AMMOS/GMAT](https://github.com/NASA-AMMOS/GMAT)
- **Latest Version**: R2024a
- **License**: NASA Open Source Agreement
- **Use Cases**: Earth-Moon transfer design, DRO libration point search, impulsive maneuver optimization, mission simulation

## STK

[STK](https://www.agi.com/products/stk) (Systems Tool Kit, formerly Satellite Tool Kit) is developed by AGI (now Ansys) and is a leading commercial off-the-shelf (COTS) analysis software in aerospace. STK supports the full mission lifecycle: orbit design, communication link analysis, attitude simulation, coverage analysis and deep space mission design. Its Astrogator module handles complex orbital maneuvers including Earth-Moon L1/L2 transfers and Halo orbit design.

- **Website**: [https://www.agi.com/products/stk](https://www.agi.com/products/stk)
- **Academic Program**: [AGI Academic Initiative](https://www.agi.com/pages/academic)
- **Use Cases**: Deep space mission simulation, constellation design, communication window analysis, sensor coverage analysis

## Orekit

[Orekit](https://www.orekit.org/) is a low-level space flight dynamics library written in Java, maintained by CS GROUP. Its origins trace back to space agencies and it has been open-source since 2008. Orekit provides orbit propagation, attitude definition, coordinate frames, time systems, event detection, orbit determination, and more. It is widely used in operational flight dynamics systems and research worldwide.

- **Website**: [https://www.orekit.org/](https://www.orekit.org/)
- **GitLab**: [https://gitlab.orekit.org/orekit/orekit](https://gitlab.orekit.org/orekit/orekit)
- **GitHub Mirror**: [https://github.com/CS-SI/Orekit](https://github.com/CS-SI/Orekit)
- **Python Wrappers**:
  - [JCC Wrapper](https://gitlab.orekit.org/orekit-labs/python-wrapper/-/wikis/home)
  - [JPype Wrapper](https://gitlab.orekit.org/orekit/orekit_jpype/-/tree/master)
- **License**: Apache License 2.0
- **Language**: Java 8+
- **Math Dependency**: [Hipparchus](https://hipparchus.org/) 4.0.3
- **Use Cases**: Orbit propagation (analytical, semi-analytical, numerical, TLE), orbit determination (least-squares, Kalman), low-thrust trajectory design, atmospheric density modeling, frame transformations, eclipse and visibility event detection

## poliastro

[poliastro](https://www.poliastro.space/) is a pure Python open-source library focused on orbital mechanics computation and spacecraft trajectory simulation. It offers an intuitive API for orbit propagation, maneuver design, trajectory visualization and interplanetary mission analysis. **Note: poliastro is archived and no longer actively maintained** (see [poliastro#1640](https://github.com/poliastro/poliastro/issues/1640) for context); forks are welcome under the MIT license.

- **Website**: [https://www.poliastro.space/](https://www.poliastro.space/)
- **Docs**: [https://docs.poliastro.space](https://docs.poliastro.space)
- **GitHub**: [https://github.com/poliastro/poliastro](https://github.com/poliastro/poliastro)
- **License**: MIT
- **Python**: 3.8 – 3.11
- **Core Features**: analytical and numerical orbit propagation (Kepler, Cowell), classical orbital elements ↔ position/velocity conversion, coordinate frame transformations, impulsive maneuvers (Hohmann, bielliptic, Lambert), 2D/3D static and interactive plotting, planetary ephemerides via SPICE kernels, NEO computation, atmospheric models (COESA 1962/1976, Jacchia)
- **Tech Stack**: Numba JIT acceleration, `astropy.units` for physical quantities, NumPy/SciPy numerics, Matplotlib/Plotly visualization
- **Use Cases**: LEO/MEO/GEO orbit design, interplanetary transfer orbits, Lambert problem solving, low-thrust trajectory analysis, rapid mission prototyping and visualization

## Basilisk

[Basilisk](https://bsk-lair.com/) is JPL's advanced spacecraft dynamics simulation framework with a modular architecture, supporting attitude control, orbit propagation, sensor simulation and mission scenario analysis. It uses the BSK_Main framework to manage simulation tasks with rich dynamics submodules.

- **Website**: [https://bsk-lair.com/](https://bsk-lair.com/)
- **GitHub**: [https://github.com/AstroYuvPA/basilisk](https://github.com/AstroYuvPA/basilisk)
- **License**: NASA Open Source Agreement
- **Use Cases**: Spacecraft attitude control simulation, orbital maneuver analysis, multi-body dynamics

## pykep

[pykep](https://esa.github.io/pykep/) (C++ core library: **kep3**) is a scientific library for interplanetary trajectory design and orbital mechanics, led by ESA's Advanced Concepts Team (ACT) and co-maintained with the Italian aerospace community. It is designed for **fast prototyping of research ideas** in trajectory optimization and orbital mechanics, not for operational flight use.

The library is written in modern C++23 and exposed to Python via pybind11, combining computational performance with scripting convenience. pykep integrates a broad set of algorithmic modules spanning classical orbital mechanics to modern low-thrust optimization: Lambert problem solvers, Keplerian/Lagrangian propagation, Sims–Flanagan and ZOH (Zero-Order Hold) trajectory legs, Taylor adaptive integrators via heyoka (supporting CR3BP, BCP, Pontryagin's maximum principle, etc.), and user-defined planet interfaces (UDPLA) supporting Keplerian orbits, JPL ephemerides, VSOP2013, SPICE kernels, and TLE propagation.

- **Website / Docs**: [https://esa.github.io/pykep/](https://esa.github.io/pykep/)
- **GitHub**: [https://github.com/esa/pykep](https://github.com/esa/pykep)
- **License**: MPL-2.0 (Mozilla Public License 2.0)
- **Languages**: C++23 + Python (3.11 – 3.14)
- **Key Dependencies**: heyoka (Taylor integration / LLVM JIT), xtensor (N-dimensional arrays), pagmo (optimization framework), Boost, fmt, spdlog
- **Use Cases**: Interplanetary transfer design, gravity-assist sequence optimization, low-thrust trajectory optimization, Sims–Flanagan transcription, CR3BP/BCP dynamics simulation, Taylor integration prototyping, orbital element and ephemeris conversions

## Digital Lunar Cloud Platform

The [Digital Lunar Cloud Platform](http://moon.bao.ac.cn/) is led by the Institute of Geochemistry, Chinese Academy of Sciences (CAS). It is currently the world's most comprehensive lunar exploration data cloud, integrating scientific research, engineering applications and science education. The platform aggregates massive lunar exploration data including imagery, topography, spectral, radar, gravity and geological maps, providing intelligent analysis tools such as research situational awareness and automated landing site selection.

At the 2025 Digital Expo, the platform completed API integration with the Lunar Science Multimodal LLM V2.0, achieving an intelligent upgrade.

- **Platform**: [http://moon.bao.ac.cn/](http://moon.bao.ac.cn/)
- **Data Coverage**: Chang'e series, LRO, GRAIL and other lunar exploration mission data

## Lunar Science Multimodal LLM

The Lunar Science Multimodal Professional LLM, jointly developed by the CAS Institute of Geochemistry and Alibaba Cloud, released V1.0 at the 2024 Digital Expo and V2.0 at the 2025 Digital Expo. Built on Alibaba Cloud's Tongyi series foundation models with RAG retrieval-augmented technology, it achieves over 80% accuracy in lunar crater age and morphology classification. V2.0 is now integrated into the Digital Lunar Cloud Platform for enhanced intelligent analysis.

- **Institutions**: CAS Institute of Geochemistry × Alibaba Cloud
- **Core Capabilities**: Lunar crater recognition and classification, multimodal lunar data analysis
- **Technology**: Tongyi vision models + multimodal LLM + RAG knowledge base

## Lunar & Planetary Data Distribution System

The [Lunar & Planetary Data Distribution System](https://moon.bao.ac.cn/), hosted by the CAS National Astronomical Observatory, provides abundant planetary science research data including lunar remote sensing imagery, terrain models and gravity data. It is a key data source for lunar and planetary science research.

- **Platform**: [https://moon.bao.ac.cn/](https://moon.bao.ac.cn/)
- **Host**: Chinese Academy of Sciences National Astronomical Observatory
