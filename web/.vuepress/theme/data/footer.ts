/**
 * Footer Configuration
 */
export default {
  branding: {
    nameZh: '地月空间入门指南',
    tagline: '探索地月空间知识',
  },
  sections: [
    {
      title: '导航',
      links: [
        { label: '首页', href: '/' },
        { label: '关于本站', href: '/about' },
        { label: '术语表', href: '/glossary/' },
      ],
    },
    {
      title: '内容',
      links: [
        { label: '地月轨道', href: '/cislunar-orbits/' },
        { label: '研究前沿', href: '/research-frontiers/' },
        { label: '资源工具', href: '/resources-tools/' },
      ],
    },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/cislunarspace/cislunarspace', icon: 'github' },
    { label: 'Twitter', href: 'https://twitter.com/cislunarspace', icon: 'twitter' },
  ],
  friendLinks: [
    {
      label: '智慧学习助手 UStudy',
      href: 'https://ustudy.top/',
    },
    {
      label: '航天任务工具箱 ATK',
      href: 'https://www.osredm.com/atknudt/atk/about',
    },
  ],
  copyright: {
    href: 'https://beian.miit.gov.cn/',
    name: '湘ICP备2026006405号-1',
  },
};
