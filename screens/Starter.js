import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../components/Icon';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { STYLES } from '../constants/themeStyles';

const Starter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.description}>This is a sample plants store listing app</Text>
      <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={() => {
        navigation.navigate("Home");
      }}>
        <Text style={styles.buttonText}>Start</Text>
        {/* Arrow */}
        <Icon name="arrow-right" color={COLORS.white} size={SIZES.h6} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...STYLES.center,
    backgroundColor: COLORS.background
  },
  heading: {
    ...FONTS.h2,
    marginBottom: SIZES.margin/2,
  },
  description: {
    ...FONTS.body7,
    color: COLORS.gray1,
    marginBottom: SIZES.margin * 2,
  },
  button: {
    ...STYLES.button,
    flexDirection: 'row',
    width: SIZES.width / 1.5,
  },
  buttonText: {
    ...STYLES.buttonText,
    marginRight: SIZES.margin
  }
})

export default Starter;