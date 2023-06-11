import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getToken() {
  return JSON.parse(await AsyncStorage.getItem("userInfo")).token;
}

export async function getUsername() {
  return JSON.parse(await AsyncStorage.getItem("userInfo")).username;
}
