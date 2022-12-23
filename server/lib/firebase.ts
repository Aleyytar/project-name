// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIdxwjYiTVLrZXzG9mPhFQ3ZHQqnnXf9k",
  authDomain: "project-name-b23f9.firebaseapp.com",
  projectId: "project-name-b23f9",
  storageBucket: "project-name-b23f9.appspot.com",
  messagingSenderId: "91580881534",
  appId: "1:91580881534:web:c647cb5db3b125cfe4162f"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseapp);