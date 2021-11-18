import React from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Loader = () => {
  return (
    <View
      style={{
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, .5)',
      }}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;
