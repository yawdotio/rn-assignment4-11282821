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
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Image
          style={styles.searchIcon}
          source={require("../assets/searchicon.png")}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Search pressed")}
      >
        <View style={styles.buttonBackround}>
          <Image
            style={styles.filterIcon}
            source={require("../assets/menu.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 0,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 15,
  },
  searchSection: {
    width: "75%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F2F2F3",
    borderWidth: 1,
    borderColor: "#95969D",
    borderRadius: 17,
  },
  searchIcon: {
    height: 25,
    width: 25,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    paddingLeft: 10,
  },
  filterIcon: {
    margin: "auto",
    width: "95%",
    height: "89%",
    resizeMode: "contain",
  },
  buttonBackround: {
    backgroundColor: "#F2F2F3",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
