import SmallTableCell from '@components/Table/SmallTableCell';
import {TableRow} from '@mui/material';
import type {EmployerFormDataType} from 'types/EmployerFormDataType';
import StatusTableCell from './StatusTableCell';
import TitleTableCell from './TitleTableCell';

/**
 * Componente EmployeeRow representa uma linha da tabela exibindo informações
 * de um funcionário.
 *
 * Recebe um objeto employee com dados do funcionário, e renderiza:
 * - TitleTableCell: título com avatar
 * - SmallTableCell: email
 * - SmallTableCell: departamento
 * - StatusTableCell: status do funcionário
 *
 * @param employee - objeto com dados do funcionário do tipo EmployerFormDataType
 * @returns JSX.Element representando uma linha da tabela com os dados do funcionário
 */
export default function EmployeeRow({
     employee,
}: {
     employee: EmployerFormDataType;
}) {
     const {titulo, email, departamento, status, avatar} = employee;

     return (
          <TableRow data-testid="table-row">
               <TitleTableCell avatar={avatar} text={titulo} />
               <SmallTableCell text={email} />
               <SmallTableCell text={departamento} />
               <StatusTableCell text={status} />
          </TableRow>
     );
}
