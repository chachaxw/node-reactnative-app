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

class ReadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      recommendTopic: null,
      hotTopic: null,
      category: null,
      other: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData(callback) {
    var self = this;
    Util.get('http://localhost:3000/data/read?type=config', function(res){
      if(res.status === 1){
        let obj = res.data;
        self.setState({
          isShow: true,
          recommendTopic: obj.recommendTopic,
          hotTopic: obj.hotTopic,
          category: obj.category,
          other: obj.other,
          refreshing: false
        });
      }else{
        alert('服务异常，请联系867571123@qq.com');
      }
    }, function(err) {
      alert(err);
      alert('服务异常,正在紧急修复...');
    });
  }

  _onRefresh() {
    var self = this;
    this.setState({refreshing: true});
    this._fetchData();
  }

  render() {
    return(
      <View style={styles.container}>
        <Search navigator={this.props.navigator}/>
        {
          this.state.isShow ?
            (<ScrollView
              refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
              }
              style={[styles.container, {paddingTop:20}]}>
              <Topic data={this.state.recommendTopic} navigator={this.props.navigator} type="manager"/>
              <HrLine/>
              <Recommend title="热门推荐" data={this.state.hotTopic} navigator={this.props.navigator} type="it"/>
              <HrLine/>
              <Category data={this.state.category} navigator={this.props.navigator}/>
              <HrLine/>
              <Recommend title="清新一刻" data={this.state.other} navigator={this.props.navigator} type="sanwen"/>
              <Space/>
            </ScrollView>)
            :
            (<ActivityIndicator
              animating={true}
              style={[{height: 80}]}
              size="large"
              />)
        }
      </View>
    )
  };
}

class HrLine extends Component{
  render(){
    return (
      <View style={styles.hr}></View>
    );
  }
}

class Space extends Component{
  render(){
    return (
      <View style={styles.space}></View>
    );
  }
}

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
