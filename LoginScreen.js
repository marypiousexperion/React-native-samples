import 'react-native-gesture-handler';
import React from 'react';
import {
  TextField,
} from 'react-native-material-textfield';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import { useState } from "react";
const LoginScreen = ({ navigation }) => {
 
  _onPressButton = () => {
    validateUser()
  }

  validateUser = () => {
    if (usr.length == 0) {
      alert('Please enter username')
    } else if (pwd.length == 0) {
      alert('Please enter password')
    } else if (usr == "test" && pwd == 'test') {
      navigation.navigate('Home')
    } else {
      alert("Username or password is incorrect")
    }
  }
  const [usr, setUsr] = useState('');
  const [pwd, setPwd] = useState('');
  return (
    <View style={styles.body}>
      <View style={styles.titleLayout}>
        <Text style={styles.appTitle}>My App</Text>
      </View>
      <View style={styles.sectionContainer}>
        <TextField
          label='Username'
          onChangeText={usr => setUsr(usr)}
          defaultValue={usr}
        />
        <TextField
          label='Password'
          onChangeText={pwd => setPwd(pwd)}
          keyboardType='visible-password'
          defaultValue={pwd}
        />
      </View>
      <View style={styles.button}>
        <Button title="Login" onPress={() => _onPressButton()}></Button>
      </View>
    </View>

  );

  
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  titleLayout: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    padding: 25,
  },
  appTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {

    position: 'absolute',
    bottom: 0,
    alignSelf: "center",
    paddingBottom: 40,
  },

});
export default LoginScreen;