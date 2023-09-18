
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCcoBppCPoGxiIf-L-NJm1qhtN5zWWURGc",
    authDomain: "devstagram-6c9c0.firebaseapp.com",
    projectId: "devstagram-6c9c0",
    storageBucket: "devstagram-6c9c0.appspot.com",
    messagingSenderId: "758270526357",
    appId: "1:758270526357:web:9e31ea56c317e4978bec9c",
    measurementId: "G-PWRS6GCJXB"
    
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  export { auth };
