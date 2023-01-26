import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBua4XJshWVZOJ_66bKjEK19YGqQzZMmlc",
  authDomain: "nuxt-camper.firebaseapp.com",
  projectId: "nuxt-camper",
  storageBucket: "nuxt-camper.appspot.com",
  messagingSenderId: "108481493036",
  appId: "1:108481493036:web:a088c5c1e79657ef1df989"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}