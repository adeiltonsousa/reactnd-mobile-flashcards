import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { blue, white } from '../utils/colors';

const BtDefault = (props) => (
  <TouchableOpacity 
    style={styles.button}
    onPress={props.func}>
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: blue,
  },
  buttonText: {
    color: white,
    borderRadius: 1,
    textAlign: 'center'
  }
});

export default BtDefault;