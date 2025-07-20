# Imagen base
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos necesarios1
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto (ajustá si usás otro)
EXPOSE 3001

# Variable de entorno por si usás dotenv
ENV NODE_ENV=production

# Comando de inicio
CMD ["npm", "start"]
