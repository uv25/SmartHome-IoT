import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, Button, Text, View, Switch} from 'react-native';

export default class Login extends Component<Props> {

  render() {
    return(
      <View style={styles.container0}>
        <Text style = {styles.fields}>List Of Devices</Text>
      </View>
    )
  }
}


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
  },
  fields: {
    //flex: 0.2,
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 10,
    backgroundColor: '#F5FCFF',
    borderBottomWidth: 2,
    //color: '#000000',
    borderRadius: 14,
    width: '70%',
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
