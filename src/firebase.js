import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
  
    apiKey: "AIzaSyA_EgjIPjSyklRp53LkZYDHiVToYsrbuAE",
    authDomain: "todoist-c6735.firebaseapp.com",
    projectId: "todoist-c6735",
    storageBucket: "todoist-c6735.appspot.com",
    messagingSenderId: "1057182217625",
    appId: "1:1057182217625:web:f66de1d945829e920a8f08"
});

export { firebaseConfig as firebase };