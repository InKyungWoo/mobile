import React from "react";
import { Button, View, ScrollView, StyleSheet } from "react-native"; //view, scrollview, stylesheet 쓸거임

const App = () => {
  return (<>
    <View style={[styles.container, styles.playingSpace]}>

    </View>
    <ScrollView style={[styles.container]}>
      <View style={[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button title="1"/>
        </View >
        <View style={[styles.buttonView]}>
          <Button title="2"/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="3"/>
        </View>
        <View style={[styles.buttonView]}> 
          <Button title="4"/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="5"/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="6"/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="7"/>
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