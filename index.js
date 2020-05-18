// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

// Add Firebase project configuration object here
// var firebaseConfig = {};

// firebase.initializeApp(firebaseConfig);

// FirebaseUI config
  var firebaseConfig = {
    apiKey: "AIzaSyAc-_pzg_26lLC4ENqsp0ilcGfDCAxtyjE",
    authDomain: "sbydev-83344.firebaseapp.com",
    databaseURL: "https://sbydev-83344.firebaseio.com",
    projectId: "sbydev-83344",
    storageBucket: "sbydev-83344.appspot.com",
    messagingSenderId: "985275917677",
    appId: "1:985275917677:web:fe6b3d9e98ef933d8b2664"
  };
   firebase.initializeApp(firebaseConfig);
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    // Email / Password Provider.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl){
      // Handle sign-in.
      // Return false to avoid redirect.
      return false;
    }
  }
};

let ui = new firebaseui.auth.AuthUI(firebase.auth())


startRsvpButton.addEventListener("click",()=>{
 

  if(firebase.auth().currentUser){
    firebase.auth().signOut()
  }else{
 ui.start("#firebaseui-auth-container",uiConfig)
  }
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    startRsvpButton.textContent="out"
  }else{
        startRsvpButton.textContent="IN"
  }
})

// const ui = new firebaseui.auth.AuthUI(firebase.auth());
