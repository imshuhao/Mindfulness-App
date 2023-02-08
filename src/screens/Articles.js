import * as React from 'react';
import { View, ScrollView, FlatList, Text, Animated } from 'react-native';
import Widget from '../components/CarouselWidget';

import { articles } from '../constants/db';

const renderArticles = () => {
  return articles.map((article, index) => {
    return (
      <View>
      <Widget
        // key={index}
        image={article.Attachment}
        title={article.Title}
        text={article.Description}
        level={article.Level}
      />
      </View>
    );
  });
};

function ArticleScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ArticleScreen</Text>
        <ScrollView horizontal={true}>
        {renderArticles()}
        </ScrollView>
      </View>
    );
}

export default ArticleScreen;