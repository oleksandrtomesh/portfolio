import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDsfgoQzgShML2y4M1Q4QVZG2M1dELyEc4",
    authDomain: "portfolio-e7217.firebaseapp.com",
    projectId: "portfolio-e7217",
    storageBucket: "portfolio-e7217.appspot.com",
    messagingSenderId: "218756913517",
    appId: "1:218756913517:web:e1d3dc50c37a041a74a264"
})

export {firebaseConfig as firebase}