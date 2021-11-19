import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import {commonStyles, width, height} from '../styles';

const IMAGE_HEIGHT = width;

const OverlayImage = ({uri}) => {
  const animation = useSharedValue(0);
  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(
        withTiming(animation.value, {duration: 500}),
        2,
        true,
      ),
    };
  });

  useEffect(() => {
    animation.value = 1;
  });

  return (
    <Animated.Image source={{uri}} style={[styles.image, animationStyle]} />
  );
};

const styles = StyleSheet.create({
  image: {
    ...commonStyles.alignments.absolute,
    top: height / 2 - IMAGE_HEIGHT / 2,
    zIndex: 100,
    width,
    height: width,
  },
});

export default OverlayImage;
