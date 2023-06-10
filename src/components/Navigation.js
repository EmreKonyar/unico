import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";
import BottomTabNavigator from "./BottomTabNavigator";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading, isLogIn} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogIn ? (
          <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{ headerShown: false }}/>
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