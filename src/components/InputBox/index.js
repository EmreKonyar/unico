import { StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputBox = ({username, stompClient}) => {
  const [newMessage, setNewMessage] = useState("");

  const onSendMessage = () => {
    var chatMessage = {
      senderUsername: "180704016",
      groupName: username,
      message: newMessage
    }
    console.log(chatMessage);
    stompClient.send("/app/message", {Authorization: "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxODA3MDQwMTYiLCJpYXQiOjE2ODY3MDI2NzcsInJvbGVzIjpbIlJPTEVfU1RVREVOVCJdLCJleHAiOjE2ODY3ODkwNzd9.NNWY6Lr20hDBa2KHq6SI1BVbuI3iHwNLAaktP08jJS-K-F66XgFuQFO8C9O7G5yy"}, JSON.stringify(chatMessage))
    setNewMessage();
  };

  return (
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
  );
};

const styles = StyleSheet.create({
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

export default InputBox;
