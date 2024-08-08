// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpKdmjd8OpHUsIqKRclr3kf599TdSXVeQ",
  authDomain: "pantree-e214f.firebaseapp.com",
  projectId: "pantree-e214f",
  storageBucket: "pantree-e214f.appspot.com",
  messagingSenderId: "29062360412",
  appId: "1:29062360412:web:131b354287daa997d5e599",
  measurementId: "G-B45JDXDN23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);