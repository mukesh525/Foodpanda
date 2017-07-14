/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import { AppRegistry,NavigatorIOS,Text,AsyncStorage} from 'react-native';

 import * as firebase from "firebase";

 import Home from "./includes/views/home";
 import Login from "./includes/views/login";
 import Firebase from "./includes/firebase/firebase";
 import {StackNavigator,TabNavigator } from 'react-navigation';

 Firebase.initialise();
 const foodpanda = StackNavigator({

    Home: {screen: Home },
    Login: { screen: Login},


   }, {

 });


//var response = await AsyncStorage.getItem('response');

 AppRegistry.registerComponent("foodpanda", () => foodpanda);
