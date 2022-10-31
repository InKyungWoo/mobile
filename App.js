import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native"; //view, scrollview, stylesheet 쓸거임
import Constants from 'expo-constants';

const App = () => {
  return (<>
    <View style={{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container, styles.playingSpace]}>  

    </View>

    <ScrollView style={[styles.container]}>
      <View style={[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button 
            title="CHANGE FLEX DIRECTION"
            onPress={() => console.log("CHANGE FLEX DIRECTION")}
          />
        </View >
        <View style={[styles.buttonView]}>
          <Button 
            title="CHANGE JUSTIFY CONTENT"
            onPress={() => console.log("CHANGE JUSTIFY CONTENT")}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button 
            title="CHANGE ALIGN ITEMS"
            onPress={() => console.log("CHANGE ALIGN ITEMS")}
          />
        </View>
        <View style={[styles.buttonView]}> 
          <Button 
          title="CHANGE DIRECTION"
          onPress={() => console.log("CHANGE DIRECTION")}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button 
          title="CHANGE FLEX WRAP"
          onPress={() => console.log("CHANGE FLEX WRAP")}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button 
          title="ADD SQURE"
          onPress={() => console.log("ADD SQURE")}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button 
          title="DELETE SQUARE"
          onPress={() => console.log("DELETE SQUARE")}/>
        </View>
      </View>
    </ScrollView>

  </>);
}

const styles = StyleSheet.create({  //여기에 스타일 만들고 위에 view에 연결해줘야함
  container: {
    height:'50%' //높이 반반으로
  },
  playingSpace:{
    backgroundColor: 'lightyellow',
    borderColor: 'blue',
    borderWidth: 3
  },
  controlSpace: {
    backgroundColor: '#A5A5A5',
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  buttonView: {
    width: '50%',
    padding: 10
  }
});

export default App;