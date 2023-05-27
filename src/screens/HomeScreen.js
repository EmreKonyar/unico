import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import List from '../components/List/List';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = () => {
    const {userInfo} = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {

        const getData = () => {
            
            setData() 
            axios.get("")
                .then(response => setData(response.data.result))
                .catch(error => console.log(error) )
        }
        getData();
    }, [])
    return (
        <View>
            <View>
                <List data = {data} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
})

export default HomeScreen;