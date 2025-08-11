// validations/employeeSchema.ts
import {z} from 'zod';

export const employeeSchema = z.object({
     titulo: z
          .string()
          .min(2, 'O título deve ter no mínimo 2 caracteres')
          .max(50, 'O título deve ter no máximo 50 caracteres'),
     email: z
          .string()
          .email('Email inválido')
          .max(100, 'O email deve ter no máximo 100 caracteres'),
     departamento: z.string().min(1, 'Departamento é obrigatório'),
     status: z.boolean(), // booleano para ativado/desativado
});

export type EmployeeSchemaType = z.infer<typeof employeeSchema>;
