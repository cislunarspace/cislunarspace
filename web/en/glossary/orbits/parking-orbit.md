---
title: Parking Orbit
description: Detailed explanation of parking orbit definition, role in cislunar transfer missions, launch window waiting mechanism, and system checkout function
keywords: Parking Orbit, LEO, cislunar transfer, launch window, system checkout, Low Earth Orbit
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Parking Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Parking Orbit Explained | Cislunar Space
  description: Detailed explanation of parking orbit definition, role in cislunar transfer missions, launch window waiting mechanism, and system checkout function
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Parking Orbit Explained | Cislunar Space
  description: Detailed explanation of parking orbit definition, role in cislunar transfer missions, launch window waiting mechanism, and system checkout function
  image: /logo.png
permalink: /en/glossary/orbits/parking-orbit/
---

# Parking Orbit

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A parking orbit is an **initial orbit where a spacecraft temporarily remains** before executing its primary mission. In cislunar transfer missions, the LEO parking orbit is commonly used for waiting for launch windows and conducting system checkouts. Parking orbits are typically near-Earth circular orbits at altitudes between 200-500 km.

## Key Elements

### Functions of Parking Orbits

Parking orbits serve multiple functions in space missions:

- **Launch window waiting**: Cislunar transfers require precise launch windows; the parking orbit allows the spacecraft to wait in orbit for the optimal transfer opportunity, avoiding window misses due to ground launch delays
- **System checkout and calibration**: In the parking orbit, comprehensive checks of all spacecraft subsystems can be performed, including attitude control, propulsion, communications, and payload status
- **Orbital parameter adjustment**: Through maneuvers in the parking orbit, departure point parameters of the transfer orbit can be fine-tuned to improve injection accuracy
- **Formation and docking**: Multi-spacecraft missions can complete formation assembly or rendezvous docking in the parking orbit

### Orbital Mechanics Characteristics of Parking Orbits

Parking orbits typically choose near-Earth circular orbits with key parameters including:

- **Altitude $h$**: Usually 200-500 km, balancing atmospheric drag (low orbits decay quickly) and radiation environment (high orbits pass through the Van Allen belts)
- **Inclination $i$**: Determined by the launch site latitude, affecting the inclination change required for the subsequent transfer orbit
- **Eccentricity $e$**: Typically close to 0 (near-circular), ensuring orbital stability

The parking orbit period $T$ is:

$$T = 2\pi\sqrt{\frac{(R_E + h)^3}{\mu_E}}$$

where $R_E$ is Earth's radius and $\mu_E$ is Earth's gravitational parameter. For a 400 km altitude parking orbit, the period is approximately 92 minutes.

### Connection Between Parking Orbit and DRO Transfer

In the transfer scheme from LEO to DRO via lunar gravity assist studied by Wei et al. (2026), the LEO parking orbit is the starting point of the entire transfer:

- From the parking orbit, the first impulsive maneuver enters the cislunar transfer orbit
- The transfer orbit performs a lunar gravity assist to inject the spacecraft into DRO
- The altitude and inclination of the parking orbit directly affect the $\Delta V$ requirement for the subsequent transfer

The velocity increment from parking orbit to transfer orbit $\Delta V_1$ is:

$$\Delta V_1 = |v_{\text{transfer}} - v_{\text{parking}}|$$

where $v_{\text{parking}}$ is the circular velocity of the parking orbit and $v_{\text{transfer}}$ is the transfer orbit velocity at the departure point.

## Application Value

Parking orbits have a fundamental role in cislunar missions:

- **Launch flexibility**: The parking orbit relaxes the launch window from strict timing constraints to an on-orbit waiting period, greatly improving launch success rates
- **Safety margin**: In the parking orbit, spacecraft health can be confirmed before executing the high-energy cislunar transfer, reducing mission risk
- **Apollo heritage**: Apollo crewed lunar missions extensively used parking orbits, validating the reliability of this approach for crewed deep-space missions
- **Commercial launch practice**: Modern commercial cislunar missions (such as SpaceX lunar missions) also employ parking orbit schemes

## Related Concepts

- [Transfer Orbit](/en/glossary/orbits/transfer-orbit/)
- [Orbit Insertion](/en/glossary/other/orbit-insertion/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)

## References

- Wei Z et al. Research on lunar gravity-assist injection into cislunar distant retrograde orbit families[J]. 2026.
- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. 2013.
- Griffin M D, French J R. Space Vehicle Design[M]. 2nd ed. 2004.
