import {TableCell, Typography} from '@mui/material';
import type {TableCellType} from 'types/TableCellType';
import type {ReactElement} from 'react';

/**
 * Componente SmallTableCell renderiza uma célula de tabela
 * (`TableCell`) com texto em fonte pequena.
 *
 * @param {TableCellType} props - Propriedades do componente
 * @param {string} props.text - Texto a ser exibido na célula
 *
 * @returns {ReactElement} Célula da tabela com texto estilizado
 */
export default function SmallTableCell({text}: TableCellType): ReactElement {
     return (
          <TableCell data-testid="table-cell" align="left">
               <Typography fontSize="small">{text}</Typography>
          </TableCell>
     );
}
