import React, { useState } from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native"; //view, scrollview, stylesheet 쓸거임
import Constants from 'expo-constants';

// props로 전달 받아서 navigation!!
const Layout = (props) => {
  const {navigation} = props;     
  
  // initialize state and call setState to change
  const flexDirectionsArray = ['row', 'row-reverse', 'column', 'column-reverse'];
  // flexDirection 배치방향 (row는 가로로 column은 세로로, reverse는 거꾸로)
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ];
  const alignItems = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
  const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
  const directions = ['inherit', 'ltr', 'rtl'];

  // const [변경할 변수 이름, 변경하는 함수 이름] =useState(기본값);
  const [flexDirectionIndex, setFlexDirection] = useState(0);          // state 연결
  const [justifyContentIndex, setJustifyContent] = useState(0);
  const [alignItemIndex, setAlignItem] = useState(0);
  const [wrapIndex, setWrap] = useState(0);
  const [directionIndex, setDirection] = useState(0);

  const hookedStyles = {    // 훅스타일 정의                      
    flexDirection: flexDirectionsArray[flexDirectionIndex],  // 원래는 row, column 등 들어가는데 이렇게 쓰면 바꿀 수 있음
    justifyContent: justifyContents[justifyContentIndex], 
    alignItems: alignItems[alignItemIndex],
    flexWrap: wraps[wrapIndex],
    direction: directions[directionIndex]
  }  
  
  const changeSetting = (value, options, setterfunction) => {  // 함수로 세팅값들 정의하고 밑에서 호출
    var targetValue = 0;
    if (value == options.length - 1) {
      targetValue = 0;    
    } else {
      targetValue = value + 1;
    }
    setterfunction(targetValue);
    console.log(options[targetValue]);
  };

  const Square = () => {
    const sqStyle = {
      width : 50,
      height : 50,
      backgroundColor : randomHexColor()
    };
    return <View style={sqStyle} />;
  }

  const [squares, setSquares] = useState([Square(), Square(), Square()]);


  // view에 훅스타일 추가
  return (<> 
    <View style={{paddingTop:Constants.statusBarHeight}}></View>  
    <View style={[styles.container, styles.playingSpace, hookedStyles]}>  
      {squares.map(elem => elem)}  
    </View>

    <ScrollView style={[styles.container]}>
      <View style={[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button 
            title="CHANGE FLEX DIRECTION"
            onPress={() => changeSetting(flexDirectionIndex, flexDirectionsArray, setFlexDirection)}
          />
        </View >
        <View style={[styles.buttonView]}>
          <Button 
            title="CHANGE JUSTIFY CONTENT"
            onPress={() => changeSetting(justifyContentIndex, justifyContents, setJustifyContent)}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button 
            title="CHANGE ALIGN ITEMS"
            onPress={() => changeSetting(alignItemIndex, alignItems, setAlignItem)}
          />
        </View>
        <View style={[styles.buttonView]}> 
          <Button 
          title="CHANGE DIRECTION"
          onPress={() => changeSetting(directionIndex, directions, setDirection)}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button 
          title="CHANGE FLEX WRAP"
          onPress={() => changeSetting(wrapIndex, wraps, setWrap)}/>
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
        <View style={[styles.buttonView]}>
        <Button 
          title="GO TO HOME"          // 홈으로 이동 버튼 추가
            onPress={() => navigation.navigate('Home')}/>
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

export default Layout;