// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBWjK2kP8AO5WU--yniX2g06AzLDLk0EQc",
  authDomain: "neutrino-ai-studio.firebaseapp.com",
  projectId: "neutrino-ai-studio",
  storageBucket: "neutrino-ai-studio.appspot.com",
  messagingSenderId: "714596038835",
  appId: "1:714596038835:web:c02b3f49846def498418c6",
  measurementId: "G-R9VBFZ6459",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app); // <-- this is required for Firestore
export const analytics = getAnalytics(app);
