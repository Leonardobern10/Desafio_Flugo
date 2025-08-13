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
                         fontSize: '0.8rem',
                         lineHeight: '22px',
                         letterSpacing: 0,
                         border: 2,
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
                         fontSize: '0.9rem',
                         lineHeight: '26px',
                         letterSpacing: 0,
                         paddingY: 2,
                         '& .MuiOutlinedInput-root': {
                              borderRadius: 8, // arredondado padrão do theme.shape.borderRadius
                         },
                         border: 2,
                    },
               },
               defaultProps: {},
          },
          MuiSelect: {
               styleOverrides: {
                    root: {
                         borderRadius: 8,
                    },
               },
          },
          MuiTextField: {
               styleOverrides: {
                    root: {
                         '& .MuiOutlinedInput-root': {
                              borderRadius: 8, // arredondado padrão do theme.shape.borderRadius
                         },
                    },
               },
          },
     },
});

export default theme;
