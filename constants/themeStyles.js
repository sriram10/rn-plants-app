import { FONTS, COLORS, SIZES } from "./theme";

export const STYLES = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    ...FONTS.h6,
    color: COLORS.white,
  }
}