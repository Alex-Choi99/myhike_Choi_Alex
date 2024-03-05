//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCLJSwJ9y3jvNSWdjsn5MXjEDVn1JUkNsI",
    authDomain: "comp1800-202410-demo-ba8a3.firebaseapp.com",
    projectId: "comp1800-202410-demo-ba8a3",
    storageBucket: "comp1800-202410-demo-ba8a3.appspot.com",
    messagingSenderId: "442486772351",
    appId: "1:442486772351:web:a431de287672330b4ce54a"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
