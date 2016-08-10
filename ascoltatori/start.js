// var ponte = require('ponte');
var ascoltatori = require('ascoltatori');
var ascoltatori_kafka = require('ascoltatori');
var mqtt = require('mqtt');
var arrrg = "no connection";
var settings = {
  type: 'mqtt',
  // set 'true' if input type is json type
  json: true,
  mqtt: require('mqtt'),
  // must use 'http://'
  url: 'http://mqtt_url:port'
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


// build for mqtt
ascoltatori.build(settings, function (err, ascoltatore) {
    ascoltatore.subscribe("topic_from_mqtt", function() {
        console.log(arguments);
        arrrg = arguments;
        // for testing..
        ascoltatore.publish("topic_for_mqtt",arrrg, function(){
            console.log(arguments);
        });
        // build for kafka
        ascoltatori_kafka.build(settings_kafka, function (err_kafka, ascoltatore_kafka){
            ascoltatore_kafka.publish("topic_for_kafka",arrrg, function(){
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
