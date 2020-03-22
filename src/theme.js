import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  props: {
    MuiButton: {
      size: 'large',
      disableElevation: true,
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
    background: {
      default: '#fff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
