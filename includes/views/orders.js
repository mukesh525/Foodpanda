import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';

export default class OrderView extends Component {
  constructor(props, context) {
    super(props, context);
    //console.log(props.response.empName);


  }

  render() {

    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Lead View
          </Text>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#455A64',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
