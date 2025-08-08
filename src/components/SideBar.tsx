import {Box, Grid} from '@mui/material';
import type {ReactElement} from 'react';
import Logo from './Logo/Logo';

export default function SideBar(): ReactElement {
     return (
          <Grid
               component={'aside'}
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '20%',
                    rowGap: 1,
               }}>
               <Logo />
               <Box
                    sx={{
                         color: 'text.secondary',
                         fontSize: '14px',
                         lineHeight: '22px',
                    }}>
                    Colaboradores
               </Box>
          </Grid>
     );
}
