import {Box} from '@mui/material';
import type {ReactElement} from 'react';
import UserAvatar from './UserAvatar';

export default function ContainerAvatar(): ReactElement {
     return (
          <Box sx={{justifySelf: 'flex-start'}}>
               <UserAvatar />
          </Box>
     );
}
