import {
     Box,
     CircularProgress,
     Stack,
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow,
     Typography,
} from '@mui/material';
import type {ReactElement} from 'react';
import {headerTableDatas} from '../data/tableData';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmployeeRow from '@components/Table/EmployeeRow';
import useLoadingEmployees from '../hooks/useLoadingEmployees';

export default function TableEmployee(): ReactElement {
     const {employees, loading, error} = useLoadingEmployees();

     if (loading) {
          return (
               <Box
                    sx={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                         height: '200px', // altura para centralizar spinner
                    }}>
                    <CircularProgress />
               </Box>
          );
     }

     if (error) {
          return (
               <Box sx={{p: 2}}>
                    <Typography color="error">
                         Erro ao carregar funcionários: {error.message}
                    </Typography>
               </Box>
          );
     }

     return (
          <TableContainer
               sx={{
                    maxHeight: '50dvh',
                    overflowY: 'auto',
               }}
               component={Box}>
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
                                        align={
                                             el.title === 'Status'
                                                  ? 'right'
                                                  : 'left'
                                        }
                                        key={el.index}>
                                        <Stack
                                             sx={{
                                                  display: 'flex',
                                                  flexDirection: 'row',
                                                  justifyContent:
                                                       el.title === 'Status'
                                                            ? 'flex-end'
                                                            : 'flex-start',
                                                  alignItems: 'center',
                                                  columnGap: 1,
                                             }}>
                                             <Typography
                                                  fontWeight={500}
                                                  fontSize="small">
                                                  {el.title}
                                             </Typography>
                                             <ArrowDownwardIcon fontSize="inherit" />
                                        </Stack>
                                   </TableCell>
                              ))}
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {employees.map((emp, index) => (
                              <EmployeeRow key={index} employee={emp} />
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
     );
}
