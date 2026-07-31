---
title: Navigation Error Covariance Modeling
description: A method used in stationkeeping simulations to characterize navigation uncertainty in spacecraft position and velocity using a covariance matrix, and to generate random error samples accordingly.
keywords: Navigation Error Covariance Modeling, Navigation Error Covariance Modeling
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Navigation Error Covariance Modeling
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Navigation Error Covariance Modeling Explained | Term Definition
  description: A method used in stationkeeping simulations to characterize navigation uncertainty in spacecraft position and velocity using a covariance matrix, and to generate random error samples accordingly.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Navigation Error Covariance Modeling Explained | Term Definition
  description: A method used in stationkeeping simulations to characterize navigation uncertainty in spacecraft position and velocity using a covariance matrix, and to generate random error samples accordingly.
  image: /logo.png
permalink: /en/glossary/navigation/navigation-error-covariance-modeling/
---

# Navigation Error Covariance Modeling

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A method used in stationkeeping simulations to characterize navigation uncertainty in spacecraft position and velocity using a covariance matrix, and to generate random error samples accordingly. The diagonal matrix of estimated navigation errors serves as the covariance; eigenvalue decomposition yields standard deviations, and 3-sigma random errors are added to the post-maneuver state in three dimensions. ARTEMIS uses 1-km position and 1-cm/s velocity 1-sigma errors derived from the diagonal of covariance matrices from actual Earth-Moon navigation solutions.

## Application Value

Navigation system design and implementation must account for observation geometry, error propagation, and signal transmission delay. This concept supports positioning accuracy evaluation, navigation filter design, and constellation optimization.


## Related Concepts

- [Lunar Surface Receiver](/en/glossary/navigation/lunar-surface-receiver/)
- [Geometric Dilution of Precision, GDOP](/en/glossary/navigation/geometric-dilution-of-precision-gdop/)
- [Satellite-to-Satellite Tracking, SST](/en/glossary/navigation/satellite-to-satellite-tracking-sst/)


## References

- Folta et al. 2010
