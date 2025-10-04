import type { FastifyInstance } from 'fastify';
import { criarCliente, listarClientes } from './cliente.controller.js';

export async function clientesRoutes(fastify: FastifyInstance) {
  fastify.post('/criarCliente', criarCliente);
  fastify.get('/listarClientes', listarClientes);
}
