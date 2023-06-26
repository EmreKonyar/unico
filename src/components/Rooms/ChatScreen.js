import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  TextInput
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import bg from "../../../assets/images/BG2.png";
import Message from "./Message";
import InputBox from "../InputBox";
import g from "../../../assets/g.png";
import t from "../../../assets/t.png";
import s from "../../../assets/s.png";
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {WEBSOCKET_URL} from "../../config.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Script from "../../API/auth-token";

var stompClient = null;

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();
  const [newMessage, setNewMessage] = useState();
  const [username, setUsername] = useState();

  useEffect(() => {
    connect();
    getUsernameCaller();
    navigation.setOptions({
      headerTitle: () => (
        <>
          <Image
            source={route.params.role === "TEACHER" ? t : route.params.role === "STUDENT" ? s : g}
            style={styles.image}
          />
          <Text>{route.params.username}</Text>
        </>
      ),
    });
  }, [route.params.username]);

  const getUsernameCaller = async () => {
    setUsername(await Script.getUsername());
  }

  const connect = () => {
    const socket = new SockJS(WEBSOCKET_URL);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = async () => {
    var destination = '/chatroom/' + route.params.username;
    console.log("CONNECTION SUCCESSFUL!");
    if(route.params.role === "TEACHER" || route.params.role === "STUDENT") {
      var sender = parseInt(await Script.getUsername());
      var receiver = parseInt(route.params.username);

      if(sender > receiver) {
        destination = '/chatroom/' + receiver.toString() + "_" + sender.toString();
      } else {
        destination ='/chatroom/' + sender.toString() + "_" + receiver.toString();
      }
    }

    stompClient.subscribe(destination, onMessageReceived);
  };

  const onError = (err) => {
    console.log("ERROR = " + err);
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.stringify(payload.body);
    console.log("message received = " + payloadData);
    messages.unshift(payload);
    setMessages([...messages])
  };

  const onSendMessage = async () => {
    var groupName = route.params.username;
    if(route.params.role === "TEACHER" || route.params.role === "STUDENT") {
      var sender = username;
      var receiver = parseInt(route.params.username);

      if(sender > receiver) {
        groupName = receiver.toString() + "_" + sender.toString();
      } else {
        groupName = sender.toString() + "_" + receiver.toString();
      }
    }
    var chatMessage = {
      senderUsername: username,
      groupName: groupName,
      message: newMessage
    }
    console.log(chatMessage);
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage))
    setNewMessage();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "android" ? 40 : 0}
      style={styles.bg}
      keyboardVerticalOffset={90}
    >
      <ImageBackground source={bg} style={styles.bg} blurRadius={4}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            item != null ? 
            <Message
              chatsInfo={item.body}
              username={username}
              chatType={route.params.role}
            /> : 
            <></>
          )}
          style={styles.list}
          inverted
        />
        <SafeAreaView edges={["bottom"]} style={styles.container}>
          <TextInput
            value={newMessage}
            onChangeText={setNewMessage}
            style={styles.input}
            placeholder="type your message..."
          />

          <Ionicons
            onPress={onSendMessage}
            style={styles.send}
            name="send-outline"
            size={16}
            color="white"
          />
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginRight: 5,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 20,
    backgroundColor: "white",
    padding: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    flex: 1,
    backgroundColor: "#e66f6f",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
});

export default ChatScreen;
