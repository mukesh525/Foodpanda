import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,TouchableHighlight,
  View
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import GridView from 'react-native-gridview';
const itemsPerRow = 3;


// Use data from an array...
const data = Array(20)
  .fill(null)
  .map((item, index) => index + 1);

  const randomData = [];
  for (let i = 0; i < data.length; i) {
    const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
    randomData.push(data.slice(i, endIndex));
    i = endIndex;
  }
  const dataSource = new GridView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  }).cloneWithRows(randomData);









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

    return (

      <View style = {{flex:.3,flexDirection:'column'}}>
               <ImageSlider
                   images={[
                        require('../image/imgmenu1.png'),
                        require('../image/imgmenu1.png'),
                        require('../image/imgmenu1.png'),
                   ]}
                   position={this.state.position}
                   onPositionChanged={position => this.setState({position})}/>
                   <View style ={ {flex: .7, marginTop:10}} >
                   <GridView
                         data={data}
                         dataSource={null}
                         itemsPerRow={itemsPerRow}
                         renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
                           return (
                             <TouchableHighlight underlayColor='#99d9f4' onPress={() => this.onLearnMore(record)}>
                                  <View style ={styles.outerView}>
                                     <View style={styles.innerView}>
                                             <Text style={styles.title} > Group</Text>
                                             <Text style={styles.title} >Status</Text>
                                     </View>

                                    <View style={styles.separator} />
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
            marginTop:10,
            marginLeft:10,
            marginRight:10,
            backgroundColor: 'powderblue',
            padding :10,
            flex:1,
            borderRadius: 8,
            borderColor: '#000',
            borderWidth: 1
       }
});
