ENOW
=====

__ENOW__ is a platform for huge Internet of Things environment. As the future scheme it will support Raspberry Pi for controlled IoT device via [MQTT](http://mqtt.org/) and webhooks for connecting other services and server via REST APIs over HTTP.

When it comes to IoT, hard to find integrated development environment platform and yes, we need this kind of platform eventually.
However, if we could make our own development environment for IoT, could it surely deal with complex system and bunch of data properly ? you probably consider using distributed realtime computation system like Apache Kafka and Apache Storm for huge IoT system. but I'm not sure you can easily.

Despite all of this, you don't have to worry due to __ENOW__

## Tutorial
Building...

## To do list
In the latest version, the class packages have been changed from "backtype.storm" to "org.apache.storm" and Storm can not properly support Apache-Kafka-0.10.0.0 or higher version of Kafka.

These are the new features you should expect in the coming months

Apache Storm + Apache Kafka:

* [x] Support "org.apache.storm" class packages instead of "backtype.storm"
* [x] Support Kafka Broker with Storm-Kafka(0.9.0.1) for Kafka Integration.
* [ ] Support Trident Topology for powerful batch processing.
* [x] Handling Python(actually Jython) on Java 1.8.
* [x] Using Apache Kafka, connect other services, devices and server via mqtt and http.

Docker:

* [x] Including zkServer starter.
* [x] Deploy Apache Storm with Docker.
* [x] Deploy Supervisord with Docker.
* [x] Deploy Apache Kafka with Docker.
* [x] Submit topology to storm on docker
* [ ] Including DashBoard(Web Service based on Django).

DashBoard:

* [ ] Support statistic visualizer for IoT
* [ ] Connect DashBoard, MongoDB and Apache Storm.
* [ ] Support Python Editer.
* [ ] Support Phase Load-map.

RPi:

* [ ] Alive topic for Init devices.
* [ ] Add RPi GPIO Code.
