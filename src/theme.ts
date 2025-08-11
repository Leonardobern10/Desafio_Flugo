// theme.ts
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
     palette: {
          primary: {
               main: '#22C55E', // cor principal
          },
          secondary: {
               main: '#f50057', // cor secundária
          },
          text: {
               primary: '#212B36', // cor do texto principal
               secondary: '#637381', // cor do texto secundário
               disabled: '#919EABCC', // cor para textos desabilitados
          },
     },
     typography: {
          fontFamily: 'Public Sans, sans-serif',

          h5: {
               fontWeight: 700,
          },
          button: {
               fontWeight: 700,
               textTransform: 'none',
          },
     },
     components: {
          MuiLink: {
               styleOverrides: {
                    root: {
                         fontWeight: 400,
                         fontSize: '14px',
                         lineHeight: '22px',
                         letterSpacing: 0,
                    },
               },
               defaultProps: {
                    color: '#212B36',
               },
          },
          MuiButton: {
               styleOverrides: {
                    root: {
                         color: '#FFFFFF',
                         fontWeight: 700,
                         fontStyle: 'bold',
                         fontSize: '15px',
                         lineHeight: '26px',
                         letterSpacing: 0,
                         paddingY: 2,
                    },
               },
               defaultProps: {},
          },
     },
});

export default theme;
