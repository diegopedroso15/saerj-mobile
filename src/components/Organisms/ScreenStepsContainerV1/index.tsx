import React from "react";
import { Image, ScrollView, View } from "react-native";
import { StepIndicator, TextV1 } from "../../Molecules";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Insets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

interface ScreenContainerInterface {
    title: string;
    description: string;
    children: React.ReactNode;
    step: number;
}

export const ScreenStepsContainerV1 = ({ children, title, description, step }: ScreenContainerInterface) => {
    const insets: Insets = useSafeAreaInsets();

    const StepOneImage = require('../../../../assets/images/stepOne.png');
    const StepTwoImage = require('../../../../assets/images/stepTwo.png');
    const StepThreeImage = require('../../../../assets/images/stepThree.png');
    const StepFourImage = require('../../../../assets/images/stepFour.png');

    const getStepImage = (step: number) => {
        switch (step) {
            case 1: return StepOneImage;
            case 2: return StepTwoImage;
            case 3: return StepThreeImage;
            case 4: return StepFourImage;
        }
    }

    return (
        <View style={styles(insets).container}>
            <View style={styles(insets).indicatorContainer}>
                <StepIndicator step={step} />
                <View style={styles(insets).headerContainer}>
                    <View style={styles(insets).headerContent}>
                        <TextV1 type="title">{title}</TextV1>
                        <TextV1 type="text">{description}</TextV1>
                    </View>
                    <Image style={styles(insets).image} source={getStepImage(step)} resizeMode="contain" resizeMethod="auto"></Image>
                </View>
            </View>

            <View style={styles(insets).contentContainer}>
                <ScrollView
                    contentContainerStyle={styles(insets).content}
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            </View>
            {/* <ScrollView
                contentContainerStyle={styles(insets).contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles(insets).content}>{children}</View>
            </ScrollView> */}
            {/* <View style={styles(insets).content}>
                {children}
            </View> */}
        </View >
    )
}