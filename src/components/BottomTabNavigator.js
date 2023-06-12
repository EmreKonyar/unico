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
          )/*,
          headerShown: true,
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.navigate("Contacts")}
              name="create-outline"
              size={18}
              color={"#e66f6f"}
              style={{ marginRight: 15 }}
            />
          ),
          
          */
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f4f4'
    
  },
  headerImage: {
    width: 150,
    height: 75,
     
  },
});

export default BottomTabNavigator;
