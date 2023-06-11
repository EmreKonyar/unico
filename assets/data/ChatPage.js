import React, { useEffect } from "react";
import { View, Text } from "react-native";

const ChatPage = () => {
  const client = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/");
  
  client.onopen = function () {
    console.log("WebSocket Client Connected");

    function sendNumber() {
      if (client.readyState === client.OPEN) {
        var number = Math.round(Math.random() * 0xffffff);
        client.send(number.toString());
        setTimeout(sendNumber, 1000);
      }
    }
    sendNumber();
  };

  client.onclose = function () {
    console.log("echo-protocol Client Closed");
  };

  client.onmessage = function (e) {
    if (typeof e.data === "string") {
      console.log("Received: '" + e.data + "'");
    }
  };
  return <Text>Practical Intro To WebSockets.</Text>;
};

export default ChatPage;
