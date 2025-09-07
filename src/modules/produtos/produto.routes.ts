import type { FastifyInstance } from 'fastify';
import { criarProduto, listarProdutos } from './produto.controller.js';

export async function produtosRoutes(fastify: FastifyInstance) {
  fastify.get('/listarProdutos', listarProdutos);
  fastify.post('/criarProduto', criarProduto);
}
