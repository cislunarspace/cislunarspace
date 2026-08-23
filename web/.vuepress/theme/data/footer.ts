/**
 * Footer Configuration
 */
export default {
  branding: {
    name: 'Cislunar Space',
    nameEn: "Cislunar Space Beginner's Guide",
    nameZh: '地月空间入门指南',
    tagline: '探索地月空间知识',
    taglineEn: 'Your guide to cislunar space',
  },
  sections: [
    {
      title: '导航',
      titleEn: 'Navigate',
      links: [
        { label: '首页', labelEn: 'Home', href: '/' },
        { label: '关于本站', labelEn: 'About', href: '/about' },
        { label: '术语表', labelEn: 'Glossary', href: '/glossary/' },
      ],
    },
    {
      title: '内容',
      titleEn: 'Content',
      links: [
        { label: '地月轨道', labelEn: 'Cislunar Orbits', href: '/cislunar-orbits/' },
        { label: '研究前沿', labelEn: 'Research', href: '/research-frontiers/' },
        { label: '资源工具', labelEn: 'Resources', href: '/resources-tools/' },
      ],
    },
    {
      title: 'English',
      titleEn: 'English',
      links: [
        { label: 'Home', href: '/en/' },
        { label: 'About', href: '/en/about' },
        { label: 'Glossary', href: '/en/glossary/' },
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
