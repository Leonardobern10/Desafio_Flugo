import {Avatar, Box, Grid, Typography} from '@mui/material';
import type {ReactElement} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SideBar(): ReactElement {
     return (
          <Grid
               component={'aside'}
               sx={{
                    paddingTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '20%',
                    rowGap: 2,
               }}>
               <Box
                    sx={{
                         color: 'text.secondary',
                         fontSize: '14px',
                         lineHeight: '22px',
                         width: '100%',
                    }}>
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
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
                              }}
                         />
                         <Typography
                              fontSize="small"
                              color="text.secondary"
                              sx={{
                                   width: 'fit-content',
                              }}>
                              Colaboradores
                         </Typography>
                         <Box
                              sx={{
                                   display: 'flex',
                                   width: '12px',
                                   height: '13px',
                                   alignItems: 'center',
                                   marginLeft: 'auto',
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
