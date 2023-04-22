import React from 'react'
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import SigninScreen from '../Screens/SigninScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    animationEnabled : true,
                    animationTypeForReplace : 'push',
                    gestureEnabled : true,
                    headerShown : false,
                    headerStatusBarHeight : StatusBar.currentHeight
                }}
            >
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                />
                <Stack.Screen
                    name='SigninScreen'
                    component={SigninScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation