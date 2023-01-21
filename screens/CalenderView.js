import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native";

import { useState, useContext, useEffect } from "react";
import { Calendar } from "react-native-calendars";
import { format } from "date-fns";
import { todayString } from "react-native-calendars/src/expandableCalendar/commons";
// npm install --save react-native-calendars
// npm install date-fns


const CalendarView = (props) => {

  const [selectedDate, setSelectedDate] = useState(format(new Date(), "MM월 dd일, yyyy"));
  
  // 선택된 날짜에 중요 일정 있으면 alert 메세지 띄워주기
  // 근데 왜 한 번씩 밀려서 실행되는지 모르겠다..ㅠㅠㅠ 분명 Log는 잘 찍히는데..
  const task  = (selectedDate) => {
    if (selectedDate == '2022-12-15') {
      alert("컴구 기말고사..살려줘")
    } else if (selectedDate == '2022-12-16') {
      alert("컴프 기말고사..")
    } else if (selectedDate == '2022-12-19') {
      alert("컴네 기말고사..")
    } else if (selectedDate == '2022-12-01') {
      alert("Happy Birthday Me 🍰")
    }
  }

  // 밑에서 multi dot로 설정
  const markedDates = {}

  const exam = {key: 'exam', color: 'lightgreen'};
  const vacation = {key: 'vacation', color: 'cornflowerblue'};
  const birthday = {key: 'vacation', color: 'red'};

  // 오늘 날짜 보여주기
  const ShowCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + '년 ' + month + '월 ' + date + '일';
   }
  
  const todayDate = ShowCurrentDate();
  
  /*
  // 현재 시간 보여주기
  const ShowCurrentTime=()=>{

    var hour = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    return hour + ":" + min + ":" + sec;
   }
  
   const time = ShowCurrentTime();
   */
   
   const currtime = currTime();
   
   // useEffect 사용해서 현재 시간 동적으로 보여주기!!
   function currTime() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return (() => clearInterval(id))
    }, []);
    
    return time.toLocaleTimeString()
  }
    

  return (
    <View>
      <Text style={{marginTop:25, fontSize: 20, textAlign:'center',fontWeight: 'bold'}}> Today is</Text>
      <Text style={styles.date}>👉🏻 { (todayDate) }  👈🏻</Text>  
      <Text style={{textAlign:'center', marginTop:10, fontSize:15}}> 🕗 { (currtime) }  </Text>  
      
      <Calendar style={styles.calendar} 
        
        markingType={'multi-dot'}
        markedDates={{
          '2022-12-01': { dots: [birthday]},
          '2022-12-15': { dots: [exam]},
          '2022-12-16': { dots: [exam]  },
          '2022-12-19': { dots: [exam]  },
          '2022-12-20': { dots: [vacation]},
          '2022-12-21': { dots: [vacation]},
          '2022-12-22': { dots: [vacation]},
          '2022-12-23': { dots: [vacation]},
          [selectedDate]: {
            selected: true,
            marked: markedDates[selectedDate]?.marked,
          }
        }}

        theme={{
          selectedDayBackgroundColor: '#77aa7c',
          selectedDayTextColor: 'white',
          arrowColor: '#009688',
          dotColor: '#009688'
        }} 

        onDayPress={(day) => {
          task(selectedDate),                    // 날짜에 따라 일정 alert
          console.log('selected day', day),      // 선택된 날짜 log 찍기
          setSelectedDate(day.dateString)        // 선택된 날짜 marked
        }} 
      />

      <Text style={{marginTop: 10, textAlign:'center', color: '#83968c', fontSize: 16}}>
        selected : { selectedDate }
      </Text> 
      
      <Text style={styles.monthTasks}> Tasks this month</Text>
      <Text style={styles.hbd}>
        🎂 12/1 HBD InKyung ❣️ 
      </Text>
      <Text style={styles.exam}>
        ✏️ 12/15 컴퓨터구조 Final {"\n"}
        ✏️ 12/16 컴퓨터프로그래밍 Final {"\n"}
        📖 12/16 캡스톤디자인 최종보고서 {"\n"}
        ✏️ 12/19 컴퓨터네트워크 Final 
      </Text>
      <Text style={styles.vacation}>
       🌊 12/20~12/23 vacation to 부산 💙💙{"\n"}
      </Text>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    marginTop: 20,               // 위 공간 여백 주기
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  date : {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 23,
    color: '#5f8563',
    lineHeight: 25,
    fontWeight: 'bold'
  },
  hbd : {
    fontSize: 15,
    color: 'black',
    marginTop: 15,
    marginLeft: 30,
    lineHeight: 25.
       
  },
  exam : {
    fontSize: 15,
    color: '#009688',
    marginLeft: 30,
    lineHeight: 25             // 줄 간격 조정
  },
  vacation : {
    fontSize: 15,
    color: 'black',
    marginLeft: 30,
    lineHeight: 25,
    color: 'cornflowerblue'  
  },
  monthTasks: {
    marginTop: 25,
    paddingLeft:30,
    fontSize:20,
    textDecorationLine: "underline",
    textShadowOffset: {width:7, height:4},
    textShadowColor: '#6bc9bf',
    textShadowRadius: 2,
    
  }
});

export default CalendarView;