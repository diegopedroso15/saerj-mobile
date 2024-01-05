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
    footerActions: ActType;
}

export const ScreenContainerV1 = ({ title, children, footerActions }: ScreenContainerInterface) => {
    const actionCount = footerActions.length;
    const insets: Insets = useSafeAreaInsets();
    return (
        <View style={styles(insets).container}>
            <TextV1 type="header">{title}</TextV1>
            {children}
            {
                footerActions.map((action, index) => {
                    return (
                        <ButtonV1 key={index} type={action.ActStyle} width={actionCount === 1 ? "full" : "half"} >{action.label}</ButtonV1>
                    )
                })
            }
        </View >
    )
}