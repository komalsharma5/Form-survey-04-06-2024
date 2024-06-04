// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIa206oQRUEhiMPGItusVLn0FNrQMHF6g",
  authDomain: "komal-abd45.firebaseapp.com",
  databaseURL: "https://komal-abd45-default-rtdb.firebaseio.com",
  projectId: "komal-abd45",
  storageBucket: "komal-abd45.appspot.com",
  messagingSenderId: "1037286404939",
  appId: "1:1037286404939:web:1de1434f187f3ee92b6ece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;