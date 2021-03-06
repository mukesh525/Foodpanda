/**
 * @class Login
 */

import {
    AppRegistry,
    TextInput,
    Text,
    View,Image,
    StyleSheet,
    dismissKeyboard,TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";

import React, {Component} from "react";
import * as firebase from "firebase";
import Button from "apsl-react-native-button";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {Sae} from "react-native-textinput-effects";
import DismissKeyboard from "dismissKeyboard";
import { NavigationActions } from 'react-navigation'
import CommonStyle from "../styles/common.css";
import Font from 'react-native-vector-icons/FontAwesome';
import Fontn from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';




class Login extends Component {

  static navigationOptions = {
  title: 'Login',
  headerStyle:{ backgroundColor: '#F67B00'},
  headerTitleStyle:{ color: 'white'},
  }


    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            response: ""
        };

        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }

    async signup() {

        DismissKeyboard();

        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "account created"
            });

            setTimeout(() => {
              //  this.props.navigation.navigate('Home')
              this._navigateTo('Home')
                // this.props.navigation.dispatch( NavigationActions.navigate({
                //  routeName: 'Home',
                //  params: {},
                // }));
            }, 1500);


        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

    async login() {

        DismissKeyboard();

        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "Logged In!"
            });

            setTimeout(() => {
                //  this.props.navigation.navigate('Home')
                this._navigateTo('Home')
                //  this.props.navigation.dispatch(NavigationActions.navigate({
                //  routeName: 'Home',
                //  params: {},
                // }));
            }, 1500);

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

    _navigateTo = (routeName: string) => {
         const actionToDispatch = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: routeName ,params: {title:'Home'}})]
          })
          this.props.navigation.dispatch(actionToDispatch)
         }





    render() {

        return (
            <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
            <Image
             source = {require('../image/landing-page.png')}
             style={styles.container}>
                    <View style={styles.formGroup}>
                        <Text style={styles.title}> Food Panda</Text>
                        <Sae
                            label={"Email Address"}
                            iconClass={FontAwesomeIcon}
                            iconName={"pencil"}
                            iconColor={"white"}
                            onChangeText={(email) => this.setState({email})}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Sae
                            label={"Password"}
                            iconClass={FontAwesomeIcon}
                            iconName={"key"}
                            iconColor={"white"}
                            onChangeText={(password) => this.setState({password})}
                            password={true}
                            autoCapitalize="none"
                        />

                        <View style={styles.submit}>
                            <Button onPress={this.signup} style={CommonStyle.buttons} textStyle={{fontSize: 18}}>
                                Sign up
                            </Button>
                            <Button onPress={this.login} style={CommonStyle.buttons} textStyle={{fontSize: 18}}>
                                Login
                            </Button>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.response}>{this.state.response}</Text>
                    </View>
                </Image>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({

    formGroup: {
        padding: 50
    },
    container: {
     flex: 1,
     width: undefined,
     height: undefined,
     backgroundColor:'transparent',

   },
    title: {
        paddingBottom: 16,
        textAlign: "center",
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold",
        opacity: 0.9,
    },

    submit: {
        paddingTop: 30
    },

    response: {
        textAlign: "center",
        paddingTop: 0,
          color: "#fff",
        padding: 50
    }
});

module.exports = Login;
