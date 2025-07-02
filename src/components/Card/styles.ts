import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, PADDINGS, SHADOWS } from "../../constants/themes";

export const styles = StyleSheet.create({
    base:{
        backgroundColor:COLORS.surface,
        borderRadius:BORDER_RADIUS.md,
        padding:PADDINGS.xl,
    },
    default:{
        borderWidth:1,
        borderColor:COLORS.border,
    },
    elevated:{
        ...SHADOWS.md,
    },
    outlined:{
        borderWidth: 2,
        borderColor:COLORS.border,
    }
})