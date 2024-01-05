import {StyleSheet } from 'react-native';
import { border, color, font } from '../../../themes/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: border.size.normal,
    borderColor: border.color.lightGray,
    paddingHorizontal: 8,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: border.radius.small,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: font.text.size,
    fontFamily: 'Poppins-Regular',
    paddingTop: 6
  },
  focusedContainer: {
    borderWidth: border.size.medium,
    borderColor: color.blue,
  },
  errorContainer: {
    borderWidth: border.size.medium,
    borderColor: color.red,
  },
  errorText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: font.smallText.size,
    color: color.red
  },
  placeholder: {
    position: 'absolute',
    top: 0,
    left: 4
  }
});