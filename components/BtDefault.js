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
  BtDefault: {
    padding: 10,
    margin: 5,
    backgroundColor: blue,
  },
  BtDefaultText: {
    color: white,
    borderRadius: 1,
    textAlign: 'center'
  }
});

export default BtDefault;