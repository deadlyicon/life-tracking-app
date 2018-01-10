import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import WeekOfOneChore from './components/WeekOfOneChore'

export default class Main extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Life Tracking App</Text>
        
        <WeekOfOneChore dailyChoreLog={['yes', 'no', 'no', null, 'yes', 'yes', 'yes']} />
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
