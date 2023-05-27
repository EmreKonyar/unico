import React from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { View } from "react-native/types";

const List = (props) =>{
    
    let {data} = props;

    return(
        <View>
            {
                data && data.map((item, index) => (
                    <View key = {index}>
                        <img src={item.image.url} width='150%'/>
                        <h3>{item.title}</h3>

                    </View>
                ))
            }
        </View>
    );
};

export default List;