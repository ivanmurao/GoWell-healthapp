// SignUpPage.js
import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import user1 from '../assets/user1.png';

const SignUpPage = () => {
  const [isChecked, setChecked] = useState(false);

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
     
      {/* First Layer: Frame */}
      <View style={styles.frame}>
        {/* Second Layer: Accent */}
        <View style={styles.accent} />
      </View>
     
      {/* Third Layer: Fill Out */}
      <View style={styles.fillOut}>
        
        <Image source={user1} style={styles.user} />

        <Text style={styles.title}>Create an Account</Text>
        
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="AARON JAN INLAYO" />

        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} placeholder="aaronjaninlayo@gmail.com" />

        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="aaronjaninlayo123" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="**********" secureTextEntry />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
        />

        <CheckBox
          title="By signing up you accept the Terms of service and Privacy Policy"
          checked={isChecked}
          onPress={() => setChecked(!isChecked)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={goToLogin}>
          <View style={styles.loginLinkContainer}>
            <Text style={styles.loginLinkText}>Already have an account? </Text>
            <Text style={styles.loginLink}>Log in</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  frame: {
    flex: 1,
    position: 'relative', 
    backgroundColor: 'white', 
  },
  user: {
    width: 70,
    height: 70,
    left: '36.5%'
  },
  accent: {
    flex: 1,
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: '70%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#0B3954',
  },
  fillOut: {
    flex: 1,
    position: 'absolute', 
    top: '15%', 
    bottom: '10%',
    left: '7%',
    right: '7%',
    backgroundColor: '#F5F5F5', 
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0B3954',
    left: '15%',
    top: '2%',
  },
  label: {
    fontSize: 12,
    color: '#0B3954',
    paddingTop: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 10,

  },
  signUpButton: {
    backgroundColor: '#0B3954',
    paddingVertical: 12,
    borderRadius: 40,
    marginTop: 20,
    alignItems: 'center',
    bottom:'3%'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 0,
    paddingHorizontal: 0,
  },
  checkboxText: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    bottom: '15%'
  },
  loginLinkText: {
    fontSize: 16,
    color: '#333',
  },
  loginLink: {
    fontSize: 16,
    color: '#0B3954',
    fontWeight: 'bold',
  },
});

export default SignUpPage;
