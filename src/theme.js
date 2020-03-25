import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    h4: {
      fontFamily: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
      fontWeight: 800,
    },
    h6: {
      fontFamily: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#00A3FF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    success: {
      light: '#D1EEDD',
      main: '#18A957',
      dark: '#052211',
    },
    error: {
      main: red.A400,
    },
    warning: {
      light: '#FFF1D7',
      main: '#FFBB38',
      dark: '#33250B',
    },
    background: {
      default: '#fff',
    },
  },
  props: {
    MuiButton: {
      size: 'large',
      disableElevation: true,
    },
    MuiLink: {
      underline: 'always',
    },
  },
});

export default theme;
