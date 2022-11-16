import React from "react";
import { Text, Button, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

function Home ( {navigation} ) {
  return (  // 기존<> 에서 <View>로 바꾸면 스타일 적용 가능!
    <View style={styles.container}>    
      <Text> Hello Home </Text>
      <Image
        source={require('../assets/frog-1371919.png')}    // 개구리 이미지 삽입
        style={{width:400, height:400}}
      />

      <TouchableOpacity
        style={styles.buttonContainer}                    // 버튼 박스 생성, 스타일은 buttonContainer에서 설정
        onPress={() => navigation.navigate('Layout')}     // 누르면 Layout으로 이동
      >
        <Text style={styles.buttonTest}>Go To Layout</Text>     
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',    // 개구리 중앙 정렬
    alignItems:'center',        // 버튼 중앙 정렬
    backgroundColor:'#ebebeb'   // 바탕색 옅은 회색
  },
  buttonContainer:{
    backgroundColor:'black',
    borderRadius:5,
    padding:10,
    margin:20
  },
  buttonTest:{
    fontSize:20,
    color:'#fff'
  }
})

export default Home;