import { Dimensions } from 'react-native';

const screenSize = Dimensions.get('screen')

export const COLORS = {
  background: '#f1f7ec',
  primary: '#378463',

  black: '#212121',
  white: '#fff',

  gray1: '#aaa',
}

export const SIZES = {
  padding: 10,
  margin: 10,
  radius: 30,
  border: 1,

  h1: 34,
  h2: 28,
  h3: 22,
  h4: 20,
  h5: 18,
  h6: 16,
  h7: 14,

  body1: 34,
  body2: 28,
  body3: 22,
  body4: 20,
  body5: 18,
  body6: 16,
  body7: 14,

  width: screenSize.width,
  height: screenSize.height,
};

export const FONT_FAMILY = {
  extraLight: 'Poppins-ExtraLight',
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
}

export const FONTS = {
  h1: { fontFamily: FONT_FAMILY.medium, fontSize: SIZES.h1, lineHeight: SIZES.h1+6, color: COLORS.black },
  h2: { fontFamily: FONT_FAMILY.medium, fontSize: SIZES.h2, lineHeight: SIZES.h2+6, color: COLORS.black },
  h3: { fontFamily: FONT_FAMILY.medium, fontSize: SIZES.h3, lineHeight: SIZES.h3+6, color: COLORS.black },
  h4: { fontFamily: FONT_FAMILY.medium, fontSize: SIZES.h4, lineHeight: SIZES.h4+6, color: COLORS.black },
  h5: { fontFamily: FONT_FAMILY.medium, fontSize: SIZES.h5, lineHeight: SIZES.h5+6, color: COLORS.black },
  h6: { fontFamily: FONT_FAMILY.medium, fontSize: SIZES.h6, lineHeight: SIZES.h6+6, color: COLORS.black },
  h7: { fontFamily: FONT_FAMILY.medium, fontSize: SIZES.h7, lineHeight: SIZES.h7+6, color: COLORS.black },
  
  body1: { fontFamily: FONT_FAMILY.regular, fontSize: SIZES.body1, lineHeight: SIZES.body1+6, color: COLORS.black },
  body2: { fontFamily: FONT_FAMILY.regular, fontSize: SIZES.body2, lineHeight: SIZES.body2+6, color: COLORS.black },
  body3: { fontFamily: FONT_FAMILY.regular, fontSize: SIZES.body3, lineHeight: SIZES.body3+6, color: COLORS.black },
  body4: { fontFamily: FONT_FAMILY.regular, fontSize: SIZES.body4, lineHeight: SIZES.body4+6, color: COLORS.black },
  body5: { fontFamily: FONT_FAMILY.regular, fontSize: SIZES.body5, lineHeight: SIZES.body5+6, color: COLORS.black },
  body6: { fontFamily: FONT_FAMILY.regular, fontSize: SIZES.body6, lineHeight: SIZES.body6+6, color: COLORS.black },
  body7: { fontFamily: FONT_FAMILY.regular, fontSize: SIZES.body7, lineHeight: SIZES.body7+6, color: COLORS.black },
}