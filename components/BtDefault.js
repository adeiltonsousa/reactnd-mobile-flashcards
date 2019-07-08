import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { blue, white } from '../utils/colors';

const BtDefault = (props) => (
  <TouchableOpacity 
    style={styles.BtDefault}
    onPress={props.func}>
    <Text style={styles.BtDefaultText}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    margin: 4,
    backgroundColor: blue,
    width: 90,
    shadowOffset: { width: 15, height: 15 },
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 4
  },
  buttonText: {
    color: white,
    borderRadius: 2,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default BtDefault;