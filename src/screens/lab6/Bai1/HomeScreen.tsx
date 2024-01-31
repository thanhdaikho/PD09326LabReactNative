import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ route }) => {
  const navigation = useNavigation()
  const { name } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 36,fontSize: 28, color: 'black', fontWeight: 'bold' }}>Hello {name}, happy new year</Text>
      <TouchableOpacity style={{ margin: 14, borderWidth: 1, borderColor: 'gray', width: 150, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 7 }} onPress={() => navigation.goBack()} >
        <Text style={{ fontSize: 17, color: 'black' }}>Go back By goBack</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation?.reset({index: 0, routes: [{name: 'Main'}]})} >
        <Text style={{ fontSize: 17, color: 'black' }}>Go back by reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()} >
        <Text style={{ fontSize: 17, color: 'black' }}>Go back by pop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.popToTop()} >
          <Text style={{fontSize: 17, color: 'black'}}>Go back by popToTop</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  button: {
    margin: 14, borderWidth: 1, borderColor: 'gray', width: 150, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 7
  }
})