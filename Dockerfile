FROM node:20 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run ng build -- --output-path=dist/MLChat

FROM nginx:alpine
RUN apk add --no-cache gettext
WORKDIR /usr/share/nginx/html
RUN ls -la /usr/share/nginx/html
COPY --from=build-stage /app/dist/MLChat .
COPY nginx.conf /etc/nginx/templates/default.conf.template
# CMD ls -la /usr/share/nginx/html && ls -la /usr/share/nginx/html/* && envsubst '\$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;' #enable logs
CMD envsubst '\$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

