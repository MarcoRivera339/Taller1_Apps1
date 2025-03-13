import React from 'react'
import { Text } from 'react-native'
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
  )
}

export default App;
