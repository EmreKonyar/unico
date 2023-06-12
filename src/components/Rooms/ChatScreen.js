import { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import bg from "../../../assets/images/BG.png";
import Message from "./Message";
import messages from "../../../assets/data/messages.json";
import InputBox from "../InputBox";
import g from "../../../assets/g.png";
import t from "../../../assets/t.png";

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <>
          <Image source={route.params.role === "TEACHER" ? t : g} style={styles.image} />
          <Text>
            {route.params.username}
          </Text>
        </>
      )
    });
  }, [route.params.username]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? 40 : 0}
      style={styles.bg}
      keyboardVerticalOffset={90}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
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
});

export default ChatScreen;
