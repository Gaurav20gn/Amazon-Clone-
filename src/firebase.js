import firebase from "firebase";
const firbaseApp=firebase.initializeApp({
    
  apiKey: "AIzaSyBWuO1bcqOHYPtDZkiummvqJsCa7OkDZhU",
  authDomain: "clone-265e0.firebaseapp.com",
  databaseURL: "https://clone-265e0.firebaseio.com",
  projectId: "clone-265e0",
  storageBucket: "clone-265e0.appspot.com",
  messagingSenderId: "1030617164813",
  appId: "1:1030617164813:web:343954ca186a24672fb944",
  measurementId: "G-4VNBMQZJDX"

});


const auth = firebase.auth();

export {auth};