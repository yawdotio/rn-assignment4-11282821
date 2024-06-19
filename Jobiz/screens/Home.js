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

export default Home = ({ route, navigation }) => {
  let { email, name } = route.params;
  if (email == "") email = "yaw@hotmail.com";
  if (name == "") name = "Yaw";
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [popular, setPopular] = useState([
    {
      key: "1",
      title: "Software Engineer",
      icon: require("../assets/Facebook_f_logo_(2019).png"),
      salary: "$120,000",
      company: "Facebook",
      location: "Accra, Ghana",
      color: "#5386E4",
    },
    {
      key: "2",
      title: "Data Scientist",
      icon: require("../assets/Google_2015_logo.png"),
      salary: "$110,000",
      company: "Google",
      location: "Mountain View, CA",
      color: "#34A853",
    },
    {
      key: "3",
      title: "Product Manager",
      icon: require("../assets/Amazon_logo.png"),
      salary: "$130,000",
      company: "Amazon",
      location: "Seattle, WA",
      color: "#FF9900",
    },
    {
      key: "4",
      title: "UX Designer",
      icon: require("../assets/Apple_logo_black.png"),
      salary: "$90,000",
      company: "Apple",
      location: "Cupertino, CA",
      color: "#A2AAAD",
    },
    {
      key: "5",
      title: "DevOps Engineer",
      icon: require("../assets/Microsoft_logo.png"),
      salary: "$115,000",
      company: "Microsoft",
      location: "Redmond, WA",
      color: "#737373",
    },
    {
      key: "6",
      title: "Business Analyst",
      icon: require("../assets/IBM_logo.png"),
      salary: "$80,000",
      company: "IBM",
      location: "Armonk, NY",
      color: "#1F70C1",
    },
    {
      key: "7",
      title: "Cybersecurity Specialist",
      icon: require("../assets/IBM_logo.png"),
      salary: "$125,000",
      company: "Cisco",
      location: "San Jose, CA",
      color: "#0568AE",
    },
    {
      key: "8",
      title: "Marketing Manager",
      icon: require("../assets/Netflix_2015_logo.png"),
      salary: "$105,000",
      company: "Netflix",
      location: "Los Gatos, CA",
      color: "#E50914",
    },
    {
      key: "9",
      title: "AI Research Scientist",
      icon: require("../assets/IBM_logo.png"),
      salary: "$140,000",
      company: "OpenAI",
      location: "San Francisco, CA",
      color: "#0099FF",
    },
    {
      key: "10",
      title: "Blockchain Developer",
      icon: require("../assets/IBM_logo.png"),
      salary: "$135,000",
      company: "Coinbase",
      location: "Remote",
      color: "#1652F0",
    },
    {
      key: "11",
      title: "Cloud Solutions Architect",
      icon: require("../assets/IBM_logo.png"),
      salary: "$125,000",
      company: "Oracle",
      location: "Austin, TX",
      color: "#F80000",
    },
  ]);

  const [featured, setFeatured] = useState([
    {
      key: "1",
      title: "Software Engineer",
      icon: require("../assets/Facebook_f_logo_(2019).png"),
      salary: "$120,000",
      company: "Facebook",
      location: "Accra, Ghana",
      color: "#1877F2", // Facebook Blue
    },
    {
      key: "2",
      title: "Data Scientist",
      icon: require("../assets/Google_2015_logo.png"),
      salary: "$110,000",
      company: "Google",
      location: "Mountain View, CA",
      color: "#4285F4", // Google Blue
    },
    {
      key: "3",
      title: "Product Manager",
      icon: require("../assets/Amazon_logo.png"),
      salary: "$130,000",
      company: "Amazon",
      location: "Seattle, WA",
      color: "#FF9900", // Amazon Orange
    },
    {
      key: "4",
      title: "UX Designer",
      icon: require("../assets/Apple_logo_black.png"),
      salary: "$90,000",
      company: "Apple",
      location: "Cupertino, CA",
      color: "#A2AAAD", // Apple Gray
    },
    {
      key: "5",
      title: "DevOps Engineer",
      icon: require("../assets/Microsoft_logo.png"),
      salary: "$115,000",
      company: "Microsoft",
      location: "Redmond, WA",
      color: "#737373", // Microsoft Gray
    },
    {
      key: "6",
      title: "Business Analyst",
      icon: require("../assets/IBM_logo.png"),
      salary: "$80,000",
      company: "IBM",
      location: "Armonk, NY",
      color: "#054ADA", // IBM Blue
    },
    {
      key: "7",
      title: "Cybersecurity Specialist",
      icon: require("../assets/IBM_logo.png"),
      salary: "$125,000",
      company: "Cisco",
      location: "San Jose, CA",
      color: "#1BA0D7", // Cisco Blue
    },
    {
      key: "8",
      title: "Marketing Manager",
      icon: require("../assets/Netflix_2015_logo.png"),
      salary: "$105,000",
      company: "Netflix",
      location: "Los Gatos, CA",
      color: "#E50914", // Netflix Red
    },
    {
      key: "9",
      title: "AI Research Scientist",
      icon: require("../assets/IBM_logo.png"),
      salary: "$140,000",
      company: "OpenAI",
      location: "San Francisco, CA",
      color: "#0099FF", // OpenAI Blue
    },
    {
      key: "10",
      title: "Blockchain Developer",
      icon: require("../assets/IBM_logo.png"),
      salary: "$135,000",
      company: "Coinbase",
      location: "Remote",
      color: "#1652F0", // Coinbase Blue
    },
    {
      key: "11",
      title: "Cloud Solutions Architect",
      icon: require("../assets/IBM_logo.png"),
      salary: "$125,000",
      company: "Oracle",
      location: "Austin, TX",
      color: "#F80000", // Oracle Red
    },
    {
      key: "12",
      title: "Salesforce Developer",
      icon: require("../assets/Salesforce.com_logo.png"),
      salary: "$110,000",
      company: "Salesforce",
      location: "San Francisco, CA",
      color: "#00A1E0", // Salesforce Blue
    },
    {
      key: "13",
      title: "Game Developer",
      icon: require("../assets/Epic_Games_logo.png"),
      salary: "$95,000",
      company: "Epic Games",
      location: "Cary, NC",
      color: "#313131", // Epic Games Black
    },
    {
      key: "14",
      title: "Full Stack Developer",
      icon: require("../assets/Epic_Games_logo.png"),
      salary: "$125,000",
      company: "Shopify",
      location: "Ottawa, Canada",
      color: "#95BF47", // Shopify Green
    },
    {
      key: "15",
      title: "Network Engineer",
      icon: require("../assets/Amazon_logo.png"),
      salary: "$115,000",
      company: "AT&T",
      location: "Dallas, TX",
      color: "#00A8E0", // AT&T Blue
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image
          style={styles.devIcon}
          source={require("../assets/ProfileImage.png")}
        />
      </View>
      <Search />
      <Featured featured={featured} />
      <Popular popular={popular} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  heading: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  devIcon: {
    width: 45,
    height: 45,
    paddingHorizontal: 10,
  },
  email: {
    color: "#95969D",
  },
});
