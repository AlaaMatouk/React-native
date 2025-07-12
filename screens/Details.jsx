import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const Details = () => {
  const { params } = useRoute();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{params.name}</Text>
      <Text>Email: {params.email}</Text>
      <Text>Phone: {params.phone}</Text>
      <Text>Website: {params.website}</Text>
      <Text>Company: {params.company?.name}</Text>
      <Text>City: {params.address?.city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#E6F2FF",
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Details;
