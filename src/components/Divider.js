import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, DIVIDER_HEIGHT } from '../styles';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: DIVIDER_HEIGHT,
    backgroundColor: COLORS.backgroundTertiary,
  },
});

export default Divider;
