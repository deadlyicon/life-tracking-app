import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ButtonGroup, Button } from 'react-native-elements'
import map from 'lodash/map'


export default class WeekOfOneChore extends React.Component {

  // handleDayClicked (dayNum) {
  //   const oldChoreDone = this.props.dailyChoreLog[dayNum]
  //   let newChoreDone = null
  //   if (oldChoreDone === 'yes') {
  //     newChoreDone = 'no'
  //   } 
  //   if (oldChoreDone === 'no') {
  //     newChoreDone = 'yes'
  //   }
  //   this.props.handleChoreChange(dayNum, newChoreDone)  
  // }

  render () {
    const buttons = map(this.props.dailyChoreLog, (choreDone) => {
      let bgColor = '#FFFFFF'
      if (choreDone === 'yes') {
        bgColor = '#00FF00'
      }
      if (choreDone === 'no') {
        bgColor = '#FF0000'
      }
      return { element: <Button large backgroundColor={bgColor} buttonStyle={ { width: '100%' } }/> }
    }

    return (
      <ButtonGroup
          onPress={this.handleDayClicked}
          buttons={buttons}
          containerStyle={{height: 40}} />
    )
  }


}
