import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

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
    <Animated.Image
      source={{uri}}
      style={[
        {
          position: 'absolute',
          top: height / 2 - IMAGE_HEIGHT / 2,
          zIndex: 100,
          width,
          height: width,
        },
        animationStyle,
      ]}
    />
  );
};

export default OverlayImage;
