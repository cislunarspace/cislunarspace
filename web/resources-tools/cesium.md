---
title: Cesium
description: 开源 WebGL 三维地球可视化引擎，支持卫星轨道可视化和时空数据展示
---

## 简介

Cesium 是由美国 AGI 公司开发的开源 JavaScript 库，用于在 Web 浏览器中创建三维地球和地图应用程序。基于 WebGL 技术，支持硬件加速图形渲染，可在所有主流浏览器中无需插件运行。广泛应用于卫星轨道可视化、航天器轨迹展示、地理空间数据可视化等领域。

## 基本信息

- **许可证**：Apache 2.0（开源）
- **来源**：AGI（Analytical Graphics, Inc.）
- **官方文档**：https://cesium.com/docs/
- **GitHub**：https://github.com/CesiumGS/cesium

## 主要功能

- **三维地球/火星/月亮渲染**：基于 WebGL 的高精度地形与影像渲染
- **卫星轨道可视化**：结合 Satellite.js 进行卫星位置计算与轨道展示
- **时间轴动画**：支持基于时间轴的动态流式数据展示
- **空间数据可视化**：支持几何图形、高亮区域、三维模型（gltf 格式）导入
- **跨平台跨浏览器**：运行于 Chrome、Firefox、Safari、Edge 等主流浏览器
- **开放数据接口**：支持接入地形数据、卫星影像、STK 数据等

## 应用场景

- 卫星轨道实时可视化与过境预测
- 航天器轨迹动态展示（结合 STK、GMAT 输出）
- 星座部署与覆盖分析可视化
- 深空任务轨迹展示
- 卫星通信与遥感器覆盖范围展示

## 与 STK 的关系

Cesium 与 STK 均由 AGI 出品。STK 是专业的任务分析软件，Cesium 则侧重于 Web 端的三维可视化。STK 的分析结果可通过标准格式导入 Cesium 进行展示，适合教育与公众传播场景。

## 官方资源

- 官网：https://cesium.com/
- 官方示例：https://sandcastle.cesium.com/
- CesiumJS 文档：https://cesium.com/docs/cesiumjs-ref-doc/
- GitHub：https://github.com/CesiumGS/cesium
