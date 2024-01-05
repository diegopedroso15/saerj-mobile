import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

interface ImageV1Props {
  src: string;
  width: number;
  height?: number;
}

export const ImageV1: React.FC<ImageV1Props> = ({ width, height, src }) => {
  return (
    <Image
      style={[
        styles.image,
        { width: width, height: height ? height : width }, // ajustar a proporção depois
      ]}
      source={{ uri: src }}
    />
  );
};
