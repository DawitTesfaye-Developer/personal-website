// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_2rxbsJythPDUatol3hG55QRP5Xd1RpE",
  authDomain: "personal-website-ec108.firebaseapp.com",
  projectId: "personal-website-ec108",
  storageBucket: "personal-website-ec108.appspot.com",
  messagingSenderId: "620758757084",
  appId: "1:620758757084:web:6695df8b6f1e91005c0e19",
  measurementId: "G-99WYPE8GLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);