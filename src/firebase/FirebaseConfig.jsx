// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOG7PS5KF3m5ziIS28bw2kPNTA47kcpcQ",
  authDomain: "ec-admin-user.firebaseapp.com",
  projectId: "ec-admin-user",
  storageBucket: "ec-admin-user.appspot.com",
  messagingSenderId: "368217932154",
  appId: "1:368217932154:web:a33ce086e7b7d0242b56c3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
