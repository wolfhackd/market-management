import type { FastifyInstance } from 'fastify';
import { criarDespesa } from './despesas.controller.js';
import { despesaSchema } from './despesas.schema.js';
import z from 'zod';

export async function despesasRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/criarDespesa',
    {
      schema: {
        summary: 'Criação de despesa',
        tags: ['Despesas'],
        body: despesaSchema,
        response: {
          // 201: z.toJSONSchema(),
          400: { description: 'Erro ao criar despesa' },
        },
      },
    },
    criarDespesa,
  );
}

//Falta criar a função de despesas
//Filtros
/* 
-Data
-Categoria-Pagamento
-Status de pagamento
-valor 
-número do comprovante(Ainda não incluido até o momento)
*/
