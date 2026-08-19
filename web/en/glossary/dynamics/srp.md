---
title: Solar Radiation Pressure Perturbation (SRP)
description: The non-conservative perturbation from momentum exchange between solar photons and spacecraft surfaces, with acceleration $\mathbf{a}_{srp} = -P_{\odot} (A/m) (1+C_R) \hat{\mathbf{r}}_{\odot}$ (cannonball model)—a key long-term orbital driver in GEO and cislunar space. Covers the photon-pressure constant, cannonball vs panel models, eclipse effects, COLIBRI case history, solar-sail artificial libration-point orbits, and the linear superposition with atmospheric drag.
keywords: Solar Radiation Pressure, SRP, cannonball model, reflectivity coefficient, eclipse model, solar sail, artificial libration point, COLIBRI, station-keeping
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Solar Radiation Pressure Perturbation (SRP)
  desc: Photon-pressure physics, cannonball/panel models, eclipse effects, and cislunar engineering.
  image: /logo.png
og:
  title: Solar Radiation Pressure (SRP) Explained | Term Definition
  description: The non-conservative perturbation from momentum exchange between solar photons and spacecraft surfaces, cannonball acceleration $\mathbf{a}_{srp} = -P_{\odot} (A/m) (1+C_R) \hat{\mathbf{r}}_{\odot}$, a key long-term driver in GEO and cislunar space. Covers the photon-pressure constant, model comparisons, eclipse effects, and solar-sail artificial libration points.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Solar Radiation Pressure (SRP) Explained | Term Definition
  description: The non-conservative perturbation from momentum exchange between solar photons and spacecraft surfaces, cannonball acceleration $\mathbf{a}_{srp} = -P_{\odot} (A/m) (1+C_R) \hat{\mathbf{r}}_{\odot}$, a key long-term driver in GEO and cislunar space. Covers the photon-pressure constant, model comparisons, eclipse effects, and solar-sail artificial libration points.
  image: /logo.png
permalink: /en/glossary/dynamics/srp/
---

# Solar Radiation Pressure Perturbation (SRP)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Solar Radiation Pressure (SRP) is a non-conservative perturbation force produced by the momentum exchange between solar photon streams and the spacecraft surface. Like atmospheric drag, it is non-conservative (energy dissipative) and is modelled directly as a disturbing force rather than through a potential function. At altitudes above GEO and in cislunar space, where atmospheric drag has vanished or is very weak, SRP becomes the dominant non-gravitational perturbation (Vallado 2022, Ch. 8.6.4).

The simplified **cannonball model**—treating the satellite as a uniform sphere with isotropic reflectivity—yields the acceleration (Vallado 2022, Eq. 8-44):

$$
\mathbf{a}_{srp} = -\frac{P_{\odot} A_{\odot}}{m} (1 + C_R) \hat{\mathbf{r}}_{sat\odot}
$$

where $P_{\odot}$ is the solar-radiation pressure constant at 1 AU (approximately $4.534 \times 10^{-6}$ N/m$^2$ = 4.534 μPa; Vallado 2022, Eq. 8-42a), $A_{\odot}$ is the spacecraft cross-sectional area facing the Sun, $m$ is the mass, $C_R$ is the reflectivity coefficient ($C_R = 0$ for a perfectly absorbing black body, $C_R = 1$ for a perfectly reflecting mirror; typical values are 1.0–1.5), and $\hat{\mathbf{r}}_{sat\odot}$ is the unit vector from the satellite to the Sun.

> Vallado (2022, Ch. 8.6.4) denotes the pressure constant as $p_{srp}$. Historical values have shifted slightly: $4.51 \times 10^{-6}$ N/m$^2$ in the 1960s, $4.56 \times 10^{-6}$ N/m$^2$ in Wertz (1978), and $4.534 \times 10^{-6}$ N/m$^2$ in Vallado. When high precision is not required, $4.5 \times 10^{-6}$ N/m$^2$ suffices.

## Comparison with Atmospheric Drag

| Property | Atmospheric Drag | Solar Radiation Pressure (SRP) |
|----------|-----------------|-------------------------------|
| Physical origin | Gas-molecule collisions | Photon collisions/reflection |
| Velocity dependence | $\propto v^2$ | Independent of spacecraft velocity |
| Direction | Opposite to velocity | Approximately along the Sun-spacecraft vector |
| Energy | Dissipative (deceleration) | Net energy change depends on reflectivity |
| Dominant regime | LEO (<800 km) | GEO and above |
| Eclipse | N/A (independent of eclipse) | Pressure vanishes in shadow |

Vallado (2022) notes that during solar maxima the high-density photon flux from the solar wind can produce perturbation accelerations of the same order as drag at high altitudes—a fact that confounds many intuitions.

## Reflectivity Coefficients and Complex Surface Models

The cannonball model's assumptions—isotropic reflectivity and force direction exclusively along the Sun-satellite line—are inadequate for real spacecraft. **Multi-panel models** (e.g. ROCK4, ROCK42; Fliegel et al., 1992) decompose the satellite surface into multiple flat panels, each contributing to the net SRP force according to its local normal $\hat{n}$:

$$
\hat{\mathbf{a}}_{srp} = -\sum_{i=1}^{N} \frac{P_{\odot} A_i \cos(\phi_i)}{m} \left[ 2\left( \frac{C_{R_d}}{3} + C_{R_s} \cos\phi_i \right) \hat{n}_i + (1 - C_{R_s}) \hat{s} \right]
$$

where $\phi_i$ is the angle between panel normal $\hat{n}_i$ and the Sun direction $\hat{s}$, and $C_{R_d}$ and $C_{R_s}$ are the diffuse and specular reflectivity coefficients, respectively. The ROCK models approximate the full-model result via Fourier series for speed and are widely used for GPS satellite precise orbit determination.

## Eclipse Effects

When the spacecraft enters the Earth's shadow, SRP is interrupted, producing a discontinuous jump in the orbital dynamics. Eclipse handling ranges from simple to complex:

- **Cylindrical shadow**: treats the Earth as a uniform opaque disc; entry and exit are handled by a binary on/off switch—simple, but ignores the gradual penumbra transition.

- **Conical shadow** (umbra/penumbra model): the Earth is not a point-source occulter; there is a penumbral transition zone where sunlight is partially blocked, providing a smooth fade-in/out. Necessary for high-precision orbit determination (Vallado 2022, Ch. 3.10).

- **Elliptical Earth shadow** and **lunar shadow**: the latter is particularly important for lunar orbits—lunar satellites may pass through the Moon's own shadow or be eclipsed by the Earth's shadow.

During eclipse, the cannonball acceleration is multiplied by a "lit-fraction factor" $\nu$ (0 in full shadow, 1 in full sunlight, and 0–1 in the penumbra zone).

## SRP Station-Keeping

The cumulative long-term drift caused by SRP on GEO and Earth-Moon libration-point orbits cannot be neglected—with no correction, long-term propagation can drift by several kilometres after a few months. **SRP station-keeping** techniques are divided into "passive" and "active" approaches (Vallado 2022, Ch. 11.3):

- **Passive**: select an appropriate attitude profile (e.g. "sailboat mode") that allows the SRP force to partially cancel other perturbations. Fuel-free, but applicable only to orbits with favourable symmetry.

- **Active**: use small thrusts (typically electric propulsion) for periodic "Sun-face corrections" to eliminate out-of-plane drift caused by SRP. GEO-station-keeping manoeuvres typically integrate SRP effects jointly with East-West/North-South position-error control.

For high-altitude mission design (GEO, Earth-Moon libration points), the common SRP handling strategy is "on-orbit averaging + long-term correction"—akin to the semi-analytical perturbation method in orbital analysis.

## Solar Sails — Active Utilisation of SRP

SRP is not merely a "disturbing force" to be cancelled—it can be actively harnessed through **solar sails**. A solar sail uses a large-area thin-film surface to reflect solar photons and produce continuous thrust without expending propellant—it is a propulsion device, not a perturbation source (Vallado 2022, Ch. 8.6.4). By actively adjusting the reflectivity-surface orientation near a libration point, a solar sail can create an **artificial libration point** outside the natural ones, expanding the degrees of freedom for orbit selection (Gómez et al., 2001). Solar-sail propulsion has a natural advantage in the Sun-Earth $L_1$ "pole-sitter" mission concept.

From a terminology standpoint, however, **solar-sail artificial-libration-point orbit** and **solar-sail propulsion** belong to propulsion/trajectory categories, not perturbations, and should not be classified under this family.

## Actual SRP Magnitudes in Cislunar Space

Drawing on cislunar-debris orbit-determination practice (Framework paper, 2023), a rocket upper stage (e.g. the Chang'e 2 booster) with a cross-sectional area $A = 37.14$ m$^2$, using $C_R = 1.2$ in the cannonball model, yields an SRP acceleration of approximately $2 \times 10^{-7}$ m/s$^2$. Compared with the lunar third-body perturbation near the libration points ($\sim 10^{-4}$ m/s$^2$), SRP is approximately three orders of magnitude smaller—but it accumulates as a **long-term effect** (Casnova et al., 2015), and given that debris objects are typically tumbling (variable orientation and fluctuating $C_R$), SRP becomes a non-negligible error source in multi-month long-term propagation.

In OD, $C_R$ is a commonly estimated parameter, but estimation windows shorter than 4 months easily lead to overfitting and unrealistic values (e.g. $C_R \approx 14$ or $-0.9$). Jointly estimating $C_R$ and ground-station bias terms can improve out-of-sample forecast performance (Framework paper, 2023).

## Related Concepts

- [Orbital Perturbations](/en/glossary/fundamentals/orbital-perturbations/)

- [Non-Spherical Gravity Perturbation](/en/glossary/dynamics/non-spherical-gravity-perturbation/)

- [Atmospheric Drag](/en/glossary/dynamics/atmospheric-drag/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications (Ch. 8.6.4 Solar-Radiation Pressure—pressure constant, cannonball model, panel-model formula; Ch. 8.6.5 Other Perturbations—SRP magnitude comparison with other sources).

- A model framework for high-accuracy orbit determination and propagation of cislunar space debris, 2023 (cislunar-debris $C_r$ estimation: window length and overfitting, SRP magnitude and error).

- Casanova et al., 2015, Long-term evolution of space debris under the J2 effect, the solar radiation pressure and the solar and lunar perturbations, Celest Mech Dyn Astr (long-term coupled effects of SRP + J2 + solar/lunar perturbations).

- Fliegel et al., 1992, Global Positioning System radiation force model for geodetic applications, JGR (ROCK4/ROCK42 panel-model Fourier-approximation method).

- Gómez et al., 2001, Dynamics and Mission Design near Libration Points, vols. I–III (solar-sail artificial-libration-point concept).
