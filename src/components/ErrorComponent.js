import React from 'react';
import {View, Text} from 'react-native';

const ErrorComponent = ({description}) => {
  return (
    <View>
      <Text>{description}</Text>
    </View>
  );
};

export default ErrorComponent;
