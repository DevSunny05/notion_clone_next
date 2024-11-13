// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPVJPhi8DLj4Jq9VX2CMqyXxZ_JfHbu0o",
  authDomain: "notion-next-app.firebaseapp.com",
  projectId: "notion-next-app",
  storageBucket: "notion-next-app.firebasestorage.app",
  messagingSenderId: "438896873528",
  appId: "1:438896873528:web:3d094f5174129ae47bd6cd",
  measurementId: "G-LK27H6E71J"
};


const app=getApps().length ===0 ? initializeApp(firebaseConfig):getApp();
const db=getFirestore(app)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {db}