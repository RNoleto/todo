import { StyleSheet } from "react-native";
import { FONT_SIZES } from "../../constants/themes";

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

    }
})