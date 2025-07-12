import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import routes from "../utils/routes";

const Users = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Users</Text>
      {users.map((u) => (
        <View key={u.id} style={styles.userRow}>
          <Text style={styles.userName}>{u.name}</Text>
          <Icon
            name="arrow-right"
            size={30}
            color="blue"
            onPress={() => navigation.navigate(routes.details, u)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  userRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  userName: {
    fontSize: 16,
  },
});

export default Users;
