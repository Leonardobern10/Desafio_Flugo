import {Box, Button, Typography} from '@mui/material';
import {useState, type ReactElement} from 'react';
import TableEmployee from '../context/TableColaboradores';
import FormContext from '../context/FormContext';

export default function MainContent(): ReactElement {
     const [showStepper, setShowStepper] = useState(false);

     return (
          <Box
               component={'main'}
               sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
               }}>
               {showStepper ? (
                    <FormContext />
               ) : (
                    <Box>
                         <Box
                              sx={{
                                   display: 'flex',
                                   flexDirection: 'row',
                                   justifyContent: 'space-between',
                                   alignItems: 'center',
                                   height: 'fit-content',
                              }}>
                              <Typography
                                   variant="h5"
                                   sx={{color: 'text.primary'}}>
                                   Colaboradores
                              </Typography>
                              <Button
                                   sx={{
                                        color: '#fff',
                                        borderRadius: 2,
                                        paddingY: 1,
                                   }}
                                   onClick={() => setShowStepper(true)}
                                   variant="contained"
                                   size="large"
                                   color="primary">
                                   Novo Colaborador
                              </Button>
                         </Box>
                         <Box
                              sx={{
                                   height: '80%',
                              }}>
                              <TableEmployee />
                         </Box>
                    </Box>
               )}
          </Box>
     );
}
