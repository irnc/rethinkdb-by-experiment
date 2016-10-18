FROM node:6

RUN mkdir /app
WORKDIR /app

ADD ./experimental-app/package.json /app/package.json
RUN npm install -q

VOLUME ["/app"]
VOLUME ["/app/node_modules"]

CMD npm start
