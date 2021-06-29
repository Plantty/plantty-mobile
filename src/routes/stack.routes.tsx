import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Enter } from '../pages/Enter';

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
        name='Enter'
        component={Enter}
      />

    </stackRoutes.Navigator>
)


export default AppRoutes;