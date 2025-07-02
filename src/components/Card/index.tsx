import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { CardProps } from './props';

export default function Card({
    children,
    variant = 'default',
}: CardProps){
    return(
        <View style={[styles.base, styles[variant]]}>
            <View>{children}</View>
        </View>
    )
}