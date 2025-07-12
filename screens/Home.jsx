import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import routes from "../utils/routes";

const Home = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setFilteredUsers(res.data);
    });
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const results = users.filter((u) =>
      u.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(results);
  };

  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.details, item)}
      >
        <Icon name="arrow-right-circle-outline" size={30} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <Text style={styles.users}>Users</Text>
      <TextInput
        placeholder="Search user..."
        value={search}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
  },
  userName: {
    fontSize: 16,
  },
  users: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default Home;
