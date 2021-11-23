import React, { memo } from 'react';
import FastImage from 'react-native-fast-image';
import { View, Text, StyleSheet } from 'react-native';
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
      <FastImage
        style={styles.avatar}
        source={{ uri: avatar, priority: FastImage.priority.normal }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.title}>{fileName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.alignments.row,
    ...commonStyles.alignments.alignCenter,
    height: LISTITEM_HEIGHT,
    paddingHorizontal: SIZES.m,
  },
  avatar: AVATAR_SIZE,
  title: {
    flex: 1,
    marginLeft: SIZES.xl,
    fontSize: SIZES.l,
    fontFamily: fonts.primary,
  },
});

export default memo(ListItem);
