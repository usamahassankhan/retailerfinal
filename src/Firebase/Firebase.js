
import firebase from "firebase";
import 'firebase/auth';
var firebaseConfig = {
    // apiKey: "AIzaSyB0z7Cl69JlRMKuWmLZN-azZR0xkoY4L2E",
    // authDomain: "ibuy-811e6.firebaseapp.com",
    // projectId: "ibuy-811e6",
    // storageBucket: "ibuy-811e6.appspot.com",
    // messagingSenderId: "367509245735",
    // appId: "1:367509245735:web:adc251d6f1cfa605816302"
    apiKey: "AIzaSyAeTgoFKOHd-sidLlHwHXWVTdyFSHIzDho",
    authDomain: "ibuy-ed180.firebaseapp.com",
    databaseURL: "https://ibuy-ed180-default-rtdb.firebaseio.com",
    projectId: "ibuy-ed180",
    storageBucket: "ibuy-ed180.appspot.com",
    messagingSenderId: "77552665299",
    appId: "1:77552665299:web:427df979f19ddb6b088a26",
    measurementId: "G-6R2614B2F5"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;
  const auth=firebase.auth();
  const storage=firebase.storage()
  export {auth,storage};