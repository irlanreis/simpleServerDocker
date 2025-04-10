# Usa imagem base do Node
FROM node:18-slim-buster

# Cria diretório de trabalho
WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta usada no app
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "src/server.js"]