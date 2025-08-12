import {Avatar, Box, TableCell, Typography} from '@mui/material';
import type {TableCellType} from 'types/TableCellType';
import type {ReactElement} from 'react';

export default function TitleTableCell({
     text,
     avatar,
}: TableCellType): ReactElement {
     return (
          <TableCell align="left">
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'row',
                         alignItems: 'center',
                         columnGap: 2,
                    }}>
                    <Avatar src={avatar} />
                    <Typography fontSize="small">{text}</Typography>
               </Box>
          </TableCell>
     );
}
