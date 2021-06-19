import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPYpIQSMiDYvvWLmk-rFSIkga5EFcnuJk",
    authDomain: "fb-alestt.firebaseapp.com",
    projectId: "fb-alestt",
    storageBucket: "fb-alestt.appspot.com",
    messagingSenderId: "39928549804",
    appId: "1:39928549804:web:e597ab910fc328fd422a09",
};
// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
export const database = fire.firestore();
