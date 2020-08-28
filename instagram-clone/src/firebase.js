import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDYz7FNvstjskPw8NmHvIiAWYRW0aeMKs",
    authDomain: "instagram-clone-react-6703c.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-6703c.firebaseio.com",
    projectId: "instagram-clone-react-6703c",
    storageBucket: "instagram-clone-react-6703c.appspot.com",
    messagingSenderId: "748899887451",
    appId: "1:748899887451:web:3348b6fc747496c72fd27e",
    measurementId: "G-67L2G2FQPB"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };