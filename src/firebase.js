// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRDSAcBwhjnndVMuZ0Xd5r50ZdvVMkZ40",
  authDomain: "bhargav-http2.firebaseapp.com",
  databaseURL: "https://bhargav-http2-default-rtdb.firebaseio.com",
  projectId: "bhargav-http2",
  storageBucket: "bhargav-http2.appspot.com",
  messagingSenderId: "699361284750",
  appId: "1:699361284750:web:469643666170e69768afdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);