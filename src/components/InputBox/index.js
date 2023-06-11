import { StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputBox = () => {
    const [newMessage, setNewMessage] = useState("");
  
    
    const onSend = () => {
      console.warn("Sending a new message");
      setNewMessage();
    };
  
    return (
      <SafeAreaView edges={["bottom"]} style={styles.container}>
        <Ionicons name="add-outline" size={20} color="#e66f6f" />
  
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          style={styles.input}
          placeholder="type your message..."
        />
  
        <Ionicons
          onPress={onSend}
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
      flex: 1,
      backgroundColor: "white",
      padding: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      borderRadius: 50,
      borderColor: "lightgray",
      borderWidth: StyleSheet.hairlineWidth,
    },
    send: {
      backgroundColor: "#e66f6f",
      padding: 7,
      borderRadius: 15,
      overflow: "hidden",
    },
  });
  
  export default InputBox;
  