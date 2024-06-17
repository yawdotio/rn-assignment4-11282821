import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  FlatList,
  SectionList,
  Image,
} from "react-native";

export default function Featured({ categories }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        style={styles.liststyle}
        data={categories}
        keyExtractor={(item) => item.key}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
            <Image
              style={styles.categoryIcon}
              source={item.imagesrc}
              resizeMode="cover"
            />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    alignItems: "right",
    justifyContent: "center",
    marginTop: -95,
    width: "95%",
    position: "relative",
    top: -70,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    paddingBottom: 10
  },
  categoryIcon: {
    width: 165,
    height: 172,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    backgroundColor: "transparent",
    position: "relative",
    bottom: -26,
  },
  categoryCard: {
    margin: 0,
    marginHorizontal: 5,
    padding: 0,
    backgroundColor: "#fff",
    borderWidth: 0,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 205,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "bold",
    position: "relative",
    top: -170,
    right: 40,
    marginBottom: 0,
  },
  liststyle: {
    position: "relative",
    top: -5,
    paddingBottom: -50,
    borderWidth: 0,
    margin: 0,
    marginBottom: 35,
  },

});
