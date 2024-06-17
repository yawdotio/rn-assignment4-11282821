import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

const Login = () => {
  return (
    <>
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
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button}>Log in</Text>
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
            <Text>Haven't got an account <TouchableOpacity> <Text style={styles.registerText}></Text>Register </TouchableOpacity></Text>
      </View>

      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wave: {
    // Example style for the Image
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  loginInputs: {
    // Style for the login inputs container
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    // Style for each TextInput
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    // Example style for a login button, assuming you'll add one
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    // Style for the text inside the button
    color: 'white',
  },
});

export default Login;
