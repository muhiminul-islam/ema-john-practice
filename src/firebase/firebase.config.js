// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0a_Uzq5X_pXJP_4ikxRygzuGqahRWjpY",
  authDomain: "ema-john-with-firebase-a-4defc.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-4defc",
  storageBucket: "ema-john-with-firebase-a-4defc.appspot.com",
  messagingSenderId: "950457527032",
  appId: "1:950457527032:web:61c8fe7f206cb9c8fde90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;