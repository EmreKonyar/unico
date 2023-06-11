import { FlatList } from "react-native-gesture-handler";
import chats from "../../../assets/data/chats.json";
import ContactListItem from "../ContactListItem";

const ContactsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ContactListItem user={item.user} />}
    />
  );
};

export default ContactsScreen;
