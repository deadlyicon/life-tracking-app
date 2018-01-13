import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {StackNavigator} from 'react-navigation'

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

export default HomeScreen