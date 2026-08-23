---
title: Spacecraft Local Orbital Frames (RSW / LVLH / Hill / Euler-Hill Frame)
description: Local rectangular frames centered on a spacecraft and moving with its orbit — RSW (radial-transverse-normal, also RTN/LVLH), NTW, and the Hill/Euler-Hill frame with its relation to the Clohessy-Wiltshire equations, covering degeneracies, formation relative motion, and the contrast with libration-point rotating frames.
keywords: RSW, RTN, LVLH, NTW, Hill frame, Euler-Hill frame, local orbital frame, relative motion, Clohessy-Wiltshire, formation flying, radial-transverse-normal
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Spacecraft Local Orbital Frames (RSW/LVLH/Hill)
  desc: Definitions and contrasts of RSW, NTW and Hill/Euler-Hill local frames.
  image: /logo.png
og:
  title: Spacecraft Local Orbital Frames Explained | Glossary
  description: Local rectangular frames centered on a spacecraft — RSW (RTN/LVLH), NTW, and the Hill/Euler-Hill frame with the Clohessy-Wiltshire equations.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Spacecraft Local Orbital Frames Explained | Glossary
  description: RSW, NTW and Hill/Euler-Hill local orbital frames.
  image: /logo.png
permalink: /en/glossary/dynamics/orbital-coordinate-frames/
---

# Spacecraft Local Orbital Frames (RSW / LVLH / Hill / Euler-Hill Frame)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A local orbital frame is a rectangular frame whose origin is on the spacecraft and that moves with its orbit, used to decompose relative motion, thrust directions and measurement errors into intuitive radial/transverse/normal components. The names RSW, RTN, LVLH, Hill and Euler-Hill denote the same family, but axis conventions differ between sources, so always check the convention before reading equations (Vallado 2022).

## RSW (RTN / LVLH)

The RSW (radial-transverse-normal) frame has three axes (Vallado 2022):

- **R axis**: along the position vector from the central body to the spacecraft (radial);

- **S axis**: in the orbit plane, perpendicular to R, pointing along the motion (transverse): S coincides with the velocity vector only on circular orbits (or at the apses of elliptical orbits);

- **W axis**: along the orbital angular momentum vector (normal).

RSW is also called the Gaussian frame, aliased RTN (radial, transverse, normal) or LVLH (local vertical, local horizontal). Spherical control variables are commonly mapped to Cartesian thrust components in RSW: basis vectors are computed from the spacecraft position and velocity relative to the central body; when position and velocity are collinear, R and S degenerate (radial and transverse become indistinguishable) and one must switch to Cartesian control variables (Aziz et al. 2019). Note that LVLH axis definitions are not standardized across organizations: some place the primary axis perpendicular to the position vector, so read each paper's own definition (Vallado 2022).

## NTW and PQW

- **NTW** (radial-tangent-normal): the T axis is always along the velocity vector (tangent), N lies in the orbit plane perpendicular to T, W along the angular momentum. Drag analysis uses NTW because drag always opposes the velocity; its in-track displacement differs in meaning from the RSW transverse displacement (Vallado 2022).

- **PQW** (perifocal): origin at the central body, fundamental plane the orbit plane, P axis toward periapsis. Used for two-body processing.

- **EQW** (equinoctial): fundamental plane the orbit plane, E axis determined from the vernal equinox through the ascending node; avoids circular/equatorial singularities (Vallado 2022).

## The Hill / Euler-Hill Frame and the CW Equations

The Hill frame (Euler-Hill frame) is a local frame centered on a reference spacecraft: x along the radial direction (positive away from the central body), y along-track, z perpendicular to the orbit plane. When the separation is much smaller than the orbital radius and the reference orbit is nearly circular, the relative motion is linearized by the Clohessy-Wiltshire (CW) equations, also called Hill's equations (Clohessy and Wiltshire 1960; Hill 1878):

$\ddot{x} - 3n^2 x - 2n \dot{y} = f_x$, $\ddot{y} + 2n \dot{x} = f_y$, $\ddot{z} + n^2 z = f_z$

where $n$ is the mean motion of the reference orbit. The CW equations underlie rendezvous and formation-flying analysis. Two caveats: the linearization (separation much smaller than orbital radius) and the circular-orbit assumption: the S/y axis coincides with velocity only on circular orbits. For non-Keplerian orbits such as Halo orbits the classical Hill frame is inapplicable; a libration-point-based rotating frame is needed instead (see [Synodic Frame](/glossary/fundamentals/synodic-frame/)).

## Related Variants and Clarifications

- **Formation fixed relative to an inertial frame**: the relative positions and attitudes of chief/deputy spacecraft remain constant in inertial space, opposite to the orbit-following Hill description; used for long-term evolution near libration points (Marchand and Howell 2005; Heritier and Howell 2014).

- **Inertial-frame relative-motion equations**: writing relative motion directly in the inertial frame reflects true multi-body dynamics more directly and avoids centrifugal/Coriolis terms of rotating frames.

- **Orbital coordinate system (thrust direction)**: some papers center a frame on the probe with one axis from the central body and one along the motion, describing thrust by an in-plane and an out-of-plane angle (Zhou and Zhou 2007), essentially an RSW variant.

- **Principal-axes coordinate frame**: centered on a libration point (or primary) with axes aligned to the principal axes of the nearby elliptic motion, obtained by rotating the synodic frame; it decouples in-plane motion into two independent directions, simplifying the linear equations near libration points (Catlin and McLaughlin 2007).

## Applications

Local orbital frames are the standard tool for relative navigation, formation keeping, rendezvous, thrust modeling, and perturbation equations (the Gauss form of the variation-of-parameters equations resolves the disturbing force into R/S/W components) (Vallado 2022). Choice rule: RSW suits along-track errors and maneuvers, NTW suits velocity-aligned thrust/drag, and the Hill/Euler-Hill frame suits linearized close-range relative motion.

## Related Concepts

- [Synodic Frame / Rotating Frame](/glossary/fundamentals/synodic-frame/)

- [Inertial Reference Frames](/glossary/fundamentals/inertial-reference-frames/)

- [Relative Motion](/glossary/dynamics/relative-motion/)

- [Formation Fixed Relative to Inertial Frame](/en/glossary/dynamics/spacecraft-formation-flying/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications (RSW/NTW/EQW/PQW definitions and transformations; Hill's equations)

- Clohessy and Wiltshire, 1960, Terminal guidance system for satellite rendezvous

- Hill, 1878, Researches in the lunar theory

- Aziz et al., 2019, JGCD (RSW degeneracy in CRTBP low-thrust optimization)

- Marchand and Howell, 2005 (inertial-frame-fixed formations)

- Heritier and Howell, 2014 (inertial-frame relative-motion equations)

- Zhou and Zhou, 2007 (lunar soft-landing thrust-direction modeling)

- Catlin and McLaughlin, 2007 (principal-axes frame near libration points)
