import React from 'react';
import { View, Image, Button, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import LogoImage2 from '../assets/gowell_logo2.png';
import SignUpPage from '../screens/SignUpPage';
import LogInPage from '../screens/LogInPage';

const LoginScreen = ({ navigation }) => {
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToLogIn = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={styles.container}>
      <Image source={LogoImage2} style={styles.logo} />
      <TouchableOpacity style={styles.loginbutton}onPress={goToLogIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
          style={styles.signupbutton}
          onPress={goToSignUp} 
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 500,
    height: 500,
  },
  loginbutton: {
    backgroundColor: '#0B3954',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 50, 
    margin: 10,
  },
  signupbutton: {
    backgroundColor: '#0B3954',
    paddingVertical: 10,
    paddingHorizontal: 65,
    borderRadius: 50, 
    margin: 10,
  },  
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;