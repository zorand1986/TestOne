import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonStyles, fonts, SIZES } from '../styles';

const ErrorComponent = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.fullPage,
    ...commonStyles.alignments.centerBasic,
  },
  description: {
    fontSize: SIZES.m,
    fontFamily: fonts.primary,
  },
});

export default ErrorComponent;
