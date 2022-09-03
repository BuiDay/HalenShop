
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAkDJJRuCVkzbRZPbXZs31stzzeI5tXux8",
  authDomain: "halenshop.firebaseapp.com",
  projectId: "halenshop",
  storageBucket: "halenshop.appspot.com",
  messagingSenderId: "37649729060",
  appId: "1:37649729060:web:f8fa5076ae649cf0ff3ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;