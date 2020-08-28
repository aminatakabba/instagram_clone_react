import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxIpTT1wjRKRC5VTdpdS7hrKtkNuo_G0A",
    authDomain: "instagram-clone-952ba.firebaseapp.com",
    databaseURL: "https://instagram-clone-952ba.firebaseio.com",
    projectId: "instagram-clone-952ba",
    storageBucket: "instagram-clone-952ba.appspot.com",
    messagingSenderId: "427158021204",
    appId: "1:427158021204:web:4896bb2ba4e0505247f9c1",
    measurementId: "G-SVM78K8GBE"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };