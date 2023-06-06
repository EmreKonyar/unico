import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import { Text } from 'react-native';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    /*
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
    */
   <Text>Bok BU</Text>
  );
}

export default BottomTabNavigator;