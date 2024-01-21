import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'  // Import icon library (you may need to install it)

const CustomInput = ({placeholder, value, onChangeText}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isSecureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.iconContainer}>
        <Icon
          name={isSecureTextEntry ? 'eye-outline' : 'eye-off-outline'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 18,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 15
  },
  input: {
    flex: 1,
    height: 40,
  },
  iconContainer: {
    padding: 10,
  },
});

export default CustomInput;
