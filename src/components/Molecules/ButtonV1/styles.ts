import {StyleSheet } from 'react-native';
import { border, color, font } from '../../../themes/theme';

export const styles = StyleSheet.create({
  button: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: border.radius.small
  },
  primary: {
    backgroundColor: color.primary,
  },
  secondary: {
    backgroundColor: color.blue,
  },
  cancel: {
    backgroundColor: color.red,
  },
  full: {
    width: "100%",
  },
  half: {
    width: "48%",
  },
  text: {
    color: "white",
    fontSize: font.text.size,
    fontFamily: 'Poppins-SemiBold'
  },
  icon: {
    marginRight: 8,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
  },
  outlinePrimary: {
    borderColor: color.primary,
  },
  outlineSecondary: {
    borderColor: color.blue,
  },
  outlineCancel: {
    borderColor: color.red,
  },
  disabled: {
    opacity: 0.5,
  },
});