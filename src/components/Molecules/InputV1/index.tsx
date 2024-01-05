import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles as defaultStyles, styles } from "./styles";
import { TextV1 } from "../TextV1";

type InputType = "number" | "text";

interface TextInputV1Props {
  placeholder: string;
  type: InputType;
  maxLength?: number;
  disabled?: boolean;
  icon?: React.ReactElement;
  isPassword?: boolean;
  onTextChange?: (text: string) => void;
  onBlur?: () => void;
  value?: string;
  error?: boolean;
}

export const InputV1: React.FC<TextInputV1Props> = ({
  placeholder,
  type = "text",
  maxLength,
  disabled,
  icon,
  isPassword,
  onTextChange,
  onBlur,
  value,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const keyboardType = type === "number" ? "numeric" : "default";

  const handleChangeText = (text: string) => {
    if (onTextChange) {
      onTextChange(text);
    }
  };

  return (
    <View style={isFocused ? [defaultStyles.container, styles.focusedContainer] : error ? [defaultStyles.container, styles.errorContainer] : defaultStyles.container}>
      {icon && <View style={defaultStyles.iconContainer}>{icon}</View>}
      {value != '' &&
        <View style={styles.placeholder}>
          <TextV1 type="smallText">{placeholder}</TextV1>
        </View>
      }
      <TextInput
        style={defaultStyles.input}
        keyboardType={keyboardType}
        maxLength={maxLength}
        editable={!disabled}
        secureTextEntry={isPassword}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        value={value}
      />
      {error && <Text style={defaultStyles.errorText}>Campo obrigatório!</Text>}
    </View>
  );
};