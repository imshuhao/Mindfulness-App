import { Button, VStack, HStack } from 'native-base';
import * as React from 'react';
import { 
  View, 
  TouchableOpacity, 
  FlatList, 
  Text, 
  Animated, 
  StyleSheet, 
  StatusBar } from 'react-native';
import ArticleWidget from '../components/ArticleWidget';
import PodcastWidget from '../components/PodcastWidget';

import getData from '../utils/getData';
import getRss from '../utils/getRss';

var articleIndex = 0;

const scrollToIndex = (ref, index, length) => {
  // let randomIndex = Math.floor(Math.random(Date.now()) * length);
  index = index % length;
  index = index < 0 ? 0 : index;
  ref.scrollToIndex({animated: true, index: index});
}


const onViewableItemsChanged = ({ viewableItems, changed }) => {
  try {
    articleIndex = viewableItems[0].index;
  } catch (error) {
    console.log("Error in onViewableItemsChanged", error);
  }
  // console.log("Visible items are", viewableItems[0].index);
  // console.log("Changed in this iteration", changed);
}

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
  const [podcasts, setPodcasts] = React.useState([]);
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  var articleFlatListRef = null;
  React.useEffect(() => {
    getData("https://mindfulness-backend.imshuhao.repl.co/articles/")
    .then((response) => {
      setArticles(response);
      setLoading(false);
    });
    getRss('https://feeds.buzzsprout.com/1853797.rss')
    .then((response) => {
      setPodcasts(response);
      setLoading(false);
    });
  }, []);

    return (
      <VStack space={4} alignItems="center">
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
        url={item.enclosures[0].url}
        published={item.published}
        navigation={navigation}
        >
        </AudioItem>
      }
        keyExtractor={item => item.published}
      />

      <Text>Articles</Text>
      <FlatList
        ref={(ref) => { articleFlatListRef = ref; }}
        onViewableItemsChanged={onViewableItemsChanged}
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
        keyExtractor={item => item._id}
      />
      <HStack space={100} alignItems="center">
      <Button onPress={() => scrollToIndex(articleFlatListRef, --articleIndex, articles.length)} title="Previos Artiucle">Back</Button>
      <Button onPress={() => scrollToIndex(articleFlatListRef, ++articleIndex, articles.length)} title="Next Article">Next</Button>
      </HStack>
    </VStack>
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
