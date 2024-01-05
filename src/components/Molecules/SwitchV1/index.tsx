import React from 'react';
import { useState } from "react"
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TextV1 } from '../TextV1';

interface SwitchInterface {
    text?: string;
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

export const SwitchV1 = ({ text,isActive, setIsActive }: SwitchInterface) => {
    const { contentContainer, container, pointer } = styles(isActive);

    return (
        <TouchableOpacity style={contentContainer} onPress={() => setIsActive(!isActive)}>
            {text && <TextV1 type='text'>{text}</TextV1>}
            <View style={container}>
                <View style={pointer}></View>
            </View>
        </TouchableOpacity>
    )
}