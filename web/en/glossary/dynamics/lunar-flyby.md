---
title: Lunar Flyby and Lunar Gravity Assist
description: A spacecraft's unpropelled passage through the Moon's gravitational sphere of influence, modeled as a hyperbolic encounter that rotates the incoming v-infinity vector by a turning angle. The lunar gravity assist (LGA) uses this rotation to change heliocentric (or Earth-centered two-body) energy and angular momentum. Covers the patched-conic formulas, the prograde/retrograde and leading/trailing classifications, the B-plane, and the powered-perilune (PLF) variant used for DRO transfers.
keywords: Lunar Flyby, Lunar Gravity Assist, LGA, swingby, powered lunar flyby, PLF, B-plane, turning angle, hyperbolic excess velocity, DRO, cislunar
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lunar Flyby and Lunar Gravity Assist
  desc: Hyperbolic passage through the Moon's SOI rotates the v-infinity vector and transfers energy with the Moon.
  image: /logo.png
og:
  title: Lunar Flyby and Lunar Gravity Assist Explained | Term Definition
  description: A spacecraft's unpropelled passage through the Moon's gravitational sphere of influence, modeled as a hyperbolic encounter that rotates the incoming v-infinity vector by a turning angle. The lunar gravity assist (LGA) uses this rotation to change heliocentric (or Earth-centered two-body) energy and angular momentum.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lunar Flyby and Lunar Gravity Assist Explained | Term Definition
  description: A spacecraft's unpropelled passage through the Moon's gravitational sphere of influence, modeled as a hyperbolic encounter that rotates the incoming v-infinity vector by a turning angle. The lunar gravity assist (LGA) uses this rotation to change heliocentric (or Earth-centered two-body) energy and angular momentum.
  image: /logo.png
permalink: /en/glossary/dynamics/lunar-flyby/
---

# Lunar Flyby and Lunar Gravity Assist

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A lunar flyby (also lunar swingby) is a spacecraft trajectory that enters and leaves the Moon's sphere of influence (SOI) without being captured, so that the planet-centered two-body energy relative to the Moon is conserved. A lunar gravity assist (LGA) is the deliberate use of such an encounter to change the spacecraft's energy and angular momentum relative to a *third* body (the Earth, in the heliocentric frame for a planetary mission) by routing the flyby through a chosen arc of the Moon's orbit around that body. The same physical event is called a flyby when the emphasis is on the geometry of the encounter, and a gravity assist when the emphasis is on the energy/momentum exchange with the Moon (Vallado 2022, Sec. 12.4).

Because the spacecraft is in a hyperbolic Keplerian orbit about the Moon throughout the encounter, the inbound and outbound asymptotic velocities $\vec v_\infty(t_{\rm in})$ and $\vec v_\infty(t_{\rm out})$ relative to the Moon have equal magnitudes; the effect of the flyby is to *rotate* this vector by the turning angle $\delta$. The energy transferred to or from the Moon is exactly $\vec v_\infty(t_{\rm in})\cdot\vec v_\infty(t_{\rm out}) - v_\infty^2 = v_\infty^2(\cos\delta - 1)$, with an equal and opposite change applied to the Moon (Newton's third law; the Moon's vast mass makes its velocity change negligible).

## Turning angle and closest approach

In the two-body Moon-centered model, conservation of $v_\infty$ together with the hyperbolic orbit gives the turning angle

$$
\sin\frac{\delta}{2} = \frac{1}{e}, \qquad e = 1 + \frac{r_p\,v_\infty^2}{\mu_M}
$$
or equivalently $\cos\delta = (\vec v_\infty(t_{\rm in})\cdot\vec v_\infty(t_{\rm out}))/v_\infty^2$, where $\mu_M$ is the Moon's gravitational parameter and $r_p$ is the perilune radius (Vallado 2022, Eq. 12-11). A large turn requires either small $v_\infty$, small $r_p$, or both. The corresponding closest-approach radius reads

$$
r_p = \frac{\mu_M}{v_\infty^2}\left(\frac{1}{\cos\big(\frac{\pi-\delta}{2}\big)} - 1\right)
$$
(Vallado 2022, Eq. 12-12), which the designer checks against the lunar surface and any operational exclusion zone. For Earth-Moon work $v_\infty$ is typically $0.2$–$1.5$ km/s; with $r_p$ near 100–200 km altitude this yields turning angles of many tens of degrees, much larger than what planetary flybys achieve.

## Direction classification: two independent axes

Mission designers sort lunar flybys along two nearly orthogonal axes. Confusing them is a common mistake:

- **Prograde vs retrograde flyby.** Describes the path of the spacecraft around the Moon in the Earth-Moon rotating frame: prograde (counterclockwise, the same sense as the Moon's orbital motion) or retrograde (clockwise). In a retrograde flyby the v-infinity vector rotates through a larger arc of the lunar orbit, so the magnitude of $\Delta\vec v_\infty$ (and hence the energy exchange) is substantially larger for the same $r_p$ and $v_\infty$. Numerical transfer-design studies (e.g., Wei Zan et al. 2026) consistently find that retrograde flyby strategies need noticeably less $\Delta v$ than prograde ones for insertion into a distant retrograde orbit (DRO).

- **Leading-side vs trailing-side flyby.** Describes which side of the Moon (in the direction of its motion) the spacecraft passes behind, equivalently the sign of $\vec v_\infty(t_{\rm out})\cdot\vec v_M$ relative to the inbound value. Trailing-side encounters (also called deceleration gravity assists) reduce the spacecraft's orbital energy; leading-side encounters (acceleration gravity assists) raise it.

The prograde/retrograde and leading/trailing axes combine to give four distinct flyby geometries. For DRO insertion, Wei Zan et al. (2026) further distinguish between insertion from the *interior* of the DRO (the inbound velocity at perilune is parallel to the insertion impulse, an acceleration insertion) and insertion from the *exterior* (the inbound velocity is antiparallel to the impulse, a deceleration insertion); the two cases reach different phase-space regions of the target orbit.

## B-plane targeting

The flyby geometry is parameterized by the B-plane, the plane through the center of the Moon perpendicular to the incoming asymptote. The aim point is described by two components $\vec B\cdot\hat T$ and $\vec B\cdot\hat R$, where $\hat T$ and $\hat R$ are defined with respect to the Moon's orbital plane. A specific flyby outcome (a given $\vec v_\infty(t_{\rm out})$, and hence a given downstream trajectory) corresponds to a single point on the B-plane, so flyby design reduces to B-plane targeting and $v_\infty$-matching (see [v-infinity matching](/en/glossary/dynamics/v-infinity-matching/)).

## Powered lunar flyby (PLF)

A powered lunar flyby (PLF) applies a small impulsive $\Delta v$ at or near perilune. Because the velocity at perilune is the largest of the hyperbolic arc, an impulse delivered there is amplified in energy terms once the spacecraft climbs back out of the Moon's potential well: a $\Delta v$ of order $10^2$ m/s at perilune can shift the post-encounter trajectory by hundreds of m/s in $\Delta v$-equivalent terms. The two-body, Moon-centered-inertial analysis of the PLF writes

$$
\sin\delta^- = \frac{\mu_M/r_p}{(v_\infty^-)^2 + \mu_M/r_p}, \qquad \sin\delta^+ = \frac{\mu_M/r_p}{(v_\infty^+)^2 + \mu_M/r_p}
$$
where $\delta^-$ rotates $\vec v_\infty(t_{\rm in})$ onto the perilune velocity $\vec v_p$, and $\delta^+$ rotates the post-impulse velocity $\vec v_p' = \vec v_p + \Delta\vec v$ onto $\vec v_\infty(t_{\rm out})$, with $|\vec v_\infty^\pm|^2 = |\vec v_p^{(\prime)}|^2 - 2\mu_M/r_p$ (Peng et al. 2024). Confining the outbound leg to the Earth-Moon orbital plane, $\tan\delta^+ = \hat v_p^z/\hat r_p^z$, fixes the required $|\Delta\vec v|$. PLF is the building block of two strategies:

- **Plane change by PLF.** A PLF oriented out of the inbound orbit plane can deliver hundreds of m/s of equivalent plane-change $\Delta v$ at the cost of a small perilune impulse, which is why low-energy DRO transfers with $\Delta v \lesssim 1200$ m/s can still change inclination by tens of degrees (Peng et al. 2024).

- **Retrograde powered LGA for DRO rendezvous.** A retrograde flyby gives a larger $\delta$ for free; combining it with a small powered component at perilune reduces the total $\Delta v$ for DRO rendezvous, a strategy introduced by Murakami & Yamanaka (2015) and analyzed in depth by Peng et al. (2024).

## Application notes

- **Low-energy transfers to DRO.** Two PLFs chained with a weak-stability-boundary arc in the Sun-Earth region can place a small satellite into a DRO from a GTO for a total $\Delta v$ well below 1 km/s (Peng et al. 2024), at the cost of flight times of weeks to months. See [distant retrograde orbit](/en/glossary/programs/dro/) and [weak stability boundary](/en/glossary/dynamics/wsb/).

- **NRHO recovery.** A single lunar flyby can replace a failed NRHO insertion maneuver and recover a cislunar trajectory, as examined by Matsumoto et al. (2023).

- **Plane change.** The lunar-flyby-assisted plane change replaces an explicit out-of-plane maneuver by an out-of-plane component of the flyby geometry, saving on the order of $10^2$ m/s for halo-orbit manifold insertion; see the separate [lunar-flyby-assisted plane change](/en/glossary/dynamics/lunar-flyby-plane-change/) entry for the geometry.

- **Targeting accuracy.** The hyperbolic passage is short and fast, so it must be B-plane targeted precisely: a small aim-point error at the Moon translates into a large position error downstream, and antenna/sensor pointing must be planned during the flyby window.

## Related Concepts

- [Sphere of Influence](/en/glossary/dynamics/soi/)

- [v-infinity Matching](/en/glossary/dynamics/v-infinity-matching/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Bicircular Restricted Four-Body Problem (BCR4BP)](/en/glossary/dynamics/bcr4bp/)

- [Weak Stability Boundary (WSB)](/en/glossary/dynamics/wsb/)

- [Distant Retrograde Orbit (DRO)](/en/glossary/programs/dro/)

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications, 4th ed., Chap. 12 (patched conics, gravity assist, turning angle, B-plane)

- Peng et al., 2024, "Low-Energy Transfers to Lunar Distant Retrograde Orbits from Geostationary Transfer Orbits," J. Spacecraft and Rockets, doi:10.2514/1.A35623 (powered lunar flyby model, GTO-to-DRO via double PLF and WSB)

- Wei Zan et al., 2026, "Lunar gravity-assist transfers to the Earth-Moon distant retrograde orbit family," J. Beijing University of Aeronautics and Astronautics (prograde vs retrograde LGA for DRO; acceleration/deceleration insertion)

- Wang M., Zhang C., Zhang H., 2025, "Mechanism analysis of the DRO low-energy transfer problem: an energy perspective," Lect. Notes Eng.

- Murakami & Yamanaka, 2015, "Trajectory Design of DRO Rendezvous Using Retrograde Powered Lunar Gravity Assist," IEEE Aerospace Conference

- Matsumoto et al., 2023, "Recovery orbit search scheme for major maneuver failure in NRHO transfer orbit using lunar flyby."

- Zanzottera et al., 2011, "Low-energy Earth-to-halo transfers in the Earth-Moon scenario with Sun-perturbation," Acta Astronautica (flyby-assisted plane change)
