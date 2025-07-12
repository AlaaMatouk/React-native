import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
const COLORS = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

export default function ColorList() {
  return (
    <FlatList
      style={{ paddingTop: "50" }}
      data={COLORS}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.hexCode }]}>
          <Text style={styles.text}>
            {item.colorName} - {item.hexCode}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    // width: "80%",
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
