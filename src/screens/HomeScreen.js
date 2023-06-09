import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Image, ScrollView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const HomeScreen = () => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);


  return (
    <ScrollView>

    </ScrollView>
  );
};


export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
    marginBottom: 20,
    padding: 10,
    border: 10,
    borderWidth: 1,
    borderColor: "#e66f6f",
    borderRadius: 10,

  },
  image:{
    width: 100,
    height:100,
    margin:10,
  }
});
