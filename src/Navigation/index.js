import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import routeName from '../Constants/routeName'
import ListAlbums from '../Screens/ListAlbums'
import styles from "./styles";
/* Created root navigator for navigating between screens */
const Stack = createStackNavigator();

export default function Screens(){
    return(
    <Stack.Navigator>
        <Stack.Screen name={routeName.albumList} component={ListAlbums}
        options={styles.header}
        />
    </Stack.Navigator>
    );

}