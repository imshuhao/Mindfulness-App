import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, Text, Box } from "native-base";
// import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './screens/Home';
import BreathScreen from './screens/Breath';
import VideoScreen from './screens/Videos';
import LoginScreen from './screens/Login';
import ArticleScreen from './screens/Articles';
import ArticleDisplayScreen from './screens/ArticleDisplay';
import YouTubePlayScreen from './screens/YoutubePlay';
import AudioPlayScreen from './screens/AudioPlay';

import theme from './styles/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          title: 'Articles',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-variant" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Podcasts"
        component={VideoScreen}
        options={{
          title: 'Videos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="youtube-subscription" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Breath"
        component={BreathScreen}
        options={{
          title: 'Breath',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="spa" color={color} size={size} />
          )
        }}
      />
      {/* <Tab.Screen name="Login" component={LoginScreen} /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTab">
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Videos" component={VideoScreen} />
        <Stack.Screen name="Breath" component={BreathScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ArticleDisplay" component={ArticleDisplayScreen}  options={({ route }) => ({ title: route.params.title })}/>
        <Stack.Screen name="YouTubePlay" component={YouTubePlayScreen} />
        <Stack.Screen name="AudioPlay" component={AudioPlayScreen} />
        
      </Stack.Navigator>
      {/* <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Tab.Screen name="Podcasts" component={PodcastScreen} />
        <Tab.Screen name="Breath" component={BreathScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
