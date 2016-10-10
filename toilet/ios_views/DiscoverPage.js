import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
} from 'react-native';
const NavigationBar = Navigator.NavigationBar;

class DiscoverPage extends Component {
  render() {
    return (
      <View>
        <Text style={style.alignCenter}>发现</Text>
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

export default DiscoverPage;
