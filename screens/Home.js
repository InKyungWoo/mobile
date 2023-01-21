import React from "react";
import { Text, Button, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Share } from "react-native";


function Home ( {navigation} ) {

  const link = () => {
    Linking.openURL("https://velog.io/@chacha_w/12.-%EA%B8%B0%EB%A7%90-%EA%B3%BC%EC%A0%9C")
  }

  return (  // 기존<> 에서 <View>로 바꾸면 스타일 적용 가능!
    <View style={styles.container}>    
      <Text style={{fontSize:17, padding:5, color:'#393026'}}> 🌸 저희집 고냥이 봄이입니다 🌸 </Text>
      <Image
        source={require('../assets/IMG_5373.jpg')}        // 귀여운 봄이 사진으로 변경
        style={{width:400, height:400}}
      />

      <TouchableOpacity
        style={styles.buttonContainer}                    // 버튼 박스 생성, 스타일은 buttonContainer에서 설정
        onPress={() => navigation.navigate('Layout')}     // 누르면 Layout으로 이동
      >
        <Text style={styles.buttonTest}>Go To Layout</Text>     
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}                    // 누르면 velog로 이동하는 버튼 만들기
        onPress={() => link()}     
      >
        <Text style={styles.buttonTest}>Go to Inkyung's velog</Text>     
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',    // 사진 중앙 정렬
    alignItems:'center',        // 버튼 중앙 정렬
    backgroundColor:'#c3beb8'   // 바탕색 옅은 베이지로 변경
  },
  buttonContainer:{
    backgroundColor:'#49544c',
    borderRadius:5,
    padding:10,
    margin:20
  },
  buttonTest:{
    fontSize: 18,
    color:'#fff'
  }
})

export default Home;