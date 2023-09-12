#build clean image
FROM node:20.6-bookworm-slim

WORKDIR /usr/src/app

COPY package.json package-lock.json nest-cli.json tsconfig.json tsconfig.build.json ./
COPY src/ src/

RUN npm ci --ignore-scripts
RUN npm run build

USER node

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]