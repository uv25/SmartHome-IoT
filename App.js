/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login.js'
import ProfileScreen from './Profile.js'
import SignUp from './SignUp.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  ProfileScreen: {screen: ProfileScreen},
  SignUp: {screen: SignUp}

});
const App = createAppContainer(MainNavigator);


type Props = {};
export default App
