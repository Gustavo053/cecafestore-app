import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../pages/Login';
import { FormCredentials } from '../pages/Produtor/FormCredentials';
import { FormPersonalData } from '../pages/Produtor/FormPersonalData';

const stackRoutes = createStackNavigator();

const appRoutes: React.FC = () => (
    <stackRoutes.Navigator headerMode='none' screenOptions={{
        cardStyle: {
            backgroundColor: '#ffffff'
        }
    }}>
        <stackRoutes.Screen name="Login" component={Login} />
        <stackRoutes.Screen name="FormCredentials" component={FormCredentials} />
        <stackRoutes.Screen name="FormPersonalData" component={FormPersonalData} />
    </stackRoutes.Navigator>
)

export default appRoutes;