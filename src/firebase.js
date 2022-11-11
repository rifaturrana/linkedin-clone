import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4slc7cu5rkgLruW5P_2QyhphmFBEwlWA",
  authDomain: "linkedin-clone-6b544.firebaseapp.com",
  projectId: "linkedin-clone-6b544",
  storageBucket: "linkedin-clone-6b544.appspot.com",
  messagingSenderId: "824013635816",
  appId: "1:824013635816:web:8ef6f3b3e950245b6f895d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
