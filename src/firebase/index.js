import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgjI2zaSx6U-V6r-O44r5zngGHriQPt_0",
    authDomain: "whatsapp-habibk.firebaseapp.com",
    databaseURL: "https://whatsapp-habibk.firebaseio.com",
    projectId: "whatsapp-habibk",
    storageBucket: "whatsapp-habibk.appspot.com",
    messagingSenderId: "730035805563",
    appId: "1:730035805563:web:dbe48063a79eb8367e71de",
    measurementId: "G-DT20PNBBKL"
};

const firebaseApp = firebase.initializeApp
(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const FacebookProvider = new firebase.auth.FacebookAuthProvider();


export {auth, GoogleProvider, FacebookProvider};
export default db;