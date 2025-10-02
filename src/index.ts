import fastifyCors from '@fastify/cors';
import app from './app.js';
import env from './env.js';
import { healthRoute } from './modules/health/health.routes.js';
import { produtosRoutes } from './modules/produtos/produto.routes.js';
import { operadorRoutes } from './modules/operadores/operador.routes.js';
import { clientesRoutes } from './modules/clientes/cliente.routes.js';
import { despesasRoutes } from './modules/despesas/despesas.routes.js';
import { vendasRoutes } from './modules/vendas/venda.routes.js';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
//Configuração
const PORT = env.PORT;

//Passo o await aqui para evitar problemas de sincronismo
await app.register(fastifyCors);
//Configuração Swagger
await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'API de Controle de Vendas',
      description: 'API para gerenciar produtos, operadores, clientes, despesas e vendas.',
      version: '1.0.0',
    },
  },
});

//Configuração de Ui INterativa
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

//Rotas
app.register(healthRoute); //Rota de teste de Api
app.register(produtosRoutes);
app.register(operadorRoutes);
app.register(clientesRoutes);
app.register(despesasRoutes);
app.register(vendasRoutes);

//função principal
const main = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`🚀 Server rodando em http://localhost:${PORT}`);
  } catch {
    console.log('Não foi possível iniciar o servidor');
  }
};

main();
