import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9Cdit13zJGnP4LIMIpfS7-kDzBsHYdqg",
    authDomain: "ecommerce-coderhouse-b95cf.firebaseapp.com",
    projectId: "ecommerce-coderhouse-b95cf",
    storageBucket: "ecommerce-coderhouse-b95cf.appspot.com",
    messagingSenderId: "1033763005289",
    appId: "1:1033763005289:web:82c28834755857e40b13f8"
};


const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)