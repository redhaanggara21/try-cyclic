# FROM node:carbon
# # Create app directory
# WORKDIR /usr/src/app
# # Bundle app source
# COPY . .
# # npm install
# RUN  npm install --force
# # Run npm install --global grpc --unsafe-perm
# EXPOSE 3000 9204
# CMD [ "npm", "run", "start" ]

FROM node:10.15.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g pm2

COPY . ./

EXPOSE 3000
EXPOSE 9200

CMD npm run start:prod
CMD npm run dev