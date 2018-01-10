import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ButtonGroup, Button } from 'react-native-elements'

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
    const buttons = ['Hello', 'World', 'Buttons']
    const { selectedIndex } = this.state

    return (
      <View style={styles.container}>
        <Text>Life Tracking App</Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 100}} />
         <Image
           style={{width: 150, height: 150}}
           source={{uri: 'https://media.giphy.com/media/CO8wN7YrZ3X0Y/giphy.gif'}}
         />
         <Button
           raised
           icon={{name: 'home', size: 32}}
           buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
           textStyle={{textAlign: 'center'}}
           title={`Welcome to\nReact Native Elements`}
         />
      </View>
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
