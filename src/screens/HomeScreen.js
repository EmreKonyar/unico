import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import { getHome } from "../redux/actions";
import { data } from "../API/mock";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

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
      {homeData.map(
        (
          data
        ) => (
          <View style={styles.container} key={data.id}>
            <Text style={styles.clubName}>{data.clubName}</Text>
            <Image source={{ uri: data.imageUrls }} style={styles.image} />
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.creationDate}>{dayjs(data.creationDate).fromNow()}</Text>
          </View>
        )
      )}
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  homeData: state.homeData,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#e66f6f',
    borderColor: "#fff",
    borderRadius: 10,
  },
  image: {
    borderRadius: 30,
    width: 250,
    height: 250,
    margin: 10,
  },
  clubName:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
  },
  title:{
    color: '#000',
    fontSize: 18,
  },
  description: {
    color: '#fff',
    fontSize: 15,
  },
  creationDate:{
    color: '#000',
    fontSize: 15,
  },
});
