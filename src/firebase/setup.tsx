// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA45ULWtkS6i0n_MpgBkoJiLuPEXj02jJ8",
  authDomain: "quora-clone-b9e05.firebaseapp.com",
  projectId: "quora-clone-b9e05",
  storageBucket: "quora-clone-b9e05.appspot.com",
  messagingSenderId: "135615347238",
  appId: "1:135615347238:web:46db09096392ae7cb384e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const storage = getFirestore(app)
