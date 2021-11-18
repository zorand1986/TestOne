import React from 'react';
import {View, Text, Image} from 'react-native';
import Avatar from './Avatar';

const ListItem = ({fileName, avatar}) => {
  let parsedFileName;
  function getFileName(obj) {
    if (obj.filename) {
      parsedFileName = obj.filename;
    } else {
      for (let key in obj) {
        getFileName(obj[key]);
      }
    }
  }
  getFileName(fileName);
  console.log({parsedFileName});
  return (
    <View style={{flexDirection: 'row', height: 70, alignItems: 'center'}}>
      <Image style={{width: 50, height: 50}} source={{uri: avatar}} />
      <Text>{parsedFileName}</Text>
    </View>
  );
};

export default ListItem;
