import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import ChatScreen from "./Rooms/ChatScreen";
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
