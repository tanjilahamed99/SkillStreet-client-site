// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo4A2zmg-OeVokHPXTf3Iy--7RviZYQ3E",
  authDomain: "skillstreet-eb237.firebaseapp.com",
  projectId: "skillstreet-eb237",
  storageBucket: "skillstreet-eb237.appspot.com",
  messagingSenderId: "448860258761",
  appId: "1:448860258761:web:4a12f7c573bbad8941a818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app