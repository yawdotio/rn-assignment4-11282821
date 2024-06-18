import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
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

export default Home = ({ route , navigation }) => {
  const {email, name} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
    backgroundColor: "#F5F5F5",
    
  },
  heading: {
    width: "90%",
  },
  devIcon: {
    
  },
  email: {
  },
});
