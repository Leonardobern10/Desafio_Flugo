import {type ReactElement} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {Box, TextField} from '@mui/material';
import ControlledSwitch from '@components/ControlledSwitch';

/**
 * Componente do primeiro passo do formulário de cadastro.
 * Renderiza campos controlados para título, email e um switch
 * para ativar/desativar o status.
 * Utiliza react-hook-form para registro e controle dos campos,
 * além de exibir mensagens de erro.
 *
 * Os campos gerenciados são:
 * - titulo: texto simples
 * - email: texto para email
 * - status: booleano via ControlledSwitch
 *
 * @returns JSX.Element com os campos do passo 1 do formulário.
 */
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
                    {...register('titulo')}
                    placeholder="e.g. João Silva"
                    size="medium"
                    error={!!errors.titulo}
                    helperText={errors.titulo?.message?.toString()}
               />

               <TextField
                    id="titulo-input"
                    label="Email"
                    {...register('email')}
                    placeholder="e.g. john@gmail.com"
                    size="medium"
                    error={!!errors.email}
                    helperText={errors.email?.message?.toString()}
               />

               <Controller
                    name="status"
                    control={control}
                    render={({field}) => (
                         <ControlledSwitch
                              text="Ativar ao criar"
                              checked={field.value}
                              onChange={(_, checked) => field.onChange(checked)}
                         />
                    )}
               />
          </Box>
     );
}
