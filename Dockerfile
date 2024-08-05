# stage1 as builder
FROM node:20.11.1 as builder

# copy the package.json to install dependencies
COPY package.json yarn.lock ./

# Install the dependencies and make the folder
RUN yarn config set "strict-ssl" false -g && yarn install && mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

COPY . .
COPY .env .
ARG CONTEXT='/'
RUN sed -i "s|"/\basepath"|"${CONTEXT}"|g" .env
RUN export VCONTEXT=$(echo ${CONTEXT} | sed "s|/||g") && sed -i "s|"CONTEXT"|"${VCONTEXT}"|g" package.json
# Build the project and copy the files
RUN yarn build



FROM node:20.11.1
ARG CONTEXT='/'

#!/bin/sh
#RUN apk add sudo && addgroup -S lazsa && adduser -S -G root --uid 1001  lazsa
#RUN echo "lazsa ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers.d/lazsa

# Copy from the stahg 1
COPY --from=builder /react-ui/build /react-ui/build
COPY ./server.js /react-ui
WORKDIR /react-ui

# USER lazsa
RUN yarn config set "strict-ssl" false -g && yarn add express
CMD REACT_APP_CONTEXT=${CONTEXT} node server.js
