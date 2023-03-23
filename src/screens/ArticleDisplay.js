import * as React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Heading } from 'native-base';

function ArticleDisplayScreen({route, navigation}) {
  const { image, title, text, level, category, url } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start' }}>
        {/* <Text>ArticleDisplayScreen</Text> */}
        {/* <Text>{image}</Text> */}
        <Heading>{title}</Heading>
        {/* <Text>{title}</Text> */}
        <Text>Level: {level}</Text>
        <Text>Categories: {category}</Text>
        <Text>{text}</Text>
        {/* <Text>{url}</Text> */}
        {/* <WebView
          originWhitelist={['*']}
          source={{ html: text }}
          style={{flex: 1}}
        /> */}
      <WebView
        source={{ uri: url }}
        style={{ marginTop: 20 }}
      />

      </View>
    );
}

export default ArticleDisplayScreen;