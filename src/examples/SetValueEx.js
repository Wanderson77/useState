import React, {useState} from 'react';

import {
  SafeAreaView, 
  Text, 
  View,
} from 'react-native';

const SetValueEx = () => {
  
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(100000000000);

  setInterval(() => {
    setValueX(valueX + 1);
    setValueY(valueY - 1);
  }, 1000);

  return (
    <SafeAreaView>
      <View>
        {/*
          Text Component will be re-render every time,
          when state changes.
         */}
        <Text>
          {/* valx will change in every second*/}
          {'Hello I am valx. I am increasing ' + valueX}
        </Text>


        <Text>
          {/* valy will change in every second*/}
          {'Hello I am valy. I am decreasing ' + valueY}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SetValueEx;