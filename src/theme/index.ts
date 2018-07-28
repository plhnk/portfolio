// This theme file is based on the styled-components styled system
// https://github.com/jxnblk/styled-system

interface IThemeInterface {
  bold: number
  breakpoints: number[]
  colors: {
    [key: string]: string
  }
  font: string
  fontSizes: number[]
  fontWeights: {
    [key: string]: number
  }
  monospace: string
  radii: number[]
  radius: string
  regular: number
  space: number[]
}

let theme: IThemeInterface

export const breakpoints = [32, 48, 64, 80]

const units = 'em'

export const queries = {
  large: breakpoints[3] + units,
  medium: breakpoints[2] + units,
  small: breakpoints[1] + units,
  tiny: breakpoints[0] + units,
}

export const space = [0, 4, 8, 16, 32, 64, 128]

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]
export const regular = 400
export const bold = 600

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  bold,
  regular,
}

export const radii = [0, 2, 5]
export const radius = '5px'
export const font = '-apple-system, BlinkMacSystemFont, sans-serif'
export const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

const draculaTheme = {
  background: '#282a36',
  comment: '#6272a4',
  cyan: '#8be9fd',
  foreground: '#f8f8f2',
  green: '#50fa7b',
  orange: '#ffb86c',
  pink: '#ff79c6',
  purple: '#bd93f9',
  red: '#ff5555',
  yellow: '#f1fa8c',
}

export const colors = {
  ...draculaTheme,
  accent1: 'rgb(155, 155, 155)',
  accent2: 'rgb(250, 175, 0)',
  accent3: 'rgb(176, 69, 69)',
  active: 'rgb(23, 195, 169)',
  black: 'rgb(33, 33, 33)',
  facebook: 'rgb(59, 89, 152)',
  github: 'rgb(0, 0, 0)',
  google: 'rgb(221, 75, 57)',
  gray: '#adb4b9',
  gray0: '#f9f9fa',
  gray1: '#eceeef',
  gray2: '#dee1e3',
  gray3: '#cfd3d7',
  gray4: '#bfc5c9',
  gray5: '#adb4b9',
  gray6: '#98a1a8',
  gray7: '#7f8b93',
  gray8: '#606e79',
  gray9: '#374047',
  linkedin: 'rgb(0, 119, 181)',
  primary: 'rgb(23, 195, 169)',
  secondary: 'rgb(0, 125, 125)',
  twitter: 'rgb(85, 172, 238)',
  white: 'rgb(255, 255, 255)',
}

theme = {
  bold,
  breakpoints,
  colors,
  font,
  fontSizes,
  fontWeights,
  monospace,
  radii,
  radius,
  regular,
  space,
}

export default theme
