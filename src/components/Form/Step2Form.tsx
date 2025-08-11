import {allDepartaments} from '@data/allDepartaments';
import {Box, MenuItem, TextField} from '@mui/material';

import type {ReactElement} from 'react';
import {useFormContext} from 'react-hook-form';
import type {EmployeeSchemaType} from '../../validations/employeeSchema';

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
                    variant="standard"
                    select
                    label="Selecione um departamento"
                    {...register('departamento')}
                    error={!!errors.departamento}
                    helperText={errors.departamento?.message?.toString()}>
                    {allDepartaments.map((option) => (
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
