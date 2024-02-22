import axios from 'axios'
import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

const EditScreen = ({ route, navigation }) => {
    const { item } = route.params
    const [name, setName] = useState(item.name)
    const [birthday, setBirthday] = useState(item.birthday)

    const handleSave = (item) => {
        axios({
            url: 'https://65d71ddd27d9a3bc1d7a3951.mockapi.io/users/' + item.id,
            method: 'PUT',
            data: {
                'name': name,
                'birthday': birthday
            }
        }).then((res) => {
            const response = res.data
            navigation.navigate('mainscreen', response)
        })
    }
    return (
        <View>
            <TextInput value={name} onChangeText={(text) => setName(text)} placeholder='Name' style={{ padding: 10, backgroundColor: '#e3e0d8', marginTop: 50, marginHorizontal: 26, borderRadius: 10 }} />
            <TextInput value={birthday} onChangeText={(text) => setBirthday(text)} placeholder='Birthday' style={{ padding: 10, backgroundColor: '#e3e0d8', marginTop: 50, marginHorizontal: 26, borderRadius: 10 }} />
            <View style={{ marginHorizontal: 25, marginTop: 30 }}>
                <Button title='Save' onPress={() => { handleSave(item) }} />
            </View>
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({})
