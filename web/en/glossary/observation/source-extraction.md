---
title: Source Extraction
description: Source extraction is the process of automatically detecting and measuring celestial sources in astronomical images, forming the foundational step in cislunar optical survey data processing
keywords: Source Extraction, SExtractor, Centroid, Flux, Detection Threshold, Cislunar Space, Optical Survey
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Source Extraction
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Source Extraction Details | Automated Source Detection in Astronomical Images
  description: Source extraction is the process of automatically detecting and measuring celestial sources in astronomical images, forming the foundational step in cislunar optical survey data processing
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Source Extraction Details | Automated Source Detection in Astronomical Images
  description: Source extraction is the process of automatically detecting and measuring celestial sources in astronomical images, forming the foundational step in cislunar optical survey data processing
  image: /logo.png
permalink: /en/glossary/observation/source-extraction/
---

# Source Extraction

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Source extraction is the computational process of automatically detecting celestial sources in astronomical images and measuring their basic parameters (position, flux, morphology, etc.). It is a fundamental step in astronomical data processing pipelines, providing raw measurement data for subsequent astrometry, photometric analysis, and target identification.

## Key Principles

### SExtractor Tool

SExtractor (Source Extractor) is the most widely used source extraction tool in astronomy, developed by Bertin and Arnouts in 1996. Sun et al. (2026) adopted this tool in their cislunar optical survey. Its main capabilities include:

- **Centroid measurement**: Computes the precise pixel coordinate position of each detected source
- **Flux measurement**: Measures the integrated flux intensity of each source
- **Morphological parameters**: Extracts shape information of sources (ellipticity, position angle, etc.)
- **Background estimation**: Automatically estimates and subtracts the image background

### Detection Threshold

One of the core parameters in source extraction is the detection threshold, which determines how many times above the background noise a source signal must be to be considered a genuine detection. The threshold must balance sensitivity and reliability:

| Application Scenario | Recommended Threshold | Notes |
|:---|:---:|:---|
| Background star detection | $1.5\sigma$ | Lower threshold to ensure complete extraction of reference stars |
| Candidate detection (after stacking) | $3\sigma$ | Higher threshold to reduce false alarm rate |

Sun et al. (2026) specifically noted that "the threshold used in source extraction must be evaluated carefully in order to ensure that stars detected in different frames are the same" — meaning detection thresholds across frames must remain consistent to ensure the same star sets are extracted, which is critical for subsequent inter-frame crossmatching.

### Processing Pipeline

A typical source extraction processing pipeline consists of:

1. **Background estimation and subtraction**: Estimate the background level and noise standard deviation of the image
2. **Source detection**: Detect candidate sources in the image based on the threshold
3. **Deblending and segmentation**: Separate adjacent sources
4. **Parameter measurement**: Measure centroid, flux, morphology, and other parameters for each detected source
5. **Output catalog**: Generate a source catalog containing parameters of all detected sources

## Application in Cislunar Space Observation

In optical surveys of cislunar moving objects, source extraction is the first critical step in the data processing pipeline. The work of Sun et al. (2026) demonstrates typical applications of source extraction in cislunar observation:

1. **Frame-by-frame source extraction**: Run SExtractor on each raw image frame to obtain centroid coordinates and flux intensities of all detected sources
2. **Astrometric input**: The centroid coordinates from source extraction serve as input data for astrometric solution computation
3. **Inter-frame consistency**: Careful threshold setting ensures consistent background star sets across different frames, laying the foundation for subsequent frame alignment and stacking
4. **Candidate target screening**: Source extraction on stacked images with a higher threshold ($3\sigma$) to filter potential moving object candidates
5. **Flux measurement**: Provides flux data for subsequent magnitude calculation and target brightness analysis

The quality of source extraction directly impacts the reliability of the entire data processing pipeline — missed sources may lead to insufficient reference stars, while false sources introduce erroneous crossmatches.

## Related Concepts

- [Astrometry](/en/glossary/observation/astrometry/)
- [Signal-to-Noise Ratio (SNR)](/en/glossary/observation/signal-to-noise-ratio/)
- [Image Stacking](/en/glossary/observation/image-stacking/)
- [Ephemeris Correlation](/en/glossary/observation/ephemeris-correlation/)

## References

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
- Bertin, E., Arnouts, S. SExtractor: Software for source extraction. A&AS, 1996.
