import { TextInputProps } from "react-native";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

export interface InputProps extends TextInputProps{
    iconName?: string,
    iconLib?: React.ComponentType<IconProps>;
    iconSize?: number;
    iconColor?: string;
    placeholder: string,
}