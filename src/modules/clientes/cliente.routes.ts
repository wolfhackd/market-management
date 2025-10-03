import type { FastifyInstance } from 'fastify';
import { criarCliente, listarClientes } from './cliente.controller.js';
import { clienteSchema, clienteSchemaOutput } from './cliente.schema.js';
import z from 'zod';

export async function clientesRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/criarCliente',
    {
      schema: {
        summary: 'Criar Cliente',
        tags: ['clientes'],
        response: {
          201: z.toJSONSchema(clienteSchema),
          400: { describe: 'Erro na criação de cliente' },
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
          200: z.toJSONSchema(clienteSchemaOutput),
          400: { describe: 'Erro ao listar clientes' },
        },
      },
    },
    listarClientes,
  );
}
