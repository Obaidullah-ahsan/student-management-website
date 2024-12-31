// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPGH-jOYR9d4HOf5nzHsvFpNGvfariSfk",
  authDomain: "student-management-syste-1123f.firebaseapp.com",
  projectId: "student-management-syste-1123f",
  storageBucket: "student-management-syste-1123f.firebasestorage.app",
  messagingSenderId: "421487103321",
  appId: "1:421487103321:web:0e880ea54c4f041ffc1048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;