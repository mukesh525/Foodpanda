import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,ListView,
  StatusBar,Image,TouchableOpacity,
  View
} from 'react-native';
import UIStepper from 'react-native-ui-stepper';
import { Orders } from "../Data/data.js";
var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

export default class OrderView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
     records:[],
     dataSource:ds.cloneWithRows(Orders),
    }

  }

  render() {
    if (this.state.dataSource.getRowCount() === 0) {
      return (
        <View style={styles.container}>
          <Text>
            loading....{this.state.dataSource.getRowCount()}
          </Text>
        </View>
      );
    }
   else {
   return (
      <ListView
          contentInset={{bottom:30}}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this.renderRecord.bind(this)}
          enableEmptySections = {true}
          />
      );
    }
  }



renderRecord(record) {
    var itemDataSource = ds.cloneWithRows(record.items||[]);
    if(record.type === 1){
    return (
             <View style ={styles.outerView}>
                   <View style ={{backgroundColor:'#E4E3EB',alignItems:'center',paddingTop:5,paddingBottom:5,flexDirection:'row',justifyContent:"space-between"}}>
                      <Text style={styles.title} >{record.group}</Text>
                      <Text style={styles.title} >{record.price}</Text>
                   </View>
                   <ListView
                       scrollEnabled={false}
                       contentInset={{bottom:30}}
                       automaticallyAdjustContentInsets={false}
                       dataSource={itemDataSource}
                       renderRow={this.rederItemView.bind(this)}
                       enableEmptySections = {true}
                       />
             </View>

       );
    }


   else if(record.type === 2) {

      return  (
          <View style={{padding:5,flex:1,flexDirection:'row',justifyContent:"space-between",}}>
             <View style={{padding:5,flex:.6,flexDirection:'column',alignItems:'flex-end'}}>
              <Text style={{flex:.3,marginTop :10,fontSize: 13,color:'#808080'}} >SUB TOTAL</Text>
              <Text style={{marginTop:10,fontSize: 13,color:'#808080'}} >SERVICE TAX</Text>
            </View>
            <View style={{padding:5,flex:.35,flexDirection:'column',alignItems:'flex-start'}}>
             <Text style={{flex:.3,marginTop :10,fontSize: 13,color:'#808080'}} > {record.subtotal}</Text>
             <Text style={{marginTop:10,fontSize: 13,color:'#808080',fontWeight: 'bold'}} > {record.servicetax} </Text>
           </View>
         </View>


      );

   }
   else if(record.type === 3) {

      return  (
          <View style={{padding:5,flex:1,flexDirection:'row',justifyContent:"space-between"}}>
             <View style={{padding:5,flex:.6,flexDirection:'column',alignItems:'flex-end'}}>
              <Text style={{fontSize: 14,color:'#808080'}} > TOTAL</Text>
              </View>
            <View style={{padding:5,flex:.35,flexDirection:'column',alignItems:'flex-start',}}>
                 <Text style={{fontSize: 14,color:'#808080',fontWeight: 'bold'}} > {record.total}</Text>
                 <TouchableOpacity style ={{
                       backgroundColor:'#F67C01',
                       alignItems:'center',
                       padding:10,
                       marginTop :10,
                       justifyContent:'center',
                       width:130,
                       height:30,
                   }}>
                     <Text style={{fontSize:10,color:'#FFF',}} > COMPLETE ORDER </Text>
                </TouchableOpacity>


            </View>
         </View>


      );

   }

    else {
          return <View/>;

    }
   }





rederItemView(item) {
 return (
   <View style={{marginTop:5,padding:5,flex:1,flexDirection:'row',justifyContent:"space-between"}}>
         <Image style = {{flex:.085,width:55,height:55}}
             source = {item.image} />

         <View style={{flex:.2,flexDirection:'column',marginLeft:5,justifyContent:'flex-start'}}>
               <Text style={{fontSize: 11,
               color:'#808080',
               fontWeight: 'bold'}} >{item.name}</Text>
               <Text style={{fontSize: 8,color:'#808080',}}>
                     {item.desc}</Text>
         </View>
         <View style={{margin:5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontSize: 13,color:'#808080',fontWeight: 'bold'}} >{item.price} </Text>
         </View>

        <View style={{flex:.07,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style ={{
                  borderWidth:1,
                  borderColor:'#959595',
                  alignItems:'center',
                  justifyContent:'center',
                  width:20,
                  height:20,
                  borderRadius:10,
              }}>
                <Text style={{fontSize: 13,color:'#959595',fontWeight: 'bold',}} > - </Text>

            </TouchableOpacity>
                  <Text style={{fontSize: 13,color:'#000',fontWeight: 'bold'}} > {item.quantity} </Text>

            <TouchableOpacity style={{
              borderWidth:1,
              borderColor:'#959595',
              alignItems:'center',
              justifyContent:'center',
              width:20,
              height:20,
              borderRadius:10,
             }}>
                <Text style={{fontSize: 15,color:'#959595',fontWeight: 'bold',}} > + </Text>

           </TouchableOpacity>
       </View>
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
  innerView :{
      marginTop:5,
      flexDirection:'row',
      justifyContent:'space-between'

    },
    outerView :{

            margin:5,
            backgroundColor: '#F7F7F7',
            flex:1,
            borderColor: '#000',

       },
     title :{
         fontSize: 13,
         color:'#808080',
         fontWeight: 'bold'

       },
     empty :{
           fontSize: 25,
           color:'red',
           fontWeight: 'normal'
     },
     subtitle :{
       fontSize: 10,
       color:'red',
       fontWeight:'normal'
    }
});
