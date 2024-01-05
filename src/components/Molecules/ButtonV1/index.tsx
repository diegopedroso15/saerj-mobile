import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";
import { color } from "../../../themes/theme";

type ButtonType = "primary" | "secondary" | "cancel";
type ButtonWidth = "full" | "half";

interface ButtonV1Props {
  type: ButtonType;
  width: ButtonWidth;
  children: string;
  icon?: React.ReactElement;
  disabled?: boolean;
  outline?: boolean;
  onPress?: () => void;
}

const outlineStyles: Record<ButtonType, any> = {
  primary: styles.outlinePrimary,
  secondary: styles.outlineSecondary,
  cancel: styles.outlineCancel
};

const textColor: Record<ButtonType, string> = {
  primary: color.primary,
  secondary: color.blue,
  cancel: color.red
};

export const ButtonV1: React.FC<ButtonV1Props> = ({
  type,
  width,
  children,
  icon,
  disabled,
  outline,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[type],
        styles[width],
        outline && styles.outline,
        outline && outlineStyles[type],
        disabled && styles.disabled
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={[styles.text, outline && { color: textColor[type] }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
