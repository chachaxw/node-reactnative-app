import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  NavigatorIOS,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

import Util from './util';
import Recommend from './read/Recommend';
import Category from './read/Category';
import Topic from './read/Topic';
import Search from './read/Search';

class DiscoverPage extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: ReadView,
          title: '发现',
          navigationBarHidden: true
      }}/>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hr:{
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    marginTop:20,
    marginBottom:10
  },
  space:{
    height:70
  }
});

export default DiscoverPage;
