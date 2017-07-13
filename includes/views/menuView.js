import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
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
                        require('../image/logo.jpg'),
                        require('../image/logo.jpg'),
                        require('../image/logo.jpg'),
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
                             <View style={{ flex: 1, backgroundColor: '#8F8', borderWidth: 1 }}>
                               <Text>{`${item} (${sectionID}-${rowID}-${itemIndex}-${itemID})`}</Text>
                             </View>
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
});
