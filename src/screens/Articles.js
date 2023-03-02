import * as React from 'react';
import { View, TouchableOpacity, SafeAreaView, FlatList, Text, Animated, StyleSheet, StatusBar } from 'react-native';
import Widget from '../components/CarouselWidget';

import { articles } from '../constants/db';

const Item = ({image, title, text, level, category, url, navigation}) => (
  <TouchableOpacity onPress={() => {navigation.navigate('ArticleDisplay', {
    image: image,
    title: title,
    text: text,
    level: level,
    category: category,
    url: url
    })}}>
  <View style={styles.item}>
    <Widget
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



export default function ArticleScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ArticleScreen</Text>
        <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={articles}
        initialNumToRender={4}
        // refreshing={loading}
        renderItem={({item}) => 
          <Item 
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
