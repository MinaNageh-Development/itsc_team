import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Header from './src/component/header';

export default class App extends Component {
  render() {
    return (
      <View>
        
      <FlatList
          data={[
            { key: 'Sheraton Bus', id:'1' },
            { key: 'Giza Bus', id:'2' },
            { key: 'Shobra Bus ', id:'3' },
            { key: 'Helwan Bus ', id:'4' },
          
        ]}
        
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

AppRegistry.registerComponent('itsc_team', () => App);
