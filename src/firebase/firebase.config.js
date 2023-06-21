import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrtylchiJunlFHJzao3geftI6m2D2OaF8",
  authDomain: "ecommerce-f5d40.firebaseapp.com",
  projectId: "ecommerce-f5d40",
  storageBucket: "ecommerce-f5d40.appspot.com",
  messagingSenderId: "57885201052",
  appId: "1:57885201052:web:a657ba55b5bd8e5af71359",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
