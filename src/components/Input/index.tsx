import React from "react";
import { Keyboard, TextInput, View } from "react-native";

import { styles } from "./styles";
import { InputProps } from "./props";
import { COLORS, FONT_SIZES } from "../../constants/themes"; // Importando COLORS

export default function Input({
    iconName,
    iconLib: IconLib,
    iconSize = FONT_SIZES.lg,
    iconColor = COLORS.textSecondary,
    style,
    ...rest
}: InputProps) {
    return (
        <View style={styles.container}>
            {IconLib && iconName && (
                <IconLib 
                    name={iconName as any}
                    size={iconSize}
                    color={iconColor}
                />
            )}
            <TextInput {...rest}
                placeholderTextColor={COLORS.textSecondary}
                keyboardType="ascii-capable"
                returnKeyType="done"
                onSubmitEditing={() => Keyboard.dismiss()}
            />
        </View>
    )
}