import {Breadcrumbs, Link, Typography} from '@mui/material';
import type {ReactElement} from 'react';

export default function HeaderForm(): ReactElement {
     return (
          <Breadcrumbs separator="." aria-label="breadcrumb">
               <Link underline="none">
                    <Typography color="text.primary">Colaboradores</Typography>
               </Link>
               <Link underline="none">
                    <Typography color="text.secondary">
                         Cadastrar coladoradores
                    </Typography>
               </Link>
          </Breadcrumbs>
     );
}
