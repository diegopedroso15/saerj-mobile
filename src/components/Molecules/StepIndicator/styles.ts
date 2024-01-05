import { StyleSheet } from "react-native";
import { color } from "../../../themes/theme";

interface StylesInterface {
    isActive?: boolean;
    currentStep: number;
    step: number;
    insets?: Insets;
}

interface Insets {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }

export const styles = ({ isActive, currentStep, step, insets = {top: 0, right: 0, bottom: 0, left: 0} }: StylesInterface) => {
    return StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            position: "relative"
        },
        step: {
            backgroundColor: isActive ? color.primary : step <= currentStep ? color.primary : color.lightGray,
            paddingHorizontal: isActive ? 10 : 0,
            paddingTop: 4,
            borderRadius: 50,
            minHeight: 32,
            minWidth: 32,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2
        },
        line: {
            backgroundColor: color.primary,
            width: currentStep === 1 ? 0 : currentStep === 2 ? '50%' : currentStep === 3 ? '75%' : '100%',
            height: 4,
            position: "absolute",
            zIndex: 1
        },
        fixedLine: {
            backgroundColor: color.lightGray,
            width: '100%',
            height: 4,
            position: "absolute"
        },
        limit: {
            backgroundColor: 'red',
            marginTop: insets.top,
            height: 60
        }
    })
}