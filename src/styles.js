import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const SIZES = {
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
};

export const COLORS = {
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F3F3F3',
  backgroundTertiary: '#C8C7CC',
};

export const commonStyles = StyleSheet.create({
  fullPage: {
    width,
    height,
  },
});
