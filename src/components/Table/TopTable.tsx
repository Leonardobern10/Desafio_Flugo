import {dataTopTable} from '@data/dataTopTable';
import {Box, Button, Typography} from '@mui/material';
import type {ReactElement} from 'react';

/**
 * Componente TopTable que exibe um título e um botão para
 * disparar uma ação, geralmente para exibir um stepper.
 *
 * @param {Object} props - Propriedades do componente
 * @param {(showStepper: boolean) => void} props.onClick -
 * Callback executado ao clicar no botão, recebe um boolean
 * para indicar exibição do stepper
 *
 * @returns {ReactElement} Componente visual contendo título
 * e botão estilizados
 */
export default function TopTable(props: {
     onClick: (showStepper: boolean) => void;
}): ReactElement {
     const handleClick = () => {
          props.onClick(true);
     };

     return (
          <Box
               data-testid="top-table"
               sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 'fit-content',
               }}>
               <Typography
                    variant="h5"
                    sx={{
                         color: 'text.primary',
                         display: {xs: 'none', lg: 'inline'},
                    }}>
                    {dataTopTable.titleSection}
               </Typography>
               <Button
                    data-testid="top-table-button"
                    sx={{
                         color: '#fff',
                         borderRadius: 2,
                         paddingY: {xs: 1, lg: 1.5},
                         paddingX: {xs: 2, lg: 2},
                    }}
                    onClick={handleClick}
                    variant="contained"
                    color="primary">
                    <Typography
                         fontWeight={700}
                         fontSize={{xs: '0.75rem', lg: '1rem'}}>
                         {dataTopTable.buttonTitle}
                    </Typography>
               </Button>
          </Box>
     );
}
