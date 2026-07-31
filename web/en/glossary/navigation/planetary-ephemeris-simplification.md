---
title: Planetary Ephemeris Simplification
description: "A method for reducing the onboard storage and computational burden of planetary ephemerides used in autonomous orbit determination. It retains only the five gra"
keywords: Planetary Ephemeris Simplification, navigation terminology, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Planetary Ephemeris Simplification
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Planetary Ephemeris Simplification Explained | Term Definition
  description: "A method for reducing the onboard storage and computational burden of planetary ephemerides used in autonomous orbit determination. It retains only the five gra"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Planetary Ephemeris Simplification Explained | Term Definition
  description: "A method for reducing the onboard storage and computational burden of planetary ephemerides used in autonomous orbit determination. It retains only the five gra"
  image: /logo.png
permalink: /en/glossary/navigation/planetary-ephemeris-simplification/
---

# Planetary Ephemeris Simplification

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A method for reducing the onboard storage and computational burden of planetary ephemerides used in autonomous orbit determination. It retains only the five gravitationally significant bodies (Moon, Sun, Venus, Jupiter, Saturn) and replaces Chebyshev polynomial fitting with Hermite interpolation. With a 6-day arc, 1-day lunar and 5-day solar interpolation intervals, the scheme reduces memory by approximately 60% while keeping accuracy loss at the meter level.

## References

- Lv et al., 2025
