import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TWebView from './WebView';

const nearByURL = 'http://123.57.39.116:3000/html/nearby.html';
// const nearByURL = './../html/location.html';

class ToiletPage extends Component {
  render() {
    return (
      <TWebView url={nearByURL} isNearBy={true}/>
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
