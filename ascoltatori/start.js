// var ponte = require('ponte');
var ascoltatori = require('ascoltatori');
var ascoltatori_kafka = require('ascoltatori');
var mqtt = require('mqtt');
var arrrg = "no connection";
var settings = {
  type: 'mqtt',
  json: true,
  mqtt: require('mqtt'),
  url: 'http://192.168.128.20:1883'
};

var settings_kafka = {
  type: 'kafka',
  json: true,
  kafka: require('kafka-node'),
  connectString: "localhost:2181",
  clientId: "ascoltatori",
  groupId: "ascoltatori",
  defaultEncoding: "utf8",
  encodings: {
    image: "buffer"
  }
};



ascoltatori.build(settings, function (err, ascoltatore) {
    ascoltatore.subscribe("raspberry/text", function() {
        console.log(arguments);
        arrrg = arguments;
        ascoltatore.publish("liamgall",arrrg, function(){
            console.log(arguments);
        });
        ascoltatori_kafka.build(settings_kafka, function (err_kafka, ascoltatore_kafka){
            ascoltatore_kafka.publish("liamgall",arrrg, function(){
                console.log(arguments);
            });
            if(err_kafka){
                console.log(err)
            }
        });
    });
    if(err){
        console.log(err)
    }



});
