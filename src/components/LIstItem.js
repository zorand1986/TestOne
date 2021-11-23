import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  AVATAR_SIZE,
  fonts,
  LISTITEM_HEIGHT,
  SIZES,
  commonStyles,
} from '../styles';

const ListItem = ({ fileName, avatar }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <Text style={styles.title}>{fileName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.alignments.row,
    ...commonStyles.alignments.alignCenter,
    height: LISTITEM_HEIGHT,
    marginHorizontal: SIZES.m,
  },
  avatar: AVATAR_SIZE,
  title: {
    marginLeft: SIZES.xl,
    fontSize: SIZES.l,
    fontFamily: fonts.primary,
  },
});

export default memo(ListItem);
