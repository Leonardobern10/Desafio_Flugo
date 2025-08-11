import {Avatar, Box, Grid, Typography} from '@mui/material';
import type {ReactElement} from 'react';
import Logo from '../Logo/Logo';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SideBar(): ReactElement {
     return (
          <Grid
               component={'aside'}
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '20%',
                    rowGap: 2,
               }}>
               <Logo />
               <Box
                    sx={{
                         color: 'text.secondary',
                         fontSize: '14px',
                         lineHeight: '22px',
                         width: '100%',
                    }}>
                    <Box
                         sx={{
                              display: {sm: 'none', md: 'flex'},
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              columnGap: 1,
                         }}>
                         <Avatar
                              src=""
                              variant="rounded"
                              sx={{
                                   color: '#637381',
                                   width: '20px',
                                   height: '20px',
                                   opacity: '50%',
                              }}></Avatar>
                         <Typography
                              fontSize="small"
                              sx={{width: 'fit-content'}}>
                              Colaboradores
                         </Typography>
                         <Box
                              sx={{
                                   display: 'flex',
                                   width: '12px',
                                   height: '13px',
                                   alignItems: 'center',
                              }}>
                              <ArrowForwardIosIcon
                                   sx={{height: '100%', width: '100%'}}
                              />
                         </Box>
                    </Box>
               </Box>
          </Grid>
     );
}
