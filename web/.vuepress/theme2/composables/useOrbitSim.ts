import { reactive, ref, computed } from 'vue'
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
  orbTypeLabel,
  type OrbElements,
  type PresetKey,
  PRESETS,
} from '../utils/orbitSimMath'

export interface HudData {
  lon: string
  lat: string
  alt: string
  spd: string
  x: string
  y: string
  z: string
  type: string
  inc: string
  nu: string
  ep: string
}

export interface SyncValues {
  h: number
  a: number
  e: number
  i: number
  raan: number
  argp: number
  nu: number
}

export function useOrbitSim(locale: 'zh' | 'en') {
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
  const simEpoch0 = ref(new Date())
  const simElapsed = ref(0)
  const activePresetKey = ref<PresetKey | null>(null)

  const hud = reactive<HudData>({
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

  const syncVal = ref<SyncValues>({
    h: 400,
    a: 6778,
    e: 0,
    i: 51.6,
    raan: 0,
    argp: 0,
    nu: 0,
  })

  const speedLabel = computed(() => `${simSpeed.value}×`)
  const pauseLabel = computed(() =>
    isPaused.value ? (locale === 'en' ? '▶ Resume' : '▶ 继续') : '⏸ 暂停'
  )
  const topTime = computed(() => `UTC  ${fmtUTC(simTime.value)}`)

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

  function syncAllSlidersFromOrb() {
    const h = (orb.a - RE) / 1000
    syncVal.value.h = Math.min(46000, Math.max(200, h))
    syncVal.value.a = orb.a / 1000
    syncVal.value.e = orb.e
    syncVal.value.i = orb.i * R2D
    syncVal.value.raan = orb.raan * R2D
    syncVal.value.argp = orb.argp * R2D
    syncVal.value.nu = orb.nu * R2D
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
  }

  function loadPreset(name: PresetKey): string {
    applyPreset(orb, name)
    activePresetKey.value = name
    simElapsed.value = 0
    simEpoch0.value = new Date()
    syncAllSlidersFromOrb()
    return PRESETS[name].desc
  }

  function togglePause() {
    isPaused.value = !isPaused.value
  }

  function setSpeed(s: number) {
    simSpeed.value = s
    if (isPaused.value) {
      isPaused.value = false
    }
  }

  function resetClock() {
    simElapsed.value = 0
    simEpoch0.value = new Date()
  }

  function tick(wallDeltaSeconds: number) {
    if (!isPaused.value) {
      simElapsed.value += wallDeltaSeconds * simSpeed.value
      simTime.value = new Date(simEpoch0.value.getTime() + simElapsed.value * 1000)
    }
    updateHUD()
  }

  return {
    orb,
    simTime,
    simSpeed,
    isPaused,
    simElapsed,
    simEpoch0,
    activePresetKey,
    hud,
    syncVal,
    speedLabel,
    pauseLabel,
    topTime,
    updateHUD,
    syncAllSlidersFromOrb,
    onParam,
    loadPreset,
    togglePause,
    setSpeed,
    resetClock,
    tick,
  }
}
