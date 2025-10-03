import z from 'zod';

export const itemVendaSchema = z.object({
  id_produto: z.string().uuid(),
  quantidade: z.number().int().positive(),
  preco_unitario: z.number().positive(),
});

export const vendaSchema = z.object({
  id_cliente: z.string(),
  id_operador: z.string(),
  forma_pagamento: z.string(),
  status_pagamento: z.string(),
  observacoes: z.string().default('-'),
  itens: z.array(itemVendaSchema).min(1),
  criado_em: z.string().default(() => new Date().toISOString()),
});

// Logica de vendas com variados items
// Tenho que aceitar algo assim
// {
//   "id_cliente": "uuid-do-cliente", //Tenho que garantir que se não vir será o padrão
//   "id_operador": "uuid-do-operador",
//   "forma_pagamento": "cartao",
//   "status_pagamento": "pago",
//   "observacoes": "Venda feita no balcão",
//   "itens": [
//     { "id_produto": "uuid-produto-1", "quantidade": 2, "preco_unitario": 10.5 },
//     { "id_produto": "uuid-produto-2", "quantidade": 1, "preco_unitario": 25.0 }
//   ]
// }
