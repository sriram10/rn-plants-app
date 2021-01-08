import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

const Search = (props) => {
  const [value, setValue] = useState();
  return (
    <View style={{
      padding: 10,
      backgroundColor: "red"
    }}>
      <Text>{props.label}</Text>
      <TextInput onChangeText={setValue} placeholder="Search" style={{
        fontSize: 20,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'white'
      }} />

      <Text>{value}</Text>
    </View>
  )
}

export default Search;