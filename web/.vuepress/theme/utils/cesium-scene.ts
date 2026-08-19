/**
 * cesium-scene — Cislunar Orbit Simulator Cesium 场景构建函数
 *
 * 从 OrbitSimLab.vue 提取。所有函数通过 SceneContext 注入依赖，
 * 不直接引用 Vue 组件闭包变量。
 */
import type { Ref } from 'vue';
import type { OrbElements } from './orbitSimMath';
import { D2R, RE, currentElements, currentECI, getGAST, kep2eci, sunECI } from './orbitSimMath';

/** Cesium 命名空间（动态加载的 ES module） */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CesiumRef = any;

/** SceneContext：场景函数的依赖容器 */
export interface SceneContext {
  Cesium: CesiumRef;
  viewer: CesiumRef; // Cesium.Viewer
  orb: OrbElements;
  simElapsed: Ref<number>;
  simTime: Ref<Date>;
  labels: SceneLabels;
  locale: string;
}

/** 场景标注文字（从 ui computed 中提取子集） */
export interface SceneLabels {
  equator: string;
  peri: string;
  apo: string;
  sun: string;
}

/* ------------------------------------------------------------------ */

export function rebuildScene(ctx: SceneContext): void {
  const { viewer } = ctx;
  viewer.entities.removeAll();
  viewer.scene.primitives.removeAll();
  addEquatorRing(ctx);
  addCoordAxes(ctx);
  addSunLine(ctx);
  addNadirLine(ctx);
  addOrbitPath(ctx);
  addSatellite(ctx);
  addPeriapsisMarker(ctx);
  addGraticule(ctx);
}

export function addEquatorRing(ctx: SceneContext): void {
  const { Cesium, viewer, orb, labels } = ctx;
  const R = Math.max(orb.a * 1.5, 1.8e7);
  const N = 24;
  const M = 8;

  for (let ring = 1; ring <= M; ring++) {
    const r = (R * ring) / M;
    const pts: any[] = [];
    for (let d = 0; d <= 360; d += 3) {
      pts.push(new Cesium.Cartesian3(r * Math.cos(d * D2R), r * Math.sin(d * D2R), 0));
    }
    viewer.entities.add({
      polyline: {
        positions: pts,
        width: ring === M ? 1.5 : 0.8,
        material: new Cesium.PolylineDashMaterialProperty({
          color: Cesium.Color.fromCssColorString('#00c8ff').withAlpha(ring === M ? 0.55 : 0.18),
          dashLength: ring === M ? 12 : 20,
        }),
        arcType: Cesium.ArcType.NONE,
      },
    });
  }

  for (let k = 0; k < N; k++) {
    const ang = (k / N) * 2 * Math.PI;
    const ex = R * Math.cos(ang);
    const ey = R * Math.sin(ang);
    viewer.entities.add({
      polyline: {
        positions: [new Cesium.Cartesian3(0, 0, 0), new Cesium.Cartesian3(ex, ey, 0)],
        width: 0.8,
        material: new Cesium.PolylineDashMaterialProperty({
          color: Cesium.Color.fromCssColorString('#00c8ff').withAlpha(0.18),
          dashLength: 20,
        }),
        arcType: Cesium.ArcType.NONE,
      },
    });
  }

  const NSEG = 120;
  const verts: number[] = [];
  const idxs: number[] = [];
  verts.push(0, 0, 0);
  for (let k = 0; k <= NSEG; k++) {
    const ang = (k / NSEG) * 2 * Math.PI;
    verts.push(R * Math.cos(ang), R * Math.sin(ang), 0);
  }
  for (let k = 1; k <= NSEG; k++) idxs.push(0, k, k + 1);

  viewer.scene.primitives.add(
    new Cesium.Primitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.Geometry({
          attributes: {
            position: new Cesium.GeometryAttribute({
              componentDatatype: Cesium.ComponentDatatype.DOUBLE,
              componentsPerAttribute: 3,
              values: new Float64Array(verts),
            }),
          },
          indices: new Uint16Array(idxs),
          primitiveType: Cesium.PrimitiveType.TRIANGLES,
          boundingSphere: Cesium.BoundingSphere.fromVertices(verts),
        }),
        attributes: {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(
            Cesium.Color.fromCssColorString('#00c8ff').withAlpha(0.04),
          ),
        },
      }),
      appearance: new Cesium.PerInstanceColorAppearance({ flat: true, translucent: true }),
      asynchronous: false,
    }),
  );

  viewer.entities.add({
    position: new Cesium.Cartesian3(R + 4e5, 0, 0),
    label: {
      text: labels.equator,
      font: '11px sans-serif',
      fillColor: Cesium.Color.fromCssColorString('#00c8ff').withAlpha(0.85),
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 2,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
  });
}

export function addCoordAxes(ctx: SceneContext): void {
  const { Cesium, viewer, locale } = ctx;
  const L = 1.0e7;
  const axes = [
    { dir: [L, 0, 0], color: '#ff3366', label: locale === 'en' ? 'X  Vernal' : 'X  春分点 ♈' },
    { dir: [0, L, 0], color: '#33ff66', label: 'Y' },
    { dir: [0, 0, L], color: '#4488ff', label: locale === 'en' ? 'Z  North' : 'Z  北极' },
  ];
  axes.forEach((ax) => {
    const tip = new Cesium.Cartesian3(ax.dir[0], ax.dir[1], ax.dir[2]);
    const col = Cesium.Color.fromCssColorString(ax.color);
    viewer.entities.add({
      polyline: {
        positions: [Cesium.Cartesian3.ZERO, tip],
        width: 2.5,
        material: new Cesium.PolylineArrowMaterialProperty(col),
        arcType: Cesium.ArcType.NONE,
      },
    });
    viewer.entities.add({
      position: tip,
      label: {
        text: ax.label,
        font: 'bold 13px Consolas,monospace',
        fillColor: col,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 3,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -8),
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
      },
    });
  });
}

export function addGraticule(ctx: SceneContext): void {
  const { Cesium, viewer, simTime } = ctx;
  const COLOR_MAJOR = Cesium.Color.fromCssColorString('#88bbff').withAlpha(0.5);
  const COLOR_MINOR = Cesium.Color.fromCssColorString('#3366aa').withAlpha(0.22);
  const W_MAJOR = 1.2;
  const W_MINOR = 0.6;
  const RE_SURF = RE + 10000;

  function geoToECI(lonDeg: number, latDeg: number, epoch: Date) {
    const lon = lonDeg * D2R;
    const lat = latDeg * D2R;
    const gast = getGAST(epoch);
    const x0 = RE_SURF * Math.cos(lat) * Math.cos(lon);
    const y0 = RE_SURF * Math.cos(lat) * Math.sin(lon);
    const z0 = RE_SURF * Math.sin(lat);
    const cG = Math.cos(gast);
    const sG = Math.sin(gast);
    return new Cesium.Cartesian3(cG * x0 - sG * y0, sG * x0 + cG * y0, z0);
  }

  for (let lon = -180; lon < 180; lon += 10) {
    const isMajor = lon % 30 === 0;
    viewer.entities.add({
      polyline: {
        positions: new Cesium.CallbackProperty(() => {
          const pts: any[] = [];
          for (let lat = -88; lat <= 88; lat += 4) pts.push(geoToECI(lon, lat, simTime.value));
          return pts;
        }, false),
        width: isMajor ? W_MAJOR : W_MINOR,
        material: isMajor ? COLOR_MAJOR : COLOR_MINOR,
        arcType: Cesium.ArcType.NONE,
      },
    });
  }

  for (let lat = -80; lat <= 80; lat += 10) {
    const isMajor = lat % 30 === 0 || lat === 0;
    viewer.entities.add({
      polyline: {
        positions: new Cesium.CallbackProperty(() => {
          const pts: any[] = [];
          for (let lon = -180; lon <= 180; lon += 5) pts.push(geoToECI(lon, lat, simTime.value));
          return pts;
        }, false),
        width: isMajor ? W_MAJOR : W_MINOR,
        material: isMajor ? COLOR_MAJOR : COLOR_MINOR,
        arcType: Cesium.ArcType.NONE,
      },
    });
  }

  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        const pts: any[] = [];
        for (let lon = -180; lon <= 180; lon += 3) pts.push(geoToECI(lon, 0, simTime.value));
        return pts;
      }, false),
      width: 2.0,
      material: Cesium.Color.fromCssColorString('#00d4ff').withAlpha(0.7),
      arcType: Cesium.ArcType.NONE,
    },
  });

  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        const pts: any[] = [];
        for (let lat = -88; lat <= 88; lat += 4) pts.push(geoToECI(0, lat, simTime.value));
        return pts;
      }, false),
      width: 2.0,
      material: Cesium.Color.fromCssColorString('#00d4ff').withAlpha(0.7),
      arcType: Cesium.ArcType.NONE,
    },
  });
}

export function addOrbitPath(ctx: SceneContext): void {
  const { Cesium, viewer } = ctx;
  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => buildOrbitPts(ctx), false),
      width: 2.5,
      material: new Cesium.PolylineGlowMaterialProperty({
        glowPower: 0.18,
        taperPower: 1.0,
        color: Cesium.Color.fromCssColorString('#00d4ff').withAlpha(0.95),
      }),
      arcType: Cesium.ArcType.NONE,
    },
  });
}

export function addSatellite(ctx: SceneContext): void {
  const { Cesium, viewer, orb, simElapsed } = ctx;
  viewer.entities.add({
    position: new Cesium.CallbackProperty(() => {
      const { pos } = currentECI(orb, simElapsed.value);
      return new Cesium.Cartesian3(pos[0], pos[1], pos[2]);
    }, false),
    point: {
      pixelSize: 14,
      color: Cesium.Color.fromCssColorString('#00ffcc'),
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
    label: {
      text: '🛰 SAT',
      font: 'bold 12px Consolas,monospace',
      fillColor: Cesium.Color.fromCssColorString('#00ffcc'),
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 3,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(16, 0),
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
  });
}

export function addNadirLine(ctx: SceneContext): void {
  const { Cesium, viewer, orb, simElapsed } = ctx;
  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        const { pos } = currentECI(orb, simElapsed.value);
        return [Cesium.Cartesian3.ZERO, new Cesium.Cartesian3(pos[0], pos[1], pos[2])];
      }, false),
      width: 1.5,
      material: new Cesium.PolylineDashMaterialProperty({
        color: Cesium.Color.fromCssColorString('#ffcc44').withAlpha(0.8),
        dashLength: 12,
      }),
      arcType: Cesium.ArcType.NONE,
    },
  });
}

export function buildOrbitPts(ctx: SceneContext): CesiumRef[] {
  const { Cesium, orb, simElapsed } = ctx;
  const N = 360;
  const { raan, argp } = currentElements(orb, simElapsed.value);
  const pts: any[] = [];
  for (let k = 0; k <= N; k++) {
    const nu = (k / N) * 2 * Math.PI;
    const { pos } = kep2eci(orb.a, orb.e, orb.i, raan, argp, nu);
    pts.push(new Cesium.Cartesian3(pos[0], pos[1], pos[2]));
  }
  return pts;
}

export function addPeriapsisMarker(ctx: SceneContext): void {
  const { Cesium, viewer, orb, simElapsed, labels } = ctx;
  const periPos = new Cesium.CallbackProperty(() => {
    const { raan, argp } = currentElements(orb, simElapsed.value);
    const { pos } = kep2eci(orb.a, orb.e, orb.i, raan, argp, 0);
    return new Cesium.Cartesian3(pos[0], pos[1], pos[2]);
  }, false);

  viewer.entities.add({
    position: periPos,
    point: {
      pixelSize: 10,
      color: Cesium.Color.fromCssColorString('#ff4466'),
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
    label: {
      text: labels.peri,
      font: 'bold 11px Consolas,monospace',
      fillColor: Cesium.Color.fromCssColorString('#ff6688'),
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 3,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(14, -4),
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
  });

  const apoPos = new Cesium.CallbackProperty(() => {
    const { raan, argp } = currentElements(orb, simElapsed.value);
    const { pos } = kep2eci(orb.a, orb.e, orb.i, raan, argp, Math.PI);
    return new Cesium.Cartesian3(pos[0], pos[1], pos[2]);
  }, false);

  viewer.entities.add({
    position: apoPos,
    point: {
      pixelSize: 10,
      color: Cesium.Color.fromCssColorString('#44aaff'),
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
    label: {
      text: labels.apo,
      font: 'bold 11px Consolas,monospace',
      fillColor: Cesium.Color.fromCssColorString('#66ccff'),
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 3,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(14, -4),
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
  });
}

export function addSunLine(ctx: SceneContext): void {
  const { Cesium, viewer, simTime, labels } = ctx;
  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        const s = sunECI(simTime.value);
        const len = Math.sqrt(s[0] ** 2 + s[1] ** 2 + s[2] ** 2);
        const sc = 1.8e7 / len;
        return [Cesium.Cartesian3.ZERO, new Cesium.Cartesian3(s[0] * sc, s[1] * sc, s[2] * sc)];
      }, false),
      width: 2,
      material: new Cesium.PolylineDashMaterialProperty({
        color: Cesium.Color.fromCssColorString('#ff7722').withAlpha(0.85),
        dashLength: 18,
      }),
      arcType: Cesium.ArcType.NONE,
    },
  });

  viewer.entities.add({
    position: new Cesium.CallbackProperty(() => {
      const s = sunECI(simTime.value);
      const len = Math.sqrt(s[0] ** 2 + s[1] ** 2 + s[2] ** 2);
      const sc = 1.9e7 / len;
      return new Cesium.Cartesian3(s[0] * sc, s[1] * sc, s[2] * sc);
    }, false),
    label: {
      text: labels.sun,
      font: 'bold 13px sans-serif',
      fillColor: Cesium.Color.fromCssColorString('#ffaa44'),
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 3,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
  });
}

export function rotateGlobeToECI(ctx: SceneContext, epoch: Date): void {
  const { Cesium, viewer } = ctx;
  const gast = getGAST(epoch);
  const rotation = Cesium.Matrix3.fromRotationZ(-gast);
  const mat4 = Cesium.Matrix4.fromRotationTranslation(rotation, Cesium.Cartesian3.ZERO);
  viewer.scene.globe.modelMatrix = mat4;
}
