FROM node:19.6.0-alpine

ENV HOST='0.0.0.0'
ENV PORT='3000'

WORKDIR /concord

COPY ./ /concord

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
