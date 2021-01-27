FROM node:latest
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:mainline-alpine
COPY --from=0 ./build /usr/share/nginx/html
