/**
 * orbitSimI18n — Cislunar Orbit Simulator 双语 UI 字符串
 *
 * 从 OrbitSimLab.vue 抽取。组件通过 `const ui = computed(() => orbitSimI18n(locale))` 调用。
 */
export function orbitSimI18n(locale: string | undefined) {
  const en = locale === 'en';
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
          'HUD "Mean motion" is n in °/h from √(μ/a³)—orbital mean rate—not satellite body angular velocity.',
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
      h: {
        name: en ? 'Altitude h' : '轨道高度 h',
        unit: 'km',
        desc: en ? 'Perigee altitude; drives period & speed' : '近地点高度，影响轨道周期与速度',
      },
      a: {
        name: en ? 'Semi-major axis a' : '半长轴 a',
        unit: 'km',
        desc: en ? 'a = R⊕ + h' : '椭圆轨道长轴半径 a = R⊕ + h',
      },
      e: {
        name: en ? 'Eccentricity e' : '离心率 e',
        unit: '',
        desc: en ? 'e=0 circle; e→1 parabolic' : '轨道椭圆度，e=0圆轨道，e→1抛物线',
      },
      i: {
        name: en ? 'Inclination i' : '轨道倾角 i',
        unit: '°',
        desc: en ? 'Orbit plane tilt vs equator' : '轨道面与赤道面夹角，决定覆盖纬度',
      },
      raan: {
        name: en ? 'RAAN Ω' : '升交点赤经 Ω',
        unit: '°',
        desc: en ? 'Ascending node longitude' : '升交点在赤道面上的位置，定义轨道面朝向',
      },
      argp: {
        name: en ? 'Arg. of perigee ω' : '近地点幅角 ω',
        unit: '°',
        desc: en ? 'Perigee direction in orbit plane' : '从升交点到近地点的角度，定义椭圆方向',
      },
      nu: {
        name: en ? 'True anomaly f' : '真近点角 f',
        unit: '°',
        desc: en ? 'Current position on orbit' : '卫星在轨道上的当前位置，初始相位',
      },
    },
  };
}
