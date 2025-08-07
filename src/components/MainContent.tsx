import {Box} from '@mui/material';
import type {ReactElement} from 'react';

export default function MainContent(): ReactElement {
     return (
          <Box
               component={'main'}
               sx={{width: '100%', height: '100%', border: 2}}>
               COnteudo principal
          </Box>
     );
}
