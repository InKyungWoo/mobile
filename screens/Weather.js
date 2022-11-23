import React from "react";
import { Text, Alert, StyleSheet, View } from "react-native";
import * as Location from 'expo-location';

import { REACT_APP_WEATHER_KEY } from "@env";
import axios from "axios";

export default class Weather extends React.Component {

  getWeather = async (latitude, longitude) => {
    try {
        const {data} = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_WEATHER_KEY}`
        );
        console.log(data);
    } catch(error) {
        Alert.alert("Error", error.message)
    }
};

  getLocation = async () => {   // 비동기적으로 위치 정보 가져오기
    try {
      // await location 
       
      await Location.requestForegroundPermissionsAsync();   // 위치 정보 허용?
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);


      this.getWeather(location.coords.latitude, location.coords.longitude);

    } catch (error) {
      Alert.alert("error", {error})
    }
  };

  componentDidMount() {   // 마운트 될 때 getLocation 호출
    this.getLocation();
  }

  render () {
    <>
    </>
  }

}