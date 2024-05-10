// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABHOozzsNld0t9MGzuiOYZ6zIOos2ghQw",
  authDomain: "assignments-submission.firebaseapp.com",
  projectId: "assignments-submission",
  storageBucket: "assignments-submission.appspot.com",
  messagingSenderId: "196505404632",
  appId: "1:196505404632:web:274b260c2a1dd1869043ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;