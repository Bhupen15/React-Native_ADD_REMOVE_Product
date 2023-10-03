import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen'
import MainScreen from '../screens/MainScreen'


const Navigation = () => {
  const Stack: any = createNativeStackNavigator();

  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='SignIn' component={SignInScreen} />
    <Stack.Screen name='SignUp' component={SignUpScreen} />
    <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
    <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
    <Stack.Screen name='MainScreen' component={MainScreen} />

   
   </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation