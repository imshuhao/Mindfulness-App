import React, { useState, useCallback, useRef } from "react";
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AudioSlider from '../components/AudioSlider';
import styles from '../styles/styles';

export default function AudioPlayScreen({route, navigation}) {
    // const { audioURL } = route.params;
    // const [playing, setPlaying] = useState(false);

    return (

        <View style={[styles.StandardContainer, {
                flex: 0,
                flexDirection: "column",
                justifyContent: "flex-start",
                marginTop: 100,
                marginBottom: 5,
            }]}>

            <View style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-between",
                }}>

                <Text style={[styles.StandardText, {flex: 5}]}>
                    Audio name
                </Text>

                <TouchableOpacity 
                    style={[{flex: 1}]}
                >
                    <Text style={styles.StandardText}>Edit</Text>
                </TouchableOpacity>
                

            </View>

            <AudioSlider audio="https://www.buzzsprout.com/1853797/9885085-sex-dating-and-relationships-with-spinal-cord-injury.mp3"/>

        </View>
  );

}