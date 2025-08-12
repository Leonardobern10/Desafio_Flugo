import {z} from 'zod';

export const employeeSchema = z.object({
     titulo: z
          .string()
          .trim()
          .min(2, 'O título deve ter no mínimo 2 caracteres')
          .max(50, 'O título deve ter no máximo 50 caracteres'),
     email: z
          .email('Email inválido')
          .max(100, 'O email deve ter no máximo 100 caracteres'),
     departamento: z.string().trim().nonempty('Departamento é obrigatório'),
     status: z.boolean(), // booleano para ativado/desativado
});

export type EmployeeSchemaType = z.infer<typeof employeeSchema>;
