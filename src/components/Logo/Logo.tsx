import type {ReactElement} from 'react';
import logo from '../../assets/flugo_logo.svg';
import {Box} from '@mui/material';

export default function Logo(): ReactElement {
     return (
          <Box>
               <img src={logo} alt="Logo da empresa" />
          </Box>
     );
}
