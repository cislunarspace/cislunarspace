---
title: Inertial Reference Frames (ECI / EME2000 / GCRF / MCI / LME2000)
description: Definitions and taxonomy of inertial reference frames in astrodynamics — geocentric ECI/EME2000/GCRF, terrestrial ITRF/ECEF/WGS84, selenocentric MCI/LME2000 and lunar body-fixed frames, and the Earth-Moon barycentric system, covering the J2000 epoch convention, ICRS/ICRF background, and frame-selection practice.
keywords: inertial reference frame, ECI, EME2000, GCRF, MCI, LME2000, ITRF, ECEF, body-fixed, selenocentric, geocentric, barycentric, J2000
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Inertial Reference Frames (ECI/EME2000/GCRF/MCI/LME2000)
  desc: Taxonomy of geocentric, selenocentric and body-fixed reference frames.
  image: /logo.png
og:
  title: Inertial Reference Frames Explained | Glossary
  description: Definitions and taxonomy of inertial reference frames in astrodynamics — geocentric ECI/EME2000/GCRF, terrestrial ITRF/ECEF/WGS84, selenocentric MCI/LME2000 and lunar body-fixed frames, and the Earth-Moon barycentric system.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Inertial Reference Frames Explained | Glossary
  description: Taxonomy of geocentric, selenocentric and body-fixed reference frames.
  image: /logo.png
permalink: /en/glossary/fundamentals/inertial-reference-frames/
---

# Inertial Reference Frames (ECI / EME2000 / GCRF / MCI / LME2000)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An inertial reference frame is a frame whose origin is at a celestial body's center of mass and whose axes are fixed (non-rotating) relative to the distant stars; it is the legitimate setting in which Newton's second law (and hence the equations of motion) may be written. No truly non-accelerating frame exists; astrodynamics uses quasi-inertial frames (pseudo-inertial frames): for Earth satellites the geocentric equatorial system suffices, while the heliocentric system serves as the background for interplanetary probes (Vallado 2022). Opposed to inertial frames are body-fixed frames (attached to a rotating surface) and synodic/rotating frames (attached to the rotating line joining two primaries; see [Synodic Frame](/glossary/fundamentals/synodic-frame/)). In practice the label inertial frame denotes a family of conventions: origin (geocentric/selenocentric/heliocentric/barycentric) and principal direction (vernal equinox/equator/orbit plane) differ between members, and one must always confirm which convention a paper uses.

## Three Constituents of a Frame

Any reference frame is fully specified by three elements (Vallado 2022):

1. **Origin**: geocenter, selenocenter, heliocenter, or the barycenter of a two-/multi-body system;
2. **Fundamental plane**: Earth equator, lunar equator, ecliptic, lunar orbital plane, etc.;
3. **Principal direction**: usually the vernal equinox, the Greenwich meridian, or a characteristic vector (e.g., the line joining the primaries).

Different choices of these elements yield different frames; names like ECI, EME2000 and GCRF differ only in one or two of these elements: their epoch or realization.

## Geocentric Frames

### ECI and the J2000 Convention

ECI (Earth-Centered Inertial) is a generic label, not a single frame. Because the equator and the vernal equinox drift slowly (precession, nutation), both directions must be frozen at a chosen epoch to obtain a quasi-inertial system. Historically the IAU-76/FK5 system was the standard: its equator and equinox are based on the FK5 star catalog, epoch J2000.0 (2000 Jan 1 12h TT), and the IAU-1976 precession model with the IAU-1980 nutation theory transform frames at other epochs to it (Vallado 2022). Hence J2000 system is often used interchangeably with ECI.

### EME2000

EME2000 (Earth Mean Equator and Equinox of J2000) is the J2000-epoch geocentric mean-equator-and-equinox inertial frame, a common basis for boundary conditions and orbit propagation in the geocentric phase of lunar missions. The equator and equinox are taken as their mean J2000 values, so the frame does not drift under precession/nutation and may be treated as quasi-inertial (Vallado 2022; Yoon and Petukhov 2023).

### GCRF and ICRS/ICRF

GCRF (Geocentric Celestial Reference Frame) is the current international standard inertial system for the Earth, the geocentric realization of the International Celestial Reference Frame. ICRS was adopted by the IAU on 1998 Jan 1: origin at the solar-system barycenter; the ICRF is realized by VLBI observations of 3414 extragalactic radio sources, the principal direction continuing the IAU-76/FK5 J2000 value (calibrated by the radio source 3C273); later realizations (ICRF1/ICRF2) introduce no rotation. GCRF is the geocentric counterpart of the ICRF, adopted by the IERS on 1997 Jan 1; its axes are closely aligned with IAU-76/FK5 J2000 for continuity, and the IAU-2000 resolutions reference GCRF directly (Vallado 2022). The axes of GCRF and EME2000 differ only at the sub-arcsecond level and are equivalent for most engineering work.

## Terrestrial Frames: ITRF / ECEF / WGS84

A frame attached to the rotating Earth is a terrestrial (body-fixed) frame. The standard realization is ITRF (International Terrestrial Reference Frame): geocentric origin, axes realized by adopted coordinates of defining ground stations, regularly re-estimated because of plate tectonic motion (cm/yr), tagged by realization year (ITRF-08 etc.), successive realizations differing by translation, scale and small rotation only (Vallado 2022). ECEF (Earth-Centered Earth-Fixed) is the generic terrestrial frame: z-axis along the rotation pole, x-axis in the equatorial plane pointing to the Greenwich meridian, y-axis completing a right-handed set. The U.S. military WGS84 frame agrees with ITRF at the centimeter level; GPS positions are broadcast in it.

Uses: to process ground observations (station latitude/longitude, azimuth/elevation) and to evaluate Earth non-spherical gravity (e.g., the J2 term), the state must be transformed from the inertial to the terrestrial frame through the full precession-nutation-Earth-rotation-polar-motion chain, and conversely station coordinates must be rotated to inertial space for orbit determination (Deng et al. 2017; Vallado 2022). The ECI-to-ECEF rotation must use the complete chain (GMST or ERA), not an approximate shortcut.

## Selenocentric and Lunar Body-Fixed Frames

### Selenocentric Inertial Frames MCI / LME2000

A Moon-centered inertial frame (MCI) has its origin at the lunar center and fixed axes; it is the customary setting for lunar-spacecraft equations of motion. Two conventions occur: translating the J2000 geocentric equatorial axes to the Moon, or LME2000, a selenocentric inertial frame whose fundamental plane is the lunar mean equator of J2000 (Yoon and Petukhov 2023), often used for the final conditions of the selenocentric phase. Another convention takes the lunar orbital plane as fundamental and the x-axis along the Earth-Moon line at the initial epoch (Acta Geodaetica et Cartographica Sinica 2013), convenient for describing libration-point orbits in a lunar-centered frame.

Compared with a Moon-centered rotating frame (which rotates with the Earth-Moon line, a selenocentric variant of the synodic frame), the Earth's position is time-varying in MCI and the equations are explicitly time-dependent; but the two-body and three-body phases can share the same state-vector basis, easing continuous handover between dynamical models (Oue et al. 2025).

### Lunar Body-Fixed Frame

The lunar body-fixed (selenodetic) frame is attached to the lunar surface and rotates with the Moon: origin at the selenocenter, reference plane the lunar equator, one axis along the intersection of the lunar equator with the prime meridian, another along the lunar rotation axis. Lunar latitude and longitude are coordinates in this frame, so the terminal constraints of soft landing, powered descent and selenodetic mapping (landing-site coordinates, zero velocity) are formulated here (Zhou and Zhou 2007). The lunar orbital plane (the plane of the Moon's orbit about the Earth, the ecliptic inclined to it by about 5.145 deg) is an orbit-geometry reference, distinct from the lunar equatorial plane (inclined to it by about 6.7 deg): do not conflate the two.

## Barycentric Systems and Common Planes

- **Barycentric synodic frame**: origin at the Earth-Moon barycenter, rotating with the Earth-Moon line, the standard setting of the CR3BP (see [Synodic Frame](/glossary/fundamentals/synodic-frame/)).

- **Barycentric inertial frame**: origin at the barycenter, fixed axes (non-rotating). Equations of motion written in relative coordinates are independent of the origin; they depend only on relative positions and second derivatives (Vallado 2022). Do not confuse it with the barycentric synodic frame, which adds one rotational degree of freedom.

- **Selenocentric instantaneous Earth-Moon plane frame**: origin at the Moon, axes parallel to the Earth-Moon barycentric synodic frame but not rotating with the Moon. It gives a time-invariant description of reachable sets, useful for exposing the generic geometry of transfer reachability (Lu et al. 2021).

## Frame-Selection Practice

Typical phase-spliced convention: ECI/EME2000 or GCRF for the geocentric phase, ECEF/ITRF for observations and ground stations, MCI/LME2000 for the selenocentric phase, lunar body-fixed for landing, and the synodic frame for the three-body phase. The guiding principle is to make target constraints become plain coordinates and to keep dominant perturbing bodies fixed. Every reported state vector must name its frame, or it cannot be reproduced (Vallado 2022).

## Related Concepts

- [Synodic Frame / Rotating Frame](/glossary/fundamentals/synodic-frame/)

- [Circular Restricted Three-Body Problem (CR3BP)](/glossary/dynamics/cr3bp/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications (Ch. 3 coordinate-frame taxonomy, GCRF/ITRF/ECEF definitions; Ch. 2 canonical elements)

- Yoon and Petukhov, 2023, Minimum-fuel low-thrust trajectories to the Moon (EME2000/LME2000 phase-spliced frame selection)

- Deng et al., 2017, On-board orbit prediction for a probe near the Earth-Moon collinear libration points (terrestrial frame for Earth non-spherical gravity)

- Zhou and Zhou, 2007, Precise modeling and optimal trajectory design for lunar soft landing (lunar body-fixed frame)

- Betts and Erb, 2003, Optimal low-thrust trajectories to the Moon (three-phase geocentric-to-selenocentric switching)

- Lu et al., 2021 (selenocentric instantaneous Earth-Moon plane reachability analysis)
