import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Go to Breath"
          onPress={() => navigation.navigate('Breath')}
        />
        <Button
          title="Play YouTube Video"
          onPress={() => navigation.navigate('YouTubePlay', {videoId: 'ZTJhzjF480s'})}
        />
      </View>
    );
}
