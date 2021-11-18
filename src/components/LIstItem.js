import React from 'react';
import {View, Text} from 'react-native';
import Avatar from './Avatar';

const ListItem = () => {
  const variable = 100;
  return (
    <View>
      <Avatar />
      <Text>This is list item</Text>
    </View>
  );
};

export default ListItem;
