import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
    return (
       <AuthProvider>
         <Navigation />
       </AuthProvider>
      
    );
};

export default App;