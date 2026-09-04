/**
 * orbitSimI18n — 轨道仿真组件的界面字符串
 *
 * 从 OrbitSimLab.vue 抽取。组件通过 `const ui = orbitSimI18n()` 调用。
 */
export function orbitSimI18n() {
  return {
    title: '卫星轨道仿真教学系统 | Satellite Orbit Simulation',
    titleShort: '轨道仿真教学',
    live: '实时解算',
    frame: 'J2000 ECI',
    j2: 'J2 摄动',
    quickPresets: '轨道预设',
    presetKeysHint: '键 1–5',
    timeTitle: '时间',
    secOrb: '开普勒轨道六要素',
    grpShape: '尺度与形状',
    grpOrient: '空间指向',
    grpPhase: '轨道相位',
    loading: '正在加载轨道仿真…',
    hudSat: '卫星状态',
    hudEci: 'ECI（km）',
    hudOrb: '轨道',
    legend: '图例',
    kb: '空格 · 暂停    1–5 · 预设    +/- · 速率    R · 重置 UTC',
    ready: '就绪。\n空格暂停 · 1–5 预设 · +/- 速率 · R 重置时钟',
    resetClock: '仿真时钟已重置',
    lon: '经度 λ',
    lat: '纬度 φ',
    alt: '高度 h',
    angVel: '平均运动',
    type: '类型',
    period: '周期',
    nu: '真近点角',
    epoch: '仿真 UTC',
    peri: '近地点\nPeriapsis',
    apo: '远地点\nApoapsis',
    sun: '☀ 太阳',
    equator: '赤道面 Equatorial Plane',
    /** 把隐式知识摊在台面上：模型边界与术语歧义，避免「界面像真值」的误读 */
    assumptionsTitle: '模型与隐式假设',
    assumptionsHint: '本沙盘不是什么',
    assumptionsLead:
      '教学可视化专用。下列内容多为界面未写明、学习者容易默认成立的隐含前提——在此显式列出。',
    assumptionsItems: [
      '力模型：二体开普勒根数 + 一阶 J2 长期项（平均化）摄动；无大气阻力、光压、高阶重力场与第三体引力。',
      '坐标系：轨道在类 ECI 惯性系中积分；地球自转显示采用简化的恒星时角关系，非 IERS 完整地球定向模型。',
      'HUD「平均运动」为由 √(μ/a³) 换算的轨道平均角速率 n（°/h），不是航天器本体角速度。',
      '太阳方向为低精度示意（约 ±1° 量级），仅作方位与昼夜提示。',
      '高度 h 与半长轴 a 的联动采用常见教材约定与近似地球半径；工程星历需对照历元、椭球与任务口径。',
    ],
    labels: {
      h: {
        name: '轨道高度 h',
        unit: 'km',
        desc: '近地点高度，影响轨道周期与速度',
      },
      a: {
        name: '半长轴 a',
        unit: 'km',
        desc: '椭圆轨道长轴半径 a = R⊕ + h',
      },
      e: {
        name: '离心率 e',
        unit: '',
        desc: '轨道椭圆度，e=0圆轨道，e→1抛物线',
      },
      i: {
        name: '轨道倾角 i',
        unit: '°',
        desc: '轨道面与赤道面夹角，决定覆盖纬度',
      },
      raan: {
        name: '升交点赤经 Ω',
        unit: '°',
        desc: '升交点在赤道面上的位置，定义轨道面朝向',
      },
      argp: {
        name: '近地点幅角 ω',
        unit: '°',
        desc: '从升交点到近地点的角度，定义椭圆方向',
      },
      nu: {
        name: '真近点角 f',
        unit: '°',
        desc: '卫星在轨道上的当前位置，初始相位',
      },
    },
  };
}
