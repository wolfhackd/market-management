import type { FastifyInstance } from 'fastify';
import { criarVenda } from './venda.controller.js';

export function vendasRoutes(fastify: FastifyInstance) {
  fastify.post('/venda', criarVenda);
}
