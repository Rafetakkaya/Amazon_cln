// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// const firebaseConfig = {
//     apiKey: "AIzaSyDjvMObRqhiCMHkOUgA4CyjSiU5I8K076k",
//     authDomain: "challenge-2cb75.firebaseapp.com",
//     projectId: "challenge-2cb75",
//     storageBucket: "challenge-2cb75.appspot.com",
//     messagingSenderId: "1084733502310",
//     appId: "1:1084733502310:web:7689568c0c1a3cf482cea7",
//     measurementId: "G-G0PZN47FCZ"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };




const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDjvMObRqhiCMHkOUgA4CyjSiU5I8K076k",
    authDomain: "challenge-2cb75.firebaseapp.com",
    projectId: "challenge-2cb75",
    storageBucket: "challenge-2cb75.appspot.com",
    messagingSenderId: "1084733502310",
    appId: "1:1084733502310:web:7689568c0c1a3cf482cea7",
    measurementId: "G-G0PZN47FCZ"

});
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export default db;