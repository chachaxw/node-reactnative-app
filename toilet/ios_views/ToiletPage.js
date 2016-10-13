import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  WebView,
  Text,
  View,
} from 'react-native';
const NavigationBar = Navigator.NavigationBar;
const nearByURL = 'http://123.57.39.116:3000/html/nearby.html';
// const nearByURL = './../html/location.html';

class ToiletPage extends Component {
  render() {
    return (
      <View>
        <Text style={style.alignCenter}>卫生间</Text>
        <WebView source={{uri: nearByURL}}></WebView>
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

export default ToiletPage;
