import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,Platform,
  StatusBar,TouchableHighlight,
  View
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import GridView from 'react-native-gridview';
import Icon from "react-native-vector-icons/FontAwesome";
import { Items } from "../Data/data.js";
import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');
var itemsPerRow = 4
if (width > 400) {itemsPerRow = 4 } else {itemsPerRow = 2}


export default class MenuView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
             position: 1,
             interval: null
         };
   }
  componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
       if (this.width > 400) {this.itemsPerRow = 4 } else{ this.itemsPerRow = 2}
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }


  render() {
    return (

      <View style = {{flex:.3,flexDirection:'column'}}>
               <ImageSlider
                   images={[
                        require('../image/Head_Image.png'),
                        require('../image/Head_Image.png'),
                        require('../image/Head_Image.png'),
                   ]}
                   position={this.state.position}
                   onPositionChanged={position => this.setState({position})}/>
                   <View style ={ {flex: .7, marginTop:15}} >
                   <GridView
                         contentContainerStyle={styles.contentContainer}
                         data={Items}
                         dataSource={null}
                         automaticallyAdjustContentInsets={false}
                         itemsPerRow={itemsPerRow}
                         renderItem={(item,itemIndex) => {
                             return (
                                   <TouchableHighlight underlayColor='#99d9f4'>
                                    <View style ={styles.outerView}>
                                    {<Image
                                     style ={{width: 185,height: 69,resizeMode: 'contain'}}
                                     source = {item.image}/>}
                                     <Text style={{marginLeft:5,marginTop:5,fontSize:12,color:'#A7A7A7' ,fontWeight: "bold"}}>
                                           {item.name} </Text>
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
                             </TouchableHighlight>
                           );
                         }}
                       />




                   </View>
           </View>
    )
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
      flexDirection:'column',
      justifyContent:'space-between'

    },
    contentContainer: {
     paddingBottom: (Platform.OS === 'ios') ? 60 : 70,
   },
    outerView :{
            margin:1,
            backgroundColor: 'white',
            flex:1,
            borderColor: 'white',
            borderWidth: 1
       }
});
