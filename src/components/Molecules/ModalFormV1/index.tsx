import React from "react";
import { TouchableOpacity, Text, View, Modal, TextInput } from "react-native";
import { styles } from "./styles";
import { color } from "../../../themes/theme";

type ActStyle = "primary" | "secondary" | "cancel";

type ActType = Array<{
  label: string;
  onPress: () => void;
  ActStyle: ActStyle;
  disabled?: boolean;
}>;

type InputType = Array<{
  label: string;
  value: string;
  placeholder: string;
  onInputChange: (value: string) => void;
}>;

interface ModalFormV1Props {
  title: string;
  message: string;
  icon?: React.ReactElement;
  actions: ActType;
  inputs: InputType; 
}

const textColor: Record<ActStyle, string> = {
  primary: color.white,
  secondary: color.primary,
  cancel: "#F03636"
}; // arrumar cores

export const ModalFormV1: React.FC<ModalFormV1Props> = ({ title, message, icon, actions, inputs }) => {
  const actionCount = actions.length;

  const determineActionStyle = () => {
    if (actionCount === 1) {
      return styles.singleAction;
    } else {
      return styles.multipleAction;
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.inputs}>
            {inputs.map((input, index) => (
              <TextInput
                key={index}
                style={styles.input}
                onChangeText={input.onInputChange} // arrumar
                value={input.value}
                placeholder={input.placeholder}
              />
            ))}
          </View>
          <View style={styles.actions}>
            {actions.map((action, index) => (
              <TouchableOpacity
                key={index}
                onPress={action.onPress}
                style={[
                  styles.actionsButton,
                  styles[action.ActStyle],
                  determineActionStyle(),
                  action.disabled && styles.disabled
                ]}
                disabled={action.disabled}
              >
                <Text style={[styles.actionsText, { color: textColor[action.ActStyle] }]}>{action.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};
