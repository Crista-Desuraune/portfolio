FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app

# Astro build output
COPY --from=builder /app/dist ./dist

# Installer un petit serveur statique
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "4321"]
