import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import styles from './styles';
import strings from '../Constants/strings';
import routeName from '../Constants/routeName';
import ListSongs from '../Screens/ListSongs';
import ListAlbums from '../Screens/ListAlbums';
import Player from '../Screens/Player';

/* Created root navigator for navigating between screens */
const Stack = createStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator>
      {/* Album List Screen */}
      <Stack.Screen
        name={routeName.albumList}
        component={ListAlbums}
        options={styles.headerAlbum}
      />
      {/* Song List Screen */}
      <Stack.Screen
        name={routeName.songList}
        component={ListSongs}
        options={styles.headerSongs}
      />
      {/* Player  Screen */}
      <Stack.Screen
        name={routeName.player}
        options={styles.headerPlayer}
        component={Player}
      />
    </Stack.Navigator>
  );
}
