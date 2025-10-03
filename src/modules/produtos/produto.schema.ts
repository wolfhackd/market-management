import z from 'zod';

export const produtoSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  categoria: z.string().min(2, 'Categoria inválida'),
  preco_venda: z.number().positive('Preço deve ser maior que zero'),
  status: z.string(),
});

export type Produto = z.infer<typeof produtoSchema>;

export const produtoSchemaOutput = produtoSchema.extend({
  id_produto: z.string().uuid(),
  criado_em: z.string().datetime(),
  codigo: z.number(),
  estoque: z.number(),
});

export type ProdutoOutput = z.infer<typeof produtoSchemaOutput>;
