import type { FastifyInstance } from 'fastify';
import { criarCliente, listarClientes } from './cliente.controller.js';
import { clienteSchema } from './cliente.schema.js';

export async function clientesRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/criarCliente',
    {
      schema: {
        summary: 'Criar Cliente',
        tags: ['clientes'],
        body: clienteSchema,
        response: {
          200: { description: 'Cliente criado com sucesso', type: 'object' },
        },
      },
    },
    criarCliente,
  );
  fastify.get(
    '/listarClientes',
    {
      schema: {
        summary: 'Lista todos os clientes cadastrados',
        tags: ['clientes'],
        response: {
          200: { type: 'array', items: { type: 'object' } },
        },
      },
    },
    listarClientes,
  );
}
