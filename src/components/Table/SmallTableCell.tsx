import {TableCell, Typography} from '@mui/material';
import type {TableCellType} from 'types/TableCellType';

import type {ReactElement} from 'react';

export default function SmallTableCell({text}: TableCellType): ReactElement {
     return (
          <TableCell data-testid="table-cell" align="left">
               <Typography fontSize="small">{text}</Typography>
          </TableCell>
     );
}
