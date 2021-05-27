
import React, { Component } from 'react';
import { BackHandler, UIManager, View, Text } from 'react-native';


import AppNavigatorContainer from './AppNavigatorContainer';


class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <AppNavigatorContainer initialScreen="Test" />
      // <View><Text>Hello</Text></View>
    );
  }
}

export default AppComponent;
