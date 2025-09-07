import z from 'zod';

export const operadorSchema = z.object({
  nome: z.string().min(2, 'Nome deve conter pelo menos dois caracteres'),
  status: z.string(),
});

export type Operador = z.infer<typeof operadorSchema>;
