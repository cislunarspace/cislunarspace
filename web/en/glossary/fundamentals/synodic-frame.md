---
title: Synodic Frame (Rotating Frame)
description: The standard reference frame of the circular restricted three-body problem (CR3BP)—origin at the two primaries' barycenter, rotating with their connecting line so that the primaries are fixed and the equations autonomous. Covers Earth-Moon, Sun-Earth, and Sun-Earth-Moon instances; barycentric, geocentric, and selenocentric origin variants; and the two competing x-axis conventions.
keywords: synodic frame, rotating frame, synodic coordinate system, CR3BP, Earth-Moon rotating frame, Sun-Earth rotating frame, syzygy frame, libration point, barycentric rotating frame
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Synodic Frame (Rotating Frame)
  desc: The standard reference frame of the CR3BP: origin at the barycenter, rotating with the primaries' line.
  image: /logo.png
og:
  title: Synodic Frame (Rotating Frame) Explained | Term Definition
  description: The standard reference frame of the circular restricted three-body problem (CR3BP)—origin at the two primaries' barycenter, rotating with their connecting line so that the primaries are fixed and the equations autonomous. Covers Earth-Moon, Sun-Earth, and Sun-Earth-Moon instances; barycentric, geocentric, and selenocentric origin variants; and the two competing x-axis conventions.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Synodic Frame (Rotating Frame) Explained | Term Definition
  description: The standard reference frame of the circular restricted three-body problem (CR3BP)—origin at the two primaries' barycenter, rotating with their connecting line so that the primaries are fixed and the equations autonomous. Covers Earth-Moon, Sun-Earth, and Sun-Earth-Moon instances; barycentric, geocentric, and selenocentric origin variants; and the two competing x-axis conventions.
  image: /logo.png
permalink: /en/glossary/fundamentals/synodic-frame/
---

# Synodic Frame (Rotating Frame)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The synodic frame (also called the rotating frame) is the standard reference frame of the circular restricted three-body problem (CR3BP). Its origin is at the barycenter of the two primaries; the x-axis lies along the line joining them; the z-axis points along the system's angular momentum (normal to the primaries' orbital plane); and the three axes form a right-handed frame that rotates with the primaries' mutual angular velocity—the secondary's mean motion $n$ about the primary (Vallado 2022; Szebehely 1967).

The price of rotation is that Coriolis and centrifugal terms enter the equations of motion; the payoff is that both primaries become fixed on the x-axis, the equations no longer depend explicitly on time and are therefore autonomous, and this is the geometric reason the Jacobi constant exists as a conserved quantity and the five libration points appear as stationary equilibria. Every dynamical structure of the CR3BP—libration-point locations, zero-velocity surfaces, periodic and quasi-periodic orbit families, invariant manifolds, Poincaré sections—is defined and visualized in this frame.

For the Earth-Moon system: the origin is at the Earth-Moon barycenter (about 4671 km from Earth's center toward the Moon), the x-axis runs from Earth $P_1$ (the larger primary) to the Moon $P_2$, and the z-axis aligns with the Moon's orbital angular momentum. Under the standard CR3BP nondimensionalization (length unit = primary separation, mass unit = total primary mass, time unit such that $n=1$), $P_1$ sits at $(-\mu,0,0)$ and $P_2$ at $(1-\mu,0,0)$, with mass parameter $\mu = m_2/(m_1+m_2)$; for Earth-Moon, $\mu \approx 0.01215$. The full equations of motion are given in [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/).

## The x-axis convention: two coexisting standards

The x-axis direction **is not uniform** across the literature; before reading a figure or an equation, check which convention the paper uses:

- **The mainstream convention** (Szebehely 1967; Gómez 2001; most CR3BP references): the x-axis points from the larger primary to the smaller one. For Earth-Moon that is Earth→Moon; for Sun-Earth, Sun→Earth.
- **The reversed convention** (some references): the x-axis points from the smaller primary to the larger one. Some Sun-Earth studies, for instance, take the x-axis from Earth toward the Sun and state explicitly that this is opposite to the standard restricted-three-body convention.

Changing the convention flips the relative positions of $L_1$, $L_2$, $L_3$ along the x-axis and reverses the orientation of the halo and Lyapunov families, but changes no physics. When reading an unfamiliar paper, the quickest check is the sign of the coordinates the paper assigns to $P_1$ and $P_2$.

## Instances for different primary pairs

The same definition applies to different primary pairs, and in practice the frame is named after the system:

- **Earth-Moon rotating (synodic) frame**: the standard setting for Earth-Moon CR3BP, libration-point orbits, and cislunar transfers—the default context for most entries in this glossary.
- **Sun-Earth rotating frame** (also called the syzygy frame): the reference for Sun-Earth $L_1$/$L_2$ missions (e.g. JWST, SOHO, Aditya-L1), solar sails, and Sun-Earth manifold splicing.
- **Sun-(Earth+Moon) synodic frame**: a rotating frame with the Sun as reference and the Earth-Moon barycenter as origin, used for the Poincaré sections on which invariant manifolds are spliced in weak-stability-boundary (WSB) transfers.
- **Sun-B1 rotating frame**: the x-axis points toward B1 (approximately the Sun-Earth $L_1$ direction), used to analyze solar gravitational perturbation of the Earth-Moon system.

## Origin and coordinate-form variants

- **Barycentric, geocentric, selenocentric**: the standard synodic frame is centered at the system barycenter. Some problems use a non-barycentric origin for convenience—a **geocentric rotating frame** (origin fixed at Earth's center) exposes directly how the two-impulse Earth-Moon transfer's control variables relate to transfer time; a **selenocentric co-rotating frame** (origin at the Moon's center, x-axis parallel to the Earth-Moon line) supports lunar-ascent and powered-descent analysis. Once the origin leaves the barycenter, the equations generally lose conserved quantities such as the Jacobi integral.
- **Polar form**: a geocentric rotating polar frame describes the spacecraft state by radial distance $r$, polar angle $\theta$, radial velocity $v_r$, and transverse velocity $v_\theta$, suited to coplanar Earth-Moon transfer analysis.

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Jacobi Constant](/en/glossary/dynamics/jc/)
- [Libration Point](/en/glossary/fundamentals/libration-point/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications (Synodic Coordinate Systems section; fundamental plane and principal direction of the Earth-Moon synodic frame).
- Szebehely, 1967, Theory of Orbits: The Restricted Problem of Three Bodies (the classic source for the CR3BP synodic frame and its nondimensionalization).
- Gómez et al., 2001, Dynamics and Mission Design near Libration Points — vol. II (dynamics near libration points; adoption and discussion of the larger→smaller primary x-axis convention).
