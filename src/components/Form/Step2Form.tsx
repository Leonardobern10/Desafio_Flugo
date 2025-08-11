import {Box, MenuItem, TextField} from '@mui/material';
import {allDepartaments} from '../../data/allDepartaments';
import type {ReactElement} from 'react';
import {useFormContext} from 'react-hook-form';

export default function Step2Form(): ReactElement {
     const {
          register,
          formState: {errors},
     } = useFormContext();

     // Exemplo de opções para o sele

     return (
          <Box
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
               }}>
               <TextField
                    sx={{}}
                    size="medium"
                    variant="standard"
                    select
                    label="Selecione um departamento"
                    defaultValue=""
                    {...register('departamento', {
                         required: 'Departamento é obrigatório',
                    })}
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
