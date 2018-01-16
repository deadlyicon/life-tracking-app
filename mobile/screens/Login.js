import Expo from 'expo';
import React from 'react'
import {StyleSheet, Text, View, Image, Button} from 'react-native'
import {StackNavigator} from 'react-navigation'

class Login extends React.Component {

  async signInWithGoogleAsync() {
    try {
      const result = await Expo
        .Google
        .logInAsync({
          androidClientId: "708774064967-k82qsgnenp1f8q1lsmvv0autsp51vk4v.apps.googleusercontent.com",
          scopes: ['profile', 'email']
        });

      if (result.type === 'success') {
        return result;
      } else {
        return {cancelled: true};
      }
    } catch (e) {
      return {error: true};
    }
  }

  onLoginPress = async() => {
    const result = await this.signInWithGoogleAsync()
    const navigation = this.props.navigation
    if (result.type === 'success') {
      navigation.navigate('Home', {
        name: result.user.givenName,
        image_url: result.user.photoUrl
      })
    }
  }

  render() {
    const navigation = this.props.navigation
    return (
      <Button title="Login" onPress={this.onLoginPress}></Button>
    )
  }

}
export default Login
