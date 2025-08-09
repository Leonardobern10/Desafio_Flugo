import {type ReactElement} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {Box, TextField} from '@mui/material';
import ControlledSwitch from './ControlledSwitch';

export default function Step1Form(): ReactElement {
     const {
          register,
          control,
          formState: {errors},
     } = useFormContext();

     return (
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
               <TextField
                    label="Titulo"
                    {...register('titulo', {
                         required: 'Nome é obrigatório',
                    })}
                    error={!!errors.titulo}
                    helperText={errors.titulo?.message?.toString()}
               />

               <TextField
                    label="Email"
                    {...register('email', {
                         required: 'Email é obrigatório',
                         pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: 'Email inválido',
                         },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message?.toString()}
               />

               <Controller
                    name="status"
                    control={control}
                    render={({field}) => (
                         <ControlledSwitch
                              checked={field.value}
                              onChange={(_, checked) => field.onChange(checked)}
                         />
                    )}
               />
          </Box>
     );
}
