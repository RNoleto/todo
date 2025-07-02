import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function Button(){
    return(
        <View>
            <TouchableOpacity style={styles.buttonContain}>
            <Text style={styles.text}>Botão</Text>
            </TouchableOpacity>
        </View>
    )
}