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
import {useEffect, useState, type ReactElement} from 'react';
import {headerTableDatas} from '../data/tableData';
import type {EmployerFormDataType} from 'types/EmployerFormDataType';
import {getEmployees} from '@services/employeeService';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmployeeRow from '@components/Table/EmployeeRow';

export default function TableEmployee(): ReactElement {
     const [employees, setEmployees] = useState<EmployerFormDataType[]>([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchEmployees = async () => {
               try {
                    const data = await getEmployees();
                    setEmployees(data);
               } finally {
                    setLoading(false);
               }
          };
          fetchEmployees();
     }, []);

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

     return (
          <TableContainer
               sx={{
                    maxHeight: '70dvh',
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
