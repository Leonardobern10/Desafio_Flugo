import * as React from 'react';
import Switch from '@mui/material/Switch';
import {Box, Typography} from '@mui/material';

export default function ControlledSwitch(props: {
     checked: boolean;
     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
     return (
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
               <Switch
                    checked={props.checked}
                    onChange={props.onChange}
                    slotProps={{input: {'aria-label': 'controlled'}}}
               />
               <Typography>Ativar ao criar</Typography>
          </Box>
     );
}
