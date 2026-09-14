<script setup lang="ts">
/**
 * 卫星轨道仿真教学平台（由原 public/orbit-sim.html 迁入 Vue，轨道力学见 utils/orbitSimMath.ts）
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { type PresetKey, PRESETS } from '../utils/orbitSimMath';
import { useOrbitSim } from '../composables/useOrbitSim';
import { orbitSimI18n } from '../utils/orbitSimI18n';
import {
  rebuildScene as _rebuildScene,
  rotateGlobeToECI as _rotateGlobeToECI,
  type SceneContext,
} from '../utils/cesium-scene';

const CESIUM_JS = 'https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Cesium.js';
const CESIUM_CSS =
  'https://cesium.com/downloads/cesiumjs/releases/1.114/Build/Cesium/Widgets/widgets.css';

/** 与历史 orbit-sim.html 一致，便于沿用 Ion 资源（从环境变量注入） */
const CESIUM_ION_TOKEN: string = (import.meta as any).env?.VITE_CESIUM_ION_TOKEN ?? '';

const rootEl = ref<HTMLElement | null>(null);
const viewerEl = ref<HTMLElement | null>(null);
const maskVisible = ref(true);
const maskError = ref<string | null>(null);

const sim = useOrbitSim();
const {
  orb,
  simTime,
  simSpeed,
  isPaused,
  simElapsed,
  activePresetKey,
  hud,
  syncVal,
  speedLabel,
  pauseLabel,
  topTime,
} = sim;

const toastMsg = ref('');
let toastTimer: ReturnType<typeof setTimeout> | null = null;
let lastWall = 0;

let viewer: any = null;
let CesiumRef: any = null;
let rafId = 0;

const ui = orbitSimI18n();

const PRESET_CHIP_ORDER: PresetKey[] = ['leo', 'sso', 'frozen', 'repeating', 'geo'];

const presetChips = computed(() =>
  PRESET_CHIP_ORDER.map((key, idx) => {
    const hint = String(idx + 1);
    const d = PRESETS[key].desc;
    const sep = d.indexOf(' | ');
    const title = sep >= 0 ? d.slice(0, sep) : d;
    const subtitle = sep >= 0 ? d.slice(sep + 3) : '';
    return { key, hint, title, subtitle };
  }),
);

function loadCss(href: string) {
  return new Promise<void>((resolve, reject) => {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    l.onload = () => resolve();
    l.onerror = () => {
      l.remove();
      reject(new Error(`CSS ${href}`));
    };
    document.head.appendChild(l);
  });
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      s.remove();
      reject(new Error(`Script ${src}`));
    };
    document.head.appendChild(s);
  });
}

function toast(msg: string) {
  toastMsg.value = msg;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastMsg.value = '';
  }, 3500);
}

function updateSliders() {
  const root = rootEl.value;
  if (!root) return;
  root.querySelectorAll('.pslider').forEach((sl) => {
    const el = sl as HTMLInputElement;
    const pct = (((+el.value - +el.min) / (+el.max - +el.min)) * 100).toFixed(1);
    el.style.background = `linear-gradient(90deg, var(--os-accent) ${pct}%, var(--os-track) ${pct}%)`;
  });
}

function loadPresetWithToast(name: PresetKey) {
  const desc = sim.loadPreset(name);
  toast(desc);
  sim.syncAllSlidersFromOrb();
  updateSliders();

  if (viewer && CesiumRef) {
    const Cesium = CesiumRef;
    viewer.camera.flyTo({
      destination: new Cesium.Cartesian3.fromDegrees(110.435314, 38.960521, 60000000.0),
      duration: 1,
      orientation: {
        heading: 0,
        pitch: Cesium.Math.toRadians(-90),
        roll: 0,
      },
    });
  }
  rebuildScene();
}

function togglePauseWithUpdate() {
  sim.togglePause();
  if (!isPaused.value) lastWall = performance.now();
}

function setSpeedWithUpdate(s: number) {
  sim.setSpeed(s);
  if (!isPaused.value) lastWall = performance.now();
}

function onKeydown(e: KeyboardEvent) {
  const target = e.target as HTMLElement;
  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target.isContentEditable
  )
    return;
  switch (e.key) {
    case ' ':
      e.preventDefault();
      togglePauseWithUpdate();
      break;
    case '1':
      loadPresetWithToast('leo');
      break;
    case '2':
      loadPresetWithToast('sso');
      break;
    case '3':
      loadPresetWithToast('frozen');
      break;
    case '4':
      loadPresetWithToast('repeating');
      break;
    case '5':
      loadPresetWithToast('geo');
      break;
    case '+':
    case '=':
      setSpeedWithUpdate(simSpeed.value * 2);
      break;
    case '-':
      setSpeedWithUpdate(Math.max(simSpeed.value / 2, 0.25));
      break;
    case 'r':
    case 'R':
      sim.resetClock();
      toast(ui.resetClock);
      break;
  }
}

function sceneCtx(): SceneContext {
  return {
    Cesium: CesiumRef,
    viewer,
    orb,
    simElapsed,
    simTime,
    labels: {
      equator: ui.equator,
      peri: ui.peri,
      apo: ui.apo,
      sun: ui.sun,
    },
  };
}

function rebuildScene() {
  if (!viewer) return;
  _rebuildScene(sceneCtx());
}

function rotateGlobeToECI(epoch: Date) {
  _rotateGlobeToECI(sceneCtx(), epoch);
}

function startLoop() {
  lastWall = performance.now();
  const loop = () => {
    const now = performance.now();
    const wall = (now - lastWall) / 1000;
    lastWall = now;

    sim.tick(wall);
    rotateGlobeToECI(simTime.value);
    // updateSliders() 已从 rAF 移除 — 滑块渐变仅在 @input 和 preset 切换时更新，
    // 避免每帧 querySelectorAll + inline style 导致 layout reflow。
    rafId = requestAnimationFrame(loop);
  };
  rafId = requestAnimationFrame(loop);
}

function initCesium() {
  const Cesium = (window as any).Cesium;
  CesiumRef = Cesium;
  Cesium.Ion.defaultAccessToken = CESIUM_ION_TOKEN;

  const el = viewerEl.value;
  if (!el) throw new Error('Cesium container missing');
  const containerId = el.id;
  if (!containerId) throw new Error('Cesium container id missing');

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
  });

  viewer.cesiumWidget.creditContainer.style.display = 'none';
  viewer.scene.globe.enableLighting = true;
  viewer.scene.sun = new Cesium.Sun();
  viewer.scene.moon = new Cesium.Moon();
  viewer.scene.backgroundColor = Cesium.Color.fromCssColorString('#00010a');
  viewer.scene.globe.depthTestAgainstTerrain = false;

  viewer.camera.setView({
    destination: new Cesium.Cartesian3(0, -2.8e7, 1.2e7),
    orientation: {
      heading: 0,
      pitch: Cesium.Math.toRadians(-25),
      roll: 0,
    },
  });

  rebuildScene();
}

function onWindowResize() {
  onResize();
}

onMounted(async () => {
  window.addEventListener('keydown', onKeydown);
  window.addEventListener('resize', onWindowResize);
  try {
    await loadCss(CESIUM_CSS);
    await loadScript(CESIUM_JS);
    await nextTick();
    initCesium();
    setTimeout(() => {
      loadPresetWithToast('leo');
      startLoop();
      maskVisible.value = false;
      toast(ui.ready);
    }, 1200);
  } catch (err) {
    maskVisible.value = false;
    maskError.value = err instanceof Error ? err.message : String(err);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
  window.removeEventListener('resize', onWindowResize);
  if (rafId) cancelAnimationFrame(rafId);
  if (toastTimer) clearTimeout(toastTimer);
  if (viewer && !viewer.isDestroyed()) {
    viewer.destroy();
    viewer = null;
  }
});

function onResize() {
  if (viewer) viewer.resize();
}
</script>

<template>
  <!-- 占位：避免固定定位子元素使文档流高度为 0，页脚顶到导航栏下方 -->
  <div class="orbit-sim-page-slot">
    <div ref="rootEl" class="orbit-sim-lab">
      <div v-if="maskVisible || maskError" class="os-mask">
        <template v-if="maskError">
          <div class="os-err">
            <p>⚠ 初始化失败</p>
            <p class="os-err-detail">
              请确保在 HTTP 服务环境下运行并检查网络。
              <br />
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
              <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="4"
                transform="rotate(-30 12 12)"
                stroke-dasharray="3 2"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="4"
                transform="rotate(30 12 12)"
                stroke-dasharray="3 2"
              />
              <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
          </div>
          <div class="os-brand-text">
            <span class="os-brand-text__title">{{ ui.titleShort }}</span>
            <span class="os-brand-text__sub">Cesium · J2 · 教学沙盘</span>
          </div>
        </div>
        <div class="os-topbar__meta">
          <span class="os-chip os-chip--pulse"
            ><span class="os-chip__dot" aria-hidden="true" />{{ ui.live }}</span
          >
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
              <p class="os-panel-lead">拖动滑块或点选预设；地球在惯性系中自转显示。</p>
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
                  @click="loadPresetWithToast(p.key)"
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
                    @input="
                      sim.onParam('h', String(syncVal.h));
                      updateSliders();
                    "
                  />
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
                    @input="
                      sim.onParam('a', String(syncVal.a));
                      updateSliders();
                    "
                  />
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
                    @input="
                      sim.onParam('e', String(syncVal.e));
                      updateSliders();
                    "
                  />
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
                    @input="
                      sim.onParam('i', String(syncVal.i));
                      updateSliders();
                    "
                  />
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
                    @input="
                      sim.onParam('raan', String(syncVal.raan));
                      updateSliders();
                    "
                  />
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
                    @input="
                      sim.onParam('argp', String(syncVal.argp));
                      updateSliders();
                    "
                  />
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
                    @input="
                      sim.onParam('nu', String(syncVal.nu));
                      updateSliders();
                    "
                  />
                  <p class="pdesc">{{ ui.labels.nu.desc }}</p>
                </div>
              </section>
            </div>
          </div>

          <div class="tctl">
            <div class="tctl__row tctl__row--primary">
              <span class="tctl__label">{{ ui.timeTitle }}</span>
              <button
                type="button"
                class="tbtn tbtn--primary"
                :class="{ 'tbtn--paused': isPaused }"
                @click="togglePauseWithUpdate"
              >
                {{ pauseLabel }}
              </button>
              <div class="tctl__speedpill">{{ speedLabel }}</div>
            </div>
            <div class="tctl__row tctl__row--rates" role="group" aria-label="时间速率">
              <button type="button" class="tbtn tbtn--ghost" @click="setSpeedWithUpdate(0.5)">
                ½×
              </button>
              <button type="button" class="tbtn tbtn--ghost" @click="setSpeedWithUpdate(1)">
                1×
              </button>
              <button type="button" class="tbtn tbtn--ghost" @click="setSpeedWithUpdate(10)">
                10×
              </button>
              <button type="button" class="tbtn tbtn--ghost" @click="setSpeedWithUpdate(60)">
                60×
              </button>
              <button type="button" class="tbtn tbtn--ghost" @click="setSpeedWithUpdate(300)">
                300×
              </button>
            </div>
          </div>
        </aside>

        <div class="os-right">
          <div id="orbit-cesium" ref="viewerEl" class="cesiumViewer" />

          <div class="hud hud-panel">
            <section class="hud-section">
              <h3 class="hud-section__title">{{ ui.hudSat }}</h3>
              <div class="hrow">
                <span class="hk">{{ ui.lon }}</span
                ><span class="hv">{{ hud.lon }}</span>
              </div>
              <div class="hrow">
                <span class="hk">{{ ui.lat }}</span
                ><span class="hv">{{ hud.lat }}</span>
              </div>
              <div class="hrow">
                <span class="hk">{{ ui.alt }}</span
                ><span class="hv">{{ hud.alt }}</span>
              </div>
              <div class="hrow">
                <span class="hk">{{ ui.angVel }}</span
                ><span class="hv">{{ hud.spd }}</span>
              </div>
            </section>
            <div class="hud-divider" role="presentation" />
            <section class="hud-section">
              <h3 class="hud-section__title">{{ ui.hudEci }}</h3>
              <div class="hrow">
                <span class="hk">X</span><span class="hv">{{ hud.x }}</span>
              </div>
              <div class="hrow">
                <span class="hk">Y</span><span class="hv">{{ hud.y }}</span>
              </div>
              <div class="hrow">
                <span class="hk">Z</span><span class="hv">{{ hud.z }}</span>
              </div>
            </section>
            <div class="hud-divider" role="presentation" />
            <section class="hud-section">
              <h3 class="hud-section__title">{{ ui.hudOrb }}</h3>
              <div class="hrow">
                <span class="hk">{{ ui.type }}</span
                ><span class="hv">{{ hud.type }}</span>
              </div>
              <div class="hrow">
                <span class="hk">{{ ui.period }}</span
                ><span class="hv">{{ hud.inc }}</span>
              </div>
              <div class="hrow">
                <span class="hk">{{ ui.nu }}</span
                ><span class="hv">{{ hud.nu }}</span>
              </div>
              <div class="hrow">
                <span class="hk">{{ ui.epoch }}</span
                ><span class="hv">{{ hud.ep }}</span>
              </div>
            </section>
          </div>

          <div class="legend" role="region" :aria-label="ui.legend">
            <div class="ltitle">{{ ui.legend }}</div>
            <ul class="legend-grid">
              <li class="li"><span class="ll ll--solid" style="--ll: #38bdf8" />卫星轨道</li>
              <li class="li"><span class="ll ll--solid" style="--ll: #fbbf24" />地心–卫星</li>
              <li class="li"><span class="ll ll--dash" style="--ll: #fb923c" />地心–太阳</li>
              <li class="li">
                <span class="ll ll--soft" style="--ll: rgba(56, 189, 248, 0.45)" />赤道面
              </li>
              <li class="li">
                <span class="ll ll--soft" style="--ll: rgba(251, 191, 36, 0.4)" />黄道面
              </li>
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
@use '../styles/orbit-sim';
</style>
