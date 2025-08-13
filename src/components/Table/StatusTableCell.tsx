import {Box, TableCell, Typography} from '@mui/material';
import type {TableCellType} from 'types/TableCellType';
import {type ReactElement} from 'react';

/**
 * Componente StatusTableCell renderiza uma célula de tabela
 * alinhada à direita que exibe um status com estilos condicionais.
 *
 * O fundo e a cor do texto mudam conforme o valor da propriedade `text`:
 * - "Ativo": verde claro de fundo com texto verde escuro
 * - "Inativo": vermelho claro de fundo com texto vermelho escuro
 *
 * @param {TableCellType} props - Propriedades do componente
 * @param {string} props.text - Texto do status a ser exibido
 *
 * @returns {ReactElement} Célula da tabela com o status estilizado
 */
export default function StatusTableCell({text}: TableCellType): ReactElement {
     return (
          <TableCell align="right">
               <Box
                    data-testid="status-table-cell"
                    sx={{
                         display: 'flex',
                         justifyContent: 'flex-end',
                    }}>
                    <Typography
                         sx={{
                              backgroundColor:
                                   text === 'Ativo'
                                        ? 'rgba(34, 197, 94, 0.16)'
                                        : 'rgba(255, 86, 48, 0.16)',
                              color:
                                   text === 'Ativo'
                                        ? 'rgba(17, 141, 87, 1)'
                                        : 'rgba(183, 29, 24, 1)',
                              width: 'fit-content',
                              padding: '4px 8px',
                              borderRadius: 2,
                              fontWeight: 700,
                              fontSize: '0.7rem',
                         }}>
                         {text}
                    </Typography>
               </Box>
          </TableCell>
     );
}
