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
       key: newProps.value.key,

     });
        //console.log(newProps);
   }

   render() {
     const Component = TabRoute.getComponentForRouteName(this.state.active);
     return <Component screenProps = {this.state}   method ={this.props.method} />;
   }
 }






class Home extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerTitleStyle:{ color: 'white'},
      headerStyle:{ backgroundColor: '#F67B00'},
      headerRight: (
        <View style = {{flexDirection:'row',flex:1,margin:10}}>
         <Icon style = {{marginLeft:10 }}  color = '#FFF' badgeText = "2"   name = "cart" size={30}  />
         <Icon style = {{marginLeft:10 }}  color = '#FFF'   name = "search" size={30}  />
       </View>
     ),
     headerLeft: (
        <View style = {{flexDirection:'row',flex:1,alignItems:'center',marginRight:5}}>
        <Text style = {{color:'white',fontSize:12,fontweight:'bold'}}> We are happy to Serve you </Text>
     </View>
    ),
    };
  };



  constructor(props){
   super(props);
   this.state = {
      active:'Home',
      key:'home',
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

        return (
          <ThemeProvider uiTheme={uiThemee}>
            <Container>

              <TabContentNavigator value = {this.state}  key = {this.state} method ={this._navigateTo} />

              <BottomNavigation active={this.state.active} hidden={false}
                style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0}, barBackgroundColor: '#FFF', }}
               >

                   <View style ={{flex:1,flexDirection:'row'}}>
                   <View style ={{flex:.4,flexDirection:'row',alignItems :'center'}} >
                       <Image style = {{margin:5,flex:1}} source = {require('../image/Logo.jpg')} />
                    </View>
                    <View style ={{flex:.6,flexDirection:'row',marginRight:5,justifyContent:'space-between',
                          backgroundColor:'#EEE' }} >
                      <View style ={{flex:1,flexDirection:'column',padding:5, alignItems :'center',
                           backgroundColor: this.state.key === 'home' ? '#F67C01':'white'}}>
                      <TouchableHighlight onPress= {() => this.setState({ active: 'Home', key:'home', })} >
                          <Image style={styles.button} source={require('../image/Home_Btn.png')}  />
                        </TouchableHighlight>

                      </View>

                      <View style ={{flex:1,flexDirection:'column',padding:5, alignItems :'center',

                          backgroundColor: this.state.key === 'menu' ? '#F67C01':'white'}}>
                          <TouchableHighlight   onPress={() => this.setState({ active: 'Menu', key:'menu', })} >
                         <Image style={styles.button} source={require('../image/Menu_Btn_nrm.png')}  />
                        </TouchableHighlight>

                      </View>

                      <View style ={{flex:1,flexDirection:'column',padding:5, alignItems :'center',
                           backgroundColor: this.state.key === 'order' ? '#F67C01':'white'}}>
                          <TouchableHighlight onPress={() => this.setState({ active: 'Order', key:'order', })} >
                         <Image style={styles.button} source={require('../image/Order_Btn_nrm.png')}  />
                        </TouchableHighlight>

                      </View>
                      <View style ={{flex:1,flexDirection:'column',padding:5, alignItems :'center',
                           backgroundColor: this.state.key === 'notify' ? '#F67C01':'white'}}>


                         <TouchableHighlight onPress= {() => this.setState({ active: 'Notify', key:'notify', })} >
                         <Image style={styles.button} source={require('../image/Notifi_Btn_nrm.png')}  />
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
    }

});

module.exports = Home;
