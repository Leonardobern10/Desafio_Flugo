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
                         paddingY: 1.5,
                    }}
                    onClick={handleClick}
                    variant="contained"
                    size="large"
                    color="primary">
                    <Typography fontWeight={700} fontSize={'small'}>
                         Novo Colaborador
                    </Typography>
               </Button>
          </Box>
     );
}
