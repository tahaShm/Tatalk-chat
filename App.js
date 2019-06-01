import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from './src/routes'
import { RkTheme } from 'react-native-ui-kitten';
import { darkTheme1 } from './src/themes';
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      temp: null
    }
    RkTheme.setTheme(darkTheme1)
  }
  render() {
    return (
      <Routes />
    );
  }
}
