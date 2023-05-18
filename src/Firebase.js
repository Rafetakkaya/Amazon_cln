// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// const firebaseConfig = {
 //   apiKey: "",
 //   authDomain: "",
//    projectId: "",
 //   storageBucket: "",
//    messagingSenderId: "",
//    appId: "",
 //   measurementId: ""
//   
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };




const firebaseApp = firebase.initializeApp({

    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""

});
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export default db;
