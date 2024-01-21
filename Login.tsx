import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import CustomInput from '../../components/CustomTextInput';

const Login = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = () => {
        Alert.alert("Success" ,`Username: ${userName} \nPassword: ${password}`)
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <ScrollView style={styles.container}>
                <Text style={styles.h1}>
                    Hello, Welcome Back !{`\n`}
                    <Text style={styles.h3}>Hello again, you have been missed</Text>
                </Text>
                <Image
                    style={{ width: 240, height: 240, alignSelf: 'center' }}
                    source={require('../../assets/images/animation.png')}
                />
                <TextInput
                    style={styles.InputStyle}
                    placeholder="Username"
                    value={userName}
                    onChangeText={(text) => {setUsername(text)}}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => {setPassword(text)}}
                />
                <TouchableOpacity onPress={handleClick} style={{width: '80%', height: 50, backgroundColor: 'orange', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 20}}>
                    <Text style={{fontSize: 24, color: 'white'}}>Log in</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {},
    h1: {
        color: 'black',
        fontSize: 30,
        margin: 30,
        lineHeight: 40,
    },
    h3: {
        fontSize: 18,
        color: 'gray',
    },
    InputStyle: {
        marginTop: 35,
        borderColor: 'gray',
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 18,
        width: '80%',
        alignSelf: 'center',
    }
});
