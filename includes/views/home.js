/**
 * @class Home
 */

import React, {Component} from "react";
import {
    Text,
    View,TouchableHighlight,
    StyleSheet,NavigatorIOS,Image,
    TouchableWithoutFeedback,StatusBar
} from "react-native";
import Button from "apsl-react-native-button";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {Hideo} from "react-native-textinput-effects";
import { Toolbar, BottomNavigation, Icon1 } from 'react-native-material-ui';
import Container from '../Container';
import { TabRouter ,StackNavigator} from 'react-navigation';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import CommonStyle from "../styles/common.css";
import Database from "../firebase/database";
import DismissKeyboard from "dismissKeyboard";
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/EvilIcons';
import TabNavigator from 'react-native-tab-navigator';

 import HomeView from "./homeView";
 import MenuView from "./menuView";
 import NotificationView from "./notification";
 import Orders from "./orders";

 const TabRoute = TabRouter({
   Home: { screen:HomeView },
   Menu: { screen: MenuView },
   Notify: { screen: NotificationView },
   Order: {screen: Orders}
   }, {
     initialRouteName: 'Home',
   }
 );
 const uiThemee = {
  palette: {
    primaryColor: COLOR.orange700,
    accentColor: COLOR.pink500,
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20
    }
  }
}


 class TabContentNavigator extends Component {
     constructor(props, context) {
     super(props, context);
     console.log(props);
     this.state = {
       active: props.value.active,
       key:props.value.key,

     };
   }

   //this method will not get called first time
   componentWillReceiveProps(newProps){
    console.log(newProps);
     this.setState({
       active: newProps.value.active,
     });
   }

   render() {
     const Component = TabRoute.getComponentForRouteName(this.state.active);
     return <Component screenProps = {this.state}   method ={this.props.method} />;
   }
 }




class Home extends Component {
  static active = 'home'
  static navigationOptions = ({ navigation }) => {
    return {
      title:'Home',
      headerTitleStyle:{ color: 'white'},
      headerStyle:{ backgroundColor: '#F67B00'},
      headerRight: (
        <View style = {{flexDirection:'row',flex:1,margin:10,alignItems:'center'}}>
        <Image style={{marginLeft:10}} source={require('../image/Cart.png')}  />
        <Image style={{marginLeft:10}} source={require('../image/Search_21x21.png')}  />
       </View>
     )
    };
  };



  constructor(props){
   super(props);
   this.state = {
      active:'Home',
   };

    this.logout = this.logout.bind(this);
  }

    async logout() {

        try {

            await firebase.auth().signOut();

            this.props.navigator.push({
                name: "Login"
            })

        } catch (error) {
            console.log(error);
        }

    }


    render() {
        var HomeImage = this.state.active === 'Home' ? <Image style={styles.button} source={require('../image/Home_Btn.png')}  /> :
                                              <Image style={styles.button} source={require('../image/Home_Btn_nrm.png')}  />
        var NotifyImage = this.state.active === 'Notify' ? <Image style={styles.button} source={require('../image/Notifi_Btn.png')}  /> :
                                             <Image style={styles.button} source={require('../image/Notifi_Btn_nrm.png')}  />
        var MenuImage = this.state.active === 'Menu' ? <Image style={styles.button} source={require('../image/Menu_Btn.png')}  /> :
                                             <Image style={styles.button} source={require('../image/Menu_Btn_nrm.png')}  />
        var OrderImage = this.state.active === 'Order' ? <Image style={styles.button} source={require('../image/Order_Btn.png')}  /> :
                                            <Image style={styles.button} source={require('../image/Order_Btn_nrm.png')}  />


        return (
          <ThemeProvider uiTheme={uiThemee}>
            <Container>

              <TabContentNavigator value = {this.state}  key = {this.state} method ={this._navigateTo} />

              <BottomNavigation active={this.state.active} hidden={false}
                style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0}, barBackgroundColor: '#FFF', }}
               >

                   <View style ={{flex:1,flexDirection:'row'}}>
                   <View style ={{flex:.2,flexDirection:'row',alignItems :'center'}} >
                       <Image style = {{margin:5,flex:1,resizeMode:'contain'}} source = {require('../image/Logo.jpg')} />
                    </View>
                    <View style ={{flex:.6,flexDirection:'row',marginRight:5,justifyContent:'space-between',
                          backgroundColor:'#EEE' }} >
                      <View style ={{flex:1,flexDirection:'column',padding:5, alignItems :'center',
                           backgroundColor: this.state.active === 'Home' ? '#F67C01':'white'}}>
                      <TouchableHighlight onPress= {() => this.setState({ active: 'Home', })} >
                            {HomeImage}
                        </TouchableHighlight>

                      </View>

                      <View style ={{flex:1,flexDirection:'column',padding:5, alignItems :'center',

                          backgroundColor: this.state.active === 'Menu' ? '#F67C01':'white'}}>
                          <TouchableHighlight   onPress={() => this.setState({ active: 'Menu',})} >
                           {MenuImage}
                        </TouchableHighlight>

                      </View>

                      <View style ={{flex:1,flexDirection:'column',padding:5, alignItems :'center',
                           backgroundColor: this.state.active === 'Order' ? '#F67C01':'white'}}>
                          <TouchableHighlight onPress={() => this.setState({ active: 'Order',})} >
                            {OrderImage}
                        </TouchableHighlight>

                      </View>
                      <View style ={{flex:1,flexDirection:'column',padding:5, alignItems :'center',
                           backgroundColor: this.state.active === 'Notify' ? '#F67C01':'white'}}>
                         <TouchableHighlight onPress= {() => this.setState({ active: 'Notify',})} >
                         {NotifyImage}
                        </TouchableHighlight>

                      </View>
                  </View>
                </View>
          </BottomNavigation>


            </Container>
          </ThemeProvider>

        );
    }
}


_onPressButton = (active:string,key:string) =>{



}



_navigateTo = (routeName: string) => {
     const actionToDispatch = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: routeName ,params: {}})]
      })
      this.props.navigation.dispatch(actionToDispatch)
     }



const styles = StyleSheet.create({

    heading: {
        textAlign: "center"
    },

    logout: {
        padding: 50
    },

    form: {
        flexDirection:'column',
        paddingTop: 50
    },


});

module.exports = Home;
