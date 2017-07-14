import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,
  StatusBar,TouchableHighlight,
  View
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import GridView from 'react-native-gridview';
import Icon from "react-native-vector-icons/FontAwesome";
import { Items } from "../Data/data.js";
const itemsPerRow = 2;


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
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }


  render() {
    //let image = {<Image style ={{width: 200,height: 100,resizeMode: 'contain'}} source = {require('../image/'+ )}/>}
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
                   <View style ={ {flex: .7, marginTop:10}} >
                   <GridView
                         data={Items}
                         dataSource={null}
                         itemsPerRow={itemsPerRow}
                         renderItem={(item,itemIndex) => {
                           return (
                             <TouchableHighlight underlayColor='#99d9f4'>
                                    <View style ={styles.outerView}>
                                    {<Image
                                     style ={{width: 200,height: 100,resizeMode: 'contain'}}
                                     source = {require('../image/imgmenu1.png')}/>}
                                     <Text style={{marginLeft:5,fontSize:12,color:'#A7A7A7' ,fontWeight: "bold"}}>
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
    outerView :{

            backgroundColor: 'white',
            flex:1,
            borderColor: 'white',
            borderWidth: 1
       }
});
