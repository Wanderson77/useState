import React, { useState } from 'react';
import { Text, View } from 'react-native';

const HelloState = () => {
  let [value, setValue] = useState(0);

  setInterval(() => {
    setValue(value + 1);
  }, 1000);

  return(
    <View>
      <Text>{'State value =>' + value}</Text>
    </View>
  );
};

export default HelloState;
