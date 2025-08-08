import {useState, type ReactElement} from 'react';
import {Controller, useForm} from 'react-hook-form';

import {Box, TextField} from '@mui/material';
import ControlledSwitch from './ControlledSwitch';
import {useEmployeeFormStore} from '../store/employerFormStore';

export default function Step1Form(props: {onSubmit: Function}): ReactElement {
     const {formData, setFormData} = useEmployeeFormStore();

     const {
          register,
          handleSubmit,
          control,
          formState: {errors},
     } = useForm({
          defaultValues: formData,
     });

     const submit = (data: any) => {
          console.log(data);
          setFormData(data);
          props.onSubmit();
     };
     return (
          <form onSubmit={handleSubmit(submit)}>
               <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <TextField
                         label="Titulo"
                         {...register('titulo', {
                              required: 'Nome é obrigatório',
                         })}
                         error={!!errors.titulo}
                         helperText={errors.titulo?.message}
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
                         helperText={errors.email?.message}
                    />

                    <Controller
                         name="status"
                         control={control}
                         defaultValue={'true'}
                         render={({field}) => (
                              <ControlledSwitch
                                   checked={field.value}
                                   onChange={field.onChange}
                              />
                         )}
                    />

                    <button type="submit" style={{display: 'none'}}></button>
               </Box>
          </form>
     );
}
