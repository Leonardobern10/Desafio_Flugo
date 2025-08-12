import {Box} from '@mui/material';
import type {ReactElement} from 'react';
import UserAvatar from './UserAvatar';

/**
 * Container simples para o componente UserAvatar,
 * aplicando estilo de alinhamento.
 *
 * @returns {ReactElement} Componente Box contendo UserAvatar
 */
export default function ContainerAvatar(): ReactElement {
     return (
          <Box sx={{justifySelf: 'flex-start'}}>
               <UserAvatar />
          </Box>
     );
}
