import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import { commonStyles, width, height } from '../styles';

const IMAGE_HEIGHT = width;

const AnimatedImage = Animated.createAnimatedComponent(FastImage);

const OverlayImage = ({ uri }) => {
  const animation = useSharedValue(0);
  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(
        withTiming(animation.value, { duration: 500 }),
        2,
        true,
      ),
    };
  });

  useEffect(() => {
    animation.value = 1;
  });

  return (
    <View style={styles.imageContainer}>
      <AnimatedImage source={{ uri }} style={[styles.image, animationStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width,
    height: width,
  },
  imageContainer: {
    ...commonStyles.alignments.absolute,
    top: height / 2 - IMAGE_HEIGHT / 2,
    zIndex: 200,
    elevation: 3,
  },
});

export default OverlayImage;
