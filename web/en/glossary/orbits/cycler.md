---
title: Cycler Orbit
description: A periodic orbit that shuttles periodically between Earth and Moon, flying by both without stopping; engineering practice mostly adopts the resonant type (orbital period in a fixed ratio to the Earth–Moon system period), and the typical 1:2 resonant cycler has a period of about 14 days, supporting a monthly lunar-landing window.
keywords: Cycler Orbit, resonant cycler, periodic revisit orbit, Earth–Moon transfer, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Cycler Orbit
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Cycler Orbit Explained | Term Definition"
  description: A periodic orbit that shuttles periodically between Earth and Moon, flying by both without stopping; engineering practice mostly adopts the resonant type (orbital period in a fixed ratio to the Earth–Moon system period), and the typical 1:2 resonant cycler has a period of about 14 days, supporting a monthly lunar-landing window.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Cycler Orbit Explained | Term Definition"
  description: A periodic orbit that shuttles periodically between Earth and Moon, flying by both without stopping; engineering practice mostly adopts the resonant type (orbital period in a fixed ratio to the Earth–Moon system period), and the typical 1:2 resonant cycler has a period of about 14 days, supporting a monthly lunar-landing window.
  image: /logo.png
permalink: /en/glossary/orbits/cycler/
---

# Cycler Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A cycler orbit shuttles periodically between Earth and Moon, **flying by both without stopping**; its essence is a class of periodic orbits traveling between Earth and Moon under the Earth–Moon restricted three-body problem (Peng & Yang 2018). For mission needs, engineering practice **may adopt** the resonant cycler type: the orbital period is in a fixed ratio to the Earth–Moon system period, with low perigee and perilune altitudes (note that resonance is an engineering choice, not an essential property). The same concept has another Chinese-language name, Earth–Moon periodic revisit orbit (Yang et al. 2013).

## Typical Parameters and Stability

The CYCLER orbit of Peng & Yang 2018: period about 14 days, rendezvousing with the Moon about every 28 days (one 14-day period per 28 days meets the Moon); apogee distance about 484,000 km, perigee about 10,700 km; inclination 28°; the orbit is approximately symmetric about the Earth–Moon line and lies in the lunar orbital plane; GMAT propagation over 10 periods (140 days) runs stably.

## Resonant Cycler Orbits

Resonant cycler orbits are defined by p:q = lunar revolutions : spacecraft revolutions (Liang 2016, citing Casoliva 2010): 1:2 means the Moon makes one revolution while the spacecraft makes two; a two-body initial guess of about 13.66 days, about 14 days after differential correction. The generation method is a two-body initial guess plus differential correction and continuation, one guess yielding one orbit; the scheme generalizes to 1:2n. By symmetry, the perilune of a 1:2 resonant cycler lies on the y-axis behind the Moon in the rotating frame.

## Geocycler (SSA Observation Orbit)

DeCoster 2026's cislunar space situational awareness architecture selects seven CR3BP periodic orbits, two of them named Eagle Geocycler (period 27.5 days) and Vulture Geocycler (70.5 days), serving as observation platforms providing spatial and geometric diversity. They share a naming style with transport-type cyclers but serve a different purpose; the original paper does not establish a connection between the two.

## Applications

The CYCLER space-station crewed lunar-landing mode: one lunar-landing window per month, able to support landings anywhere on the Moon; the price is repeated transits of the outer radiation belt and the difficulty of rendezvous and docking on highly elliptical orbits, and it rates low in overall reliability among the six modes compared (Peng & Yang 2018). Resonant cyclers are also used for GEO disposal and lunar relay satellite systems (Liang 2016).

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Earth–Moon periodic revisit orbit | Another Chinese-language name for the cycler orbit | Yang et al. 2013 |
| Resonant cycler | Cycler whose period is an integer ratio of the Earth–Moon system period | Liang 2016 |
| 1:2 resonant cycler | One lunar revolution, two spacecraft revolutions; period about 14 days | Liang 2016 |
| Eagle / Vulture Geocycler | Two named periodic orbits in an SSA observation architecture | DeCoster 2026 |

## Related Concepts

- [Resonant Orbit Family](/en/glossary/orbits/resonant-orbit-family/)
- [Formation Flight](/en/glossary/orbits/formation-flight/)
- [Multi-Body Constellation](/en/glossary/orbits/multi-body-constellation/)

## References

- Yang et al., 2013, Concept of crewed lunar exploration based on an Earth–Moon periodic revisit orbit space station
- Liang et al., 2016, The classification of cislunar trajectories and its applications in the Earth–Moon system
- Peng & Yang, 2018, Analysis of crewed lunar-landing flight modes using an Earth–Moon space station (Journal of Astronautics 39(5):471–481, in Chinese)
- DeCoster et al., 2026, Building the future of cislunar surveillance: in-space assembly and manufacturing-enabled sensor architectures
