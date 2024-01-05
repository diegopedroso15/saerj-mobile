import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import RegisterScreen from "./src/screens/AuthScreens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/AuthScreens/LoginScreen";
import IntroAuthScreen from "./src/screens/AuthScreens/IntroAuthScreen";
import StepOneScreen from "./src/screens/Screens/InitialRegisterScreens/StepOneScreen";
import StepTwoScreen from "./src/screens/Screens/InitialRegisterScreens/StepTwoScreen";
import StepThreeScreen from "./src/screens/Screens/InitialRegisterScreens/StepThreeScreen";
import StepFourScreen from "./src/screens/Screens/InitialRegisterScreens/StepFourScreen";
import HomeScreen from "./src/screens/Screens/HomeScreen";
import { InputV1 } from "./src/components/Molecules";
import { StyleSheet, View } from "react-native";
import { FormV1 } from "./src/components/Molecules/FormV1";
import HeaderV1 from "./src/components/Organisms/HeaderV1/HeaderV1";

type inputType = "number" | "text";

type InputType = Array<{
  label: string;
  type: inputType;
  isPassword?: boolean;
}>;
type ButtonType = Array<{
  type: "primary" | "secondary" | "cancel";
  children: string;
  onPress?: () => void;
}>

type ButtonWidth = "full" | "half";
const inputs: InputType = [
  { label: "Nome", type: "text" },
  { label: "Pais", type: "text" },
  { label: "CEP", type: "text" },
  { label: "Numero", type: "number" },
  { label: "Complemento", type: "text" },
  { label: "Telefone", type: "number" },
  { label: "Telefone Residencial", type: "number"},
  { label: "Email", type: "text" },
  { label: "Comprovante", type: "text"}
];

 const buttons: ButtonType = [
  { type: "primary", children: "Enviar", onPress: () => console.log("Enviado") },
];

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-BlackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraBoldItalic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-ExtraLightItalic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
    "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-MediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-ThinItalic": require("./assets/fonts/Poppins-ThinItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
      <HeaderV1 />
        <View style={styles.formContainer}>
          <FormV1 fields={inputs} buttons={buttons} buttonsWidth="full"/>
        </View>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    gap: 20,
  },
});
