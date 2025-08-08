import {Box, TextField} from '@mui/material';
import type {ReactElement} from 'react';
import {useForm} from 'react-hook-form';
import {useEmployeeFormStore} from '../store/employerFormStore';

export default function Step2Form(props: {
     onSubmit: (data: any) => void;
}): ReactElement {
     const {formData, setFormData} = useEmployeeFormStore();

     const {
          register,
          handleSubmit,
          formState: {errors},
     } = useForm({
          defaultValues: formData,
     });

     const submit = (data: any) => {
          console.log(formData);
          setFormData(data);
          console.log(data);
          console.log(formData);
          props.onSubmit;
     };

     return (
          <form onSubmit={handleSubmit(submit)}>
               <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <TextField
                         label="Departamento"
                         {...register('departamento', {
                              required: 'Departamento é obrigatório',
                         })}
                         error={!!errors.departamento}
                         helperText={errors.departamento?.message}
                    />
                    <button type="submit" style={{display: 'none'}}></button>
               </Box>
          </form>
     );
}
