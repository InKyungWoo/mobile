import React, { useState } from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native"; //view, scrollview, stylesheet 쓸거임
import Constants from 'expo-constants';
import MainStackNavigator from "./routes/MainStackNavigator";
import MainTabNavigator from "./routes/MainTabNavigator";


const App = () => {

  return <MainTabNavigator/>;
};

export default App;