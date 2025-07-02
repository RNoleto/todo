import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        gap:4,
        backgroundColor:COLORS.surface,
        paddingHorizontal:12,
        paddingVertical:6,
        borderRadius:6,
        borderWidth:1,
        borderColor:COLORS.border,
    }
})