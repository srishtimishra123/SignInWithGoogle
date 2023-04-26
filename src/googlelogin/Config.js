// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD87Gfj_TrvRkNvP6ethCPmjanAPzKmb7w",
  authDomain: "loginwithfirebase-3d486.firebaseapp.com",
  projectId: "loginwithfirebase-3d486",
  storageBucket: "loginwithfirebase-3d486.appspot.com",
  messagingSenderId: "607112553049",
  appId: "1:607112553049:web:3bdb344b819e5688efc748",
  measurementId: "G-R4ZP9EDMPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};