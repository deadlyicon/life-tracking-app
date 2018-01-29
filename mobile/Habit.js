import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button, ButtonGroup } from 'react-native-elements'; // 0.16.0

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const thisWeek = () => {
  var curr = new Date; // get current date
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  var last = first + 6; // last day is the first day + 6

  var firstday = new Date(curr.setDate(first))
  var lastday = new Date(curr.setDate(last))

}

const habitRow = (name, records) => {
  const buttons = records.map(record => {
    const {didAction, date} = record
    const bgColor = didAction ? "#00FF00":"#FF0000"
    return {element: () => <Button backgroundColor={bgColor}></Button>}
  })  
  return (
    <View>
      <Text style={styles.header}>{name}</Text>
      <ButtonGroup 
        buttons={buttons}
        containerStyle={{height: 10, width: 200}}
        onPress={() => {}}
        selectedIndex={0} />     
    </View>
  )
}


export default class Habit extends React.Component {
  render() {
    const {id, name, records} = this.props
    return (
      <View key={id} style={styles.wrapper}>
          {habitRow(name, records)}
      </View>
    )
  }
}

Habit.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    records: PropTypes.arrayOf(PropTypes.shape({
      didAction: PropTypes.bool,
      date: PropTypes.string
    }))
}