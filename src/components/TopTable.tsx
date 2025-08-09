import {Box, Button, Typography} from '@mui/material';
import type {ReactElement} from 'react';

export default function TopTable(props: {
     onClick: (showStepper: boolean) => void;
}): ReactElement {
     const handleClick = () => {
          props.onClick(true);
     };

     return (
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
                    sx={{
                         color: '#fff',
                         borderRadius: 2,
                         paddingY: 1,
                    }}
                    onClick={handleClick}
                    variant="contained"
                    size="large"
                    color="primary">
                    Novo Colaborador
               </Button>
          </Box>
     );
}
