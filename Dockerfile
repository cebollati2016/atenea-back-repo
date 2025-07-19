Imagen base
FROM node:18

Crear directorio de la app
WORKDIR /usr/src/app

Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

Copiar el resto del código
COPY . .

Exponer el puerto en el que corre la app
EXPOSE 3001

Comando para iniciar la app
CMD ["npm", "start"]
