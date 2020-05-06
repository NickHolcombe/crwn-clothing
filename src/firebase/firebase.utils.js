import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC_QpLLQiYkVor2Q5gMmCxfOi-2wcJUgTw",
    authDomain: "crwn-db-fe4c2.firebaseapp.com",
    databaseURL: "https://crwn-db-fe4c2.firebaseio.com",
    projectId: "crwn-db-fe4c2",
    storageBucket: "crwn-db-fe4c2.appspot.com",
    messagingSenderId: "817414626273",
    appId: "1:817414626273:web:0692ad1af92667c80fd0a0",
    measurementId: "G-JE39F13L72"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
