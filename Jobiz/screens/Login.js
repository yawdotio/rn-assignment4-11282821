import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Jobizz</Text>
        <View style={styles.greeting}>
          <Text style={{fontSize: 30, fontWeight:"bold"}}>Welcome Back 👋</Text>
          <Image style={styles.wave} />
          <Text style={{color: "#AFB0B6"}}>Let's log in. Apply to jobs</Text>
        </View>
        <View sytle={styles.loginInputs}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Home", { email, name });
            }}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialogin}>
          <View style={styles.line} />
          <Text style={{color: "#AFB0B6"}}> Or continue with</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.socialicons}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="apple" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="google" size={30} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="facebook" size={30} color="#3b5998" />
          </TouchableOpacity>
        </View>
        <Text style={styles.noAccount}>
          Haven't got an account?
          <TouchableOpacity>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'left',
    marginHorizontal: 20,
    marginTop: 120,
    backgroundColor: "#f5f5f5"
  },
  greeting: {
    alignItems: "left",
    justifyContent: "center",
    marginVertical: 1,
    marginBottom: 50,
  },
  wave: {
    
  },
  loginInputs: {

  },
  input: {
    height: 55,
    borderColor: '#AFB0B6',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginVertical: 5,
    paddingHorizontal:6,
  },
  button: {
    height: 50,
    backgroundColor: '#356899',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  socialogin: {
    height: 35,
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 55,
  },

  line: {
  flex: 1,
   height: 1,
   borderWidth: 1,
   borderColor: '#AFB0B6',
   backgroundColor: '#AFB0B6',
   borderRadius: 10,
  },
  socialicons: {
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#AFB0B6",
    marginTop: 50,

  },
  socialButton: {
  },
  noAccount: {
    flexDirection: 'row',
    alignItems: "right",
    margin: "auto",
    color: "#AFB0B6",
  },
  registerText: {
    alignItems: "center",
    position: "relative",
    marginVertical: "auto",
    color: "#356899",
    top: 5,
    right: -10,

  },
});
