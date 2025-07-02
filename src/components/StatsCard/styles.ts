import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES } from "../../constants/themes";

export const styles =StyleSheet.create({
    header:{
        flexDirection:'row',
        marginBottom:4,
    },
    title:{
        fontSize:FONT_SIZES.lg,
        fontWeight:"bold",
    },
    statsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    statsContain:{
        gap:8,
    },
    statItem:{
        flexDirection:'row',
        alignItems: 'center',
    },
    statValue:{
        fontSize:FONT_SIZES.xl,
        fontWeight:'bold',
    },
    statLegend:{
        fontSize:FONT_SIZES.sm,
        color:COLORS.textSecondary,
    },
})