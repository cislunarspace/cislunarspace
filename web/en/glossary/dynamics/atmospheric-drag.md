---
title: Atmospheric Drag Perturbation
description: The non-conservative perturbing force from a spacecraft's interaction with the rarefied atmosphere, with acceleration $\mathbf{a}_d = -\frac{1}{2} \rho v^2 (C_D A / m) \hat{\mathbf{v}}$—the dominant orbit-decay mechanism in LEO. Covers atmospheric density models (NRLMSISE-00, Jacchia family), the physical meaning of the ballistic coefficient, DFAC drag-free attitude-control technology, and drag-handling strategies in the cislunar transition regime.
keywords: atmospheric drag, drag perturbation, ballistic coefficient, atmospheric density model, NRLMSISE-00, Jacchia-Roberts, DFAC, drag-free attitude control, orbit decay
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Atmospheric Drag Perturbation
  desc: Drag acceleration formula, density models, the ballistic coefficient and DFAC—a complete explanation.
  image: /logo.png
og:
  title: Atmospheric Drag Perturbation Explained | Term Definition
  description: The non-conservative perturbing force from a spacecraft's interaction with the rarefied atmosphere, with acceleration $\mathbf{a}_d = -\frac{1}{2} \rho v^2 (C_D A / m) \hat{\mathbf{v}}$—the dominant orbit-decay mechanism in LEO. Covers density models, ballistic coefficient, and DFAC technology.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Atmospheric Drag Perturbation Explained | Term Definition
  description: The non-conservative perturbing force from a spacecraft's interaction with the rarefied atmosphere, with acceleration $\mathbf{a}_d = -\frac{1}{2} \rho v^2 (C_D A / m) \hat{\mathbf{v}}$—the dominant orbit-decay mechanism in LEO. Covers density models, ballistic coefficient, and DFAC technology.
  image: /logo.png
permalink: /en/glossary/dynamics/atmospheric-drag/
---

# Atmospheric Drag Perturbation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Atmospheric drag perturbation (or atmospheric drag) is a non-conservative perturbing force arising from momentum exchange between the spacecraft and the rarefied upper atmosphere, acting opposite to the direction of the spacecraft's velocity relative to the atmosphere. It is a classic non-conservative perturbation (system energy is not conserved) and is modelled directly as a disturbing force. The perturbation acceleration is (Vallado 2022, Ch. 8.6.2):

$$
\mathbf{a}_d = -\frac{1}{2} \rho v^2 \frac{C_D A}{m} \hat{\mathbf{v}} = -\frac{1}{2} \rho v^2 B \hat{\mathbf{v}}
$$

where $\rho$ is the local atmospheric density (kg/m$^3$), $v$ is the magnitude of the spacecraft's velocity relative to the atmosphere, $\hat{\mathbf{v}}$ is the unit vector in the relative-velocity direction, $C_D$ is the drag coefficient, $A$ is the cross-sectional area facing the velocity direction, $m$ is the spacecraft mass, and $B = C_D A / m$ is called the **ballistic coefficient** (m$^2$/kg).

The acceleration is proportional to density and to the square of velocity, hence drag is extremely strong at low altitudes where both speed and density are high. At high altitudes or at the apogee of highly eccentric orbits, drag is negligible.

## The Dominant LEO Perturbation

In low Earth orbit (LEO, <800 km), atmospheric drag is the second most important perturbation source after J2, and may even exceed non-spherical gravity during the final revolutions of a satellite's life prior to re-entry (Vallado 2022, Ch. 8.6.2). At 300 km altitude, a typical drag acceleration is on the order of $10^{-6}\text{--}10^{-5}$ m/s$^2$ for an object with a ballistic coefficient $B \approx 0.02$ m$^2$/kg; this acceleration causes a semi-major-axis decay of metres to tens of metres per day, yielding an orbital lifetime of months to years.

## Atmospheric Density: The Largest Source of Uncertainty

The accuracy of drag modelling is limited by the estimation of $\rho$, which is itself highly complex and not precisely predictable (Vallado 2022, Ch. 8.6.2; Framework paper, 2023). Density is controlled primarily by the following factors:

- **Altitude**: density decays approximately exponentially with altitude, with a scale height of ~50 km.

- **Solar activity**: the 11-year sunspot cycle causes drastic fluctuations in EUV radiation flux; density at solar maximum can be tens of times higher than at solar minimum. The daily proxy is $F_{10.7}$ (10.7 cm radio flux).

- **27-day cycle**: EUV flux modulation caused by solar rotation, with a 27-day period.

- **Geomagnetic storms**: when the indices $K_p$ and $a_p$ rise, the atmosphere heats and expands; density at high latitudes can jump within hours.

- **Diurnal effect**: the sunlit hemisphere has higher density than the night side; the maximum diurnal bulge occurs not at local noon but around 14:00 local time.

- **Semiannual variation**: density peaks near the equinoxes.

Commonly used empirical atmospheric models include (Vallado 2022, App. B; Picone et al., 2002):

- **NRLMSISE-00**: built on incoherent-scatter radar and satellite-drag data, covering the surface to the upper atmosphere; the most widely used upper-atmosphere density model.

- **Jacchia-Roberts (JR-71)**: based on satellite-drag inversion; uses fewer parameters and simpler code, still in use in some operational programmes.

- **DTM (Drag Temperature Model)**: based on balloon temperature data and spherical-harmonic expansion; more sensitive to solar activity.

## The Ballistic Coefficient B

The ballistic coefficient $B = C_D A / m$ is a composite parameter describing a spacecraft's sensitivity to drag. The smaller $B$ is, the less drag affects the orbit. The physical factors entering $B$ are:

- **$C_D$ (drag coefficient)**: in the free-molecular-flow regime (LEO), typically 2.0–2.2 (Vallado 2022, Ch. 8.6.2). Affected by surface material and atmospheric composition.

- **$A/m$ (area-to-mass ratio)**: objects with small mass and large cross-sectional area (debris, solar sails) suffer pronounced drag. Typical space-debris area-to-mass ratios are $0.001\text{--}1$ m$^2$/kg.

- **Attitude**: $A$ is the projected area, which varies with spacecraft attitude. For tumbling objects, the effective ballistic coefficient is hard to determine. In high-precision modelling, $B$ is typically estimated as an unknown parameter.

## Atmospheric Drag in the Cislunar Context

Cislunar space (near the Moon) **has no atmosphere**, hence drag is zero. However, in the following scenarios the trajectory segment crosses or approaches the Earth's upper atmosphere and drag cannot be ignored (Framework paper, 2023):

- **Early Earth-Moon transfer**: a spacecraft departing from a near-Earth parking orbit experiences drag decay during the initial climb; the Earth escape altitude is generally above 200 km, where drag is significant.

- **Re-entry**: as a spacecraft returns to Earth, it begins to feel drag at the top of the atmosphere (~120 km), and the re-entry trajectory depends strongly on the ballistic coefficient.

- **Highly eccentric Earth-Moon orbits with a low perigee**: if perigee is as low as a few hundred km, the spacecraft spends most of its time at large distances but experiences cumulative semi-major-axis decay with each perigee passage.

In cislunar-debris orbit-determination practice (Framework paper, 2023), the NRLMSISE-00 model is activated only when the perigee dips into the low-orbit regime.

## DFAC: Drag-Free Attitude Control

Drag-Free and Attitude Control (DFAC) is an active control technique that uses micro-thrust to cancel atmospheric drag, allowing a freely suspended proof mass inside the spacecraft to remain in a zero-acceleration state, essentially creating an inertial environment free of drag within the spacecraft.

Operating principle:

1. The proof mass floats freely inside the spacecraft, uncoupled from the shell's drag.
2. Sensors detect the micro-displacement of the proof mass relative to the shell.
3. The control system drives micro-thrusters (cold gas, electric, etc.) to make the shell follow the proof mass motion, compensating for the external drag acceleration.

The engineering purpose of DFAC is not attitude control but the cancellation of drag-induced acceleration: this is the precise meaning of Drag-Free. The technique was first demonstrated on NASA's TRIAD satellite (1972) for gravity-field mapping; its most precise current application is the drag-free centre-of-mass control on LISA Pathfinder. In high-precision autonomous orbit determination for cislunar navigation satellites, the low-noise acceleration environment provided by DFAC is a prerequisite for sensitive measurements.

## Related Concepts

- [Orbital Perturbations](/en/glossary/fundamentals/orbital-perturbations/)

- [Non-Spherical Gravity Perturbation](/en/glossary/dynamics/non-spherical-gravity-perturbation/)

- [Solar Radiation Pressure (SRP)](/en/glossary/dynamics/srp/)

- [Adams-Cowell Integrator](/en/glossary/dynamics/adams-cowell-integrator/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications (Ch. 8.6.2 Atmospheric Drag: drag acceleration formula, density-variation factors, Jacchia-Roberts model; App. B Modeling the Atmosphere: atmospheric-model implementation details).

- Picone et al., 2002, NRLMSISE-00 empirical model of the atmosphere: Statistical comparisons and scientific issues, JGR (construction and statistical validation of NRLMSISE-00).

- A model framework for high-accuracy orbit determination and propagation of cislunar space debris, 2023 (atmospheric-drag handling practice in cislunar-debris OD).

- Vine, 1973, The TRIAD drag-free satellite mission (the world's first drag-free satellite mission).

- Fichter et al., 2005, Drag-free control system for LISA Pathfinder (LISA Pathfinder drag-free control).
