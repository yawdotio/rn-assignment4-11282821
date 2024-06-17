import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Popular from "../components/Popular.js";
import Featured from "../components/Featured.js";
import Search from "../components/Search.js";

export default Home = ({ route }) => {

  const [featured, setfeatured] = useState([
    {
      key: "1",
      title: "",
      icon: "",
      salary: "",
      comapany: "",
      location: "",
      color: "",
    },
  ]);

  const [popular, setpopular] = useState([
    {
      key: "1",
      title: "",
      icon: "",
      salary: "",
      comapany: "",
      location: "",
      color: "",
    },
  ]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      style={styles.container}
    >
      <View style={styles.heading}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image style={styles.devIcon} source={""} />
      </View>
      <Search />
      <Featured featured={featured} />
      <Popular popular={popular} />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    alignItems: "center",
    position: "relative",
    top: 0,
    height: 900,
    paddingHorizontal: 12,
  },
  heading: {
    width: "90%",
    position: "relative",
    top: -180,
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    marginTop: 0,
  },
  devIcon: {
    position: "relative",
    right: -91,
    top: -19,
  },
  email: {
    fontSize: 18,
    color: "#8B9467",
  },
});
