Base image
FROM node:18

Crear directorio de trabajo
WORKDIR /app

Copiar package.json y package-lock.json
COPY package*.json ./

Instalar dependencias
RUN npm install

Copiar el resto del código
COPY . .

Exponer el puerto (usá 3001 si es el que configuraste en tu .env)
EXPOSE 3001

Comando de inicio
CMD ["npm", "start"]
