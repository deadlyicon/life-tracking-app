import React from 'react'
import {StackNavigator} from 'react-navigation'
import HomeScreen from '../screens/Home'
import LoginScreen from '../screens/Login'

export const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
})
