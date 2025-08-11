import {Box, LinearProgress, Typography} from '@mui/material';
import type {ReactElement} from 'react';

export default function ProgressForm(props: {progress: number}): ReactElement {
     return (
          <Box
               sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginY: 2,
               }}>
               <LinearProgress
                    sx={{width: '95%'}}
                    variant="determinate"
                    value={props.progress}
               />
               <Typography fontSize="small" color="text.secondary">
                    {props.progress}%
               </Typography>
          </Box>
     );
}
