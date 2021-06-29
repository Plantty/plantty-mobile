import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Login } from '../pages/Login';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white
        },
      }}
    >

      <stackRoutes.Screen 
        name='Welcome'
        component={Welcome}
      />

      <stackRoutes.Screen 
        name='Login'
        component={Login}
      />

    </stackRoutes.Navigator>
)


export default AppRoutes;