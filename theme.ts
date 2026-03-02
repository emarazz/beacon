"use client"

import { Colors } from "@/ui/colors";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {

    // fontWeightLight: 100,
    // fontWeightRegular: 200,
    // fontWeightMedium: 300,
    // fontWeightBold: 500,

    fontFamily: 'var(--font-rubik)',

    // h1: {
    //   fontFamily: 'var(--font-lato)',
    //   fontSize: '2.75rem',
    //   fontWeight: 300,
    //   lineHeight: 1.1,
    //   letterSpacing: "normal",
    // },
    // h2: {
    //   fontFamily: 'var(--font-lato)',
    //   fontSize: '1.75rem',
    //   fontWeight: 300,
    //   lineHeight: 1.1,
    //   letterSpacing: "normal",
    // },
    // h3: {
    //   fontFamily: 'var(--font-lato)',
    //   fontSize: '1.25rem',
    //   fontWeight: 300,
    //   lineHeight: 1.1,
    //   letterSpacing: "normal",
    // },
    // h4: {
    //   fontFamily: 'var(--font-lato)',
    //   fontSize: '1.125rem',
    //   fontWeight: 300,
    //   lineHeight: 1.1,
    //   letterSpacing: "normal",
    // },
    // h5: {
    //   fontFamily: 'var(--font-lato)',
    //   fontSize: '1rem',
    //   fontWeight: 300,
    //   lineHeight: 1.1,
    //   letterSpacing: "normal",
    // },
    // h6: {
    //   fontFamily: 'var(--font-lato)',
    //   fontSize: '1rem',
    //   fontWeight: 300,
    //   lineHeight: 1.1,
    //   letterSpacing: "normal",
    // },

    subtitle1: {
      fontSize: '1.250rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "normal",
    },
    // subtitle2: {
    //   fontSize: '1.125rem',
    //   fontWeight: 300,
    //   lineHeight: 1.2,
    //   letterSpacing: "normal",
    // },
    // body1: {
    //   fontSize: '1rem',
    //   fontWeight: 300,
    //   lineHeight: 1.4,
    //   letterSpacing: "normal",
    // },
    // body2: {
    //   fontSize: '0.875rem',
    //   fontWeight: 300,
    //   lineHeight: 1.4,
    //   letterSpacing: "normal",
    // },
    // button: {
    //   fontSize: '0.875rem',
    //   fontWeight: 300,
    //   lineHeight: 1.4,
    //   letterSpacing: "normal",
    // },
    // caption: {
    //   fontSize: '0.75rem',
    //   fontWeight: 300,
    //   lineHeight: 1.2,
    //   letterSpacing: "normal",
    // },
    // overline: undefined,
  },
  palette: {
    primary: {
      main: Colors.blue,
    },
    secondary: {
      main: Colors.yellow,
    },
    background: {
      default: Colors.black,
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // textTransform: 'none',
          borderRadius: 24,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          '&:last-child': { paddingBottom: 8 }
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;