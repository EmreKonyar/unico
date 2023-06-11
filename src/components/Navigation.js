import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import ChatsScreen from "./Rooms/RoomItem";
import ChatScreen from "./Rooms/ChatScreen";
import ContactsScreen from "./Rooms/ContactsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { size } from "lodash";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo, splashLoading, isLogIn } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogIn ? (
          <>
            <Stack.Screen
              name="BottomTab"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="inChat" component={ChatScreen} />
            <Stack.Screen name="Contacts" component={ContactsScreen} />
          </>
        ) : splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
