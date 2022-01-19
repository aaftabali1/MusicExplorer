import { StyleSheet } from "react-native";
import colors from "../Constants/colors";
import strings from "../Constants/strings";
export default StyleSheet.create({
    header:{
        headerTitleAlign:'center',
        title: strings.musicExplorer,
        headerStyle: {
            backgroundColor: colors.theme,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
            fontWeight: '500',
        },
    }
    });