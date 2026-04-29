---
title: Astrometry
description: Astrometry is the technique of precisely measuring celestial positions on the sky, providing core data for orbit determination and target identification in cislunar space
keywords: Astrometry, Equatorial Coordinates, Position Measurement, Pixel Precision, Cislunar Space, Chang'e-6, Tycho-2
author: Tianjiang Says
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Astrometry
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Astrometry Details | Precision Position Measurement in Cislunar Space
  description: Astrometry is the technique of precisely measuring celestial positions on the sky, providing core data for orbit determination and target identification in cislunar space
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Astrometry Details | Precision Position Measurement in Cislunar Space
  description: Astrometry is the technique of precisely measuring celestial positions on the sky, providing core data for orbit determination and target identification in cislunar space
  image: /logo.png
permalink: /en/glossary/observation/astrometry/
---

# Astrometry

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Astrometry is a core branch of astronomy focused on precisely measuring the positions (right ascension, declination), proper motion, and parallax of celestial objects on the sky. In cislunar space observation, astrometry provides the foundational data for accurate positioning, orbit determination, and target identification of moving objects.

## Key Principles

### Measurement Workflow

The basic astrometric workflow includes:

1. **Source extraction**: Detect and extract the pixel coordinates (centroids) and flux information of celestial sources from astronomical images
2. **Astrometric solution**: Use known reference stars (e.g., the Tycho-2 catalog) with precise positions to establish the mapping between pixel coordinates and celestial coordinates (the astrometric solution)
3. **Coordinate transformation**: Based on the astrometric solution, convert the pixel coordinates of all detected sources into equatorial coordinates (right ascension R.A., declination)
4. **Magnitude calculation**: Combined with photometric calibration, compute the apparent magnitude of each source

### Measurement Precision

Astrometric precision depends on several factors:

- **Signal-to-Noise Ratio (SNR)**: Higher SNR images yield more precise centroid measurements. Sun et al. (2026) demonstrated that high-SNR images achieve measurement precision better than **0.1 pixels**
- **Reference star density**: More reference stars yield a more robust astrometric solution
- **Image distortion correction**: Optical system distortion introduces systematic position errors
- **Atmospheric refraction**: Significant for low-elevation observations

### Reference Catalogs

Astrometry relies on high-precision reference catalogs to establish the coordinate framework. Common catalogs include:

| Catalog | Characteristics |
|:---|:---|
| Tycho-2 | ~2.5 million stars, position precision ~7 mas |
| Gaia DR3 | ~1.8 billion stars, sub-milliarcsecond precision |
| UCAC4 | ~113 million stars, coverage to magnitude 16 |

## Application in Cislunar Space Observation

Astrometry is employed throughout the entire data processing pipeline for optical surveys of cislunar moving objects. Sun et al. (2026) systematically applied astrometric techniques in their optical observations of the Chang'e-6 orbiter:

1. **Inter-frame alignment**: Astrometric information is used for precise alignment and registration of multi-frame images (image registration), ensuring pixel-level correspondence during stacking
2. **Coordinate solutions**: Detected candidate sources are crossmatched with the Tycho-2 catalog to obtain astrometric solutions, from which equatorial coordinates and apparent magnitudes are calculated for all candidate images
3. **Moving target identification**: By comparing the astrometric positions of the same target across different frames, true moving objects are distinguished from background stars
4. **Ephemeris correlation input**: High-precision astrometric results serve as the critical input data for subsequent ephemeris correlation

## Related Concepts

- [Source Extraction](/en/glossary/observation/source-extraction/)
- [Signal-to-Noise Ratio (SNR)](/en/glossary/observation/signal-to-noise-ratio/)
- [Ephemeris Correlation](/en/glossary/observation/ephemeris-correlation/)
- [Image Stacking](/en/glossary/observation/image-stacking/)

## References

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
