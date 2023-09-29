// LogInPage.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import user1 from '../assets/user1.png';
import Notif from '../assets/Notif_Icon.png';
import Prof from '../assets/Profile_Icon_gray.png';
import Task from '../assets/Task_Icon.png';
import Cam from '../assets/Camera_Icon.png';
import Home from '../assets/Home_Icon.png';

const LogInPage = () => {

  const goToSignUp = () => {
    navigation.navigate('SignUp');
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
      
       <Image source={Home} style={styles.homeIcon} />
       <Image source={Task} style={styles.taskIcon} />
       <Image source={Cam} style={styles.camIcon} />
       <Image source={Notif} style={styles.notifIcon} />
       <Image source={Prof} style={styles.profileIcon} />
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: '0%'
  },
  frame: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white', 
    paddingHorizontal: 10,
  },
  user: {
    width: 70,
    height: 70,
    left: '37%'
  },
  accent: {
    flex: 1,
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: '0%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#0B3954', 
  },
  fillOut: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute', 
    top: '87%', 
    bottom: '0%',
    left: '0%',
    right: '0%',
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 40,
    paddingTop: 30,
    
  },
  homeIcon: {
    right: '30%',
    width: 60,
    height: 60,
  },
  taskIcon: {
    right: '20%',
    width: 60,
    height: 60,
  },
  camIcon: {
    bottom: '5%',
    left: '%',
    width: 70,
    height: 70,

  },
  notifIcon: {
    left: '15%',
    bottom: '1.5%',
    width: 70,
    height: 70,
  },
  profileIcon: {
    left: '20%',
    bottom: '0.5%',
    width: 65,
    height: 65,
  }, 
  
});

export default LogInPage;
