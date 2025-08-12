import {Box, LinearProgress, Typography} from '@mui/material';
import type {ReactElement} from 'react';

/**
 * Componente que exibe uma barra de progresso linear
 * com valor percentual ao lado.
 *
 * @param {object} props - Propriedades do componente.
 * @param {number} props.progress - Valor do progresso, de 0 a 100.
 * @returns {ReactElement} Componente visualizando o progresso atual.
 */
export default function ProgressForm(props: {progress: number}): ReactElement {
     return (
          <Box
               sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    columnGap: 1.5,
                    marginY: 2,
               }}>
               <LinearProgress
                    sx={{width: '95%'}}
                    variant="determinate"
                    value={props.progress}
               />
               <Typography fontSize="small" color="text.secondary">
                    {props.progress}%
               </Typography>
          </Box>
     );
}
