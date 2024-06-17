import React, { useState } from "react";
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
  const [email, setEmail] = useState("yaw@gmail.com");
  const [name, setName] = useState("Yaw");

  return (
    <View>
      <View style={styles.container}>
        <Text>Jobizz</Text>
        <View>
          <Text>Welcome Back</Text>
          <Image style={styles.wave} />
        </View>
        <Text>Let's log in. Apply to jobs</Text>
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
          <Text> or continue with</Text>
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
        <Text>
          Haven't got an account
          <TouchableOpacity>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wave: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  loginInputs: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007BFF",
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
  socialogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
    marginHorizontal: 10,
  },
  socialicons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  socialButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    color: "#007BFF",
  },
});
