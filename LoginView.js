'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,AsyncStorage,StyleSheet,Text,
  Picker,View,AppState,Alert,Image,ActivityIndicator,
  TextInput,TouchableHighlight,TouchableOpacity,Platform
} from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { NavigationActions } from 'react-navigation'
import Logo from './logo';

//import Input from 'react-input-password';.

const styles =StyleSheet.create({

  container:{
    paddingTop: 30,
    flex:10,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'#D3D3D3',
    marginBottom:40,
  },

   input :{
            height:40,
            padding:20
      },
      button: {
        backgroundColor: '#7a42f4',
        height:40,
        borderRadius: 10,
        padding:5,
        alignItems :'center',
        flexDirection:'column',
        justifyContent:'center',
    },
    submitButtonText:{
         color: 'white',
         fontSize:20,
      },
      logo:{
           width: 65,
           height:65,
           margin:15,
           borderRadius: 25,
           borderColor: '#7a42f4',
           borderWidth: 1

        },
        innerView :{
          margin:0,
          flexDirection:'row',
          justifyContent:'center',

        },
          inputView :{
          flex:1,
          flexDirection:'row',
          justifyContent:'center'

        },
        title :{
          fontSize:25,
          height:40,
          margin:15,
          padding:10,
          alignItems:'center'

        }
    });

const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    });

var response = [];
class LoginView extends Component{

  static navigationOptions = {
      title: 'Login',
    };

  constructor(props){
   super(props);
   this.state = {
    email: '',
    password :'',
    error: null,
    isLoading: false,
    signedin: false,
    passwordDisplayed: false
   };

    //  var response = AsyncStorage.getItem('response');
      AsyncStorage.getItem('response').then((response) => {
             this.setState({value: JSON.parse(response)});
             this.response =response;
      });


   }

   togglePassword() {
      this.setState({ passwordDisplayed: !this.state.passwordDisplayed })
    }


      async _getStorageValue(){
      var value = await AsyncStorage.getItem('response')
      return JSON.parse(value)
    }




    componentWillMount() {

      AsyncStorage.getItem('response').then((response) => {
              var response = JSON.parse(response)
              console.log("data exists "+response.authKey);
              if(response != null){
              console.log("data exists " + response.authkey);
              this.props.navigation.dispatch( NavigationActions.navigate({
              routeName: 'Home',
              params: {response: response},
             }));
            }
        });
    }




     componentDidMount() {


        this._loadInitialState().done();
       }



    _initLogin() {
      this.setState({ isLoading: true ,message: ''});
      var form = new FormData();
      form.append('email', this.state.email);
      form.append('password', this.state.password);
       fetch('https://mcube.vmctechnologies.com/mobappv1/checkAuth', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'multipart/form-data',
         },
         body:form
       })
      .then(response => response.json())
      .then(json => this._handleResponse(json))
      .catch(error =>
         this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
       })
     ).done();

     }

  _handleResponse(response) {

  this.setState({ isLoading: false , message: response.code });
     console.log(response);
     if(response.code =='200'){
      AsyncStorage.setItem('response', JSON.stringify(response));
      this.props.navigation.dispatch( NavigationActions.navigate({
       routeName: 'Home',
       params: {response: response},
      }));
  }
  else{
     Alert.alert(
               "POST Response",
               "Response Body -> "  + response.code,
           )
       }

}
  _navigateTo = (routeName: string, response :response) => {
       const actionToDispatch = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: routeName ,params: { response: response}})]
        })
        this.props.navigation.dispatch(actionToDispatch)
       }





    _onLoginClicked() {

      if(this.isValid()){
        if (this.state.email != '' || this.state.password != ''){
          this._initLogin()
        } else{
          Alert.alert('Fields cannot be empty' )

        }
    }
   }

    async _loadInitialState() {
        try {
          var email = await AsyncStorage.getItem('email');
          if (email !== null){
            this.setState({email: email});
          }
          var password = await AsyncStorage.getItem('password');
          if (password !== null){
            this.setState({password: password});
          }

        } catch (error) {

        }
      }

    onChangeEmail(email) {
      AsyncStorage.setItem('email', email);
      this.setState({ email:email});
    }

    onChangePassword(password) {
      AsyncStorage.setItem('password', password);
      this.setState({ password: password});
    }

    isValid() {
        const { email, password } = this.state;
        let valid = false;

        if (email.length > 0 && password.length > 0) {
          valid = true;
        }

        if (email.length === 0) {
          this.setState({ error: 'You must enter an email address' });
        } else if (password.length === 0) {
          this.setState({ error: 'You must enter a password' });
        }

        return valid;
      }




      renderLoadingView() {
         return (
           <View style={{
                   flex: 1,
                   flexDirection: 'column',
                   justifyContent: 'center',
                   alignItems: 'center',
                 }}>
                  <View style = {{
                        backgroundColor: '#C0C0C0',
                        padding :2,
                        margin:5,
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        borderColor: '#FF4500',
                        flexDirection: 'column',
                        justifyContent:'center',
                        borderWidth: 2}}>
                              <View>
                                  <ActivityIndicator size='large' text = 'Please wait'/>
                              </View>
                               <View style={{marginTop:8, alignItems: 'center'}}>
                                 <Text>  Loging.. </Text>
                                 <Text> Please wait.. </Text>
                              </View>
                        </View>

                   </View>
                   );
        }


        renderLogingView() {
          const user = (<Icon name = "user" size={30}  />)
          const password = (<Icon name = "lock" size={30}  />)
          const show = (<Font name = "eye" size={25}/>)
          const hide = (<Font name = "eye-slash" size={25}/>)
          var isShow = this.state.passwordDisplayed? (<Font name = "eye" size={25}/>):(<Font name = "eye-slash" size={25}/>);
          var spinner = this.state.isLoading ?( <ActivityIndicator size='large' text = 'Please wait'/> ) : ( <View/>);

           return (
             <View style={styles.container}>
             <View style = {{
               backgroundColor: '#C0C0C0',
               padding :2,
               margin:5,
               borderRadius: 10,
               borderColor: '#FF4500',
               borderWidth: 2}}>

                  <View style={styles.innerView}>
                  <Image style = {styles.logo} source = {require('../img/logo.png')} />
                  </View>
                  <View style={{flexDirection: 'row',margin: 5,  borderColor: '#7a42f4',
                    borderWidth: 2, borderRadius: 10}}>
                         <View style={{width: 40,marginLeft:5, height: 40,flexDirection: 'column',justifyContent:'center'}}>{user}</View>
                         <View style={{width: 300, height: 40,marginRight: 5}}>
                         <TextInput
                         style={styles.input}
                         underlineColorAndroid = "transparent"
                         placeholderTextColor = "#9a73ef"
                         inlineImageLeft = {"account"}
                         placeholder="Enter Username"
                         autoCapitalize = "none"
                         textAlign = "left"
                         textColor= "#000"
                         value = {this.state.email}
                         onChangeText={(text) => this.onChangeEmail(text)}  />
                        </View>
                  </View>
                 <View style={{flexDirection: 'row',margin: 5,  borderColor: '#7a42f4',
                 borderRadius: 10,borderWidth: 2,}}>
                        <View style={{width: 40, height: 40,marginLeft:5, height: 40,flexDirection: 'column',justifyContent:'center'}}>{password}</View>
                        <View style={{width: 260, height: 40}}>
                        <TextInput style={styles.input}
                         underlineColorAndroid="transparent"
                         placeholderTextColor ="#9a73ef"
                         placeholder="Enter Password"
                         textAlign = "left"
                         textColor= "#000"
                         password={!this.state.passwordDisplayed}
                         value = {this.state.password}
                         onChangeText={(text) => this.onChangePassword(text)}
                       />
                      </View>
                      <TouchableOpacity
                        onPress={this.togglePassword.bind(this)}
                        style={{width: 25, height: 25,marginTop:5,flexDirection: 'row',justifyContent:'center'}}>
                        {isShow}
                       </TouchableOpacity>
                 </View>

                 <View style={{flexDirection: 'row',margin: 3,marginBottom:10}}>

                        <View style={{width: 350, height: 40}}>
                         <TouchableHighlight  style = {styles.button}  onPress={this._onLoginClicked.bind(this)} >
                         <Text style = {styles.submitButtonText}>Login</Text>
                        </TouchableHighlight>
                     </View>
               </View>
         </View>
       </View>

            );
          }
















    render(){
      if (this.state.isLoading) {
          return this.renderLoadingView();
      } else {
          return this.renderLogingView();
       }
       return (
       <View style={styles.container}>
      </View>
      );
      }
     }

module.exports = LoginView;
