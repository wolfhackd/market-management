import z from 'zod';

export const clienteSchema = z.object({
  nome: z.string().min(2, 'Deve conter no mínimo dois caracteres'),
  cpf_cnpj: z.string('Preencha o campo cpf ou cnpj').min(11, 'Deve conter no minimo 11 dígitos'),
  telefone: z.string('Deve apenas números').min(8, 'Deve conter no mínimo 8 dígitos'),
  email: z.string().email('Deve ser um email'),
  endereco: z.string().min(2, 'O endereço deve conter no mínimo 2 caracteres'),
  status: z.string('').default('ativo'),
});

export type Cliente = z.infer<typeof clienteSchema>;
