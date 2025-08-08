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
});

export default theme;
