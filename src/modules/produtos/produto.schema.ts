import z from 'zod';

export const produtoSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  categoria: z.string().min(2, 'Categoria inválida'),
  preco_venda: z.number().positive('Preço deve ser maior que zero'),
  status: z.string(),
});

export type Produto = z.infer<typeof produtoSchema>;

export const produtoSchemaOutput = z.object({
  id_produto: z.string().uuid(),
  nome: z.string(),
  categoria: z.string(),
  preco_venda: z.number(),
  codigo: z.number(),
  status: z.string(),
  estoque: z.number(),
  criado_em: z.string(), // ou z.date() se você converte depois
});

export type ProdutoOutput = z.infer<typeof produtoSchemaOutput>;
