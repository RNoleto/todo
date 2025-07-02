import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, PADDINGS } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        gap:4,
        backgroundColor:COLORS.surface,
        paddingHorizontal:PADDINGS.lg,
        paddingVertical:PADDINGS.md,
        borderRadius:BORDER_RADIUS.md,
        borderWidth:1,
        borderColor:COLORS.border,
    }
})