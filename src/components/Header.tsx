import {Box} from '@mui/material';
import type {ReactElement} from 'react';
import Logo from './Logo/Logo';
import UserAvatar from './UserAvatar';

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
