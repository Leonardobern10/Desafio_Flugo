import SmallTableCell from '@components/Table/SmallTableCell';
import {TableRow} from '@mui/material';
import type {EmployerFormDataType} from 'types/EmployerFormDataType';
import StatusTableCell from './StatusTableCell';
import TitleTableCell from './TitleTableCell';

export default function EmployeeRow({
     employee,
}: {
     employee: EmployerFormDataType;
}) {
     const {titulo, email, departamento, status} = employee;

     return (
          <TableRow>
               <TitleTableCell data={titulo} />
               <SmallTableCell data={email} />
               <SmallTableCell data={departamento} />
               <StatusTableCell data={status} />
          </TableRow>
     );
}
