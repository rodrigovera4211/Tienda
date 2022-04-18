// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClHzzxOknh2e4tkUXJJ_7D9wY1oH4XvD8",
  authDomain: "proyecto-tienda-5be0f.firebaseapp.com",
  projectId: "proyecto-tienda-5be0f",
  storageBucket: "proyecto-tienda-5be0f.appspot.com",
  messagingSenderId: "228432068051",
  appId: "1:228432068051:web:951e88a6788ab2e8540326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)