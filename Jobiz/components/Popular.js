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

export default function Popular({ popular }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        data={popular}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <Image
              style={styles.companyIcon}
              source={item.icon}
              resizeMode="contain"
            />
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.salary}>{item.salary}/y</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 330,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    width: "100%",
    padding: 10,
  },

  title: {
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 12,
    color: "#AFB0B6",
  },

  companyIcon: {
    width: 40,
    height: 40,
    position: "relative",
    top: 20,
    left: 20,
    borderRadius: 40,
  },
  jobCard: {
    width: "100%",
    height: 80,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginVertical: 2,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    width: "auto",
    color: "black",
    position: "relative",
    top: -20,
    left: 70,
  },
  company: {
    fontSize: 12,
    width: 90,
    color: "#AFB0B6",
    position: "relative",
    top: -20,
    left: 70,
  },
  salary: {
    fontSize: 12,
    width: 90,
    textAlign: "right",
    color: "black",
    position: "relative",
    top: -60,
    left: 220,
  },
  location: {
    fontSize: 10,
    width: 90,
    textAlign: "right",
    color: "#AFB0B6",
    position: "relative",
    top: -55,
    left: 220,
  },
  liststyle: {},
});
