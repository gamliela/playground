import * as firebase from "firebase/app";
import "firebase/database";
import Database = firebase.database.Database;

const config = {
    apiKey: "AIzaSyA_zb9c2Y_KfmRlo2HmynLhx7LsY0OcmKI",
    authDomain: "playground-82ea9.firebaseapp.com",
    databaseURL: "https://playground-82ea9.firebaseio.com",
    projectId: "playground-82ea9",
    storageBucket: "playground-82ea9.appspot.com",
    messagingSenderId: "194526606269"
};
firebase.initializeApp(config);

// Get a reference to the database service
const database: Database = firebase.database();

export {database};