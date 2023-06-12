import { FlatList } from "react-native-gesture-handler";
import ContactListItem from "../ContactListItem";
import { connect } from "react-redux";
import { getChats } from "../../redux/actions";
import React, { useEffect } from "react";
import { Text } from "react-native";


const ContactsScreen = ({ dispatch, chatData, loading, error }) => {
  useEffect(() => {
    dispatch(getChats());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={chatData}
      renderItem={({ item }) => <ContactListItem user={item} key={item.username}/>}
    />
  );
};

const mapStateToProps = (state) => ({
  chatData: state.chatData,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(ContactsScreen);