import z from 'zod';

export const despesaSchema = z.object({
  categoria: z.string().default('Outras despesas'),
  data_despesa: z
    .date()
    .transform((val) => new Date(val))
    .default(new Date()),
  descricao: z.string('').default('.'),
  valor: z.number('Insira o valor da despesa'),
  forma_pagamento: z.string().default('Dinheiro'),
  status_pagamento: z.string().default('pago'),
  comprovante: z.string().default('-'),
});

export type Despesa = z.infer<typeof despesaSchema>;
