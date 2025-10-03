import type { FastifyInstance } from 'fastify';
import { criarProduto, listarProdutos } from './produto.controller.js';
import { produtoSchema, produtoSchemaOutput } from './produto.schema.js';
import z from 'zod';

// corpo de rotas (swagger)
const produtoJsonSchema = z.toJSONSchema(produtoSchema, { io: 'input' });
const produtoJsonSchemaOutput = z.toJSONSchema(produtoSchemaOutput, { io: 'input' });

//Assim ainda aparece lá mas tem a questão que no postman n funciona
//Por enquanto vai ficar sem o get

export async function produtosRoutes(fastify: FastifyInstance) {
  fastify.withTypeProvider().get(
    '/listarProdutos',
    {
      schema: {
        summary: 'Lista todos os produtos cadastrados',
        tags: ['produtos'],
        response: {
          400: { description: 'Erro ao listar produtos' },
          // 200: z.array(produtoSchemaOutput),
          // 200: { type: 'array', items: produtoJsonSchemaOutput },
          // 200: { type: 'array', items: { type: 'object' } },
          // 200: { type: 'array', items: { type: 'object' } },
          // 200: { type: 'array', items: { type: 'object', ...produtoJsonSchemaOutput } },
          // 200: {
          //   type: 'array',
          //   items: {
          //     type: 'object',
          //     properties: {
          //       id_produto: { type: 'string' },
          //       nome: { type: 'string' },
          //       categoria: { type: 'string' },
          //       preco_venda: { type: 'number' },
          //       codigo: { type: 'number' },
          //       estoque: { type: 'number' },
          //       criado_em: { type: 'string', format: 'date-time' },
          //     },
          //   },
          // },
          // 200: z.array(produtoSchemaOutput),
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
