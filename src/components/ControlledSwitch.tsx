import * as React from 'react';
import Switch from '@mui/material/Switch';
import {Box, Typography} from '@mui/material';

export default function ControlledSwitch(props: {
     text: string;
     checked: boolean;
     onChange: (
          event: React.ChangeEvent<HTMLInputElement>,
          checked: boolean
     ) => void;
}) {
     return (
          <Box
               sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 2,
               }}>
               <Switch
                    checked={props.checked}
                    onChange={props.onChange}
                    slotProps={{input: {'aria-label': 'controlled'}}}
               />
               <Typography color="text.secondary" sx={{fontSize: '14px'}}>
                    {props.text}
               </Typography>
          </Box>
     );
}
