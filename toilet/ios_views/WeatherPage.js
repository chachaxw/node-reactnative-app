import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
} from 'react-native';
import TWebView from './WebView';

const url = 'http://123.57.39.116:3000/html/weather.html';
class WeatherPage extends Component {
  render() {
    return (
      <TWebView url={url} isWeather={true}/>
    );
  };
};

export default WeatherPage;
