import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,ListView,
  StatusBar,Image,TouchableOpacity,
  View
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
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
          contentInset={{bottom:80,}}
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
                   <View style ={{backgroundColor:'transparent',alignItems:'center',paddingLeft:3,paddingTop:5,paddingBottom:5,flexDirection:'row',justifyContent:"space-between"}}>
                      <Text style={styles.title} >{record.group}</Text>
                      <Text style={styles.title} >{record.price}</Text>
                   </View>
                   <ListView
                       style = {{backgroundColor:'transparent'}}
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
             <Text style={{flex:.3,marginTop :10,fontSize: 13,color:'#808080',fontWeight: 'bold'}} > {record.subtotal}</Text>
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
                     <Text style={{fontSize:10,color:'#FFF',fontWeight: 'bold'}} > COMPLETE ORDER </Text>
                </TouchableOpacity>


            </View>
         </View>


      );

   }
   if(record.type === 4){
    var itemDataSource = ds.cloneWithRows(record.items||[]);
    return(
      <View style={{padding:5,flex:1,flexDirection:'column',justifyContent:"space-between"}}>
        <Text style={{flex:.07,fontSize: 14,color:'#808080'}} > {record.group}</Text>
       <ListView
          horizontal={true}
          style={{flex:1,bottom:10}}
          dataSource={itemDataSource}
          renderRow={this.renderView.bind(this)}
          />
       </View>
    );


   }

    else {
          return <View/>;

    }
   }



renderView(item) {

return (
        <View style ={{margin:5, paddingBottom:12, backgroundColor: 'white',flex:1}}>
        {<Image
         style ={{width: 185,height: 69,resizeMode: 'contain'}}
         source = {item.image}/>}
         <Text style={{marginLeft:5,marginTop:5,fontSize:12,color:'#A7A7A7' ,fontWeight: "bold"}}>
               {item.name}</Text>
        <Text style={{marginLeft:5,fontSize:10,color:'#A7A7A7',fontWeight: "bold"}}>
                    {item.desc}</Text>

         <View style ={{flex :1,flexDirection: 'row',justifyContent: 'space-between',marginRight:5}}>
         <Text style={{marginLeft:5,fontSize:10,color:'#F88311',fontWeight: "bold"}}>
                    {item.status}</Text>
         <View style ={{flexDirection: 'row',alignItems :'center'}}>
                 <Text style={{marginLeft:.5,fontSize:10,color:'#F88311',fontWeight: "bold"}}>
                    {item.rating}</Text>
                  <Icon style = {{marginLeft:.5 }}  color = '#F88311'   name = "star-o" size={11}  />
        </View>

  </View>

</View>





);


}












rederItemView(item) {
 return (
   <View style={{marginTop:6,backgroundColor:'white',padding:5,flex:1,flexDirection:'row',justifyContent:"space-between"}}>
         <Image style = {{flex:.085,width:55,height:55}}
             source = {item.image} />

         <View style={{flex:.2,flexDirection:'column',marginLeft:5,justifyContent:'flex-start'}}>
               <Text style={{fontSize: 12,
               color:'#808080',
               fontWeight: 'bold'}} >{item.name}</Text>
               <Text style={{fontSize:10,color:'#808080',}}>
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
            backgroundColor: 'transparent',
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
