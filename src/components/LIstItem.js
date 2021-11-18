import React from 'react';
import {View, Text, Image} from 'react-native';

const ListItem = ({fileName, avatar}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        marginHorizontal: 12,
      }}>
      <Image style={{width: 50, height: 50}} source={{uri: avatar}} />
      <Text style={{marginLeft: 12}}>{fileName}</Text>
    </View>
  );
};

export default ListItem;
