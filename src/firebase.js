// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7_AN-w2STwN2IY1GQ6qdRL4pgWCqkn14",
  authDomain: "alindus-reactjs-project.firebaseapp.com",
  projectId: "alindus-reactjs-project",
  storageBucket: "alindus-reactjs-project.appspot.com",
  messagingSenderId: "354635112020",
  appId: "1:354635112020:web:aeb05c14800f1d442817c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);