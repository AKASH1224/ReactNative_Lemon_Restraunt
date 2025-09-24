import * as React from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable, TextInput, Alert } from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const isEmailValid = validateEmail(email);

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/little-lemon-logo-grey.png')} 
        style={styles.background}
      >
        <Text style={styles.heading}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Pressable
          style={[styles.button, !isEmailValid && { opacity: 0.5 }]}
          onPress={() => Alert.alert("Thanks for subscribing! Stay tuned.")}
          disabled={!isEmailValid}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubscribeScreen;
