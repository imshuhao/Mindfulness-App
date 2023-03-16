import * as React from 'react';
import { View, TouchableOpacity, SafeAreaView, FlatList, Text, Animated, StyleSheet, StatusBar } from 'react-native';
import ArticleWidget from '../components/ArticleWidget';
import PodcastWidget from '../components/PodcastWidget';

import { articles } from '../constants/db';
import * as rssParser from 'react-native-rss-parser';


const podcasts = []

const ArticleItem = ({image, title, text, level, category, url, navigation}) => (
  <TouchableOpacity onPress={() => {navigation.navigate('ArticleDisplay', {
    image: image,
    title: title,
    text: text,
    level: level,
    category: category,
    url: url
    })}}>
  <View style={styles.item}>
    <ArticleWidget
      // key={index}
      image={image}
      title={title}
      text={text}
      level={level}
      category={category}
    />
  </View>
  </TouchableOpacity>
);

const AudioItem = ({title, description, url, published, navigation}) => (
  <TouchableOpacity onPress={() => {navigation.navigate('AudioPlay', {
    title: title,
    description: description,
    url: url,
    published: published
    })}}>
  <View style={styles.item}>
    <PodcastWidget
      title={title}
      description={description}
      url={url}
      published={published}
    />
  </View>
  </TouchableOpacity>
);



export default function ArticleScreen({ navigation }) {
  fetch('https://feeds.buzzsprout.com/1853797.rss')
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
    // console.log(rss.title);
    // console.log(rss.items.length);
    for (let i = 0; i < rss.items.length; i++) {
      podcasts.push({
        id: i,
        title: rss.items[i].title,
        description: rss.items[i].description,
        url: rss.items[i].enclosures[0].url,
        published: rss.items[i].published
      })
    }
  });
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
        <SafeAreaView style={styles.container}>

        <Text>Podcasts</Text>
        <FlatList
        horizontal={true}
        data={podcasts}
        initialNumToRender={4}
        // refreshing={loading}
        renderItem={({item}) => 
        <AudioItem
        title={item.title}
        description={item.description}
        url={item.url}
        published={item.published}
        navigation={navigation}
        >
        </AudioItem>
      }
        keyExtractor={item => item.id}
      />


      <Text>Articles</Text>
      <FlatList
        horizontal={true}
        data={articles}
        initialNumToRender={4}
        // refreshing={loading}
        renderItem={({item}) => 
          <ArticleItem 
          image={item.attachment}
          title={item.title}
          text={item.description}
          level={item.level}
          category={item.categories}
          url={item.url}
          navigation={navigation}
          />
      }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 32,
  },
});
