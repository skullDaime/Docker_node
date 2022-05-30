FROM node:16
WORKDIR /
ENV PATH /node_modules/.bin$PATH
COPY package*.json /.
RUN npm install
COPY . .
CMD ["npm","start"]