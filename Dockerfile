# stage1 as builder
FROM node:16.13.2 as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

COPY . .
COPY .env .
ARG CONTEXT='/'
RUN sed -i "s|"/\basepath"|"${CONTEXT}"|g" .env

# Build the project and copy the files
RUN npm run build



FROM node:16.13.2
ARG CONTEXT='/'

#!/bin/sh
#RUN apk add sudo && addgroup -S lazsa && adduser -S -G root --uid 1001  lazsa
#RUN echo "lazsa ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers.d/lazsa

# Copy from the stahg 1
COPY --from=builder /react-ui/build /react-ui/build
COPY ./server.js /react-ui
WORKDIR /react-ui

# USER lazsa
RUN npm install express
CMD REACT_APP_CONTEXT=${CONTEXT} node server.js
