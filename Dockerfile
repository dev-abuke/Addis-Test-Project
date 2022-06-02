FROM node:18.2.0
WORKDIR /mernapp
COPY package.json /mernapp
RUN npm install
COPY . /mernapp
CMD ["npm", "start"]