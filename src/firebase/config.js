// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLs1O83kmJ-xqvgab_CkR5HKAjQGddZX0",
  authDomain: "my-ecommers-1a347.firebaseapp.com",
  projectId: "my-ecommers-1a347",
  storageBucket: "my-ecommers-1a347.appspot.com",
  messagingSenderId: "903933214151",
  appId: "1:903933214151:web:301738e0c751feaea4ade2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
