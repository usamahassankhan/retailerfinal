
import firebase from "firebase";
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyB0z7Cl69JlRMKuWmLZN-azZR0xkoY4L2E",
    authDomain: "ibuy-811e6.firebaseapp.com",
    projectId: "ibuy-811e6",
    storageBucket: "ibuy-811e6.appspot.com",
    messagingSenderId: "367509245735",
    appId: "1:367509245735:web:adc251d6f1cfa605816302"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;
  const auth=firebase.auth();
  export {auth};