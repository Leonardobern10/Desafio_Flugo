import {Avatar, Box, ButtonBase, TableCell, Typography} from '@mui/material';
import type {TableCellType} from 'types/TableCellType';
import {useState, type ReactElement} from 'react';

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
     const [currentAvatar, setCurrentAvatar] = useState<string>(avatar!);

     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = () => {
               setCurrentAvatar(reader.result as string); // atualiza o avatar temporário
          };
          reader.readAsDataURL(file);
     };
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
                    <ButtonBase component="label" sx={{borderRadius: '50%'}}>
                         <Avatar src={currentAvatar} />
                         <input
                              type="file"
                              accept="image/*"
                              style={{display: 'none'}}
                              onChange={handleFileChange}
                         />
                    </ButtonBase>
                    <Typography fontSize="small">{text}</Typography>
               </Box>
          </TableCell>
     );
}
