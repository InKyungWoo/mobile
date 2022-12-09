import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Constants from 'expo-constants';
import { useState, useCallback } from "react";
import { TextInput } from "react-native";

import YoutubePlayer from "react-native-youtube-iframe";

const YoutubeViewer = (props) => {
  const [playing, setPlaying] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState("tEm9EyEPMYM");

  const onStateChange = useCallback((state) => {
    if (state === "ended") {                    // props에서 확인 (video has finished playing the video)
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={playingVideoId}               // 이 부분 바뀌면 영상 바뀜!
          onChangeState={onStateChange}
        />
        
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying}        // true면 앞, false면 뒤
        /> 
        <TextInput
        style={styles.input}
        onChangeText={setPlayingVideoId}         // onChange -> videoId 변경
        value={playingVideoId}
      />
        
    </ScrollView>
)

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default YoutubeViewer