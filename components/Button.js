import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {fontSize: 18, color: 'red', textAlign: 'center'},
});

export default Button;
