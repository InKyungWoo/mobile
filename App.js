import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native"; //view, scrollview, stylesheet 쓸거임
import Constants from 'expo-constants';

const App = () => {
  return (<>
    <View style={{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container, styles.playingSpace]}>
      <Text>글을 씁니다.</Text>
      <Text>글을 또 씁니다.</Text>
      <Text>import
      정적 import 문은 다른 모듈에서 내보낸 바인딩을 가져올 때 사용합니다.
      가져오는 모듈은 "use strict"의 존재 유무와 상관없이 무조건 엄격 모드입니다. HTML 안에 작성한 스크립트에서는 import를 사용할 수 없습니다.
      함수형 구문을 가진 동적 **import()**도 있으며, type="module"을 필요로 하지 않습니다.
      스크립트 태그의 nomodule 속성을 사용해 하위호환성을 유지할 수 있습니다.</Text>

      <Image source={require('./assets/favicon.png')}/>
      <ImageBackground
        style={{width:200, height:200}}
        source={{
          uri : "https://reactnative.dev/img/tiny_logo.png", //콤마 찍기....
        }}>
        <Text>리액트 네이티브</Text>
      </ImageBackground>

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