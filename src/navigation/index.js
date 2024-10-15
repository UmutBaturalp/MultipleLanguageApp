import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
const index = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default index;
