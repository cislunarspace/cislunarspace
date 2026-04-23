/** 卫星轨道仿真 — 纯轨道力学（无 Cesium / DOM） */

export const GM = 3.986004418e14 // m³/s²
export const RE = 6378137.0 // m
export const J2 = 1.08263e-3
export const D2R = Math.PI / 180
export const R2D = 180 / Math.PI

export interface OrbElements {
  a: number
  e: number
  i: number
  raan: number
  argp: number
  nu: number
}

export interface PresetDesc {
  h: number
  e: number
  i: number
  raan: number
  argp: number
  nu: number
  desc: string
}

export type PresetKey = 'frozen' | 'sso' | 'repeating' | 'leo' | 'geo'

export const PRESETS: Record<PresetKey, PresetDesc> = {
  frozen: {
    h: 800000,
    e: 0.001,
    i: 98.0 * D2R,
    raan: 45 * D2R,
    argp: 270 * D2R,
    nu: 0,
    desc: '冻结轨道 | ω=270°阻止J2摄动拱线漂移',
  },
  sso: {
    h: 550000,
    e: 0.0,
    i: 97.4 * D2R,
    raan: 90 * D2R,
    argp: 0,
    nu: 0,
    desc: '太阳同步 | 升交点进动=0.9856°/天',
  },
  repeating: {
    h: 600000,
    e: 0.01,
    i: 45.0 * D2R,
    raan: 120 * D2R,
    argp: 30 * D2R,
    nu: 0,
    desc: '回归轨道 | 地面轨迹整天重复',
  },
  leo: {
    h: 400000,
    e: 0.0,
    i: 51.6 * D2R,
    raan: 0,
    argp: 0,
    nu: 0,
    desc: '近地圆轨 | 国际空间站典型轨道',
  },
  geo: {
    h: 35786000,
    e: 0.0,
    i: 0.0,
    raan: 0,
    argp: 0,
    nu: 0,
    desc: '地球同步 | T=23h56m04s，星下点静止',
  },
}

export function nu2E(nu: number, e: number) {
  return Math.atan2(Math.sqrt(1 - e * e) * Math.sin(nu), e + Math.cos(nu))
}

export function E2M(E: number, e: number) {
  return E - e * Math.sin(E)
}

export function M2E(M: number, e: number) {
  const ec = Math.min(e, 0.95)
  let E = M
  let prevD = Infinity
  for (let k = 0; k < 60; k++) {
    const d = (M - E + ec * Math.sin(E)) / (1 - ec * Math.cos(E))
    E += d
    if (Math.abs(d) < 1e-12) break
    if (Math.abs(d) > Math.abs(prevD) * 2) break
    prevD = d
  }
  return E
}

export function E2nu(E: number, e: number) {
  return Math.atan2(Math.sqrt(1 - e * e) * Math.sin(E), Math.cos(E) - e)
}

/** 轨道六要素 → ECI 位置速度（m, m/s） */
export function kep2eci(a: number, e: number, i: number, raan: number, argp: number, nu: number) {
  const p = a * (1 - e * e)
  const r = p / (1 + e * Math.cos(nu))
  const h = Math.sqrt(GM * p)

  const rx = r * Math.cos(nu)
  const ry = r * Math.sin(nu)
  const vx = -(GM / h) * Math.sin(nu)
  const vy = (GM / h) * (e + Math.cos(nu))

  const cO = Math.cos(raan)
  const sO = Math.sin(raan)
  const cI = Math.cos(i)
  const sI = Math.sin(i)
  const cW = Math.cos(argp)
  const sW = Math.sin(argp)

  const Rxx = cO * cW - sO * sW * cI
  const Rxy = -cO * sW - sO * cW * cI
  const Rxz = sO * sI
  const Ryx = sO * cW + cO * sW * cI
  const Ryy = -sO * sW + cO * cW * cI
  const Ryz = -cO * sI
  const Rzx = sW * sI
  const Rzy = cW * sI
  const Rzz = cI

  return {
    pos: [Rxx * rx + Rxy * ry, Ryx * rx + Ryy * ry, Rzx * rx + Rzy * ry] as [number, number, number],
    vel: [Rxx * vx + Rxy * vy, Ryx * vx + Ryy * vy, Rzx * vx + Rzy * vy] as [number, number, number],
  }
}

/** J2 摄动传播：经过 dt 秒后的真近点角与 Ω、ω */
export function propagate(a: number, e: number, i: number, raan0: number, argp0: number, nu0: number, dt: number) {
  const n = Math.sqrt(GM / (a * a * a))
  const p = a * (1 - e * e)
  const j2f = -1.5 * J2 * (RE / p) * (RE / p) * n
  const dO = j2f * Math.cos(i)
  const dW = j2f * (2.5 * Math.sin(i) * Math.sin(i) - 2.0)

  const E0 = nu2E(nu0, e)
  const M1 = E2M(E0, e) + n * dt
  const nu1 = E2nu(M2E(M1, e), e)

  return { nu: nu1, raan: raan0 + dO * dt, argp: argp0 + dW * dt, a }
}

/** ECI → ECEF（简化格林尼治恒星时） */
export function eci2ecef(pos: readonly [number, number, number], epoch: Date) {
  const jd = epoch.getTime() / 86400000 + 2440587.5
  const gst = (280.46061837 + 360.98564736629 * (jd - 2451545.0)) * D2R
  const cG = Math.cos(gst)
  const sG = Math.sin(gst)
  return [cG * pos[0] + sG * pos[1], -sG * pos[0] + cG * pos[1], pos[2]] as const
}

export function getGAST(epoch: Date) {
  const jd = epoch.getTime() / 86400000 + 2440587.5
  const gst = (280.46061837 + 360.98564736629 * (jd - 2451545.0)) * D2R
  return ((gst % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
}

/** 低精度太阳方向 ECI（教学用） */
export function sunECI(epoch: Date) {
  const jd = epoch.getTime() / 86400000 + 2440587.5
  const n = jd - 2451545.0
  const L = (280.46 + 0.9856474 * n) * D2R
  const g = (357.528 + 0.9856003 * n) * D2R
  const lam = L + (1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * D2R
  const eps = 23.439 * D2R
  const AU = 1.496e11
  return [AU * Math.cos(lam), AU * Math.cos(eps) * Math.sin(lam), AU * Math.sin(eps) * Math.sin(lam)] as const
}

export function currentElements(orb: OrbElements, simElapsed: number) {
  return propagate(orb.a, orb.e, orb.i, orb.raan, orb.argp, orb.nu, simElapsed)
}

export function currentECI(orb: OrbElements, simElapsed: number) {
  const { nu, raan, argp } = currentElements(orb, simElapsed)
  return kep2eci(orb.a, orb.e, orb.i, raan, argp, nu)
}

export function applyPreset(orb: OrbElements, name: PresetKey) {
  const p = PRESETS[name]
  if (!p) return
  orb.a = RE + p.h
  orb.e = p.e
  orb.i = p.i
  orb.raan = p.raan
  orb.argp = p.argp
  orb.nu = p.nu
}

export function orbTypeLabel(orb: OrbElements) {
  const h = (orb.a - RE) / 1000
  if (h > 35000) return 'GEO'
  if (h > 2000) return 'MEO'
  if (orb.i * R2D > 95) return 'SSO'
  return 'LEO'
}

export function fmtUTC(d: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}  ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`
}
