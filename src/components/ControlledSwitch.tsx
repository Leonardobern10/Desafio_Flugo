import Switch from '@mui/material/Switch';
import {Box, Typography} from '@mui/material';
import type {ControlledSwicthType} from 'types/ControlledSwitchType';

export default function ControlledSwitch({
     text,
     checked,
     onChange,
}: ControlledSwicthType) {
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
                    checked={checked}
                    onChange={onChange}
                    slotProps={{input: {'aria-label': 'controlled'}}}
               />
               <Typography color="text.secondary" sx={{fontSize: '14px'}}>
                    {text}
               </Typography>
          </Box>
     );
}
