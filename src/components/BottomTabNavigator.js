import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import ContactsScreen from "./Rooms/ContactsScreen";

const Tab = createBottomTabNavigator();

const CustomHeader  = () => {
  return(
    <View style={styles.headerContainer}>
    <Image 
    style={styles.headerImage}
    source={require('../../assets/Logo.png')}
    />
    </View>
  )
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#e66f6f" },
        tabBarInactiveTintColor: "#292D32",
        tabBarActiveTintColor: "#eee",
      }}
    >
      <Tab.Screen
        name="Activity"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader />,
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat Screen"
        component={ContactsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => <CustomHeader />,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          )
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee'
  },
  headerImage: {
    marginTop: 30,
    width: 90,
    height: 45,
     
  },
});

export default BottomTabNavigator;
