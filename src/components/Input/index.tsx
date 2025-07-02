import React, { useState } from "react";
import { Keyboard, TextInput, View } from "react-native";

import { styles } from "./styles";
import { InputProps } from "./props";

export default function Input({
    iconName,
    iconLib: IconLib,
    iconSize = 20,
    iconColor = "#333",
    style,
    ...rest
}: InputProps) {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            {IconLib && iconName && (
                <IconLib 
                    name={iconName as any}
                    size={iconSize}
                    color={iconColor}
                    style={styles.icon}
                />
            )}
            <TextInput {...rest}
                value={text}
                onChangeText={setText}
                placeholderTextColor='#999'
                keyboardType="ascii-capable"
                returnKeyType="done"
                onSubmitEditing={() => Keyboard.dismiss()}
            />
        </View>
    )
}