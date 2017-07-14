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
             flex: 1,
             width:200,
             flexDirection: 'column',
             justifyContent:'center',
             marginLeft:15

           }}>
           <Text style={{fontSize:35 ,color:'white',fontWeight: "bold"}}>
                 Food</Text>
           <Text style={{marginTop:5,fontSize:45,color:'white',fontWeight: "bold"}}>
                 Panda</Text>
           <Text style={{marginTop:5,fontSize:10,color:'white',fontWeight: "bold"}}>
                 WHAT A TWIST.</Text>
           <Text style={{marginTop:5,fontSize:10,color:'white'}}>
           The panda, the iconic long,slim slick of bread,has tradinally one of the most potebnt symbol of french culture.
           </Text>
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
