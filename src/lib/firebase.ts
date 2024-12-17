// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIcVKi0aNUkvn4KJoNK_5W--wsQw4t-hg",
  authDomain: "techstreet-4a6e4.firebaseapp.com",
  projectId: "techstreet-4a6e4",
  storageBucket: "techstreet-4a6e4.appspot.com",
  messagingSenderId: "894339472786",
  appId: "1:894339472786:web:881d5a56f9097760e2754b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
