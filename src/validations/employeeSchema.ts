import {z} from 'zod';

/**
 * Esquema de validação para os dados do funcionário.
 *
 * Valida as propriedades:
 * - titulo: string com mínimo 2 e máximo 50 caracteres, sem espaços em branco nas extremidades.
 * - email: string no formato de email válido, com máximo de 100 caracteres.
 * - departamento: string não vazia, sem espaços em branco nas extremidades.
 * - status: booleano que representa se o funcionário está ativo (true) ou não (false).
 */
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
