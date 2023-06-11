import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../components/Rooms/RoomItem";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#e66f6f" },
        tabBarInactiveTintColor: "#000",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Activity"
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatScren"
        component={ChatScreen}
        options={({navigation}) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
              headerShown: true,
              headerRight: () => (
                <Ionicons 
                  onPress={() => navigation.navigate('Contacts')} 
                  name= 'create-outline' 
                  size={18} 
                  color={'#e66f6f'} 
                  style={{marginRight: 15}} 
                />
              )
            })}
        /*options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}*/
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
