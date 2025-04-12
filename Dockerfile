# Build the APP
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY ./app/package*.json ./

# Install dependencies with legacy peer deps
RUN npm install --legacy-peer-deps

# Copy app files
COPY ./app .

# Build the app
RUN npm run build -- --configuration production

# Run Webserver
FROM nginx:alpine
COPY --from=builder /app/dist/app /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]