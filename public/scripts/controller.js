function connectFunc(){
  console.log("Connecting..");
  // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
  client = mqtt.connect(document.getElementById('broker').value)
  console.log(document.getElementById('broker').value);

  client.on("connect", function(){
    console.log("Successfully connected");
  })

  client.on("message", function (topic, payload) {
    // console.log([topic, payload].join(": "));
    console.log("Received { topic: " + topic + "; payload: " + payload + " }");
    // client.end();
  })

}
function publishFunc(){
  // console.log("publish");
  // client.publish("mqtt/demo", "hello world!");
  client.publish(document.getElementById('pub-topic').value, document.getElementById('pub-payload').value)
  console.log("Published { topic: " + document.getElementById('pub-topic').value
  + "; payload: " + document.getElementById('pub-payload').value + " }");
  // console.log(document.getElementById('pub-topic').value);
  // console.log(document.getElementById('pub-payload').value);
}

function subscribeFunc(){
  // console.log("subscribe");
  // client.subscribe("mqtt/demo");
  client.subscribe(document.getElementById('sub-topic').value);
  console.log("Subscribe { topic: " + document.getElementById('sub-topic').value + " }");
}

// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })