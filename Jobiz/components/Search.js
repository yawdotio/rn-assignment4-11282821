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
        <Image style={styles.searchIcon} source={require("../assets/Vector.png")}/>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Search pressed')}>
       <Image style={styles.buttonText} source={require("../assets/Filter.png")}/>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    padding:0,
    backgroundColor: "#F7F0E8",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: -165,
    flexDirection: "row",
    marginHorizontal: 15,
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "82%",
    borderRadius: 20,
    position: "relative",
    left: -15,
  },
  searchIcon: {
    padding: 10,
    postion: "relative",
    left: -25,
  },
  searchInput: {
    width: "70%",
    padding: 10,
    backgroundColor: "#fff",
    color: "black",
    borderRadius: 20,
    postion: "relative",
    left: -25,
  },
  socialogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  socialicons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    color: '#007BFF', // Example color for the register text
  }, 
  
});
