import {StyleSheet } from 'react-native';
import { font, color as colorTheme } from '../../../themes/theme';

type AlignType = 'auto' | 'center' | 'justify' | 'left' | 'right';
type ColorType = 'dark' | 'light' | 'blue';

interface StylesInterface {
  align: AlignType;
  color: ColorType;
}

export const styles = ({ align, color }: StylesInterface) => StyleSheet.create({
  header: {
    fontSize: font.header.size,
    color: color === 'dark' ? font.header.color : color === 'light' ? colorTheme.white : colorTheme.blue,
    textAlign: align,
    fontFamily: 'Poppins-Black'
  },
  title: {
    fontSize: font.title.size,
    color: color === 'dark' ? font.title.color : color === 'light' ? colorTheme.white : colorTheme.blue,
    textAlign: align,
    fontFamily: 'Poppins-SemiBold'
  },
  subtitle: {
    fontSize: font.subtitle.size,
    color: color === 'dark' ? font.subtitle.color : color === 'light' ? colorTheme.white : colorTheme.blue,
    textAlign: align,
    fontFamily: 'Poppins-SemiBold'
  },
  text: {
    fontSize: font.text.size,
    color: color === 'dark' ? font.text.color : color === 'light' ? colorTheme.white : colorTheme.blue,
    textAlign: align,
    fontFamily: 'Poppins-Regular'
  },
  smallText: {
    fontSize: font.smallText.size,
    color: color === 'dark' ? font.smallText.color : color === 'light' ? colorTheme.white : colorTheme.blue,
    textAlign: align,
    fontFamily: 'Poppins-Medium'
  },
});