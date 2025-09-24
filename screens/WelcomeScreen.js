import  React from 'react';
import { View, Text, Image,Pressable, StyleSheet } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        style={styles.logo}
        source={require('../assets/little-lemon-logo.png')}
      />
      
      {/* About text */}
      <Text style={styles.text}>
        Little Lemon is a Mediterranean restaurant,
        serving cocktails and Mediterranean food items.
      </Text>
      
      {/* Newsletter button */}
       {/* <Pressable style={styles.Subscribe} onPress={() => navigation.navigate("SubscribeScreen")}><Text>   SubscribeScreen </Text></Pressable> */}
       {/* <Pressable style ={styles.MenuScreenOn} onPress ={() => navigation.navigate("MenuScreen")}><Text>MenuScreen</Text></Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  Subscribe:{
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:7,
    backgroundColor:'rgba(245, 234, 142, 1)',
  },
  MenuScreenOn:{
   paddingHorizontal:20,
   paddingVertical:10,
   borderRadius:8,
   backgroundColor:'rgba(245, 234, 142, 1)',
    },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;