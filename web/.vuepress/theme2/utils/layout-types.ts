export const LayoutTypes = Object.freeze({
  SpaceNewsHome: 'SpaceNewsHome',
  SpaceNewsArticle: 'SpaceNewsArticle',
  SpaceNewsArchive: 'SpaceNewsArchive',
  OrbitSimLab: 'OrbitSimLab',
  Forum: 'Forum',
} as const);

export type LayoutType = (typeof LayoutTypes)[keyof typeof LayoutTypes];
