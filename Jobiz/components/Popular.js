import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList, SectionList, Image } from 'react-native';


export default function Popular({ tasks }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Ongoing</Text>
        <FlatList data={tasks}
        keyExtractor={item => item.key}
        renderItem={({item}) => <View style={styles.taskStyle}>
            <Text>{item.title}</Text>
        </View>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'right',
    justifyContent: 'center',
    width: "95%",
    marginTop: -155,
  },
  taskStyle: {
    flexDirection: 'row',
    padding: 45,
    paddingHorizontal: 60,
    margin: 10,
    backgroundColor: '#fff',
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "95%",
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
});
