import {Avatar, Box, TableCell, Typography} from '@mui/material';
import randomAvatarGenerate from '@services/randomAvatarGenerate';
import type {ReactElement} from 'react';

export default function TitleTableCell(props: {data: string}): ReactElement {
     return (
          <TableCell align="left">
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'row',
                         alignItems: 'center',
                         columnGap: 2,
                    }}>
                    <Avatar src={randomAvatarGenerate()} />
                    <Typography fontSize="small">{props.data}</Typography>
               </Box>
          </TableCell>
     );
}
