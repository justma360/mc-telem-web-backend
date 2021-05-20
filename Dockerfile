# Base
FROM node:10.21.0-alpine3.9

# Build App
COPY $PWD /home/node/app

WORKDIR /home/node/app

RUN yarn install;

RUN mv .env.uat.sample .env;

# Ports
EXPOSE 8080

# Run At Start
CMD ["/bin/sh", "-c", "yarn start"]