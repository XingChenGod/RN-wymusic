import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import FindScreen from './screens/find';
import VideoScreen from './screens/video';
import MyScreen from './screens/my';
import FriendScreen from './screens/friend';
import AccountScreen from './screens/account';

export const BottomNavigator = createBottomTabNavigator({
   Find: {
       screen: FindScreen
   },
   Video: {
       screen: VideoScreen
   },
   My: {
       screen: MyScreen
   },
   Friend: {
       screen: FriendScreen
   },
   Account: {
       screen: AccountScreen
   }
});