import type { FastifyInstance } from 'fastify';
import { criarProduto, listarProdutos } from './produto.controller.js';
import { produtoSchema, produtoSchemaOutput } from './produto.schema.js';
import z from 'zod';

// corpo de rotas (swagger)
const produtoJsonSchema = z.toJSONSchema(produtoSchema, { io: 'input' });
// const produtoOutputJsonSchema = z.toJSONSchema(produtoSchemaOutput, { io: 'input' });

// const ProdutoOutputSchema = {
//   type: 'object',
//   properties: {
//     id_produto: { type: 'string', description: 'UUID do produto' },
//     nome: { type: 'string', description: 'Nome do produto' },
//     categoria: { type: 'string' },
//     preco_venda: { type: 'number', format: 'float' },
//     codigo: { type: 'number' },
//     status: { type: 'string' },
//     estoque: { type: 'number' },
//     criado_em: { type: 'string', format: 'date-time' },
//   },
//   required: ['id_produto', 'nome', 'preco_venda', 'status'],
// };

export async function produtosRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/listarProdutos',
    {
      schema: {
        summary: 'Lista todos os produtos cadastrados', // Título para o Swagger UI
        tags: ['produtos'], // Agrupamento
        response: {
          200: z.array(produtoSchemaOutput),
          // 200: { type: 'array', items: ProdutoOutputSchema },
          400: { description: 'Erro ao listar produtos' },
        },
      },
    },
    listarProdutos,
  );

  fastify.post(
    '/criarProduto',
    {
      schema: {
        summary: 'Criar Produto', // Título para o Swagger UI
        tags: ['produtos'],

        response: {
          200: { description: 'Produto Criado Com sucesso', ...produtoJsonSchema },
          400: { description: 'Erro ao criar produto' },
        },
      },
    },
    criarProduto,
  );
}
