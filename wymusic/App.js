import React, {Component} from 'react';
import {
  createAppContainer
} from 'react-navigation'
import { BottomNavigator }from './src/router';

const AppContainer = createAppContainer(BottomNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
