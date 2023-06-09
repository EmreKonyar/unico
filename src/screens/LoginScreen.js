import React, { useContext, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Logo from "../../assets/Logo.png";
import background from "../../assets/BackGround.png";

const LoginScreen = ({}) => {
  const { height } = useWindowDimensions();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading, login } = useContext(AuthContext);

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <Spinner visible={isLoading} />
        <View style={styles.wrapper}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.text}>Sign in account</Text>
          <TextInput
            style={styles.input}
            value={username}
            placeholder="Use your username"
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            style={styles.input}
            value={password}
            placeholder="Use your password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />

          <Button
            title="Login"
            borderRadius={10}
            color={"#e66f6f"}
            onPress={() => {
              login(username, password);
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14
  },
  logo: {
    width: "70%",
    width: 200,
    height: 100,
    alignItems: "center",
    marginHorizontal: 50,
  },
  text: {
    color: "#161616",
    fontSize: 30,
    marginBottom: 12,
    marginHorizontal: 50,
  },
  background: {
    flex: 1,
    alignItems: "center",
  },
});

export default LoginScreen;
