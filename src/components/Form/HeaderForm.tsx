import {Breadcrumbs, Link, Typography} from '@mui/material';
import type {ReactElement} from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import {dataHeader} from '@data/dataHeader';

export default function HeaderForm(props: {onClick: () => void}): ReactElement {
     return (
          <Breadcrumbs
               separator={<CircleIcon sx={{fontSize: 5}} />}
               aria-label="breadcrumb">
               <Link href="" underline="none" onClick={props.onClick}>
                    <Typography color="text.primary">
                         {dataHeader.titleSection}
                    </Typography>
               </Link>

               <Link underline="none">
                    <Typography color="text.secondary">
                         {dataHeader.buttonTitle}
                    </Typography>
               </Link>
          </Breadcrumbs>
     );
}
