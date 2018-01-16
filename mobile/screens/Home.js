import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

class Profile extends Component {
  render() {
    let pic = {
      uri: this.props.params.image_url
    };
    return (
      <View>
        < Image source={pic} style={{
          width: 200,
          height: 200
        }}/>
        < Text >
          Welcome {this.props.params.name}!
        </Text >
      </View>
    )
  }
}

export default class HomeScreen extends Component {
  render() {
    return (<Profile params={this.props.navigation.state.params}/>)
  }
}