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
import bg from "../../../assets/images/BG.png";
import Message from "./Message";
import InputBox from "../InputBox";
import g from "../../../assets/g.png";
import t from "../../../assets/t.png";
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {WEBSOCKET_URL} from "../../config.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Script from "../../API/auth-token";

var stompClient = null;

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const header = {"Authorization": "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxODA3MDQwMTYiLCJpYXQiOjE2ODY3MDI2NzcsInJvbGVzIjpbIlJPTEVfU1RVREVOVCJdLCJleHAiOjE2ODY3ODkwNzd9.NNWY6Lr20hDBa2KHq6SI1BVbuI3iHwNLAaktP08jJS-K-F66XgFuQFO8C9O7G5yy"}

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
            source={route.params.role === "TEACHER" ? t : g}
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

  const onConnected = () => {
    console.log("CONNECTION SUCCESSFUL!");
    stompClient.subscribe('/chatroom/' + route.params.username, onMessageReceived);
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

  const onSendMessage = () => {
    var chatMessage = {
      senderUsername: username,
      groupName: route.params.username,
      message: newMessage
    }
    console.log(chatMessage);
    stompClient.send("/app/message", header, JSON.stringify(chatMessage))
    setNewMessage();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "android" ? 40 : 0}
      style={styles.bg}
      keyboardVerticalOffset={90}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            item != null ? 
            <Message
              chatsInfo={item.body}
              username={username}
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
