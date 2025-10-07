# 1. Imagem base do Node.js
FROM node:20

# 2. Criar diretório de trabalho
WORKDIR /app

# 3. Copiar package.json e package-lock.json
COPY package*.json ./

# 4. Instalar dependências
RUN npm install

# 5. Copiar todo o código do backend
COPY . .

# new 
RUN npx prisma generate

# 6. Expor porta que o Fastify vai usar
EXPOSE 4000

# 7. Comando para rodar a aplicação
# CMD ["npm", "run", "dev"]
CMD npx prisma migrate deploy && npm run dev