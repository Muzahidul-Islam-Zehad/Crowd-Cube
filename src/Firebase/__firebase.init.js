// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoHP2cBA4hFLxFqrnVmH66MoGhPO0jouQ",
  authDomain: "crowdcube-8ab29.firebaseapp.com",
  projectId: "crowdcube-8ab29",
  storageBucket: "crowdcube-8ab29.firebasestorage.app",
  messagingSenderId: "1059840735713",
  appId: "1:1059840735713:web:6837b6f71ef0a236e13aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);