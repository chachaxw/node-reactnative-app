import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
} from 'react-native';
const NavigationBar = Navigator.NavigationBar;

class WeatherPage extends Component {
  render() {
    return (
      <View>
        <Text style={style.alignCenter}>天气</Text>
      </View>
    );
  };
};

const style = StyleSheet.create({
  alignCenter: {
    textAlign: 'center',
    marginTop: 30,
  }
});

export default WeatherPage;
