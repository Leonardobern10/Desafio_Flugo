import {TableCell, Typography} from '@mui/material';
import type {ReactElement} from 'react';

export default function SmallTableCell(props: {data: string}): ReactElement {
     return (
          <TableCell>
               <Typography fontSize="small">{props.data}</Typography>
          </TableCell>
     );
}
