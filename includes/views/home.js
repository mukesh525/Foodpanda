/**
 * @class Home
 */

import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet,NavigatorIOS,
    TouchableWithoutFeedback
} from "react-native";

import Button from "apsl-react-native-button";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {Hideo} from "react-native-textinput-effects";

import CommonStyle from "../styles/common.css";
import Database from "../firebase/database";
import DismissKeyboard from "dismissKeyboard";
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/EvilIcons';
import TabNavigator from 'react-native-tab-navigator';
class Home extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerTitleStyle:{ color: 'white'},
      headerStyle:{ backgroundColor: '#F67B00'},
      headerRight: (
        <View style = {{flexDirection:'row',flex:1,margin:10}}>
         <Icon style = {{marginLeft:10 }}  color = '#FFF'    name = "cart" size={30}  />
         <Icon style = {{marginLeft:10 }}  color = '#FFF'   name = "search" size={30}  />
       </View>
     ),
     headerLeft: (
        <View style = {{flexDirection:'row',flex:1,alignItems:'center'}}>
        <Text style = {{color:'white',fontSize:12,fontweight:'bold'}}> We are happy to Serve you </Text>
     </View>
    ),
    };
  };



    constructor(props) {
        super(props);

        this.state = {
            uid: "",
            mobile: "",
            mobileForm: ""
        };

        this.logout = this.logout.bind(this);
        this.saveMobile = this.saveMobile.bind(this);

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

    async componentDidMount() {

        try {

            // Get User Credentials
            let user = await firebase.auth().currentUser;

            // Listen for Mobile Changes
            Database.listenUserMobile(user.uid, (mobileNumber) => {
                this.setState({
                    mobile: mobileNumber,
                    mobileForm: mobileNumber
                });
            });

            this.setState({
                uid: user.uid
            });

        } catch (error) {
            console.log(error);
        }

    }

    saveMobile() {

        // Set Mobile
        if (this.state.uid && this.state.mobileForm) {
            Database.setUserMobile(this.state.uid, this.state.mobileForm);
            DismissKeyboard();
        }

    }

    render() {

        return (
            <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
                <View style={CommonStyle.container}>
                    <Text style={styles.heading}>Hello UserId: {this.state.uid}</Text>


                </View>
            </TouchableWithoutFeedback>
        );
    }
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
