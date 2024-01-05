import {StyleSheet } from 'react-native';
import { color } from '../../../themes/theme';

interface Insets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export const styles = (insets : Insets) => StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: color.darkBackground,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    justifyContent: 'flex-end'
  },
  card: {
    backgroundColor: color.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderTopLeftRadius: 32,
    justifyContent: 'center',
    gap: 16
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    display: 'flex'
  }
});