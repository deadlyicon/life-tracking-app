import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {Profile, Login} from '../authentication'
import secrets from '../secrets';

class LoginScreen extends Component {
  render () {
    return (
      < Login title = {'Login'} secrets = {secrets} />
    )
  }
}

export default LoginScreen
