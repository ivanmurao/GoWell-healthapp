// LogInPage.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const LogInPage = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent} />
      </View>
     
      <View style={styles.fillOut}>
        <Text style={styles.title}>Log in</Text>

        <Text style={styles.subTitles}>Username or Email</Text>
        <TextInput style={styles.input} placeholder="aaronjaninlayo@gmail.com" />

        <Text style={styles.subTitles}>Password</Text>
        <TextInput style={styles.input} placeholder="**********" />

        <TouchableOpacity style={styles.logInButton}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.horizontalLine}></View>

        <View style={styles.logInWithContainer}>
          <Text style={styles.logInWithText}>Log in with</Text>
        </View>

        <View style={styles.socialMediaIcons}>
          <Image source={require('../assets/Icons.png')} style={styles.icon} />
        </View>
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
    paddingHorizontal: 10,
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
    top: '20%', 
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
    color: '#0B3954'
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
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitles: {
    color: '#0B3954'
  },
    logInButton: {
    backgroundColor: '#0B3954',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    marginVertical: 20,
  },
  logInWithText: {
    color: '#0B3954',
  },
  logInWithContainer: {
    alignItems: 'center',
    paddingBottom: 40, 
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 220,
    height: 37,
    alignItems: 'center',
  },
});

export default LogInPage;
