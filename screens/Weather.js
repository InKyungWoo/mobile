import React from "react";
import { Text, Alert, StyleSheet, View, Image } from "react-native";
import * as Location from 'expo-location';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { REACT_APP_WEATHER_KEY } from "@env";
import axios from "axios";

const weatherOptions = {        // weatherOption 만들고 밑에서 갖다 쓸 수 있게 만들기
  Clear : {
    iconName : "weather-sunny"
  },
  Clouds : {
    iconName : "weather-cloudy"
  },
  Rain : {
    iconName : "rainy-outline"
  },
  Snow : {
    iconName : "snowflake-8"
  },
  Fog : {
    iconName : "weather-fog"
  }, 
  Thunderstorm : {
    iconName : "thunderstorm-outline"
  },
  Drizzle : {
    iconName : "cloud-drizzle"
  },
  Smoke : {
    iconName : "smoke"
  },
  Haze : {
    iconName : "weather-hazy"
  },
  Tornado : {
    iconName : "weather-tornado"
  }

}

export default class Weather extends React.Component {

  state = {
    cond : "Clear"
  }

  getWeather = async (latitude, longitude) => {
    try {
        const {data} = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_WEATHER_KEY}&units=metric`    // 단위 바꾸기
        );
        console.log(data);        // data 가져옴
        console.log("temperature : " + data.main.temp);
        console.log("weather : " + data.weather[0].main);
        console.log("icon : " + data.weather[0].icon);

        this.setState(
          {
            cond : data.weather[0].main, 
            temp : data.main.temp,
            icon : data.weather[0].icon
          });        // 이대로 갖다 쓸 수 있게 설정, render에 연결
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

  render () {       // 화면 UI

    const {cond,temp,icon} = this.state;           // 위에서 설정한 cond,temp 가져오기
    return (
      <View style={[styles.container]}>
        <View style={[styles.halfcontainer]}>
          <Text style={styles.text}>오늘 날씨는</Text>
          <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={128} color="blue" />
          <Text style={styles.temptitle}> {temp} {"\n"} </Text>
          <Text> {cond} </Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  halfcontainer: {
      flex: 1,
      justifyContent : "center",
      alignItems: "center",
  },
  temptitle: {
      fontSize: 24,
  },
  text: {
    marginBottom:30,
    fontSize:20
  }
});