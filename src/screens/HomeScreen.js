import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { getHome } from '../redux/actions';

const HomeScreen = ({ dispatch, homeData, loading, error }) => {

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <ScrollView>
      {
      homeData.map((info) =>(
        <View style={styles.container}
        key={info.id}
        >
          <Image 
          source={{uri: info.thumbnailUrl}}
          style={styles.image}
          />
          <Text>{info.title}</Text>
          <Text>{info.id}</Text>
        </View>
        ))
      }
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  homeData: state.homeData,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    padding: 10,
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
