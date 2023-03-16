import * as React from 'react';
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryWidget from '../components/CategoryWidget';

const categories = [
  {
    id: '1',
    category: 'Pain',
  },
  {
    id: '2',
    category: 'Sleep',
  },
  {
    id: '3',
    category: 'Mindfulness',
  },
  {
    id: '4',
    category: 'Diet',
  }
];


const CategoryItem = ({category, navigation}) => (
  <TouchableOpacity onPress={() => {navigation.navigate('Article')}}>
  <View style={styles.item}>
    <CategoryWidget category={category}></CategoryWidget>
  </View>
  </TouchableOpacity>
);

export default function HomeScreen({ navigation }) {
  var now = new Date();
  var greeting_string;
  if (now.getHours() < 12) {
    greeting_string = "Good Morning";
  } else if (now.getHours() < 18) {
    greeting_string = "Good Afternoon";
  } else {
    greeting_string = "Good Evening";
  }
    return (
        <View 
          style={{
            flex: 1
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center'
            }}>
        <Text style={styles.titleText}>{greeting_string}</Text>
        <FlatList
        horizontal={true}
        data={categories}
        initialNumToRender={4}
        // refreshing={loading}
        renderItem={({item}) => 
        <CategoryItem
        category={item.category}
        navigation={navigation}
        >
        </CategoryItem>
      }
        keyExtractor={item => item.id}
      />
        {/* <CategoryWidget category="Articles"></CategoryWidget> */}
        {/* <Button
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
        <Button
          title="Play Podcast Audio"
          onPress={() => navigation.navigate('AudioPlay', {
            title: "Test Title",
            description: "Test Description",
            url:"https://www.buzzsprout.com/1853797/9885085-sex-dating-and-relationships-with-spinal-cord-injury.mp3",
            published: "AAA"
          })}
        /> */}
      </View>
    );
}


const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});