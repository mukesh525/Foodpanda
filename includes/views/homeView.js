import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,Image
} from 'react-native';

export default class HomeView extends Component {
  constructor(props, context) {
    super(props, context);
    //console.log(props.response.empName);


  }

  render() {

    return (

      <Image
       source = {require('../image/landing-page.png')}
       style={styles.container}>

           <View style={{
             flex: .5,
             flexDirection: 'column',
             justifyContent: 'flex-start',
             justifyContent:'center'

           }}>
             <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}} />

              </View>


     </Image>
   );

  }
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   width: undefined,
   height: undefined,
   backgroundColor:'transparent',

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
  canvas: {
  flex:1,
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
},
});
