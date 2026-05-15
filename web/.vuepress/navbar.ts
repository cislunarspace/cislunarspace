import type { NavbarConfig } from 'vuepress'

export default <NavbarConfig>[
  {
    text: '探究工具',
    children: [
      { text: '卫星轨道仿真教学平台', link: '/satellite-simulation/' },
      { text: '史学思辨', link: '/dialectic' },
    ],
  },
  {
    text: '地月空间术语词典',
    link: '/glossary/',
  },
  {
    text: '资源与工具',
    link: '/resources-tools/',
  },
  {
    text: 'Space News',
    link: '/space-news/',
  },
  {
    text: 'AI问答',
    link: '/ai-chat',
  },
  {
    text: '论坛',
    link: '/forum',
  },
  {
    text: '首页',
    link: '/',
  },
  {
    text: 'Gitee',
    link: 'https://gitee.com/cislunarspace/cislunarspace',
  },
  {
    text: 'GitHub',
    link: 'https://github.com/cislunarspace/cislunarspace',
  },
]
