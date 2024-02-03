FROM nginx:latest

WORKDIR /
ADD devops/nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html/
COPY ./dist/ ./

EXPOSE 80
