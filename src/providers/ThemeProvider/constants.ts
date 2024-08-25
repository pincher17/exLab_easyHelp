import styled from 'styled-components'

export const palette = {
  mainLight: '#EFFEFF',
  primary: '#21BDCB',
  black: '#1D1D1D',
  white: '#FFFFFF',
  gray: '#A2A5B6',
  orange: '#FFD35C',
  red: '#FE744F',
  violet: '#AD95E1',
  logoHead: '#232F48',
  hover: {
    light: '#1C9DA9',
    dark: '',
  },
  active: {
    light: '#46C8D4',
    dark: '',
  },
  labelText: {
    light: '#757575',
    dark: '',
  },
  error: '#FF3232',
  success: '#86DEA9',
  warning: '#ECDF66',
  info: '#E6E6E6',
}

export const lightTheme = {
  color: {
    main: '#565353',
    mainLight: palette.mainLight,
    primary: palette.primary,
    white: palette.white,
    black: palette.black,
    gray: palette.gray,
    label: palette.labelText.light,
    info: palette.info,
    error: palette.error,

    hover: palette.hover.light,
    active: palette.active,
  },
  bgColor: {
    main: palette.mainLight,
    white: palette.white,
    primary: palette.primary,
  },
  maxWidth: {
    xl: '1360px',
  },
  button: {
    width: {
      s: '150px',
      m: '228px',
      l: '300px',
      xl: '328px',
    },
    palette: {
      default: palette.primary,
      hover: palette.hover.light,
      active: palette.active.light,
      disabled: palette.black,
      gray: palette.gray,
      white: palette.white,
      black: palette.black,
    },
  },
}

export type ThemeType = typeof lightTheme

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 40px;

  @media screen and (min-width: 640px) {
    max-width: ${(props) => props.theme.maxWidth.xl};
  }
  @media screen and (max-width: 560px) {
    padding: 0 16px;
  }
`
