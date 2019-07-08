#!/bin/sh
mkdir -p /tmp/devamq/conf
mkdir -p /tmp/devamq/data
cp ./activemq/conf/* /tmp/devamq/conf
cp ./activemq/data/* /tmp/devamq/data
sudo chmod -R 776 /tmp/devamq
docker run -d --name dev-amq \
    -p 61616:61616 -p 8161:8161 \
    -v /tmp/devamq/conf:/opt/activemq/conf \
    -v /tmp/devamq/data:/opt/activemq/data \
    rmohr/activemq