import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { getHome } from '../redux/actions';
import { data }  from "../API/mock";

const HomeScreen = ({ dispatch, homeData, loading, error }) => {

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  /*if (error) {
    return <Text>Error: {error.message}</Text>;
  }*/


  //homeData servisten gelirken data mock apidir
  return (
    <ScrollView>
      {
        data.map((data) => ( //eğer data yerine homeData yazarsan servisteki veri gelir
          <View style={styles.container}
            key={data.id}
          >
            <Image
              source={{ uri: data.imageUrls }}
              style={styles.image}
            />
            <Text>{data.title}</Text>
            <Text>{data.clubName}</Text>
            <Text>{data.description}</Text>
            <Text>{data.creationDate}</Text>
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
  image: {
    width: 100,
    height: 100,
    margin: 10,
  }
});
