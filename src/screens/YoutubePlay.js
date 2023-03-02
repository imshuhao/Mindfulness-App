import React, { useState, useCallback, useRef } from "react";
import { View, Text, Button, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YoutubePlayer from "react-native-youtube-iframe";


// export default function YouTubePlayScreen({route, navigation}) {
//     const { videoId } = route.params;
//     var url = "https://www.youtube.com/watch?v="+videoId;
//         return (
//         <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
//             <WebView
//             source={{ uri: url }}
//             style={{ marginTop: 20 }}
//             />
//         </View>
//         );
// }

export default function YouTubePlayScreen({route, navigation}) {
    const { videoId } = route.params;
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <View>
        <YoutubePlayer
            height={300}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
    );
}