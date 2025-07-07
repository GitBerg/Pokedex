export const lightTheme = {
  name: 'light',
  colors: {
    bg: '#00B4EC',
    bg_nav: '#DD4B4A',
    bg_login: '#fff',
    text: '#212121',
    card: '#fff',
    btn: "#0055D1",
    border: "#e4e4e4"
  },
}

export const darkTheme = {
  name: 'dark',
  colors: {
    bg: '#414141',
    bg_nav: '#242424',
    bg_login: '#414141',
    text: '#e0e0e0',
    card: '#535353',
    btn: '#B64FC8',
    border: "#afafaf"
  },
}

export type ThemeType = typeof lightTheme