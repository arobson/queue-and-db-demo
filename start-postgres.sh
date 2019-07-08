#!/bin/sh
mkdir -p /tmp/data/postgres
docker run -d --name dev-pg \
    -e POSTGRES_USER=dev \
    -e POSTGRES_PASSWORD=pgadmin \
    -p 55432:5432 \
    -v /tmp/data/postgres/:/var/lib/postgresql/data \
    postgres:9-alpine
