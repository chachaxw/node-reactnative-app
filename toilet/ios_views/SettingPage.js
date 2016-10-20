import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  ScrollView,
} from 'react-native';
const NavigationBar = Navigator.NavigationBar;

class SettingPage extends Component {
  render() {
    return (
      <View>
        <Text style={style.alignCenter}>设置</Text>
        <ScrollView contentContainerStyle={style.contentContainer}>
        </ScrollView>
      </View>
    );
  };
};

const style = StyleSheet.create({
  alignCenter: {
    textAlign: 'center',
    marginTop: 30,
  },
  contentContainer: {
    paddingVertical: 20,
    backgroundColor: '#fafafa',
  },
  img: {
    width: 64,
    height: 64,
  }
});

export default SettingPage;
