import type {DataBasicSelectType} from 'types/DataBasicSelectType';
import {Departaments} from '../types/Departaments';

export const dataBasicSelect: DataBasicSelectType = {
     selectLabel: 'Selecione um departamento',
     allDepartaments: [
          {
               index: 0,
               departament: Departaments.DESIGN,
          },
          {
               index: 1,
               departament: Departaments.MARKETING,
          },
          {
               index: 2,
               departament: Departaments.TI,
          },
          {
               index: 3,
               departament: Departaments.PRODUTO,
          },
     ],
};
