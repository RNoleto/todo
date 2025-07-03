import { Text, TouchableOpacity, View, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    title?: string,
}

export default function Button({ onPress, title = 'Adicionar', ...rest }: ButtonProps){
    return(
        <View>
            <TouchableOpacity style={styles.buttonContain} onPress={onPress} {...rest}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}