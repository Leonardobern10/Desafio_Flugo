import {Box} from '@mui/material';
import type {ReactElement} from 'react';
import UserAvatar from './Header/UserAvatar';

/**
 * Talvez trocar esse box por um icone
 */

export default function ContainerAvatar(): ReactElement {
     return (
          <Box sx={{justifySelf: 'flex-start'}}>
               <UserAvatar />
          </Box>
     );
}
