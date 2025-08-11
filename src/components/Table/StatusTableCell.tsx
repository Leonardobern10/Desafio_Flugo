import {TableCell, Typography} from '@mui/material';
import {type ReactElement} from 'react';

export default function StatusTableCell(props: {data: string}): ReactElement {
     return (
          <TableCell
               sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    textAlign: 'right',
               }}
               align="right">
               <Typography
                    sx={{
                         backgroundColor: `${props.data === 'ativo' ? 'rgba(34, 197, 94, 0.16)' : 'rgba(255, 86, 48, 0.16)'}`,
                         color: `${props.data === 'ativo' ? 'rgba(17, 141, 87, 1)' : 'rgba(183, 29, 24, 1)'}`,
                         width: 'fit-content',
                         padding: 1,
                         borderRadius: 2,
                         fontWeight: 700,
                         fontSize: '12px',
                    }}
                    fontSize="small">
                    {props.data}
               </Typography>
          </TableCell>
     );
}
