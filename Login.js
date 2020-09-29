import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, Button, Text, View, Switch} from 'react-native';
import * as firebase from 'firebase';
//import PasswordInputText from 'react-native-hide-show-password-input';

export default class Login extends Component<Props> {
  static navigationOptions = {
    title: 'Login',
  };


  constructor(props) {
    super(props);
    this.state = {
      u_name: '',
      pass: '',
    }

    this.login = this.login.bind(this);

    firebase.initializeApp({
    apiKey: "AIzaSyC78siiF8KSVpSVlcqvFzWXROqL9MaAfRY",
    authDomain: "iot-home-9e814.firebaseapp.com",
    databaseURL: "https://iot-home-9e814.firebaseio.com",
    storageBucket: "iot-home-9e814.appspot.com"
});
  }

  async login() {

    try {
        await firebase.auth()
            .signInWithEmailAndPassword(this.state.u_name, this.state.pass);

        console.warn("Logged In!");
        const {navigate} = this.props.navigation;
        navigate('ProfileScreen', {
          userName:this.state.u_name
        });
        // Navigate to the Home page

    } catch (error) {
        console.warn(error.toString())
    }

}


  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={styles.container0}>
        <View style={styles.container1}>
          <Text style={styles.welcome}>SMART HOME
          </Text>
        </View>

        <View style={styles.container2}>

          <TextInput style={styles.fields}
          placeholder="Enter User Name"
          //value={this.state.u_name: }
          //onChangeText{(u_name) => {
            //this.setState({ u_name: true })
          //}}
          onChangeText = {(u_name) => this.setState({u_name})}
          />
          <TextInput style={styles.fields}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText = {(pass) => this.setState({pass})}
          />
          <Button style={{
            //textAlign: 'center',
            backgroundColor: 'red',
            color: '#1e4759',
            marginTop: 30,
            width: '70%',
          }}
          title="Login"
          onPress={this.login }
          //onPress={() => navigate('ProfileScreen')}
          />

          <Text
            style={styles.instructions}
            onPress={() => navigate('SignUp')}>New User? Sign Up</Text>

        </View>

      </View>
    );
  }
} // class end


const styles = StyleSheet.create({
  container0: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    //backgroundColor: '#04415c',
    backgroundColor: '#1e4759',
  },
  container1: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    //backgroundColor: '#04415c',
    backgroundColor: '#1e4759',
    fontFamily: "vincHand"
  },
  container2: {
    flex: 0.7,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    //backgroundColor: '#04415c',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'left',
    margin: 10,
    color: '#ffffff',
    fontFamily: "coolJazz"
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
    marginTop: 30,
  },
  udit: {
    //textAlign: 'center',
    backgroundColor: '#1e4759',
    color: '#1e4759',
    marginTop: 30,
    width: '70%',
  },
});
