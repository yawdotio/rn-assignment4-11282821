import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Home} from './screens/Home.js'
import {Login} from './screens/Login.js'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
