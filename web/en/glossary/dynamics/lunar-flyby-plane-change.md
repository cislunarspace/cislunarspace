---
title: Lunar-Flyby-Assisted Plane Change
description: A transfer strategy that lets the out-of-plane component of a lunar flyby provide the equivalent of an explicit plane-change maneuver, so a spacecraft starting from a planar trans-lunar trajectory can enter the stable manifold of a 3D halo orbit (or change inclination by tens of degrees on the way to a DRO) without a dedicated plane-change impulse. Saves on the order of 10^2 m/s of delta-v.
keywords: lunar-flyby-assisted plane change, flyby plane change, lunar flyby, powered lunar flyby, halo manifold insertion, inclination change, low-energy transfer
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lunar-Flyby-Assisted Plane Change
  desc: Let the out-of-plane component of a lunar flyby replace an explicit plane-change maneuver and save ~10^2 m/s.
  image: /logo.png
og:
  title: Lunar-Flyby-Assisted Plane Change Explained | Term Definition
  description: A transfer strategy that lets the out-of-plane component of a lunar flyby provide the equivalent of an explicit plane-change maneuver, so a spacecraft starting from a planar trans-lunar trajectory can enter the stable manifold of a 3D halo orbit (or change inclination by tens of degrees on the way to a DRO) without a dedicated plane-change impulse.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lunar-Flyby-Assisted Plane Change Explained | Term Definition
  description: A transfer strategy that lets the out-of-plane component of a lunar flyby provide the equivalent of an explicit plane-change maneuver, so a spacecraft starting from a planar trans-lunar trajectory can enter the stable manifold of a 3D halo orbit (or change inclination by tens of degrees on the way to a DRO) without a dedicated plane-change impulse.
  image: /logo.png
permalink: /en/glossary/dynamics/lunar-flyby-plane-change/
---

# Lunar-Flyby-Assisted Plane Change

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Lunar-flyby-assisted plane change is a transfer strategy in which the out-of-plane component built up during a close lunar encounter is used as the equivalent of an explicit plane-change maneuver, eliminating a dedicated out-of-plane impulse. The spacecraft departs on a planar trans-lunar trajectory and uses the flyby (typically a powered lunar flyby, PLF) to generate a $\Delta v$ in the out-of-plane direction; after the encounter the orbital plane has been rotated onto the target orbit's plane, and the spacecraft can enter the stable manifold of a 3D halo orbit (or close an inclination gap to a DRO) with a single impulse.

## Geometry and savings

The flyby rotates the $\vec v_\infty$ vector by the turning angle $\delta$, which is *large* at low perilune altitudes (see [lunar flyby](/en/glossary/dynamics/lunar-flyby/)). If the inbound $\vec v_\infty$ lies in the Earth-Moon orbital plane and the chosen B-plane aim point produces a $\vec v_\infty(t_{\rm out})$ with a substantial $z$-component, the flyby has effectively produced a plane change *for free*, paid for by the Moon's gravity rather than by an onboard impulse. The equivalent $\Delta v$ can be on the order of $10^2$ m/s (Zanzottera et al. 2011, §5.1; Peng et al. 2024 report $\Delta v_\Sigma < 5$ m/s for the explicit plane-matching impulse at the post-flyby plane crossing, with the flyby itself providing more than 200 m/s of equivalent $z$-velocity change).

For a planar transfer to a halo orbit stable manifold, this is the mechanism that enables the single-impulse transfer: the flyby bends the planar trans-lunar arc out of the Earth-Moon plane and onto the halo orbit's stable manifold, eliminating what would otherwise have been a separate plane-change maneuver.

## Method: two-body screening, then BCR4BP correction

Because the BCR4BP is not integrable, the operational workflow is: (1) use a Moon-centered two-body model to screen candidate perilune states and obtain an initial guess for the required $\Delta\vec v$ at perilune; (2) correct in the BCR4BP ROT frame so that the spacecraft reaches the Earth-Moon orbital plane with the desired in-plane state. The Moon-centered two-body formula $\tan\delta^+ = \hat v_p^z/\hat r_p^z$ gives the turning angle that zeroes the $z$-component of $\vec v_\infty(t_{\rm out})$ in the Moon-centered inertial frame (Peng et al. 2024, Eq. 11), and $|\Delta\vec v_{\rm per}|$ follows from energy conservation across the two hyperbolic segments. Differential correction then removes the residual $z$-velocity and locks the trajectory onto the target manifold.

## Application notes

- **GTO-to-DRO low-energy transfers.** Combined with a WSB arc and a second PLF, the plane-change-by-PLF is what lets low-energetic transfers from inclined GTOs reach a planar DRO for a total $\Delta v$ below about 1200 m/s (Peng et al. 2024).

- **Earth-to-halo transfers.** Zanzottera et al. (2011) use the Sun-perturbed lunar flyby to bridge the planar Earth-departure arc and the spatial stable manifold of a halo orbit, which is the canonical single-impulse Earth-to-halo transfer.

- **Close lunar flyby.** A closely related term appears as the "close lunar flyby plane-change transfer" in some DRO transfer-design literature: same mechanism, emphasis on the *close* perilune that maximizes the turning angle.

## Related Concepts

- [Lunar Flyby and Lunar Gravity Assist](/en/glossary/dynamics/lunar-flyby/)

- [Stable Manifold (W^s)](/en/glossary/dynamics/invariant-manifold/)

- [Distant Retrograde Orbit (DRO)](/en/glossary/programs/dro/)

- [Bicircular Restricted Four-Body Problem (BCR4BP)](/en/glossary/dynamics/bcr4bp/)

- [Sphere of Influence](/en/glossary/dynamics/soi/)

## References

- Zanzottera et al., 2011, Low-energy Earth-to-halo transfers in the Earth-Moon scenario with Sun-perturbation, Acta Astronautica, §5.1

- Peng et al., 2024, Low-Energy Transfers to Lunar Distant Retrograde Orbits from Geostationary Transfer Orbits, J. Spacecraft and Rockets, doi:10.2514/1.A35623, Sec. III.A
