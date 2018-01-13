import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ButtonGroup, Button } from 'react-native-elements'
import RootNavigator from './config/router'


export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }


  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render () {
    return (
      <RootNavigator/>
    )
  }
}
