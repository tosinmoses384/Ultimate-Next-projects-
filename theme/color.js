const baseColors = {
  white: '#ffffff',
  black: '#000000',
  yellow: '#fdb32a',
  gray: '#777',
  lightgray: '#fafafa',
  transparent: 'transparent',
  blue: '#357edd',
}

const blacks = [
  'rgba(0,0,0,.0125)',
  'rgba(0,0,0,.025)',
  'rgba(0,0,0,.05)',
  'rgba(0,0,0,.1)',
  'rgba(0,0,0,.2)',
  'rgba(0,0,0,.3)',
  'rgba(0,0,0,.4)',
  'rgba(0,0,0,.5)',
  'rgba(0,0,0,.6)',
  'rgba(0,0,0,.7)',
  'rgba(0,0,0,.8)',
  'rgba(0,0,0,.9)',
]

const common = {
  success: '#5CB85C',
  error: '#D9534F',
  warning: '#F0AD4E',
  info: '#3C557E',
  inactiveField: '#f2f2f2',
  inactiveButton: '#b7dbdd',
  inactiveIcon: '#EBEBEB',
}

const colors = {
  modes: {
    dark: {
      ...baseColors,
      ...blacks,
      ...common,
      text: '#FFFFFF',
      background: '#002F5C',
      primary: '#0cf',
      secondary: '#f0e',
      primaryButtonBg: '#D4D9DC',
      primaryButtonText: '#032E5B',
      secondaryButtonBg: '#D4D9DC',
      secondaryButtonText: '#032E5B',
      labelColor: '#767676',
      loginFormHeadingText: '#FFFFFF',
      mainWrapperBg:
        'linear-gradient(89.59deg, #0661B8 -8.65%, #00274D 149.74%)',
      mainWrapperColor: `#D2D7DB`,
      selectBox: '#00274D',
      inputBg: '#002A52',
      inputColor: '#FFFFFF',
      placeholderColor: 'rgba(255, 255, 255, 0.6)',
      borderColor: '#D2D7DB',
      accent: '#E1A7B6',
      focusStyleBg: '#002A52',
      focusStyleBorderColor: '#D2D7DB',
      disabled: '#D2D7DB',
    },
    light: {
      ...baseColors,
      ...blacks,
      ...common,
      text: '#021A34',
      background: '#fff',
      primary: '#0cf',
      secondary: '#00a',
      primaryButtonBg: '#002E5A',
      primaryButtonText: '#FFFFFF',
      secondaryButtonBg: '#002E5A',
      secondaryButtonText: '#FFFFFF',
      labelColor: '#002E5A',
      loginFormHeadingText: '#021A34',
      mainWrapperBg:
        'linear-gradient(88.5deg, #FFFFFF 2.28%, rgba(217, 221, 224, 0.49) 75.22%)',
      mainWrapperColor: `#002E5A`,
      selectBox: '#FFFFFF',
      inputBg: '#FFFFFF',
      inputColor: '#002E5A',
      placeholderColor: '#8E9AA4',
      borderColor: '#D2D7DB',
      accent: '#B50156',
      focusStyleBg: '#EDF0F3',
      focusStyleBorderColor: '#002E5A',
      disabled: '#D2D7DB',
    },
  },
}

export default colors
