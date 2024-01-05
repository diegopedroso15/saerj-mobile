import React from "react";
import { View } from "react-native";
import { ButtonV1, TextV1 } from "../../Molecules";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ActStyle = "primary" | "secondary" | "cancel";

type ActType = Array<{
    label: string;
    onPress: () => void;
    ActStyle: ActStyle;
    disabled?: boolean;
}>;

interface Insets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

interface ScreenContainerInterface {
    title: string;
    children: React.ReactNode;
    isIntroScreen?: boolean
}

export const ScreenAuthContainerV1 = ({ children, title, isIntroScreen }: ScreenContainerInterface) => {
    const insets: Insets = useSafeAreaInsets();

    return (
        <View style={styles(insets).container}>
            {isIntroScreen && <View style={styles(insets).textContainer}>
                <TextV1 type="header" color="light">
                    Agilidade que impulsiona suas vendas. Entrega garantida, lucros multiplicados.
                </TextV1>
            </View>}
            <View style={styles(insets).card}>
                {title && <TextV1 type="title" align="center">{title}</TextV1>}
                {children}
            </View>
        </View >
    )
}