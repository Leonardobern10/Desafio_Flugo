import {Avatar, Box, TableCell, Typography} from '@mui/material';
import type {TableCellType} from 'types/TableCellType';
import type {ReactElement} from 'react';

/**
 * Componente TitleTableCell que renderiza uma célula de
 * tabela alinhada à esquerda contendo um avatar e um texto.
 *
 * @param {TableCellType} props - Propriedades do componente
 * @param {string} props.text - Texto a ser exibido na célula
 * @param {string} props.avatar - URL da imagem do avatar a ser exibida
 *
 * @returns {ReactElement} Célula da tabela com avatar e texto lado a lado
 */
export default function TitleTableCell({
     text,
     avatar,
}: TableCellType): ReactElement {
     return (
          <TableCell align="left">
               <Box
                    data-testid="title-table-cell"
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
