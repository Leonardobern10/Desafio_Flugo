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
               }}>
               <LinearProgress
                    sx={{width: '95%'}}
                    variant="determinate"
                    value={props.progress}
               />
               <Typography>{props.progress}%</Typography>
          </Box>
     );
}
