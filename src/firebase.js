import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAA0QGEJvVeubGDMDkasOb21WeaE0i9XQw",
    authDomain: "clone-withreactjs.firebaseapp.com",
    projectId: "clone-withreactjs",
    storageBucket: "clone-withreactjs.appspot.com",
    messagingSenderId: "964677813996",
    appId: "1:964677813996:web:6ac031c396887f6e3bc7c9"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}