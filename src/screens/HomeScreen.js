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
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    marginBottom: 5,
    padding: 10,
    borderWidth: 2,
    backgroundColor: '#FD855F',
    borderColor: "#292D32",
    borderRadius: 35,
  },
  image: {
    borderWidth: 3,
    borderColor: "#292D32",
    borderRadius: 15,
    width: 300,
    height: 250,
    margin: 10,
  },
  clubName:{
    color: '#eee',
    fontWeight: 'bold',
    fontSize: 20,
  },
  title:{
    color: '#292D32',
    fontWeight: 'bold',
    fontSize: 13,
  },
  description: {
    color: '#eee',
    fontWeight: 'bold',
    paddingTop: 5,
    fontSize: 13,
  },
  creationDate:{
    color: '#292D32',
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
