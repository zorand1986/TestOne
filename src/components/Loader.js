import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS, commonStyles} from '../styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.fullPage,
    ...commonStyles.alignments.centerBasic,
    backgroundColor: COLORS.backgroundPrimary,
  },
});

export default Loader;
