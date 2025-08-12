import {dataAllDepartaments} from '@data/dataAllDepartaments';
import {Box, MenuItem, TextField} from '@mui/material';

import type {ReactElement} from 'react';
import {useFormContext} from 'react-hook-form';
import type {EmployeeSchemaType} from '@validations/employeeSchema';

/**
 * Componente do segundo passo do formulário de cadastro.
 * Renderiza um campo select para escolha do departamento,
 * integrado ao react-hook-form.
 * O campo exibe mensagens de erro baseadas na validação do
 * esquema.
 *
 * Utiliza os dados de departamentos do arquivo dataAllDepartaments
 * para popular as opções do select.
 *
 * @returns JSX.Element com o campo de seleção do departamento.
 */
export default function Step2Form(): ReactElement {
     const {
          register,
          formState: {errors},
     } = useFormContext<EmployeeSchemaType>();

     return (
          <Box
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
               }}>
               <TextField
                    size="medium"
                    variant="outlined"
                    select
                    label="Selecione um departamento"
                    {...register('departamento')}
                    error={!!errors.departamento}
                    helperText={errors.departamento?.message?.toString()}>
                    {dataAllDepartaments.map((option) => (
                         <MenuItem
                              key={option.index}
                              value={option.departament}>
                              {option.departament}
                         </MenuItem>
                    ))}
               </TextField>
          </Box>
     );
}
