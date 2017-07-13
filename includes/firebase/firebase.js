
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyBRUQrMXxBznBrco4AkqL_i8sgqZ0P1vQo",
            authDomain: "foodpanda-cbfea.firebaseapp.com",
            databaseURL: "https://foodpanda-cbfea.firebaseio.com",
            storageBucket: "foodpanda-cbfea.appspot.com"
        });
    }

}

module.exports = Firebase;
