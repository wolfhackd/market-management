import fastifyCors from '@fastify/cors';
import app from './app.js';
import env from './env.js';
import { healthRoute } from './modules/health/health.routes.js';
import { produtosRoutes } from './modules/produtos/produto.routes.js';
import { operadorRoutes } from './modules/operadores/operador.routes.js';

//Configuração
const PORT = env.PORT;
app.register(fastifyCors);

//Rotas
app.register(healthRoute); //Rota de teste de Api
app.register(produtosRoutes);
app.register(operadorRoutes);

const main = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`🚀 Server rodando em http://localhost:${PORT}`);
  } catch {
    console.log('Não foi possível iniciar o servidor');
  }
};

main();
