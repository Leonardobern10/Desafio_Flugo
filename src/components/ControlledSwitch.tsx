import Switch from '@mui/material/Switch';
import {Box, Typography} from '@mui/material';
import type {ControlledSwicthType} from 'types/ControlledSwitchType';

/**
 * Componente Switch controlado com label textual ao lado.
 *
 * @param {string} text - Texto exibido ao lado do switch.
 * @param {boolean} checked - Estado do switch (ligado/desligado).
 * @param {(event: React.ChangeEvent<HTMLInputElement>,
 * checked: boolean) => void} onChange - Função chamada ao alterar
 * o estado do switch.
 *
 * @returns {JSX.Element} Switch acompanhado de label.
 */
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
               <Typography color="text.secondary" sx={{fontSize: '0.8rem'}}>
                    {text}
               </Typography>
          </Box>
     );
}
