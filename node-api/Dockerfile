# Stage 1: Build
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Run
FROM node:20-alpine
WORKDIR /app

# Copy ONLY the finished products from the builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.js ./index.js
EXPOSE 3000
CMD ["node", "index.js"]
