import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 
  apiKey: "AIzaSyA-QWrF-d8nK_zLale2Y7XBOuXq2qZfnfM",
  authDomain: "classtest-414a9.firebaseapp.com",
  projectId: "classtest-414a9",
  storageBucket: "classtest-414a9.appspot.com",
  messagingSenderId: "6982556140",
  appId: "1:6982556140:web:84ddd9842e8111b950c8c9"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();