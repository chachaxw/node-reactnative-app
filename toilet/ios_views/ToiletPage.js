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

class ToiletPage extends Component {
  render() {
    return (
      <View>
        <Text style={style.alignCenter}>卫生间</Text>
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
