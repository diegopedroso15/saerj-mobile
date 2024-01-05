import React, { Dispatch, SetStateAction } from "react";
import { TouchableOpacity, Text, View, Modal } from "react-native";
import { styles } from "./styles";
import { color } from "../../../themes/theme";
import { TextV1 } from "../TextV1";

type ActStyle = "primary" | "secondary" | "cancel";

type ActType = Array<{
  label: string;
  onPress: () => void;
  ActStyle: ActStyle;
  disabled?: boolean;
}>;

interface ModalV1Props {
  title: string;
  message: string;
  icon?: React.ReactElement;
  actions: ActType;
  children?: React.ReactNode;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const textColor: Record<ActStyle, string> = {
  primary: color.white,
  secondary: color.primary,
  cancel: color.red
};

export const ModalV1: React.FC<ModalV1Props> = ({ title, message, icon, actions, children, isVisible, setIsVisible }) => {
  const actionCount = actions.length;

  const determineActionStyle = () => {
    return actionCount === 1 ? styles.singleAction : styles.multipleAction;
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <TextV1 type="title" align="center">{title}</TextV1>
          <TextV1 type="text" align="center">{message}</TextV1>
          {
            children && children
          }
          <View style={styles.actions}>
            {actions.map((action, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  action.onPress;
                  setIsVisible(false)
                }}
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
