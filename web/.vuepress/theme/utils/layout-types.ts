export const LayoutTypes = Object.freeze({} as const);

export type LayoutType = (typeof LayoutTypes)[keyof typeof LayoutTypes];
