import {Box, Button, Typography} from '@mui/material';
import type {ReactElement} from 'react';
import FormDefault from '../context/TableColaboradores';

export default function MainContent(): ReactElement {
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
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         height: 'fit-content',
                    }}>
                    <Typography variant="h5" sx={{color: 'text.primary'}}>
                         Colaboradores
                    </Typography>
                    <Button
                         sx={{color: '#fff', borderRadius: 2, paddingY: 1}}
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
                    <FormDefault />
               </Box>
          </Box>
     );
}
