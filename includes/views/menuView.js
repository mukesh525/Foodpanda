import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import ImageSlider from 'react-native-image-slider';

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

                   <View style ={ {flex: .7, marginTop:10,backgroundColor:'red'}} >





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
