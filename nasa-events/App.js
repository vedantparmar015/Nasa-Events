import React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/loginScreen";
import LoadingScreen from "./screens/loadingScreen";
import Home from "./screens/homeScreen";
import firebase from "firebase";
import { firebaseConfig } from "./config";

export default function App(){
  return(
    <AppNavigator/>
  )
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  Home: Home
})

const AppNavigator = createAppContainer(AppSwitchNavigator)