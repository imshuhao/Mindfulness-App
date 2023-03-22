import * as rssParser from 'react-native-rss-parser';

export default getRss = (url) => {
    return  fetch(url)
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
        // console.log(rss.title);
        // console.log(rss.items.length);
        return rss.items;
    });
  };