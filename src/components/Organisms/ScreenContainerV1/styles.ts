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
    backgroundColor: color.white,
    width: '100%',
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingHorizontal: 16
  }
});