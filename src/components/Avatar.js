import React from 'react';
import {View, Image} from 'react-native';

const Avatar = () => {
  return (
    <View>
      <Image
        source={{uri: 'https://github.com/images/error/octocat_happy.gif'}}
        size={50}
      />
    </View>
  );
};

export default Avatar;
