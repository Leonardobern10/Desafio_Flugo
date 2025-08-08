import {
     Paper,
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow,
} from '@mui/material';
import type {ReactElement} from 'react';
import {headerTableDatas} from '../data/tableData';

export default function TableEmployee(): ReactElement {
     return (
          <TableContainer component={Paper}>
               <Table>
                    <TableHead>
                         <TableRow>
                              {headerTableDatas.map((el) => (
                                   <TableCell
                                        sx={{
                                             color: 'text.secondary',
                                             fontWeight: 600,
                                             fontSize: 14,
                                             lineHeight: '24px',
                                        }}
                                        key={el.index}>
                                        {el.title}
                                   </TableCell>
                              ))}
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         <TableRow>
                              <TableCell>Fernanda Torres</TableCell>
                              <TableCell>fernandaTorres@flugo.com</TableCell>
                              <TableCell>Design</TableCell>
                              <TableCell>inativo</TableCell>
                         </TableRow>
                    </TableBody>
               </Table>
          </TableContainer>
     );
}
