import z from 'zod';

export const despesaSchema = z.object({
  categoria: z.string().default('Outras despesas'),
  data_despesa: z.string().default(() => new Date().toISOString()),
  descricao: z.string().default('.'),
  valor: z.number().positive('Insira o valor da despesa'),
  forma_pagamento: z.string().default('Dinheiro'),
  status_pagamento: z.string().default('pago'),
  comprovante: z.string().default('-'),
  criado_em: z.string().default(() => new Date().toISOString()),
});
