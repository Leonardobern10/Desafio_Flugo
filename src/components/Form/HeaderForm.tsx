import {Breadcrumbs, Link, Typography} from '@mui/material';
import type {ReactElement} from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import {dataHeader} from '@data/dataHeader';

/**
 * Componente que exibe um breadcrumb com dois níveis para o formulário.
 * O primeiro nível é clicável e dispara a função `onClick` recebida via props,
 * permitindo navegação ou fechamento do formulário.
 *
 * @param onClick Callback acionado ao clicar no primeiro link do breadcrumb.
 * @returns JSX.Element com o breadcrumb renderizado.
 */
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
