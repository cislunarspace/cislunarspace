---
title: Solar Radiation Model with Multiple Characteristic Surfaces
description: "A solar radiation pressure model that partitions a spacecraft's surface into multiple characteristic facets based on its actual structure and real-time attitude, computes the equivalent illuminated ar..."
keywords: Solar Radiation Model with Multiple Characteristic Surfaces
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Solar Radiation Model with Multiple Characteristic Surfaces
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Solar Radiation Model with Multiple Characteristic Surfaces Explained | Term Definition
  description: "A solar radiation pressure model that partitions a spacecraft's surface into multiple characteristic facets based on its actual structure and real-time attitude, computes the equivalent illuminated ar..."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Solar Radiation Model with Multiple Characteristic Surfaces Explained | Term Definition
  description: "A solar radiation pressure model that partitions a spacecraft's surface into multiple characteristic facets based on its actual structure and real-time attitude, computes the equivalent illuminated ar..."
  image: /logo.png
permalink: /en/glossary/fundamentals/solar-radiation-model-with-multiple-characteristic-surfaces/
---
# Solar Radiation Model with Multiple Characteristic Surfaces

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A solar radiation pressure model that partitions a spacecraft's surface into multiple characteristic facets based on its actual structure and real-time attitude, computes the equivalent illuminated area at each characteristic angle (e.g., disk, triangle, elliptic projections of a dish antenna), and constructs a continuous area function via shape-preserving piecewise cubic Hermite interpolation. It replaces the fixed area-to-mass ratio of the cannon-ball model and significantly improves orbit determination accuracy for spacecraft with complex geometry.


## Application Value

形状法利用解析函数近似轨迹几何形状，为高精度的最优控制求解器提供良好的初始猜测，是小推力转移轨道设计的重要工具。


## References

- Duan和Wang - 2019 - Orbit determination of CE-4's relay satellite in Earth-moon L2 libration point orbit

