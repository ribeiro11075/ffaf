FROM node

WORKDIR /worker
COPY package.json /worker/
RUN npm install

COPY . /worker/
