import {Box, TableCell, Typography} from '@mui/material';
import {type ReactElement} from 'react';

export default function StatusTableCell(props: {data: string}): ReactElement {
     return (
          <TableCell align="right">
               <Box
                    sx={{
                         display: 'flex',
                         justifyContent: 'flex-end',
                    }}>
                    <Typography
                         sx={{
                              backgroundColor:
                                   props.data === 'Ativo'
                                        ? 'rgba(34, 197, 94, 0.16)'
                                        : 'rgba(255, 86, 48, 0.16)',
                              color:
                                   props.data === 'Ativo'
                                        ? 'rgba(17, 141, 87, 1)'
                                        : 'rgba(183, 29, 24, 1)',
                              width: 'fit-content',
                              padding: '4px 8px',
                              borderRadius: 2,
                              fontWeight: 700,
                              fontSize: '12px',
                         }}>
                         {props.data}
                    </Typography>
               </Box>
          </TableCell>
     );
}
