import app from './app.js';
import env from './env.js';
import { healthRoute } from './modules/health/health.routes.js';
import { produtosRoutes } from './modules/produtos/produto.routes.js';

const PORT = env.PORT;

//Rotas
app.register(healthRoute); //Rota de teste de Api
app.register(produtosRoutes);

const main = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`🚀 Server rodando em http://localhost:${PORT}`);
  } catch {
    console.log('Não foi possível iniciar o servidor');
  }
};

main();
