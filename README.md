ENOW [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/ENOW-IJI/enow)
=====

__ENOW__ is a platform for huge Internet of Things environment. As the future scheme it will support Raspberry Pi for controlled IoT device via [MQTT](http://mqtt.org/) and webhooks for connecting other services and server via REST APIs over HTTP.

When it comes to IoT, hard to find integrated development environment platform and yes, we need this kind of platform eventually.
However, if we could make our own development environment for IoT, could it surely deal with complex system and bunch of data properly ? you probably consider using distributed realtime computation system like Apache Kafka and Apache Storm for huge IoT system. but I'm not sure you can easily.

Despite all of this, you don't have to worry due to __ENOW__

## Tutorial

[https://github.com/ENOW-IJI/docker](https://github.com/ENOW-IJI/docker)

## To do list
In the latest version, the class packages have been changed from "backtype.storm" to "org.apache.storm" and Storm can not properly support Apache-Kafka-0.10.0.0 or higher version of Kafka.

These are the new features you should expect in the coming months

#### Apache Storm + Apache Kafka + Apache Zookeeper:

* [x] Support "org.apache.storm" class packages instead of "backtype.storm"
* [x] Support Kafka Broker with Storm-Kafka(0.9.0.1) for Kafka Integration.
* [x] Handling Python~~(actually Jython)~~ on Java 1.8.
* [x] Using Apache Kafka, connect other .
* [x] Submit Trigger Topology.
* [x] Submit Action Topology.
* [x] MongoDB Integration.
* [x] Redis Integration.
* [x] Support logging system via Log4j.
* [ ] Support Elasticsearch integration with Kibana.
* [ ] Support PySpark(Apache Spark) for machine learning on ExecutingBolt.

#### Docker:

* [x] Including zkServer starter.
* [x] Create docker image of Apache Storm.
* [x] Create docker image of Apache Kafka.
* [x] Create docker image of Apache Zookeeper.
* [x] Create docker image of MongoDB.
* [x] Create docker image of Redis.
* [x] Use docker-compose for easy deployment.
* [x] Submit topology to Apache Storm on docker.
* [x] Make Tutorial for build topologies on docker.
* [ ] Support Docker Swarm.

#### Console:

* [ ] Support visualization of statistics for IoT
* [x] Connect console, services and server with Kafka and devices with Ascoltatori via MQTT, COAP and HTTP.
* [x] Support Python Editer.
* [x] Support Phase Load-map.
* [ ] Save and Load Load-map for sharing.
* [ ] Support npm for easy installation.

#### API(RPi):

* [ ] Alive topic for Init devices.
* [ ] Add RPi GPIO Code.
* [ ] Use ssl protocol for security communication.
