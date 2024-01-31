import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { StyledComponent } from 'nativewind'
import { useNavigation } from '@react-navigation/native'

const MainScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const handleClick = () => {
    // Truyền dữ liệu thông qua params
    navigation.navigate('HomeScreen', { screen: 'Home', params: { name } });
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, color: 'black', fontWeight: 800 }}> Hallo, this is Main Screen </Text>
      <TextInput
        placeholder='Name'
        style={{
          width: '80%',
          height: 50,
          marginVertical: 30,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 7,
          paddingStart: 15
        }}
      value={name}
      onChangeText={(text) => setName(text)}/>
      <Button onPress={handleClick} title='Go to Home Screen' />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})
