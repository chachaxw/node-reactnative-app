import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
} from 'react-native';
const NavigationBar = Navigator.NavigationBar;

class SettingPage extends Component {
  render() {
    return (
      <View>
        <Text style={style.alignCenter}>设置</Text>
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

export default SettingPage;
