import React from 'react';
import { View, Image, Button, StyleSheet, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import LogoImage2 from '../assets/gowell_logo2.png';
import SignUpPage from '../screens/SignUpPage';
import LogInPage from '../screens/LogInPage';
import SplashScreen from '../screens/SplashScreen';

const LoginScreen = ({ navigation }) => {
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToLogIn = () => {
    navigation.navigate('LogIn');
  };

  const goToSplash = () => {
    navigation.navigate('SplashScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={LogoImage2} style={styles.logo} />
      <TouchableOpacity
        style={styles.loginbutton}
        onPress={goToLogIn} 
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
          style={styles.signupbutton}
          onPress={goToSignUp} 
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={SplashScreen}>
          <View style={styles.backLinkContainer}>
            <Text style={styles.backLink}>Back</Text>
          </View>
        </TouchableWithoutFeedback>
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
    paddingHorizontal: 75,
    borderRadius: 50, 
    margin: 10,
    bottom:'6%'
  },
  signupbutton: {
    backgroundColor: '#0B3954',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 50, 
    margin: 10,
    bottom:'7.5%'
  },  
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backLink: {
    fontSize: 16,
    color: '#0B3954',
    fontWeight: 'bold',
    bottom:'300%'
  },
  backLinkContainer: {

  },
});

export default LoginScreen;