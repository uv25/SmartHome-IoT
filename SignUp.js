import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
import {Platform, StyleSheet, TextInput, Button, Text, View, PermissionsAndroid} from 'react-native';
import wifi from 'react-native-android-wifi-manager';
import * as firebase from 'firebase';
//import wifi from 'react-native-android-wifi';

export default class SignUp extends Component<Props> {
  static navigationOptions = {
    title: 'Sign Up',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      c_pass: '',
    }
    this.validate = this.validate.bind(this);
    this.signup = this.signup.bind(this);

  }

  /*function fun() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Wifi networks',
          'message': 'We need your permission in order to find wifi networks'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Thank you for your permission! :)");
      } else {
        console.log("You will not able to retrieve wifi available networks list");
      }
    } catch (err) {
      console.warn(err)
    }
  }
  */
  async fun() {
    console.warn('inside fun');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Wifi networks',
          'message': 'We need your permission in order to find wifi networks'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Thank you for your permission! :)");
        console.warn('granted');
      } else {
        console.log("You will not able to retrieve wifi available networks list");
        console.warn('not granted');
      }
    } catch (err) {
      console.warn(err)
      console.warn('catched');
    }

    wifi.isEnabled((isEnabled) => {
  if (isEnabled) {
    console.warn("wifi service enabled");
  } else {
    console.warn("wifi service is disabled");
  }
});

    wifi.setEnabled(true);

    wifi.isEnabled((isEnabled) => {
  if (isEnabled) {
    console.warn("wifi service enabled");
  } else {
    console.warn("wifi service is disabled");
  }
});
    //wifi.disconnect();
    //for(int i = 0; i<50; i++)
    //{
      wifi.findAndConnect('hi', 'QWERTYUIOP', (found) => {
    if (found) {
      console.log("wifi is in range");
      console.warn('connected');
    } else {
      console.log("wifi is not in range");
      console.warn('not connected');
    }
  });
    //}

}


  render()
  {
    //this.fun();
    return (
      <View style={styles.container}>
        <TextInput style = {styles.fields}
        placeholder = 'E-mail'
        onChangeText = {(email) => this.setState({email})}
        />
        <TextInput style = {styles.fields}
        placeholder = 'Password'
        secureTextEntry={true}
        onChangeText = {(pass) => this.setState({pass})}
        />
        <TextInput style = {styles.fields}
        placeholder = 'Confirm Password'
        secureTextEntry={true}
        onChangeText = {(c_pass) => this.setState({c_pass})}
        />
        <Button
          title = 'Sign Up'
          onPress = {this.validate}
        />
      </View>

    );
  }
  validate() {
    if ( (this.state.c_pass == this.state.pass) &&
    this.state.pass !='' && this.state.email != '') {
      console.warn('approved');
      //let e_mail = this.state.email;
      this.signup();
    }
  }

  async signup() {

    try {
        let res = await firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.pass);

        console.warn("Account created");
        console.warn(res);
        user_name = this.state.email.slice(0, this.state.email.indexOf("@"));
        userPath = "/WORKING/" + user_name;
        firebase.database().ref(userPath).set("1111");
        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        console.warn(res);
        console.warn(error.toString())
    }

}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  fields: {
    //flex: 0.2,
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 10,
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    //color: '#000000',
    borderRadius: 14,
    width: '80%',
  },
  instructions: {
    textAlign: 'center',
    color: '#1448f5',
    marginBottom: 5,
  },
  web_page: {
    margin: 10,
    width: '100%',
    height: '70%',
    //color: 'blue'
  }
});
