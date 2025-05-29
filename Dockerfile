# Etapa de construcción
FROM node:20.14.0-bullseye AS builder


COPY ./sources.list /etc/apt/sources.list
COPY ./.npmrc /root/

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para la instalación de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación Angular
ARG ENV=production
#RUN npm run build --configuration=${ENV} --aot --outputHashing=all
RUN node_modules/.bin/ng build --configuration ${ENV} --aot

# Etapa de producción
FROM nginx:1.25.1

# Metadatos de la imagen
LABEL app.author="fortes" \
    app.email="fortes@uci.cu" \
    app.name="sigies-new-front"

# Copia los archivos construidos a Nginx
#COPY --from=builder /app/dist/ /usr/share/nginx/html
COPY --from=builder /app/dist/sigies-new-front /usr/share/nginx/html/sigies-new-front

RUN chmod -R 755 /usr/share/nginx/html/sigies-new-front/
RUN chown -R www-data:www-data /usr/share/nginx/html/sigies-new-front/

# Copia el archivo de configuración de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para el tráfico HTTP
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
