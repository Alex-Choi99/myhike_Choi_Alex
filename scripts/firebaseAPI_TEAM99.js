//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyA_LB4l1qZvDWQZyRPusICbVY6mhhur-AE",
    authDomain: "comp1800-202410-18c78.firebaseapp.com",
    projectId: "comp1800-202410-18c78",
    storageBucket: "comp1800-202410-18c78.appspot.com",
    messagingSenderId: "1033020767455",
    appId: "1:1033020767455:web:bacfe1b90ad072c4ce7d6a",
    measurementId: "G-XS30E4F29E"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
