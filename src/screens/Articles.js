import * as React from 'react';
import { View, ScrollView, SafeAreaView, FlatList, Text, Animated, StyleSheet, StatusBar } from 'react-native';
import Widget from '../components/CarouselWidget';

import { articles } from '../constants/db';

const Item = ({image, title, text, level, category}) => (
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
);



function ArticleScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ArticleScreen</Text>
        <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={articles}
        renderItem={({item}) => 
          <Item 
          image={item.Attachment}
          title={item.Title}
          text={item.Description}
          level={item.Level}
          category={item.Categories}
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});



export default ArticleScreen;