import React, { Component, useEffect, useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import axios from 'axios'

const LabTam = ({navigation, route}) => {
    const [userArray, setUserArray] = useState([])
    const { params } = route;

    useEffect(() => {
        getAPI()
    }, [params])
    
    const getAPI = () => {
        axios({
            url: 'https://65d71ddd27d9a3bc1d7a3951.mockapi.io/users',
            method: 'GET'
        }).then((res) => {
            var response = res.data
            setUserArray(response)
        })
    }
    const handleDelete = (item) => {
        axios({
            url: 'https://65d71ddd27d9a3bc1d7a3951.mockapi.io/users/'+item.id,
            method: 'DELETE'
        }).then((res) => {
            var response = res.data
            getAPI()
        })
    }

    return (
        <ScrollView>
            {userArray.map((item, index) => {
                return (
                    <View key={index}>
                        <View style={{ padding: 19, marginVertical: 10, borderWidth: 1, borderColor: 'gray', width: '50%', marginStart: 10, borderRadius: 7 }}>
                            <Text style={{ color: 'black', fontSize: 16 }}><Text style={{ fontWeight: 'bold', fontSize: 18 }}>Name: </Text>{item.name}</Text>
                            <Text style={{ color: 'black', fontSize: 16 }}><Text style={{ fontWeight: 'bold', fontSize: 18 }}>Birthday: </Text>{item.birthday}</Text>
                            <View style={{display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10, justifyContent: 'space-between'}}>
                                <TouchableOpacity onPress={() => {navigation.navigate('editscreen', {item})}}>
                                    <View style={{backgroundColor: '#5bb837', padding: 5}}>
                                        <Text style={{color: '#fff'}}>Edit</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {handleDelete(item)}}>
                                    <View style={{backgroundColor: '#bf4a37', padding: 5}}>
                                        <Text style={{color: '#fff'}}>Delete</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default LabTam

const styles = StyleSheet.create({})
