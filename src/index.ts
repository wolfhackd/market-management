import fastifyCors from '@fastify/cors';
import app from './app.js';
import env from './env.js';
import { healthRoute } from './modules/health/health.routes.js';
import { produtosRoutes } from './modules/produtos/produto.routes.js';
import { operadorRoutes } from './modules/operadores/operador.routes.js';
import { clientesRoutes } from './modules/clientes/cliente.routes.js';
import { despesasRoutes } from './modules/despesas/despesas.routes.js';
import { vendasRoutes } from './modules/vendas/venda.routes.js';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import {
  jsonSchemaTransform,
  jsonSchemaTransformObject,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';

//Configuração
const PORT = env.PORT;

//Validação e copilador de dados
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

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
  transform: jsonSchemaTransformObject,
  // transform: jsonSchemaTransform,
});

//Configuração de Ui INterativa
await app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: false,
  },
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
    await app.listen({ port: PORT, host: '0.0.0.0' }); // Use a variável PORT
    console.log(`🚀 Server rodando em http://localhost:${PORT}`);
    console.log(`📚 Documentação disponível em http://localhost:${PORT}/docs`);
  } catch (error) {
    console.log('Não foi possível iniciar o servidor:', error);
  }
};

main();
