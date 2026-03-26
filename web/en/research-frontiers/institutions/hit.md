---
layout: Page
sidebar: /en/
permalink: /en/research-frontiers/institutions/hit/
title: Research Institutions in Cislunar Space | Harbin Institute of Technology
description: An overview of Harbin Institute of Technology's strengths, platforms, and representative research directions related to cislunar space.
keywords: Harbin Institute of Technology, HIT, cislunar space, lunar exploration, deep space exploration, lunar navigation, lunar landing
author: Mtrya
date: 2026-03-15
lastUpdated: 2026-03-15
wechatShare:
  title: Research Institutions in Cislunar Space | Harbin Institute of Technology
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Research Institutions in Cislunar Space | Harbin Institute of Technology
  description: An overview of Harbin Institute of Technology's strengths, platforms, and representative research directions related to cislunar space.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Research Institutions in Cislunar Space | Harbin Institute of Technology
  description: An overview of Harbin Institute of Technology's strengths, platforms, and representative research directions related to cislunar space.
  image: /logo.png
---

> Author: [Mtrya](https://github.com/Mtrya)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

# Harbin Institute of Technology

Harbin Institute of Technology (HIT) is a Ministry of Industry and Information Technology university and a national Double First-Class institution, with a long track record in aerospace engineering. HIT has participated in major national space programs for decades, with notable engineering capability in small satellite development and deep-space mission support.

In 1987, HIT established China's first school of astronautics, dedicated to cultivating advanced aerospace talent and carrying out high-technology space research. Today, the school covers mechanics, optical engineering, control science and engineering, aerospace science and technology, and integrated circuit science and engineering. By May 2025, HIT had developed and successfully launched 36 satellites. The most relevant to cislunar space are the `Longjiang-2` lunar microsatellite and the `Tiandu-2` lunar-orbit technology demonstrator.

## Platforms and capabilities relevant to cislunar space

### The School of Astronautics and the satellite development chain

The School of Astronautics is HIT's main anchor for cislunar-related work. Around the school, the Satellite Technology Institute, and related small-satellite development efforts, HIT has built a chain spanning mission design, subsystem development, payload integration, ground support, and on-orbit verification — the conditions needed to move work from thesis to flight hardware.

### Verified capability in lunar-orbit missions

In 2018, HIT-developed `Longjiang-1` and `Longjiang-2` launched alongside the `Queqiao` relay satellite. `Longjiang-2` later entered lunar orbit, carried out imaging and scientific experiments, and became the first microsatellite to independently complete translunar transfer, lunar orbit insertion, and lunar-orbit flight. HIT was the first university in the world to place a spacecraft into lunar orbit.

In 2024, HIT independently developed `Tiandu-2`, a 15 kg satellite flying in formation with `Tiandu-1` in lunar orbit, focused on communication and navigation technology validation. Where `Longjiang-2` demonstrated the ability to reach and operate in lunar orbit, `Tiandu-2` addresses the next question: how to communicate, range, and navigate reliably there over time.

### The "Ground-based Space Station" and deep-space environment simulation

The Space Environment Ground Simulation Facility — informally called the "ground-based space station" — is China's first national major science and technology infrastructure in the aerospace domain. It reproduces vacuum, thermal cycling, particle radiation, electromagnetic radiation, space dust, weak magnetic fields, and plasma conditions on the ground.

After formal acceptance and operation, the facility logged over 50,000 machine-hours supporting missions including China's space station, lunar exploration, Mars exploration, and `Queqiao`. Material testing in lunar-dust-like conditions, radiation testing of deep-space electronics, and reliability assessment for long-duration missions all depend on this kind of ground simulation.

## Representative research directions

### Lunar communication, navigation, and orbit determination

#### Summary of lunar constellation navigation and orbit determination technology

**Reference:** Zhang X, Sun Z, Chen X, et al. Summary of lunar constellation navigation and orbit determination technology[J]. Aerospace, 2024, 11(6): 497. DOI: [10.3390/aerospace11060497](https://doi.org/10.3390/aerospace11060497)

**Abstract:** The Moon is the closest celestial body to the Earth. Its rich and unique resources are an important supplement to Earth's resources and have a profound impact on the sustainable development of human society. As large-scale exploration missions gradually progress, demands for communication, navigation, surveying, and other services of lunar-space probes have significantly increased. Constellation navigation and orbit determination technology will become an indispensable part of future lunar exploration infrastructure. This article systematically analyzes the current status of lunar relay navigation satellite networks at home and abroad, summarizes the technical principles of single-satellite and constellation navigation and orbit determination, discusses the technical difficulties in lunar navigation constellation orbit determination and navigation, analyzes possible solutions, and finally proposes the development trend of research on high-precision orbit determination and navigation methods for lunar navigation constellations.

**Keywords:** lunar exploration; precise orbit determination; autonomous navigation

This review, from HIT's School of Astronautics and related deep-space laboratories, surveys the demand background, constellation architectures, observation modes, and orbit determination methods for lunar navigation systems. Lunar constellation navigation, orbit determination, and timing are infrastructure-level problems that any sustained cislunar presence will need to solve. The `Tiandu-2` mission links this line of work directly to hardware validation.

### Lunar landing navigation and guidance

#### Optical navigation method and error analysis for the descending landing phase in planetary exploration

**Reference:** Mu R, Wu P, Deng Y, et al. Optical navigation method and error analysis for the descending landing phase in planetary exploration[J]. Aerospace, 2022, 9(9): 496. DOI: [10.3390/aerospace9090496](https://doi.org/10.3390/aerospace9090496)

**Abstract:** To solve the problem of high-precision optical navigation for the descent landing of lunar and planetary probes, an optical navigation method based on the spatial position distribution model is proposed. The method is based on crater detection, and an imaging cosine equivalent mathematical model based on the correspondence of crater objects is constructed. The geometric distribution of the probe spatial position is described to form an Abelian Lie group spatial torus to achieve absolute positioning for parametric optical navigation. Finally, the effect of the measurement error of crater detection on the positioning and attitude of the optical navigation system is discussed, with a fitted ellipse used as a typical analysis object. The effects of different crater distribution configurations and different detection errors on the performance of the proposed optical navigation algorithm are analyzed. Results of Monte Carlo simulation experiments showed that the algorithm had the advantages of high stability, high accuracy, and good real-time performance compared with existing methods.

**Keywords:** optical navigation; crater detection algorithm; spatial position distribution; torus; lunar exploration

This study covers high-precision optical navigation during planetary descent and landing, using crater features as stable landmarks. It works through the full chain from image-based feature extraction to geometry reconstruction and error propagation.

#### Adaptive convex optimization guidance for lunar landing

**Reference:** Mu R, Deng Y, Wu P. Adaptive convex optimization guidance for lunar landing[J]. Aerospace, 2023, 10(7): 634. DOI: [10.3390/aerospace10070634](https://doi.org/10.3390/aerospace10070634)

**Abstract:** In this paper, a novel guidance algorithm based on adaptive convex optimization is proposed to ensure robustness in the uncertainty of a lunar lander's parameters and satisfy the constraints of terminal position, velocity, attitude, and thrust. To address the problem of parameter uncertainty in the landing process, the parameter-adaptive method is used to achieve online real-time optimal estimations of specific impulse and mass by the optimal observer, and the estimated parameters are used to realize optimal trajectory programming. To overcome the difficulty in constraining the attitude and the thrust level at the final stage in the convex optimization process, a rapid adjustment phase is added to meet the final attitude and thrust constraints; the target-adaptive method is used to adjust the target adaptively at the same time. Therefore, the position and velocity deviations caused by the rapid adjustment phase can be eliminated by the target offset.

**Keywords:** adaptive convex optimization; optimal trajectory programming; parameter uncertainty; target-adaptive method; lunar landing

This work addresses lunar landing under parameter uncertainty, strong terminal attitude constraints, and real-time requirements. The proposed adaptive convex optimization method balances landing accuracy against fuel consumption in a form suitable for actual implementation.

## Closing remarks

HIT's cislunar research stays connected to real hardware. `Longjiang-2` and `Tiandu-2` show a clear progression: the first got to lunar orbit; the second is testing how to operate reliably there. The Space Environment Ground Simulation Facility backs up the flight programs on the ground. Research directions run from orbital navigation and orbit determination through landing guidance, and they stay tied to real missions rather than remaining purely theoretical.
