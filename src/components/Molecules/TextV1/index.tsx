import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

type TextType = 'header' | 'title' | 'subtitle' | 'text' | 'smallText';

type AlignType = 'auto' | 'center' | 'justify' | 'left' | 'right';

type ColorType = 'dark' | 'light' | 'blue';

interface TextV1Props {
  children: React.ReactNode;
  type: TextType;
  align?: AlignType;
  color?: ColorType;
}

export const TextV1: React.FC<TextV1Props> = ({ children, type, align = 'left', color = 'dark' }) => {
  return <Text style={styles({align, color})[type]}>{children}</Text>;
};
