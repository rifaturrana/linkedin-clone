import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "***********************************",
  authDomain: "***********************************",
  projectId: "***********************************",
  storageBucket: "***********************************",
  messagingSenderId: "***********************************",
  appId: "***********************************",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export const storage = firebase.storage();

export default firebase;
