---
title: Maneuver Error Modeling
description: A method for simulating the effect of thrust execution errors on the actual delta-V in stationkeeping simulations. Typically implemented by multiplying the...
keywords: Maneuver Error Modeling
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Maneuver Error Modeling
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Maneuver Error Modeling Explained | Term Definition
  description: A method for simulating the effect of thrust execution errors on the actual delta-V in stationkeeping simulations. Typically implemented by multiplying the...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Maneuver Error Modeling Explained | Term Definition
  description: A method for simulating the effect of thrust execution errors on the actual delta-V in stationkeeping simulations. Typically implemented by multiplying the...
  image: /logo.png
permalink: /en/glossary/navigation/maneuver-error-modeling/
---

# Maneuver Error Modeling

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A method for simulating the effect of thrust execution errors on the actual delta-V in stationkeeping simulations. Typically implemented by multiplying the computed delta-V by an error factor, e.g., 1.01 for a 1% hot maneuver (actual thrust slightly exceeds nominal). ARTEMIS observed maneuver errors of about 1% after thruster calibration. Errors are applied after each computed maneuver and propagated together with navigation errors to the next maneuver location.


## Related Concepts


## References

- Folta et al. 2010
