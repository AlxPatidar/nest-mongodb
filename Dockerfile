FROM node:10.16.3

# Create app directory
WORKDIR /app

# Copy package file and src folder
COPY package.json /app/
COPY .env.example /app/.env
COPY . /app/

# Install application dependencies
RUN yarn install

RUN yarn --pure-lockfile

EXPOSE 4000

CMD ["yarn", "start"]