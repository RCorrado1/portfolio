import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBGxKDClfTr5X0dL3A1OAMWFlZgBlL2PQI",
    authDomain: "portfolio-73ae7.firebaseapp.com",
    projectId: "portfolio-73ae7",
    storageBucket: "portfolio-73ae7.appspot.com",
    messagingSenderId: "723314697330",
    appId: "1:723314697330:web:037529539fd92ded5a4eeb",
    measurementId: "G-47X1CMKRJP"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();