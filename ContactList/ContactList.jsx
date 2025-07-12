import React from "react";
import { SectionList, Text, View, StyleSheet, Image } from "react-native";

const DATA = [
  {
    title: "A",
    data: [
      { name: "User 1", image: require("../assets/1.jpg") },
      { name: "User 2", image: require("../assets/2.jpg") },
    ],
  },
  {
    title: "B",
    data: [
      { name: "User 3", image: require("../assets/3.jpg") },
      { name: "User 4", image: require("../assets/4.jpg") },
    ],
  },
  {
    title: "C",
    data: [{ name: "User 5", image: require("../assets/5.jpg") }],
  },
];

export default function ContactList() {
  return (
    <SectionList
      style={{ paddingTop: "50" }}
      sections={DATA}
      keyExtractor={(item, index) => item.name + index}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontWeight: "bold",
    fontSize: 18,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
  },
});
