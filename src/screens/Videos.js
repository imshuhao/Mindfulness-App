import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { videos } from '../constants/videos';


import Greeting from '../components/Greeting';
import { Box, VStack, HStack, Avatar, Spacer } from 'native-base';

export default function VideoScreen({ navigation }) {
  // console.log(videos);
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Greeting name="Videos" />
      // </View>
      <FlatList
        data={videos}
        renderItem={({ item }) => 
      <TouchableOpacity onPress={() => {navigation.navigate('YouTubePlay', {
        videoId: item.videoId,
        title: item.title,
        description: item.description
        })}}>
      <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar size="48px" source={{
          uri: item.thumbnailUrl
        }} />
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.title}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.publishDate}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.videoLength%60 < 10 ? Math.floor(item.videoLength/60) + ":0" + item.videoLength%60 : Math.floor(item.videoLength/60) + ":" + item.videoLength%60}
              </Text>
            </HStack>
          </Box>
          </TouchableOpacity>
      }
        keyExtractor={item => item.videoId}
      />
    );
}
