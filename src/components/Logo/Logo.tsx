import type {ReactElement} from 'react';
import {Box} from '@mui/material';
import logo from '@images/flugo_logo.svg';

export default function Logo(): ReactElement {
     return (
          <Box data-testid="logo">
               <img src={logo} alt="Logo da empresa" />
          </Box>
     );
}
