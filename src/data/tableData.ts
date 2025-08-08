import type {ColaboradoresDataType} from '../types/ColaboradoresDataType';
import type {HeaderTableDataType} from '../types/HeaderTableDataType';
import {StatusType} from '../types/StatusType';

export const headerTableDatas: Array<HeaderTableDataType> = [
     {index: 0, title: 'Nome'},
     {index: 1, title: 'Email'},
     {index: 2, title: 'Departamento'},
     {index: 3, title: 'Status'},
];

export const exampleData: Array<ColaboradoresDataType> = [
     {
          index: 0,
          values: [
               'Fernanda Torres',
               'fernandaTorres@flugo.com',
               'Design',
               StatusType.ACTIVE,
          ],
     },
];
