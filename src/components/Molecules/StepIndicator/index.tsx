import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { TextV1 } from "../TextV1";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const steps = [
  { name: "Loja" },
  { name: "Endereço" },
  { name: "Responsável" },
  { name: "Dados bancários" },
];

interface Insets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const StepIndicator = ({ step }) => {
  const selected = step;

  const renderStep = (step, index) => {
    const isActive = index + 1 === selected;

    return (
      <View
        key={index}
        style={styles({ isActive, currentStep: selected, step: index + 1 }).step}
      >
        <TextV1 color="light" type="text">
          {isActive ? step.name : index + 1}
        </TextV1>
      </View>
    );
  };

  const renderSteps = () => {
    return steps.map((step, index) => renderStep(step, index));
  };

  return (
      <View style={styles({ currentStep: selected, step: 1 }).container}>
        <View style={styles({ currentStep: selected, step: 1 }).line}></View>
        <View style={styles({ currentStep: selected, step: 1 }).fixedLine}></View>
        {renderSteps()}
      </View>
  );
};