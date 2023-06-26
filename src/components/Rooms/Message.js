import { View, Text, StyleSheet } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ chatsInfo, username, chatType}) => {
  const chat = JSON.parse(chatsInfo);

  const isMyMessage = () => {
    return chat.senderUsername == username;
  };
  

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "#e66f6f" : "#2291ee",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      {chatType === "GROUP" ? (<>
        <Text style={styles.username}>{username}</Text>
        <Text style={{color: "white"}}>{chat.message}</Text>
      </>) : (<>
        <Text>{chat.message}</Text>
      </>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    shadowColor: "#292D32",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 1,
  },
  username: {
    color: "black",
    textDecorationLine: 'underline',
    marginBottom: 3

  }
});

export default Message;