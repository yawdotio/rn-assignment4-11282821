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

export default function Featured({ featured }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        style={styles.liststyle}
        data={featured}
        keyExtractor={(item) => item.key}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={[styles.jobCard, { backgroundColor: item.color }]}>
            <Image
              style={styles.companyIcon}
              source={item.icon}
              resizeMode="contain"
            />
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.salary}>{item.salary}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 225,
    flexDirection: "column",
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
    borderRadius: 3,
    backgroundColor: "white",
  },
  jobCard: {
    width: 250,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    width: "auto",
    color: "white",
    position: "relative",
    top: -20,
    left: 70,
  },
  company: {
    fontSize: 12,
    width: 90,
    color: "white",
    position: "relative",
    top: -20,
    left: 70,
  },
  salary: {
    fontSize: 12,
    width: 70,
    color: "white",
    position: "relative",
    top: 60,
    left: 20,
  },
  location: {
    fontSize: 12,
    color: "white",
    width: 90,
    position: "relative",
    top: 40,
    left: 125,
  },
  liststyle: {
  borderRadius: 20,
  },
});
