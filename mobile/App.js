import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ButtonGroup, Button } from 'react-native-elements'
import RootNavigator from './screens/stacknavigation'


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
    // const { selectedIndex } = this.state
    // const component1 = () => <Button large backgroundColor="#00FF00" buttonStyle={ { width: '100%' } }/>
    // const component2 = () => <Text>World</Text>
    // const component3 = () => <Text>ButtonGroup</Text>
    // const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    return (
      <RootNavigator/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
