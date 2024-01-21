import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, Alert } from 'react-native'

const FlatListItem = ({ item }) => {
    const handleCall = () => {
        Alert.alert(`Calling to ${item.name}`)
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/biden.jpg')} style={{ width: 60, height: 60, borderRadius: 30, marginStart: -40 }} />
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ color: 'black', fontSize: 18 }}>{item.name}</Text>
                <Text>{item.email}</Text>
            </View>
            <TouchableOpacity style={{
                width: 30, height: 20, justifyContent: 'flex-end', position: 'absolute', right: 10, marginTop: 40
            }} onPress={handleCall}>
                <Text style={{ color: 'blue', fontSize: 20 }}>Call</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FlatListItem
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        padding: 20,
        width: 300,
        borderRadius: 20

    }
})
