import { StyleSheet } from "react-native";
import colors from "../Constants/colors";
import strings from "../Constants/strings";
export default StyleSheet.create({
    headerAlbum:{
        title:strings.topAlbums,
        headerTitleAlign:'center',
        headerStyle: {
            backgroundColor: colors.theme,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
            fontWeight: '500',
        },
    },
    headerSongs:{
        title:strings.tracks,
        headerTitleAlign:'center',
        headerStyle: {
            backgroundColor: colors.theme,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
            fontWeight: '500',
        },
    },
    headerPlayer:{
        title:strings.player,
        headerTitleAlign:'center',
        headerStyle: {
            backgroundColor: colors.theme,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
            fontWeight: '500',
        },
    }
 
    });