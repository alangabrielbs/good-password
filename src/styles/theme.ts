export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weights: {
      regular: 400,
      semiBold: 600
    },
    content: {
      xsmall: '1.2rem',
      small: '1.4rem',
      regular: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem'
    },
    heading: {
      xsmall: '2.2rem',
      small: '3.0rem',
      regular: '3.6rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      xxlarge: '6.4rem',
      xxxlarge: '7.2rem'
    },
    letterSpacing: {
      small: '-0.01rem'
    }
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    backgroundDark: '#111820',

    main: '#807CE8',
    mainDark: '#615DC2',
    secondary: '#F85D92',

    primaryText: '#d6d1cd',
    secondaryText: '#A8A8B3',

    disabled: 'rgba(0, 0, 0, 0.25)',
    divider: '#323238',

    border: 'rgba(255, 255, 255, 0.29)',

    backgroundSecondary: 'rgba(19, 14, 23, 0.6)',

    neutral1: '#FFFFFF',
    neutral2: '#FAFAFA',
    neutral3: '#F5F5F5',
    neutral4: '#F0F0F0',
    neutral5: '#D9D9D9',
    neutral6: '#BFBFBF',
    neutral7: '#8C8C8C',
    neutral8: '#646472',
    neutral9: '#434343',
    neutral10: '#262626',
    neutral11: '#1F1F1F',
    neutral12: '#141414',
    neutral13: '#171717',

    gradients: {
      primary: 'linear-gradient(110.3deg, #F85D92 8.1%, #6B81FA 91.09%)'
    }
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1.2rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '8.0rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  boxShadow: {
    main: '0 0.4rem 4rem 0 rgba(0, 0, 0, 0.1)'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
