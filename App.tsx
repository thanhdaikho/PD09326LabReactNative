import React, { Component } from 'react'
import { Text, View } from 'react-native'
// import Lab4 from './src/screens/lab4'
// import Login from './src/screens/lab4/Login'
// import Index from './src/screens/lab5/index'
// import Index from './src/screens/lab6/Bai1'
import LabTam from './src/screens/lab8/index'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './src/screens/lab8/DetailScreen';
import EditScreen from './src/screens/lab8/EditScreen';
const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='mainscreen'>
        <Stack.Screen name='mainscreen' component={LabTam} options={{headerShown: false}}/>
        <Stack.Screen name='detailscreen' component={DetailScreen} options={{headerShown: false}}/>
        <Stack.Screen name='editscreen' component={EditScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App 