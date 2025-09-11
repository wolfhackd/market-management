import type { FastifyInstance } from 'fastify';
import { criarDespesa } from './despesas.controller.js';

export async function despesasRoutes(fastify: FastifyInstance) {
  fastify.post('/criarDespesa', criarDespesa);
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
