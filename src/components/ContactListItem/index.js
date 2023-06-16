import { Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import g from "../../../assets/g.png";
import t from "../../../assets/t.png";
import s from "../../../assets/s.png";

dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("inChat", user)
      }
      style={styles.container}
    >
      <Image source={user.role === "TEACHER" ? t : user.role === "STUDENT" ? s: g} style={styles.image} />
      <Text style={styles.name} numberOfLines={1}>
        {user.username}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#FD855F",
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
    height: 70,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
});

export default ContactListItem;
