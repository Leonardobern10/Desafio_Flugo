import {Box} from '@mui/material';
import type {ReactElement} from 'react';
import Logo from './Logo/Logo';
import UserAvatar from './UserAvatar';

/**
 * Componente de cabeçalho da aplicação.
 * Exibe o logo à esquerda e o avatar do usuário à direita.
 *
 * @returns {ReactElement} Header com logo e avatar do usuário.
 */
export default function Header(): ReactElement {
     return (
          <Box
               component={'header'}
               sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
               }}>
               <Logo />
               <UserAvatar />
          </Box>
     );
}
