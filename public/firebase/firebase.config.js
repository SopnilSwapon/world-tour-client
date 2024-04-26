// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMzwzLWjPDDsI331gqa1UubsX6k9oEmqY",
  authDomain: "world-tour-client.firebaseapp.com",
  projectId: "world-tour-client",
  storageBucket: "world-tour-client.appspot.com",
  messagingSenderId: "661173125174",
  appId: "1:661173125174:web:8845c59d1b23a413245897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;