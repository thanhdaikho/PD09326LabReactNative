import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './MainScreen';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './FeedScreen';
import Artical from './Artical';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Feather'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const Index = () => {
    const DrawerNavigator = () => {
        return (
            <Drawer.Navigator initialRouteName='Home' drawerContent={}>
                <Drawer.Screen name='Home' component={HomeScreen} options={{drawerIcon: () =>
                <Icon name='home' size={20} color={'gray'}/>
            }}/>
                <Drawer.Screen name='Feed' component={Feed} options={{drawerIcon: () =>
                <Icon name='rss' size={20} color={'gray'}/>
            }}/>
                <Drawer.Screen name='Artical' component={Artical} options={{drawerIcon: () =>
                <Icon name='archive' size={20} color={'gray'}/>
            }}/>
                <Drawer.Screen name='Profile' component={Profile} options={{drawerIcon: () =>
                <Icon name='user' size={20} color={'gray'}/>
            }}/>
            </Drawer.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen name='Main' component={MainScreen} options={{ headerShown: true }} />
                <Stack.Screen name='HomeScreen' component={DrawerNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index

const styles = StyleSheet.create({})
