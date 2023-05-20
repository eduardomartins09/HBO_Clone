import { generateMedia } from 'styled-media-query'

export const BREAKPOINT_XXSS = 300
export const BREAKPOINT_XS = 340
export const BREAKPOINT_SM = 550
export const BREAKPOINT_MD = 700
export const BREAKPOINT_LG = 920
export const BREAKPOINT_LGG = 1100
export const BREAKPOINT_XL = 1220
export const BREAKPOINT_XXL = 1400

export const media = generateMedia({
  xxss: `${BREAKPOINT_XXSS}px`,
  xs: `${BREAKPOINT_XS}px`,
  sm: `${BREAKPOINT_SM}px`,
  md: `${BREAKPOINT_MD}px`,
  lg: `${BREAKPOINT_LG}px`,
  lgg: `${BREAKPOINT_LGG}px`,
  xl: `${BREAKPOINT_XL}px`,
  xxl: `${BREAKPOINT_XXL}px`
})