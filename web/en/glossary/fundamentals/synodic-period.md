---
title: Synodic Period (and Synodic Frequency)
description: The interval after which two bodies return to the same relative geometry as seen from a third, computed from their mean motions as 1/S = |1/T₁ − 1/T₂|. Covers the lunar synodic period (29.53 d, the phase cycle), the solar synodic frequency in the Earth–Moon rotating frame, and the synodic-period concept as used in inter-satellite phasing.
keywords: synodic period, synodic frequency, lunar synodic period, solar synodic frequency, sidereal period, phase cycle, relative geometry, cislunar astrodynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Synodic Period (and Synodic Frequency)
  desc: The interval at which two bodies return to the same relative geometry; the lunar synodic period is 29.53 d.
  image: /logo.png
og:
  title: Synodic Period (and Synodic Frequency) | Glossary
  description: The interval after which two bodies return to the same relative geometry, 1/S = |1/T₁ − 1/T₂|. Covers the lunar synodic period (29.53 d), the solar synodic frequency in the Earth–Moon rotating frame, and inter-satellite phasing.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Synodic Period (and Synodic Frequency) | Glossary
  description: The interval after which two bodies return to the same relative geometry, 1/S = |1/T₁ − 1/T₂|. Covers the lunar synodic period (29.53 d), the solar synodic frequency in the Earth–Moon rotating frame, and inter-satellite phasing.
  image: /logo.png
permalink: /en/glossary/fundamentals/synodic-period/
---

# Synodic Period (and Synodic Frequency)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The **synodic period** $S$ of two bodies is the time after which they return to the same relative geometry as seen from a third point (usually the primary). If their sidereal orbital periods are $T_1$ and $T_2$, then

$$
\frac{1}{S} = \Big| \frac{1}{T_1} - \frac{1}{T_2} \Big|, \qquad S = \frac{T_1 T_2}{|T_2 - T_1|}.
$$

The reciprocal $\omega_\text{syn} = 2\pi/S$ is the **synodic frequency** (angular). Synodic period and sidereal period are easily confused: sidereal period is measured against inertial space (the fixed stars); synodic period is measured against the moving partner.

## The lunar synodic period

The lunar **sidereal** period (one revolution against the stars) is 27.3217 d. The Earth has itself moved $\sim 27°$ along its orbit in that time, so the Moon must travel another $\sim 27°$ to return to the same Sun–Earth–Moon angle. The result is the lunar **synodic** period, i.e. the cycle of lunar phases (one synodic month):

$$
\frac{1}{S_\text{Moon}} = \frac{1}{27.3217} - \frac{1}{365.256} \;\Longrightarrow\; S_\text{Moon} \approx 29.5306\ \text{d}.
$$

This is the natural clock for any phenomenon driven by the Sun–Earth–Moon angle: tides, lunar-phase-dependent lighting, solar-exclusion windows in sensor coverage, and the design of resonant distant retrograde orbits. For example, a 2:1 resonant DRO has a period of $S_\text{Moon}/2 \approx 14.77$ d (Welch et al. 2015). Cislunar situational-awareness simulations typically span an integer number of synodic periods so that solar-exclusion statistics are representative (Vendl & Holzinger 2021).

## The solar synodic frequency in the Earth–Moon frame

When the Earth–Moon barycentric rotating frame is used (with angular rate $n_\text{EM} = 2\pi/S_\text{Moon}$), the Sun does not stand still: it completes one revolution in that frame every Earth **sidereal** year, which translated into the rotating frame becomes one cycle per synodic period of the Sun as seen from the Earth–Moon binary — about 29.5 d × correction. In the bicircular and quasi-bicircular models of the Earth–Moon–Sun system, this **solar synodic frequency** $\omega_\odot$ enters as the leading external forcing frequency, modulating otherwise-autonomous Earth–Moon dynamics and producing the quasi-periodic perturbation that governs long-term stability near $L_4/L_5$ and along ballistic-capture trajectories (Gómez et al. 2001, vol. II).

## Inter-satellite phasing

For coplanar circular rendezvous, the same formula gives the synodic period of an interceptor and a target: $S_\text{ph} = 2\pi/(\omega_\text{int} - \omega_\text{tgt})$. The wait time until the next phasing opportunity is

$$
\tau_\text{wait} = \frac{\vartheta - \vartheta_i + 2\pi k}{\omega_\text{int} - \omega_\text{tgt}},
$$

where $\vartheta$ is the required phase-angle separation and $k$ counts the revolutions (Vallado 2022, §6.5). Two satellites in similar orbits have a very long synodic period; two in widely separated orbits phase quickly — the counter-intuitive rule that drives launch-window design.

## Related entries

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Synodic Frame (Rotating Frame)](/en/glossary/fundamentals/synodic-frame/)

- [Jacobi Constant](/en/glossary/dynamics/jacobi-integral/)

## References

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, §6.5 and §3.4 — synodic period in inter-satellite phasing; barycentric time scales.

- Szebehely, 1967, *Theory of Orbits*, §1.5 — dimensionless synodic system and the role of the angular rate $n$.

- Gómez, Jorba, Llibre, Masdemont, Simó, 2001, *Dynamics and Mission Design near Libration Points*, vol. II — solar synodic perturbation in the bicircular model.

- Welch, Barden, Howell, 2015, Mission Considerations for Transfers to a Distant Retrograde Orbit — 2:1 resonant DRO at half the lunar synodic period.

- Vendl & Holzinger, 2021, "Cislunar periodic orbit analysis for persistent space object detection capability" — synodic-period cadence for sensor coverage.

- Thornton et al., 2022 — simulation baseline spanning full synodic cycles.
