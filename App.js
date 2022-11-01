import React, { useState } from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native"; //view, scrollview, stylesheet 쓸거임
import Constants from 'expo-constants';


const App = () => {
  
  // initialize state and call setState to change
  const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
  // flexDirection 배치방향 (row는 가로로 column은 세로로, reverse는 거꾸로)

  const [flexDirection, setFlexDirection] = useState(0);          // state 연결
	// const [변경할 변수 이름, 변경하는 함수 이름] =useState(기본값);

  const Square = () => {
    const sqStyle = {
      width : 50,
      height : 50,
      backgroundColor : randomHexColor()
    };
    return <View style={sqStyle} />;
  }

  const [squares, setSquares] = useState([Square(), Square(), Square()]);



  return (<>
    <View style={{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container, styles.playingSpace]}>
      {squares.map(elem => elem)}  
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
          onPress={() => setSquares([...squares, Square()])}/>
        </View>
        <View style={[styles.buttonView]}>
        <Button 
          title="DELETE SQUARE" 
            onPress={() => setSquares(squares.filter((v, i) => i != squares.length-1))}/>
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
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3
  },
  controlSpace: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  buttonView: {
    width: '50%',
    padding: 10
  }
});

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);     // 소수점 버림, 16진수로 자름
  })
}

export default App;