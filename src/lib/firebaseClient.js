
import * as Firebase from 'firebase';
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRUQrMXxBznBrco4AkqL_i8sgqZ0P1vQo",
  authDomain: "foodpanda-cbfea.firebaseapp.com",
  databaseURL: "https://foodpanda-cbfea.firebaseio.com",
};

// var app = firebase.initializeApp({
//   apiKey: "AIzaSyBRUQrMXxBznBrco4AkqL_i8sgqZ0P1vQo",
//   authDomain: "foodpanda-cbfea.firebaseapp.com",
//   databaseURL: "https://foodpanda-cbfea.firebaseio.com",
//   projectId: "foodpanda-cbfea",
//   storageBucket: "foodpanda-cbfea.appspot.com",
//   messagingSenderId: "627218134634"
// });
//


//
// const firebaseConfig = {
//   apiKey: "AIzaSyBRUQrMXxBznBrco4AkqL_i8sgqZ0P1vQo",
//   authDomain: "foodpanda-cbfea.firebaseapp.com",
//   databaseURL: "https://foodpanda-cbfea.firebaseio.com",
//   projectId: "foodpanda-cbfea",
//   storageBucket: "foodpanda-cbfea.appspot.com",
//   messagingSenderId: "627218134634"
// }
//
// var app = firebase.initializeApp(firebaseConfig);
export const firebaseRef = Firebase.initializeApp(firebaseConfig);
//module.exports.FBApp = app.database();
