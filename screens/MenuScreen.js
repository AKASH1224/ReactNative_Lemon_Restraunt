// src/screens/MenuScreen.js
import React from "react";
import { SectionList, Text, View, Image, StyleSheet } from "react-native";
import { menuData } from "../data/menuData";

const MenuScreen = () => {
  return (
    <SectionList
      sections={menuData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image } style={styles.image} />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.section}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  section: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#eee",
    padding: 8,
    marginTop: 10
  },
  card: {
    flexDirection: "row",
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    fontWeight: "600"
  },
  desc: {
    fontSize: 12,
    color: "#555"
  }
});

export default MenuScreen;
