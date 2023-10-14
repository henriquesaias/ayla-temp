import { theme as chakraTheme } from '@chakra-ui/react'

const breakpoints = ['40em', '52em', '64em']

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: 'rgb(23,23,24)',
    hoverColor: 'rgba(43,43,44, .5)'
  },
  fonts: {
    heading: `'Unbounded', cursive`,
    body: `'Hubballi', sans-serif`,
    mono: "Menlo, monospace",
  },
  breakpoints,
  config: {
    initialColorMode: "light",
  }
}

export default theme
