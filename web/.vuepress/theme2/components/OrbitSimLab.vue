<script setup lang="ts">
/**
 * 卫星轨道仿真教学平台（由原 public/orbit-sim.html 迁入 Vue，轨道力学见 utils/orbitSimMath.ts）
 */
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import {
  D2R,
  GM,
  RE,
  R2D,
  applyPreset,
  currentECI,
  currentElements,
  eci2ecef,
  fmtUTC,
  getGAST,
  kep2eci,
  orbTypeLabel,
  sunECI,
  type OrbElements,
  type PresetKey,
  PRESETS,
} from '../utils/orbitSimMath'

const props = withDefaults(
  defineProps<{
    locale?: 'zh' | 'en'
  }>(),
  { locale: 'zh' }
)

const CESIUM_JS = 'https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Cesium.js'
const CESIUM_CSS = 'https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Widgets/widgets.css'

/** 与历史 orbit-sim.html 一致，便于沿用 Ion 资源 */
const CESIUM_ION_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MjBhMDI3My1lMjRmLTRhN2QtODc5Yi02MGVhZmUzNDdjMzAiLCJpZCI6Mzk1NDEzLCJpYXQiOjE3NzIxOTg2NDN9.5aOJb2oLS3xJ-bbcRdTzznV5j9jDGvD_Ev-GF4eNc3A'

const rootEl = ref<HTMLElement | null>(null)
const viewerEl = ref<HTMLElement | null>(null)
const maskVisible = ref(true)
const maskError = ref<string | null>(null)

const orb = reactive<OrbElements>({
  a: 6778000,
  e: 0,
  i: 51.6 * D2R,
  raan: 0,
  argp: 0,
  nu: 0,
})

const simTime = ref(new Date())
const simSpeed = ref(1)
const isPaused = ref(false)
let lastWall = 0
const simEpoch0 = ref(new Date())
const simElapsed = ref(0)

const hud = reactive({
  lon: '--',
  lat: '--',
  alt: '--',
  spd: '--',
  x: '--',
  y: '--',
  z: '--',
  type: 'LEO',
  inc: '--',
  nu: '--',
  ep: '--',
})

const topTime = ref('--')
const speedLabel = ref('1×')
const pauseLabel = ref('⏸ 暂停')
const toastMsg = ref('')
let toastTimer: ReturnType<typeof setTimeout> | null = null

/** 与快捷键 1–5 对应的预设高亮 */
const activePresetKey = ref<PresetKey | null>(null)

let viewer: any = null
let CesiumRef: any = null
let rafId = 0

const ui = computed(() => {
  const en = props.locale === 'en'
  return {
    title: en
      ? 'Satellite Orbit Simulation Lab | 卫星轨道仿真'
      : '卫星轨道仿真教学系统 | Satellite Orbit Simulation',
    titleShort: en ? 'Orbit Teaching Lab' : '轨道仿真教学',
    live: en ? 'Live' : '实时解算',
    frame: en ? 'J2000 ECI' : 'J2000 ECI',
    j2: en ? 'J2' : 'J2 摄动',
    quickPresets: en ? 'Quick presets' : '轨道预设',
    presetKeysHint: en ? 'Keys 1–5' : '键 1–5',
    timeTitle: en ? 'Time' : '时间',
    secOrb: en ? 'Keplerian elements' : '开普勒轨道六要素',
    grpShape: en ? 'Size & shape' : '尺度与形状',
    grpOrient: en ? 'Orientation in space' : '空间指向',
    grpPhase: en ? 'Phase on orbit' : '轨道相位',
    loading: en ? 'Loading orbit lab…' : '正在加载轨道仿真…',
    hudSat: en ? 'Satellite' : '卫星状态',
    hudEci: en ? 'ECI (km)' : 'ECI（km）',
    hudOrb: en ? 'Orbit' : '轨道',
    legend: en ? 'Legend' : '图例',
    kb: en
      ? 'Space · pause    1–5 · presets    +/- · rate    R · reset UTC'
      : '空格 · 暂停    1–5 · 预设    +/- · 速率    R · 重置 UTC',
    ready: en
      ? 'Ready.\nSpace pause · 1–5 presets · +/- rate · R reset clock'
      : '就绪。\n空格暂停 · 1–5 预设 · +/- 速率 · R 重置时钟',
    resetClock: en ? 'Simulation clock reset' : '仿真时钟已重置',
    lon: en ? 'Lon λ' : '经度 λ',
    lat: en ? 'Lat φ' : '纬度 φ',
    alt: en ? 'Alt h' : '高度 h',
    angVel: en ? 'Mean motion' : '平均运动',
    type: en ? 'Regime' : '类型',
    period: en ? 'Period' : '周期',
    nu: en ? 'True anomaly' : '真近点角',
    epoch: en ? 'UTC sim' : '仿真 UTC',
    peri: en ? 'Periapsis' : '近地点\nPeriapsis',
    apo: en ? 'Apoapsis' : '远地点\nApoapsis',
    sun: en ? 'Sun' : '☀ 太阳',
    equator: en ? 'Equatorial plane' : '赤道面 Equatorial Plane',
    /** 把隐式知识摊在台面上：模型边界与术语歧义，避免「界面像真值」的误读 */
    assumptionsTitle: en ? 'Model & tacit assumptions' : '模型与隐式假设',
    assumptionsHint: en ? 'What this sandbox is not' : '本沙盘不是什么',
    assumptionsLead: en
      ? 'Teaching visualization only. Below are simplifications users often absorb implicitly—made explicit.'
      : '教学可视化专用。下列内容多为界面未写明、学习者容易默认成立的隐含前提——在此显式列出。',
    assumptionsItems: en
      ? [
          'Force model: Keplerian two-body with a first-order J2 secular model (averaged). No drag, SRP, higher gravity harmonics, or third bodies.',
          'Frames: orbit state is in an ECI-style inertial frame; Earth rotation for the globe uses a simplified GMST-style angle, not a full IERS Earth-orientation model.',
          'HUD “Mean motion” is n in °/h from √(μ/a³)—orbital mean rate—not satellite body angular velocity.',
          'Sun line: low-accuracy teaching ephemeris (~±1° class), for cueing only.',
          'Altitudes vs semi-major axis follow common textbook tying to WGS-84-like R⊕ here; mission ephemerides use rigorous epoch, ellipsoid, and naming conventions.',
        ]
      : [
          '力模型：二体开普勒根数 + 一阶 J2 长期项（平均化）摄动；无大气阻力、光压、高阶重力场与第三体引力。',
          '坐标系：轨道在类 ECI 惯性系中积分；地球自转显示采用简化的恒星时角关系，非 IERS 完整地球定向模型。',
          'HUD「平均运动」为由 √(μ/a³) 换算的轨道平均角速率 n（°/h），不是航天器本体角速度。',
          '太阳方向为低精度示意（约 ±1° 量级），仅作方位与昼夜提示。',
          '高度 h 与半长轴 a 的联动采用常见教材约定与近似地球半径；工程星历需对照历元、椭球与任务口径。',
        ],
    labels: {
      h: { name: en ? 'Altitude h' : '轨道高度 h', unit: 'km', desc: en ? 'Perigee altitude; drives period & speed' : '近地点高度，影响轨道周期与速度' },
      a: { name: en ? 'Semi-major axis a' : '半长轴 a', unit: 'km', desc: en ? 'a = R⊕ + h' : '椭圆轨道长轴半径 a = R⊕ + h' },
      e: { name: en ? 'Eccentricity e' : '离心率 e', unit: '', desc: en ? 'e=0 circle; e→1 parabolic' : '轨道椭圆度，e=0圆轨道，e→1抛物线' },
      i: { name: en ? 'Inclination i' : '轨道倾角 i', unit: '°', desc: en ? 'Orbit plane tilt vs equator' : '轨道面与赤道面夹角，决定覆盖纬度' },
      raan: { name: en ? 'RAAN Ω' : '升交点赤经 Ω', unit: '°', desc: en ? 'Ascending node longitude' : '升交点在赤道面上的位置，定义轨道面朝向' },
      argp: { name: en ? 'Arg. of perigee ω' : '近地点幅角 ω', unit: '°', desc: en ? 'Perigee direction in orbit plane' : '从升交点到近地点的角度，定义椭圆方向' },
      nu: { name: en ? 'True anomaly f' : '真近点角 f', unit: '°', desc: en ? 'Current position on orbit' : '卫星在轨道上的当前位置，初始相位' },
    },
  }
})

/** 英文完整标题与说明（中文取自 PRESETS.desc，按「 | 」拆分） */
const PRESET_CHIP_EN: Record<PresetKey, { title: string; subtitle: string }> = {
  leo: { title: 'Low Earth orbit', subtitle: 'Circular; ISS-class altitude' },
  sso: { title: 'Sun-synchronous orbit', subtitle: 'Nodal precession ≈ 0.9856°/day' },
  frozen: { title: 'Frozen orbit', subtitle: 'ω = 270°; limits J₂ apsidal drift' },
  repeating: { title: 'Repeating ground track', subtitle: 'Daily repeating footprint' },
  geo: { title: 'Geostationary orbit', subtitle: 'T = 23h56m04s; fixed subsatellite point' },
}

const PRESET_CHIP_ORDER: PresetKey[] = ['leo', 'sso', 'frozen', 'repeating', 'geo']

const presetChips = computed(() => {
  const en = props.locale === 'en'
  return PRESET_CHIP_ORDER.map((key, idx) => {
    const hint = String(idx + 1)
    if (en) {
      const { title, subtitle } = PRESET_CHIP_EN[key]
      return { key, hint, title, subtitle }
    }
    const d = PRESETS[key].desc
    const sep = d.indexOf(' | ')
    const title = sep >= 0 ? d.slice(0, sep) : d
    const subtitle = sep >= 0 ? d.slice(sep + 3) : ''
    return { key, hint, title, subtitle }
  })
})

function loadCss(href: string) {
  return new Promise<void>((resolve, reject) => {
    const l = document.createElement('link')
    l.rel = 'stylesheet'
    l.href = href
    l.onload = () => resolve()
    l.onerror = () => reject(new Error(`CSS ${href}`))
    document.head.appendChild(l)
  })
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`Script ${src}`))
    document.head.appendChild(s)
  })
}

function toast(msg: string) {
  toastMsg.value = msg
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMsg.value = ''
  }, 3500)
}

function updateHUD() {
  const { pos, vel } = currentECI(orb, simElapsed.value)
  const ecef = eci2ecef(pos, simTime.value)
  const r = Math.sqrt(ecef[0] ** 2 + ecef[1] ** 2 + ecef[2] ** 2)
  const lat = Math.asin(ecef[2] / r) * R2D
  const lon = Math.atan2(ecef[1], ecef[0]) * R2D
  const alt = (r - RE) / 1000
  const el = currentElements(orb, simElapsed.value)
  const degr = Math.sqrt(GM / el.a ** 3) * R2D * 3600
  const Ts = (2 * Math.PI) / Math.sqrt(GM / el.a ** 3) / 3600
  const nuDeg = ((el.nu * R2D) % 360 + 360) % 360

  hud.lon = `${lon.toFixed(3)}°`
  hud.lat = `${lat.toFixed(3)}°`
  hud.alt = `${alt.toFixed(2)} km`
  hud.spd = `${degr.toFixed(4)}°/h`
  hud.x = `${(pos[0] / 1000).toFixed(1)} km`
  hud.y = `${(pos[1] / 1000).toFixed(1)} km`
  hud.z = `${(pos[2] / 1000).toFixed(1)} km`
  hud.inc = `${Ts.toFixed(2)}h`
  hud.nu = `${nuDeg.toFixed(2)}°`
  hud.ep = fmtUTC(simTime.value)
  hud.type = orbTypeLabel(orb)
}

function updateTopbar() {
  topTime.value = `UTC  ${fmtUTC(simTime.value)}`
}

function updateSliders() {
  const root = rootEl.value
  if (!root) return
  root.querySelectorAll('.pslider').forEach((sl) => {
    const el = sl as HTMLInputElement
    const pct = (((+el.value - +el.min) / (+el.max - +el.min)) * 100).toFixed(1)
    el.style.background = `linear-gradient(90deg, var(--os-accent) ${pct}%, var(--os-track) ${pct}%)`
  })
}

function onParam(key: string, raw: string) {
  const v = parseFloat(raw)
  simElapsed.value = 0
  simEpoch0.value = new Date()
  activePresetKey.value = null

  switch (key) {
    case 'h':
      orb.a = RE + v * 1000
      syncVal.value.a = orb.a / 1000
      break
    case 'a':
      orb.a = v * 1000
      syncVal.value.h = Math.min(46000, Math.max(200, (orb.a - RE) / 1000))
      break
    case 'e':
      orb.e = v
      break
    case 'i':
      orb.i = v * D2R
      break
    case 'raan':
      orb.raan = v * D2R
      break
    case 'argp':
      orb.argp = v * D2R
      break
    case 'nu':
      orb.nu = v * D2R
      break
  }
  updateSliders()
}

function syncAllSlidersFromOrb() {
  const h = (orb.a - RE) / 1000
  syncVal.value.h = Math.min(46000, Math.max(200, h))
  syncVal.value.a = orb.a / 1000
  syncVal.value.e = orb.e
  syncVal.value.i = orb.i * R2D
  syncVal.value.raan = orb.raan * R2D
  syncVal.value.argp = orb.argp * R2D
  syncVal.value.nu = orb.nu * R2D
  updateSliders()
}

/** 与 range 控件双向绑定的数值（km / deg / 无量纲） */
const syncVal = ref({
  h: 400,
  a: 6778,
  e: 0,
  i: 51.6,
  raan: 0,
  argp: 0,
  nu: 0,
})

function loadPreset(name: PresetKey) {
  applyPreset(orb, name)
  activePresetKey.value = name
  simElapsed.value = 0
  simEpoch0.value = new Date()
  syncAllSlidersFromOrb()
  toast(PRESETS[name].desc)

  if (viewer && CesiumRef) {
    const Cesium = CesiumRef
    viewer.camera.flyTo({
      destination: new Cesium.Cartesian3.fromDegrees(110.435314, 38.960521, 60000000.0),
      duration: 1,
      orientation: {
        heading: 0,
        pitch: Cesium.Math.toRadians(-90),
        roll: 0,
      },
    })
  }
  rebuildScene()
}

function togglePause() {
  isPaused.value = !isPaused.value
  pauseLabel.value = isPaused.value ? (props.locale === 'en' ? '▶ Resume' : '▶ 继续') : '⏸ 暂停'
  if (!isPaused.value) lastWall = performance.now()
}

function setSpeed(s: number) {
  simSpeed.value = s
  speedLabel.value = `${s}×`
  if (isPaused.value) {
    isPaused.value = false
    lastWall = performance.now()
    pauseLabel.value = '⏸ 暂停'
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.target instanceof HTMLInputElement) return
  switch (e.key) {
    case ' ':
      e.preventDefault()
      togglePause()
      break
    case '1':
      loadPreset('leo')
      break
    case '2':
      loadPreset('sso')
      break
    case '3':
      loadPreset('frozen')
      break
    case '4':
      loadPreset('repeating')
      break
    case '5':
      loadPreset('geo')
      break
    case '+':
    case '=':
      setSpeed(simSpeed.value * 2)
      break
    case '-':
      setSpeed(Math.max(simSpeed.value / 2, 0.25))
      break
    case 'r':
    case 'R':
      simElapsed.value = 0
      simEpoch0.value = new Date()
      toast(ui.value.resetClock)
      break
  }
}

function rebuildScene() {
  if (!viewer) return
  viewer.entities.removeAll()
  addEquatorRing()
  addCoordAxes()
  addSunLine()
  addNadirLine()
  addOrbitPath()
  addSatellite()
  addPeriapsisMarker()
  addGraticule()
}

function addEquatorRing() {
  const Cesium = CesiumRef
  const R = Math.max(orb.a * 1.5, 1.8e7)
  const N = 24
  const M = 8

  for (let ring = 1; ring <= M; ring++) {
    const r = (R * ring) / M
    const pts: any[] = []
    for (let d = 0; d <= 360; d += 3) {
      pts.push(new Cesium.Cartesian3(r * Math.cos(d * D2R), r * Math.sin(d * D2R), 0))
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
    })
  }

  for (let k = 0; k < N; k++) {
    const ang = (k / N) * 2 * Math.PI
    const ex = R * Math.cos(ang)
    const ey = R * Math.sin(ang)
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
    })
  }

  const NSEG = 120
  const verts: number[] = []
  const idxs: number[] = []
  verts.push(0, 0, 0)
  for (let k = 0; k <= NSEG; k++) {
    const ang = (k / NSEG) * 2 * Math.PI
    verts.push(R * Math.cos(ang), R * Math.sin(ang), 0)
  }
  for (let k = 1; k <= NSEG; k++) idxs.push(0, k, k + 1)

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
            Cesium.Color.fromCssColorString('#00c8ff').withAlpha(0.04)
          ),
        },
      }),
      appearance: new Cesium.PerInstanceColorAppearance({ flat: true, translucent: true }),
      asynchronous: false,
    })
  )

  viewer.entities.add({
    position: new Cesium.Cartesian3(R + 4e5, 0, 0),
    label: {
      text: ui.value.equator,
      font: '11px sans-serif',
      fillColor: Cesium.Color.fromCssColorString('#00c8ff').withAlpha(0.85),
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 2,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
  })
}

function addCoordAxes() {
  const Cesium = CesiumRef
  const L = 1.0e7
  const axes = [
    { dir: [L, 0, 0], color: '#ff3366', label: props.locale === 'en' ? 'X  Vernal' : 'X  春分点 ♈' },
    { dir: [0, L, 0], color: '#33ff66', label: 'Y' },
    { dir: [0, 0, L], color: '#4488ff', label: props.locale === 'en' ? 'Z  North' : 'Z  北极' },
  ]
  axes.forEach((ax) => {
    const tip = new Cesium.Cartesian3(ax.dir[0], ax.dir[1], ax.dir[2])
    const col = Cesium.Color.fromCssColorString(ax.color)
    viewer.entities.add({
      polyline: {
        positions: [Cesium.Cartesian3.ZERO, tip],
        width: 2.5,
        material: new Cesium.PolylineArrowMaterialProperty(col),
        arcType: Cesium.ArcType.NONE,
      },
    })
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
    })
  })
}

function addGraticule() {
  const Cesium = CesiumRef
  const COLOR_MAJOR = Cesium.Color.fromCssColorString('#88bbff').withAlpha(0.5)
  const COLOR_MINOR = Cesium.Color.fromCssColorString('#3366aa').withAlpha(0.22)
  const W_MAJOR = 1.2
  const W_MINOR = 0.6
  const RE_SURF = RE + 10000

  function geoToECI(lonDeg: number, latDeg: number, epoch: Date) {
    const lon = lonDeg * D2R
    const lat = latDeg * D2R
    const gast = getGAST(epoch)
    const x0 = RE_SURF * Math.cos(lat) * Math.cos(lon)
    const y0 = RE_SURF * Math.cos(lat) * Math.sin(lon)
    const z0 = RE_SURF * Math.sin(lat)
    const cG = Math.cos(gast)
    const sG = Math.sin(gast)
    return new Cesium.Cartesian3(cG * x0 - sG * y0, sG * x0 + cG * y0, z0)
  }

  for (let lon = -180; lon < 180; lon += 10) {
    const isMajor = lon % 30 === 0
    viewer.entities.add({
      polyline: {
        positions: new Cesium.CallbackProperty(() => {
          const pts: any[] = []
          for (let lat = -88; lat <= 88; lat += 4) pts.push(geoToECI(lon, lat, simTime.value))
          return pts
        }, false),
        width: isMajor ? W_MAJOR : W_MINOR,
        material: isMajor ? COLOR_MAJOR : COLOR_MINOR,
        arcType: Cesium.ArcType.NONE,
      },
    })
  }

  for (let lat = -80; lat <= 80; lat += 10) {
    const isMajor = lat % 30 === 0 || lat === 0
    viewer.entities.add({
      polyline: {
        positions: new Cesium.CallbackProperty(() => {
          const pts: any[] = []
          for (let lon = -180; lon <= 180; lon += 5) pts.push(geoToECI(lon, lat, simTime.value))
          return pts
        }, false),
        width: isMajor ? W_MAJOR : W_MINOR,
        material: isMajor ? COLOR_MAJOR : COLOR_MINOR,
        arcType: Cesium.ArcType.NONE,
      },
    })
  }

  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        const pts: any[] = []
        for (let lon = -180; lon <= 180; lon += 3) pts.push(geoToECI(lon, 0, simTime.value))
        return pts
      }, false),
      width: 2.0,
      material: Cesium.Color.fromCssColorString('#00d4ff').withAlpha(0.7),
      arcType: Cesium.ArcType.NONE,
    },
  })

  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        const pts: any[] = []
        for (let lat = -88; lat <= 88; lat += 4) pts.push(geoToECI(0, lat, simTime.value))
        return pts
      }, false),
      width: 2.0,
      material: Cesium.Color.fromCssColorString('#00d4ff').withAlpha(0.7),
      arcType: Cesium.ArcType.NONE,
    },
  })
}

function addOrbitPath() {
  const Cesium = CesiumRef
  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => buildOrbitPts(), false),
      width: 2.5,
      material: new Cesium.PolylineGlowMaterialProperty({
        glowPower: 0.18,
        taperPower: 1.0,
        color: Cesium.Color.fromCssColorString('#00d4ff').withAlpha(0.95),
      }),
      arcType: Cesium.ArcType.NONE,
    },
  })
}

function addSatellite() {
  const Cesium = CesiumRef
  viewer.entities.add({
    position: new Cesium.CallbackProperty(() => {
      const { pos } = currentECI(orb, simElapsed.value)
      return new Cesium.Cartesian3(pos[0], pos[1], pos[2])
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
  })
}

function addNadirLine() {
  const Cesium = CesiumRef
  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        const { pos } = currentECI(orb, simElapsed.value)
        return [Cesium.Cartesian3.ZERO, new Cesium.Cartesian3(pos[0], pos[1], pos[2])]
      }, false),
      width: 1.5,
      material: new Cesium.PolylineDashMaterialProperty({
        color: Cesium.Color.fromCssColorString('#ffcc44').withAlpha(0.8),
        dashLength: 12,
      }),
      arcType: Cesium.ArcType.NONE,
    },
  })
}

function buildOrbitPts() {
  const Cesium = CesiumRef
  const N = 360
  const { raan, argp } = currentElements(orb, simElapsed.value)
  const pts: any[] = []
  for (let k = 0; k <= N; k++) {
    const nu = (k / N) * 2 * Math.PI
    const { pos } = kep2eci(orb.a, orb.e, orb.i, raan, argp, nu)
    pts.push(new Cesium.Cartesian3(pos[0], pos[1], pos[2]))
  }
  return pts
}

function addPeriapsisMarker() {
  const Cesium = CesiumRef
  const periPos = new Cesium.CallbackProperty(() => {
    const { raan, argp } = currentElements(orb, simElapsed.value)
    const { pos } = kep2eci(orb.a, orb.e, orb.i, raan, argp, 0)
    return new Cesium.Cartesian3(pos[0], pos[1], pos[2])
  }, false)

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
      text: ui.value.peri,
      font: 'bold 11px Consolas,monospace',
      fillColor: Cesium.Color.fromCssColorString('#ff6688'),
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 3,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(14, -4),
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
  })

  const apoPos = new Cesium.CallbackProperty(() => {
    const { raan, argp } = currentElements(orb, simElapsed.value)
    const { pos } = kep2eci(orb.a, orb.e, orb.i, raan, argp, Math.PI)
    return new Cesium.Cartesian3(pos[0], pos[1], pos[2])
  }, false)

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
      text: ui.value.apo,
      font: 'bold 11px Consolas,monospace',
      fillColor: Cesium.Color.fromCssColorString('#66ccff'),
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 3,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(14, -4),
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
  })
}

function addSunLine() {
  const Cesium = CesiumRef
  viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        const s = sunECI(simTime.value)
        const len = Math.sqrt(s[0] ** 2 + s[1] ** 2 + s[2] ** 2)
        const sc = 1.8e7 / len
        return [Cesium.Cartesian3.ZERO, new Cesium.Cartesian3(s[0] * sc, s[1] * sc, s[2] * sc)]
      }, false),
      width: 2,
      material: new Cesium.PolylineDashMaterialProperty({
        color: Cesium.Color.fromCssColorString('#ff7722').withAlpha(0.85),
        dashLength: 18,
      }),
      arcType: Cesium.ArcType.NONE,
    },
  })

  viewer.entities.add({
    position: new Cesium.CallbackProperty(() => {
      const s = sunECI(simTime.value)
      const len = Math.sqrt(s[0] ** 2 + s[1] ** 2 + s[2] ** 2)
      const sc = 1.9e7 / len
      return new Cesium.Cartesian3(s[0] * sc, s[1] * sc, s[2] * sc)
    }, false),
    label: {
      text: ui.value.sun,
      font: 'bold 13px sans-serif',
      fillColor: Cesium.Color.fromCssColorString('#ffaa44'),
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 3,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    },
  })
}

function rotateGlobeToECI(epoch: Date) {
  const Cesium = CesiumRef
  const gast = getGAST(epoch)
  const rotation = Cesium.Matrix3.fromRotationZ(-gast)
  const mat4 = Cesium.Matrix4.fromRotationTranslation(rotation, Cesium.Cartesian3.ZERO)
  viewer.scene.globe.modelMatrix = mat4
}

function startLoop() {
  lastWall = performance.now()
  const loop = () => {
    const now = performance.now()
    const wall = (now - lastWall) / 1000
    lastWall = now

    if (!isPaused.value) {
      simElapsed.value += wall * simSpeed.value
      simTime.value = new Date(simEpoch0.value.getTime() + simElapsed.value * 1000)
    }

    rotateGlobeToECI(simTime.value)
    updateHUD()
    updateTopbar()
    updateSliders()
    rafId = requestAnimationFrame(loop)
  }
  rafId = requestAnimationFrame(loop)
}

function initCesium() {
  const Cesium = (window as any).Cesium
  CesiumRef = Cesium
  Cesium.Ion.defaultAccessToken = CESIUM_ION_TOKEN

  const el = viewerEl.value
  if (!el) throw new Error('Cesium container missing')
  const containerId = el.id
  if (!containerId) throw new Error('Cesium container id missing')

  viewer = new Cesium.Viewer(containerId, {
    terrainProvider: new Cesium.EllipsoidTerrainProvider(),
    imageryProvider: new Cesium.TileMapServiceImageryProvider({
      url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII'),
      fileExtension: 'jpg',
      maximumLevel: 5,
      credit: new Cesium.Credit('Natural Earth II'),
    }),
    baseLayerPicker: true,
    geocoder: false,
    homeButton: true,
    infoBox: false,
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    animation: false,
    navigationHelpButton: false,
    fullscreenButton: false,
    skyAtmosphere: new Cesium.SkyAtmosphere(),
    scene3DOnly: true,
  })

  viewer.cesiumWidget.creditContainer.style.display = 'none'
  viewer.scene.globe.enableLighting = true
  viewer.scene.sun = new Cesium.Sun()
  viewer.scene.moon = new Cesium.Moon()
  viewer.scene.backgroundColor = Cesium.Color.fromCssColorString('#00010a')
  viewer.scene.globe.depthTestAgainstTerrain = false

  viewer.camera.setView({
    destination: new Cesium.Cartesian3(0, -2.8e7, 1.2e7),
    orientation: {
      heading: 0,
      pitch: Cesium.Math.toRadians(-25),
      roll: 0,
    },
  })

  rebuildScene()
}

function onWindowResize() {
  onResize()
}

onMounted(async () => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onWindowResize)
  try {
    await loadCss(CESIUM_CSS)
    await loadScript(CESIUM_JS)
    await nextTick()
    initCesium()
    setTimeout(() => {
      loadPreset('leo')
      startLoop()
      maskVisible.value = false
      toast(ui.value.ready)
    }, 1200)
  } catch (err) {
    maskError.value = err instanceof Error ? err.message : String(err)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onWindowResize)
  if (rafId) cancelAnimationFrame(rafId)
  if (toastTimer) clearTimeout(toastTimer)
  if (viewer && !viewer.isDestroyed()) {
    viewer.destroy()
    viewer = null
  }
})

function onResize() {
  if (viewer) viewer.resize()
}
</script>

<template>
  <!-- 占位：避免固定定位子元素使文档流高度为 0，页脚顶到导航栏下方 -->
  <div class="orbit-sim-page-slot">
  <div ref="rootEl" class="orbit-sim-lab">
    <div v-if="maskVisible || maskError" class="os-mask">
      <template v-if="maskError">
        <div class="os-err">
          <p>⚠ {{ locale === 'en' ? 'Initialization failed' : '初始化失败' }}</p>
          <p class="os-err-detail">
            {{ locale === 'en' ? 'Use HTTP(S), check network / Cesium CDN.' : '请确保在 HTTP 服务环境下运行并检查网络。' }}
            <br >
            {{ maskError }}
          </p>
        </div>
      </template>
      <template v-else>
        <div class="spin" />
        <div class="ltxt">{{ ui.loading }}</div>
        <div class="lprog"><div class="lbar" /></div>
      </template>
    </div>

    <header class="os-topbar" :aria-label="ui.title">
      <div class="os-topbar__brand">
        <div class="os-logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="3" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" stroke-dasharray="3 2" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" stroke-dasharray="3 2" />
            <line x1="12" y1="2" x2="12" y2="22" />
          </svg>
        </div>
        <div class="os-brand-text">
          <span class="os-brand-text__title">{{ ui.titleShort }}</span>
          <span class="os-brand-text__sub">{{ locale === 'en' ? 'Cesium · J2 · teaching' : 'Cesium · J2 · 教学沙盘' }}</span>
        </div>
      </div>
      <div class="os-topbar__meta">
        <span class="os-chip os-chip--pulse"><span class="os-chip__dot" aria-hidden="true" />{{ ui.live }}</span>
        <span class="os-chip">{{ ui.frame }}</span>
        <span class="os-chip">{{ ui.j2 }}</span>
        <div class="os-time">{{ topTime }}</div>
      </div>
    </header>

    <div class="os-layout">
      <aside class="os-left" aria-label="orbit controls">
        <div class="pscroll">
          <div class="os-panel-intro">
            <h2 class="sec-title">{{ ui.secOrb }}</h2>
            <p class="os-panel-lead">
              {{ locale === 'en' ? 'Drag sliders or pick a preset. Earth rotates in ECI frame.' : '拖动滑块或点选预设；地球在惯性系中自转显示。' }}
            </p>
            <details class="os-assumptions">
              <summary class="os-assumptions__summary">
                <span class="os-assumptions__title">{{ ui.assumptionsTitle }}</span>
                <span class="os-assumptions__hint">{{ ui.assumptionsHint }}</span>
              </summary>
              <p class="os-assumptions__lead">{{ ui.assumptionsLead }}</p>
              <ul class="os-assumptions__list">
                <li v-for="(line, idx) in ui.assumptionsItems" :key="idx">{{ line }}</li>
              </ul>
            </details>
          </div>

          <section class="preset-block" aria-label="presets">
            <div class="preset-block__head">
              <span class="preset-block__label">{{ ui.quickPresets }}</span>
              <span class="preset-block__hint">{{ ui.presetKeysHint }}</span>
            </div>
            <div class="preset-chips" role="group">
              <button
                v-for="p in presetChips"
                :key="p.key"
                type="button"
                class="pch"
                :class="{ 'pch--active': activePresetKey === p.key }"
                :title="p.subtitle ? `${p.title} — ${p.subtitle}` : p.title"
                @click="loadPreset(p.key)"
              >
                <span class="pch__title">{{ p.title }}</span>
                <span class="pch__subtitle">{{ p.subtitle }}</span>
                <kbd class="pch__kbd">{{ p.hint }}</kbd>
              </button>
            </div>
          </section>

          <div class="os-param-stack">
            <section class="os-param-group">
              <h3 class="os-param-group__title">{{ ui.grpShape }}</h3>
              <div class="os-param-card">
                <div class="ph">
                  <span class="plabel">{{ ui.labels.h.name }}</span>
                  <span class="pval">{{ syncVal.h.toFixed(0) }} km</span>
                </div>
                <input
                  v-model.number="syncVal.h"
                  class="pslider"
                  type="range"
                  min="200"
                  max="46000"
                  step="10"
                  @input="onParam('h', String(syncVal.h))"
                >
                <p class="pdesc">{{ ui.labels.h.desc }}</p>
              </div>
              <div class="os-param-card">
                <div class="ph">
                  <span class="plabel">{{ ui.labels.a.name }}</span>
                  <span class="pval">{{ syncVal.a.toFixed(1) }} km</span>
                </div>
                <input
                  v-model.number="syncVal.a"
                  class="pslider"
                  type="range"
                  min="6578"
                  max="62164.1"
                  step="10"
                  @input="onParam('a', String(syncVal.a))"
                >
                <p class="pdesc">{{ ui.labels.a.desc }}</p>
              </div>
              <div class="os-param-card">
                <div class="ph">
                  <span class="plabel">{{ ui.labels.e.name }}</span>
                  <span class="pval">{{ syncVal.e.toFixed(3) }}</span>
                </div>
                <input
                  v-model.number="syncVal.e"
                  class="pslider"
                  type="range"
                  min="0"
                  max="0.85"
                  step="0.001"
                  @input="onParam('e', String(syncVal.e))"
                >
                <p class="pdesc">{{ ui.labels.e.desc }}</p>
              </div>
            </section>

            <section class="os-param-group">
              <h3 class="os-param-group__title">{{ ui.grpOrient }}</h3>
              <div class="os-param-card">
                <div class="ph">
                  <span class="plabel">{{ ui.labels.i.name }}</span>
                  <span class="pval">{{ syncVal.i.toFixed(1) }}°</span>
                </div>
                <input
                  v-model.number="syncVal.i"
                  class="pslider"
                  type="range"
                  min="0"
                  max="180"
                  step="0.1"
                  @input="onParam('i', String(syncVal.i))"
                >
                <p class="pdesc">{{ ui.labels.i.desc }}</p>
              </div>
              <div class="os-param-card">
                <div class="ph">
                  <span class="plabel">{{ ui.labels.raan.name }}</span>
                  <span class="pval">{{ syncVal.raan.toFixed(1) }}°</span>
                </div>
                <input
                  v-model.number="syncVal.raan"
                  class="pslider"
                  type="range"
                  min="0"
                  max="360"
                  step="0.5"
                  @input="onParam('raan', String(syncVal.raan))"
                >
                <p class="pdesc">{{ ui.labels.raan.desc }}</p>
              </div>
              <div class="os-param-card">
                <div class="ph">
                  <span class="plabel">{{ ui.labels.argp.name }}</span>
                  <span class="pval">{{ syncVal.argp.toFixed(1) }}°</span>
                </div>
                <input
                  v-model.number="syncVal.argp"
                  class="pslider"
                  type="range"
                  min="0"
                  max="360"
                  step="0.5"
                  @input="onParam('argp', String(syncVal.argp))"
                >
                <p class="pdesc">{{ ui.labels.argp.desc }}</p>
              </div>
            </section>

            <section class="os-param-group">
              <h3 class="os-param-group__title">{{ ui.grpPhase }}</h3>
              <div class="os-param-card">
                <div class="ph">
                  <span class="plabel">{{ ui.labels.nu.name }}</span>
                  <span class="pval">{{ syncVal.nu.toFixed(1) }}°</span>
                </div>
                <input
                  v-model.number="syncVal.nu"
                  class="pslider"
                  type="range"
                  min="0"
                  max="360"
                  step="0.5"
                  @input="onParam('nu', String(syncVal.nu))"
                >
                <p class="pdesc">{{ ui.labels.nu.desc }}</p>
              </div>
            </section>
          </div>
        </div>

        <div class="tctl">
          <div class="tctl__row tctl__row--primary">
            <span class="tctl__label">{{ ui.timeTitle }}</span>
            <button type="button" class="tbtn tbtn--primary" :class="{ 'tbtn--paused': isPaused }" @click="togglePause">
              {{ pauseLabel }}
            </button>
            <div class="tctl__speedpill">{{ speedLabel }}</div>
          </div>
          <div class="tctl__row tctl__row--rates" role="group" :aria-label="locale === 'en' ? 'Time rate' : '时间速率'">
            <button type="button" class="tbtn tbtn--ghost" @click="setSpeed(0.5)">½×</button>
            <button type="button" class="tbtn tbtn--ghost" @click="setSpeed(1)">1×</button>
            <button type="button" class="tbtn tbtn--ghost" @click="setSpeed(10)">10×</button>
            <button type="button" class="tbtn tbtn--ghost" @click="setSpeed(60)">60×</button>
            <button type="button" class="tbtn tbtn--ghost" @click="setSpeed(300)">300×</button>
          </div>
        </div>
      </aside>

      <div class="os-right">
        <div :id="'orbit-cesium-' + (locale || 'zh')" ref="viewerEl" class="cesiumViewer" />

        <div class="hud hud-panel">
          <section class="hud-section">
            <h3 class="hud-section__title">{{ ui.hudSat }}</h3>
            <div class="hrow"><span class="hk">{{ ui.lon }}</span><span class="hv">{{ hud.lon }}</span></div>
            <div class="hrow"><span class="hk">{{ ui.lat }}</span><span class="hv">{{ hud.lat }}</span></div>
            <div class="hrow"><span class="hk">{{ ui.alt }}</span><span class="hv">{{ hud.alt }}</span></div>
            <div class="hrow"><span class="hk">{{ ui.angVel }}</span><span class="hv">{{ hud.spd }}</span></div>
          </section>
          <div class="hud-divider" role="presentation" />
          <section class="hud-section">
            <h3 class="hud-section__title">{{ ui.hudEci }}</h3>
            <div class="hrow"><span class="hk">X</span><span class="hv">{{ hud.x }}</span></div>
            <div class="hrow"><span class="hk">Y</span><span class="hv">{{ hud.y }}</span></div>
            <div class="hrow"><span class="hk">Z</span><span class="hv">{{ hud.z }}</span></div>
          </section>
          <div class="hud-divider" role="presentation" />
          <section class="hud-section">
            <h3 class="hud-section__title">{{ ui.hudOrb }}</h3>
            <div class="hrow"><span class="hk">{{ ui.type }}</span><span class="hv">{{ hud.type }}</span></div>
            <div class="hrow"><span class="hk">{{ ui.period }}</span><span class="hv">{{ hud.inc }}</span></div>
            <div class="hrow"><span class="hk">{{ ui.nu }}</span><span class="hv">{{ hud.nu }}</span></div>
            <div class="hrow"><span class="hk">{{ ui.epoch }}</span><span class="hv">{{ hud.ep }}</span></div>
          </section>
        </div>

        <div class="legend" role="region" :aria-label="ui.legend">
          <div class="ltitle">{{ ui.legend }}</div>
          <ul class="legend-grid">
            <li class="li"><span class="ll ll--solid" style="--ll: #38bdf8" />{{ locale === 'en' ? 'Orbit' : '卫星轨道' }}</li>
            <li class="li"><span class="ll ll--solid" style="--ll: #fbbf24" />{{ locale === 'en' ? 'Nadir' : '地心–卫星' }}</li>
            <li class="li"><span class="ll ll--dash" style="--ll: #fb923c" />{{ locale === 'en' ? 'Earth–Sun' : '地心–太阳' }}</li>
            <li class="li"><span class="ll ll--soft" style="--ll: rgba(56, 189, 248, 0.45)" />{{ locale === 'en' ? 'Equator' : '赤道面' }}</li>
            <li class="li"><span class="ll ll--soft" style="--ll: rgba(251, 191, 36, 0.4)" />{{ locale === 'en' ? 'Ecliptic' : '黄道面' }}</li>
            <li class="li"><span class="ld" style="background: #f43f5e" />X</li>
            <li class="li"><span class="ld" style="background: #4ade80" />Y</li>
            <li class="li"><span class="ld" style="background: #60a5fa" />Z</li>
          </ul>
        </div>

        <div class="kbhint">{{ ui.kb }}</div>
      </div>
    </div>

    <div v-show="toastMsg" class="os-toast">{{ toastMsg }}</div>
  </div>
  </div>
</template>

<style lang="scss">
.orbit-sim-page-slot {
  min-height: calc(100vh - var(--navbar-height, 3.6rem));
  position: relative;
}

.orbit-sim-lab {
  /* 设计令牌：偏「控制台 / 天文」质感，与全站深浅色独立一层 */
  --os-bar-h: 52px;
  --os-accent: #38bdf8;
  --os-accent-2: #5eead4;
  --os-warn: #fbbf24;
  --os-track: rgba(51, 65, 85, 0.85);
  --os-bg0: #030712;
  --os-bg1: #0b1220;
  --os-panel: rgba(15, 23, 42, 0.94);
  --os-elev: rgba(30, 41, 59, 0.55);
  --os-border: rgba(148, 163, 184, 0.28);
  --os-border-strong: rgba(56, 189, 248, 0.4);
  /* 正文层级：整体偏亮，保证在 slate 面板/玻璃层上可读 */
  --os-text: #f8fafc;
  --os-muted: #eef2f6;
  --os-faint: #e2e8f0;
  /* 装饰色偏暗，用作 UI 色块；标题/数值用高亮度变体以免与深色底糊在一起 */
  --os-heading-accent: #7dd3fc;
  --os-heading-teal: #a7f3d0;
  --os-value-teal: #99f6e4;
  --os-glass: blur(14px) saturate(1.2);
  --pw: min(440px, 100%);
  --os-top-offset: var(--navbar-height, 3.6rem);
  /* 各边栏/分区标题：与全站侧栏一致，独立于正文 sans 栈 */
  --os-panel-title-font: var(
    --font-family-heading,
    '黑体',
    SimHei,
    'Heiti SC',
    STHeiti,
    'Microsoft YaHei UI',
    'Microsoft YaHei',
    system-ui,
    sans-serif
  );
  /* 画布上 HUD / 图例 / 快捷键提示：统一玻璃面板质感 */
  --os-float-r: 14px;
  --os-float-border: 1px solid rgba(148, 163, 184, 0.22);
  --os-float-bg: linear-gradient(165deg, rgba(15, 23, 42, 0.9) 0%, rgba(3, 7, 18, 0.82) 100%);
  --os-float-shadow: 0 14px 44px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  /* 等宽数字：优先系统自带，避免未加载的 Web 字体发虚 */
  --os-mono: ui-monospace, 'SF Mono', 'Menlo', 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', consolas, 'Liberation Mono', monospace;

  position: fixed;
  top: var(--os-top-offset);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  color: var(--os-text);
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    'PingFang SC',
    'Hiragino Sans GB',
    'Microsoft YaHei UI',
    'Microsoft YaHei',
    'Noto Sans CJK SC',
    'Source Han Sans SC',
    sans-serif;
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  overflow: hidden;
  background:
    radial-gradient(120% 80% at 10% 0%, rgba(56, 189, 248, 0.08), transparent 55%),
    radial-gradient(90% 60% at 100% 100%, rgba(94, 234, 212, 0.06), transparent 50%),
    linear-gradient(165deg, var(--os-bg0) 0%, var(--os-bg1) 100%);
}

.orbit-sim-lab * {
  box-sizing: border-box;
}

.os-mask {
  position: absolute;
  inset: 0;
  z-index: 50;
  background: rgba(3, 7, 18, 0.92);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  backdrop-filter: var(--os-glass);
}

.spin {
  width: 48px;
  height: 48px;
  border: 3px solid var(--os-border);
  border-top-color: var(--os-accent);
  border-radius: 50%;
  animation: os-spin 0.85s linear infinite;
}

@keyframes os-spin {
  to {
    transform: rotate(360deg);
  }
}

.ltxt {
  font-family: var(--os-panel-title-font);
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--os-muted);
}

.lprog {
  width: min(220px, 70vw);
  height: 3px;
  background: var(--os-track);
  border-radius: 999px;
  overflow: hidden;
}

.lbar {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--os-accent), var(--os-accent-2));
  transform-origin: left;
  animation: os-lbar 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes os-lbar {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.os-err {
  color: #fda4af;
  font-size: 1.0625rem;
  text-align: center;
  padding: 2rem;
  max-width: 28rem;
}

.os-err-detail {
  color: var(--os-muted);
  font-size: 0.9375rem;
  line-height: 1.75;
  margin-top: 0.75rem;
}

/* —— 顶栏 —— */
.os-topbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--os-bar-h);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1.1rem 0 1rem;
  background: rgba(3, 7, 18, 0.72);
  border-bottom: 1px solid var(--os-border);
  backdrop-filter: var(--os-glass);
}

.os-topbar__brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
}

.os-logo {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid var(--os-border-strong);
  color: var(--os-accent);
}

.os-logo svg {
  width: 1.25rem;
  height: 1.25rem;
}

.os-brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.os-brand-text__title {
  font-family: var(--os-panel-title-font);
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--os-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.os-brand-text__sub {
  font-size: 0.875rem;
  color: var(--os-muted);
  letter-spacing: 0.02em;
}

.os-topbar__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.45rem;
}

.os-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.55rem;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--os-faint);
  background: rgba(30, 41, 59, 0.72);
  border: 1px solid var(--os-border);
  border-radius: 999px;
}

.os-chip--pulse .os-chip__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--os-accent-2);
  box-shadow: 0 0 10px rgba(94, 234, 212, 0.7);
  animation: os-pulse 2s ease-in-out infinite;
}

@keyframes os-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

.os-time {
  font-family: var(--os-mono);
  font-size: 0.875rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--os-warn);
  padding: 0.25rem 0.6rem;
  border-radius: 8px;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.25);
  white-space: nowrap;
}

/* —— 主布局 —— */
.os-layout {
  position: absolute;
  top: var(--os-bar-h);
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: stretch;
}

.os-left {
  width: var(--pw);
  min-width: 280px;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 10;
  background:
    linear-gradient(180deg, rgba(56, 189, 248, 0.14) 0%, transparent 28%),
    linear-gradient(90deg, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.92) 100%);
  border-right: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: inset 3px 0 0 0 rgba(56, 189, 248, 0.35), 8px 0 32px rgba(0, 0, 0, 0.18);
}

.os-panel-intro {
  margin-bottom: 1rem;
}

.sec-title {
  margin: 0 0 0.35rem;
  font-family: var(--os-panel-title-font);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--os-heading-accent);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sec-title::before {
  content: '';
  width: 3px;
  height: 12px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--os-accent), var(--os-accent-2));
}

.os-panel-lead {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--os-muted);
}

.os-assumptions {
  margin-top: 0.65rem;
  padding: 0.45rem 0.55rem;
  border-radius: 10px;
  border: 1px dashed rgba(148, 163, 184, 0.35);
  background: rgba(15, 23, 42, 0.35);
}

.os-assumptions__summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.6rem;
  font-size: 0.9375rem;
  user-select: none;
}

.os-assumptions__summary::-webkit-details-marker {
  display: none;
}

.os-assumptions__title {
  font-family: var(--os-panel-title-font);
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--os-text);
}

.os-assumptions__hint {
  font-size: 0.8125rem;
  color: var(--os-muted);
}

.os-assumptions__lead {
  margin: 0.5rem 0 0.35rem;
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--os-muted);
}

.os-assumptions__list {
  margin: 0;
  padding: 0 0 0 1.1rem;
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--os-muted);
}

.os-assumptions__list li {
  margin-bottom: 0.35rem;
}

.os-assumptions__list li:last-child {
  margin-bottom: 0;
}

.preset-block {
  margin-bottom: 1.15rem;
  padding: 0.75rem 0.75rem 0.65rem;
  border-radius: 14px;
  background: rgba(2, 6, 23, 0.55);
  border: 1px solid rgba(56, 189, 248, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.preset-block__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.preset-block__label {
  font-family: var(--os-panel-title-font);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--os-heading-accent);
}

.preset-block__hint {
  font-size: 0.875rem;
  color: var(--os-muted);
}

.preset-chips {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 10.5rem), 1fr));
  gap: 0.45rem;
  padding-bottom: 0.2rem;
}

.pch {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  padding: 0.5rem 1.65rem 0.5rem 0.55rem;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(15, 23, 42, 0.75);
  color: var(--os-text);
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;
}

.pch:hover {
  border-color: rgba(56, 189, 248, 0.45);
  background: rgba(30, 41, 59, 0.95);
  transform: translateY(-1px);
}

.pch--active {
  border-color: rgba(94, 234, 212, 0.65);
  box-shadow: 0 0 0 1px rgba(94, 234, 212, 0.25), 0 6px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(145deg, rgba(56, 189, 248, 0.18), rgba(15, 23, 42, 0.9));
}

.pch__title {
  font-family: var(--os-panel-title-font);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.02em;
  color: var(--os-heading-accent);
}

.pch__subtitle {
  font-size: 0.75rem;
  color: var(--os-faint);
  line-height: 1.4;
}

.pch__kbd {
  position: absolute;
  top: 0.3rem;
  right: 0.35rem;
  margin: 0;
  padding: 0.1rem 0.35rem;
  font-size: 0.75rem;
  font-family: var(--os-mono);
  font-weight: 700;
  color: var(--os-text);
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid var(--os-border);
  border-radius: 4px;
}

.os-param-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.os-param-group {
  margin: 0;
  border-radius: 14px;
  background: rgba(2, 6, 23, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.1);
  padding: 0.55rem 0.6rem 0.65rem;
}

.os-param-group__title {
  margin: 0 0 0.5rem;
  padding-bottom: 0.35rem;
  font-family: var(--os-panel-title-font);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--os-heading-teal);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.os-param-group .os-param-card {
  margin-bottom: 0.45rem;
}

.os-param-group .os-param-card:last-child {
  margin-bottom: 0;
}

.os-param-card {
  padding: 0.55rem 0.65rem;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.os-param-card:focus-within {
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.12);
}

.ph {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.plabel {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--os-text);
}

.pval {
  font-family: var(--os-mono);
  font-size: 1rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--os-value-teal);
  text-align: right;
  white-space: nowrap;
}

.pslider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  background: var(--os-track);
}

.pslider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--os-accent-2), var(--os-accent));
  box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.9), 0 2px 10px rgba(56, 189, 248, 0.45);
  cursor: grab;
  transition: transform 0.15s ease;
}

.pslider::-webkit-slider-thumb:active {
  cursor: grabbing;
  transform: scale(1.08);
}

.pslider::-moz-range-track {
  height: 6px;
  border-radius: 999px;
  background: var(--os-track);
}

.pslider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--os-accent-2), var(--os-accent));
  box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.9), 0 2px 10px rgba(56, 189, 248, 0.45);
}

.pdesc {
  margin: 0.35rem 0 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--os-muted);
}

.pscroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0.85rem 0.75rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(100, 116, 139, 0.5) transparent;
}

.pscroll::-webkit-scrollbar {
  width: 6px;
}

.pscroll::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.45);
  border-radius: 999px;
}

/* —— 时间控制 —— */
.tctl {
  flex-shrink: 0;
  padding: 0.75rem 0.85rem 0.9rem;
  background: linear-gradient(180deg, rgba(2, 6, 23, 0.5) 0%, rgba(2, 6, 23, 0.92) 100%);
  border-top: 1px solid rgba(56, 189, 248, 0.15);
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.tctl__row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.tctl__row--primary {
  justify-content: space-between;
}

.tctl__label {
  font-family: var(--os-panel-title-font);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--os-muted);
}

.tctl__speedpill {
  font-family: var(--os-mono);
  font-size: 1rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--os-warn);
  padding: 0.2rem 0.55rem;
  border-radius: 8px;
  background: rgba(251, 191, 36, 0.12);
  border: 1px solid rgba(251, 191, 36, 0.28);
}

.tctl__row--rates {
  justify-content: flex-start;
  gap: 0.35rem;
}

.tbtn {
  border: 1px solid var(--os-border);
  border-radius: 8px;
  background: rgba(30, 41, 59, 0.65);
  color: var(--os-text);
  padding: 0.35rem 0.55rem;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.tbtn:hover {
  border-color: var(--os-border-strong);
  background: rgba(51, 65, 85, 0.75);
  color: var(--os-value-teal);
}

.tbtn--primary {
  padding: 0.4rem 0.85rem;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(94, 234, 212, 0.15));
  border-color: rgba(56, 189, 248, 0.45);
  color: var(--os-text);
}

.tbtn--primary:hover {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.35), rgba(94, 234, 212, 0.22));
}

.tbtn--paused {
  border-color: rgba(251, 191, 36, 0.55);
  background: rgba(251, 191, 36, 0.12);
  color: var(--os-warn);
}

.tbtn--ghost {
  flex: 1;
  min-width: 2.5rem;
  padding: 0.32rem 0.4rem;
  font-size: 0.875rem;
  font-weight: 700;
  background: rgba(15, 23, 42, 0.65);
}

/* —— 地球视窗 —— */
.os-right {
  flex: 1;
  position: relative;
  overflow: hidden;
  min-width: 0;
  background: #000;
}

.cesiumViewer {
  width: 100%;
  height: 100%;
}

/* —— HUD 合并面板 —— */
.hud {
  position: absolute;
  top: 14px;
  right: 14px;
  pointer-events: none;
  z-index: 50;
}

.hud-panel {
  min-width: 240px;
  max-width: min(308px, calc(100vw - 2rem));
  padding: 0.55rem 0;
  border-radius: var(--os-float-r);
  background: var(--os-float-bg);
  border: var(--os-float-border);
  backdrop-filter: var(--os-glass);
  box-shadow: var(--os-float-shadow);
}

.hud-section {
  padding: 0.15rem 0.85rem 0.35rem;
}

.hud-section__title {
  margin: 0 0 0.4rem;
  font-family: var(--os-panel-title-font);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--os-heading-accent);
}

.hud-divider {
  height: 1px;
  margin: 0.15rem 0;
  background: linear-gradient(90deg, transparent, var(--os-border), transparent);
}

.hrow {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.9375rem;
  margin-bottom: 0.28rem;
}

.hk {
  color: var(--os-faint);
  font-weight: 500;
}

.hv {
  font-family: var(--os-mono);
  font-size: 0.9375rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--os-value-teal);
  text-align: right;
}

/* —— 图例 —— */
.legend {
  position: absolute;
  bottom: 14px;
  right: 14px;
  padding: 0.6rem 0.7rem 0.5rem;
  border-radius: var(--os-float-r);
  background: var(--os-float-bg);
  border: var(--os-float-border);
  backdrop-filter: var(--os-glass);
  pointer-events: none;
  z-index: 50;
  max-width: min(272px, calc(100vw - 1.5rem));
  box-shadow: var(--os-float-shadow);
}

.ltitle {
  margin: 0 0 0.4rem;
  font-family: var(--os-panel-title-font);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--os-heading-accent);
}

.legend-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem 0.75rem;
}

.legend .li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  color: var(--os-faint);
  margin: 0;
}

.ll {
  flex-shrink: 0;
  width: 1.25rem;
  height: 3px;
  border-radius: 2px;
}

.ll--solid {
  background: var(--ll, #94a3b8);
}

.ll--soft {
  background: var(--ll);
}

.ll--dash {
  height: 0;
  border-top: 2px dashed var(--ll, #94a3b8);
  background: none;
}

.ld {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.kbhint {
  position: absolute;
  bottom: 12px;
  left: 12px;
  max-width: min(420px, calc(100% - 24px));
  padding: 0.5rem 0.7rem;
  border-radius: var(--os-float-r);
  font-size: 0.8125rem;
  line-height: 1.65;
  color: var(--os-muted);
  background: var(--os-float-bg);
  border: var(--os-float-border);
  backdrop-filter: var(--os-glass);
  box-shadow: var(--os-float-shadow);
  pointer-events: none;
  z-index: 50;
}

.os-toast {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.97);
  border: 1px solid var(--os-border-strong);
  color: var(--os-text);
  padding: 0.55rem 1.1rem;
  border-radius: 12px;
  font-size: 1rem;
  z-index: 60;
  pointer-events: none;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  white-space: pre-line;
  text-align: center;
  max-width: min(360px, 90vw);
  line-height: 1.55;
}

.orbit-sim-lab .cesium-viewer-toolbar,
.orbit-sim-lab .cesium-viewer-animationContainer,
.orbit-sim-lab .cesium-viewer-timelineContainer,
.orbit-sim-lab .cesium-viewer-bottom,
.orbit-sim-lab .cesium-credit-container {
  display: none !important;
}

/* —— 窄屏：控制面板在上，三维在下 —— */
@media (max-width: 900px) {
  .orbit-sim-lab {
    --os-bar-h: 48px;
  }

  .os-topbar__meta .os-chip:not(.os-chip--pulse) {
    display: none;
  }

  .os-layout {
    flex-direction: column;
  }

  .os-left {
    width: 100%;
    max-width: none;
    min-width: 0;
    max-height: min(44vh, 380px);
    border-right: none;
    border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    box-shadow: inset 0 3px 0 0 rgba(56, 189, 248, 0.35);
  }

  .preset-chips {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 9.25rem), 1fr));
  }

  .pch {
    padding-right: 1.4rem;
  }

  .hud-panel {
    top: 8px;
    right: 8px;
    min-width: 200px;
    font-size: 1em;
  }

  .legend {
    bottom: auto;
    top: 8px;
    left: 8px;
    right: auto;
    max-width: 200px;
  }

  .legend-grid {
    grid-template-columns: 1fr;
  }

  .kbhint {
    display: none;
  }
}

@media (max-width: 520px) {
  .os-brand-text__sub {
    display: none;
  }
}
</style>
