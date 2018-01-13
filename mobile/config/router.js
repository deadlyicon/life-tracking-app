import React from 'react'
import {StackNavigator} from 'react-navigation'
import HomeScreen from '../screens/Home'
import LoginScreen from '../screens/Login'

const RootNavigator = StackNavigator({
  Login: {   screen: LoginScreen,   navigationOptions: {     title: 'Login'   }
  },
  Home: {
    screen: HomeScreen
  }
})

export default RootNavigator
