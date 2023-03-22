import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Box, AspectRatio, Image, Stack, Heading, HStack, MoreIcon, Center } from "native-base";
export default Widget = props => {
  // console.log(props);
    return <Box alignItems="center">
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
    borderColor: "coolGray.600",
    backgroundColor: "gray.700"
  }} _web={{
    shadow: 2,
    borderWidth: 0
  }} _light={{
    backgroundColor: "gray.50"
  }}>
      <Box>
        <AspectRatio w="20%" ratio={16 / 9}>
          {/* <Image source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        }} alt="image" /> */}
        </AspectRatio>
        <Center bg="violet.500" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          Podcast
        </Center>
      </Box>
      <Stack p="4" space={3}>
          <Heading size="md" ml="-1">
            {props.title}
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            {props.published}
          </Text>
      </Stack>
    </Box>
  </Box>;
};