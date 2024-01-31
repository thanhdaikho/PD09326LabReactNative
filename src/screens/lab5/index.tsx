import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import { StyledComponent } from 'nativewind'
import Icon from 'react-native-vector-icons/FontAwesome6'

const Index = () => {
    return (
        <StyledComponent component={View} className='flex-1'>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../assets/images/kontum.jpg')} >
                <View style={{ flex: 3 }}>
                    <StyledComponent component={Text} className='absolute  bottom-0 text-yellow-100 text-4xl p-6'>Nha` tho` go~</StyledComponent>
                </View>

                <View style={{ flex: 2 }}>
                    <View style={{ backgroundColor: '#fff', borderTopStartRadius: 15, borderTopEndRadius: 15 }}>
                        <View style={styles.bodyHeader}>
                            <Icon name='location-dot' size={20} color='blue' />
                            <StyledComponent component={Text} className='mx-5 text-2xl text-blue-400'>Kon Tum City</StyledComponent>
                        </View>
                        <View style={styles.bodyBody}>
                            <StyledComponent component={Text} className='self-center my-3 text-2xl text-black'>Tour Information</StyledComponent>
                            <StyledComponent component={Text} className='leading-6 '>Kon Tum, nestled in the central highlands of Vietnam, is a captivating city that seamlessly blends rich cultural heritage with breathtaking natural beauty. Renowned for its vibrant ethnic diversity, Kon Tum is a melting pot of different indigenous groups, each contributing to the city's unique tapestry. The city is adorned with historic landmarks, including the wooden Stilt House, Kon Tum Cathedral, and the mesmerizing Kon Klor suspension bridge...</StyledComponent>
                        </View>
                        <View style={styles.bodyFooter}>
                            <StyledComponent component={Text} className='m-6 text-lg text-white font-bold'>$100/Day</StyledComponent>
                            <TouchableOpacity style={styles.button}>
                                <Text>Book now</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <TouchableOpacity style={styles.buttonIcon}>
                    <Icon name='heart' size={25} color='black' />
                </TouchableOpacity>
            </ImageBackground>

        </StyledComponent>

    )
}
export default Index

const styles = StyleSheet.create({
    bodyHeader: { flexDirection: 'row', paddingTop: 30, paddingStart: 17 },
    bodyBody: { paddingStart: 17, lineHeight: 20 },
    bodyFooter: { flexDirection: 'row', backgroundColor: 'blue', height: '100%', borderTopStartRadius: 15, borderTopEndRadius: 15 },
    button: { backgroundColor: '#fff', width: 100, height: 45, position: 'absolute', right: 0, borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 14 },
    buttonIcon: { position: 'absolute', top: '60%', right: '5%', marginTop: -20, marginLeft: -20, width: 50, height: 50, backgroundColor: 'rgba(255, 192, 203, 0.8)', borderRadius: 30, alignItems: 'center', justifyContent: 'center', zIndex: 1 }
})
