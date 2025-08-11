import {Avatar, TableCell, Typography} from '@mui/material';
import randomAvatarGenerate from '@services/randomAvatarGenerate';
import type {ReactElement} from 'react';

export default function TitleTableCell(props: {data: string}): ReactElement {
     return (
          <TableCell
               sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    columnGap: 2,
               }}
               align="left">
               <Avatar src={randomAvatarGenerate()} />
               <Typography fontSize="small">{props.data}</Typography>
          </TableCell>
     );
}
