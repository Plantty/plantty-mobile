import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Enter } from '../pages/Enter';
import { Continue } from '../pages/Continue';
import { Login } from '../pages/Login';
import { RegisterContinue } from '../pages/RegisterContinue';
import { Register } from '../pages/Register';

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
        name='Continue'
        component={Continue}
      />

      <stackRoutes.Screen 
        name='Enter'
        component={Enter}
      />

      <stackRoutes.Screen 
        name='Login'
        component={Login}
      />

      <stackRoutes.Screen 
        name='RegisterContinue'
        component={RegisterContinue}
      />

      <stackRoutes.Screen 
        name='Register'
        component={Register}
      />

    </stackRoutes.Navigator>
)


export default AppRoutes;