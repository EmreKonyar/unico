import { View, Text, StyleSheet } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ chatsInfo, username}) => {
  const chat = JSON.parse(chatsInfo);

  const isMyMessage = () => {
    console.log("chat.senderUsername = " + chat.senderUsername);
    console.log("username = " + username);
    return chat.senderUsername == username;
  };
  

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "#e66f6f" : "gray",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{chat.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 1,
  },
  time: {
    color: "white",
    alignSelf: "flex-end",
  },
});

export default Message;

/*import React from 'react';
import { View , Text , StyleSheet} from 'react-native';
//import firebase from "@react-native-firebase/app";

const Message  = ({item , index}) => {
   //const user = firebase.auth().currentUser;
 // const userId = user.uid;
  return <View style={(userId != item.userId  ) ? style.other : style.me}>
            <View style={[style.bubble,{backgroundColor:(userId != item.userId) ? '#EAEAEA' : '#30B485' }]}>
                <Text style={{ fontSize:17,color:(userId != item.userId) ? '#575757' : 'white'}}>{item.text}</Text>
                <Text style={{ fontSize:11,color:(userId != item.userId) ? '#575757' : 'white'}}>{item.userName}</Text>
            </View>
         </View>
};

const style = StyleSheet.create({
    other:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-start',
    },
    me:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end',
    },
    bubble:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop:5,
        paddingBottom:5,
        marginBottom:5,
        borderRadius:10,
    }
})


export default Message;
*/
