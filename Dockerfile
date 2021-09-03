FROM ubuntu:latest

RUN apt-get update -yq \
&& apt-get install apt-utils curl gnupg -yq \
&& curl -sL https://deb.nodesource.com/setup_14.x | bash \
&& apt-get install nodejs -yq \
&& apt-get clean -y


ADD . /app/

WORKDIR /app

RUN npm install

EXPOSE 7777

VOLUME /app/logs

CMD npm start
