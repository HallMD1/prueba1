// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "clinicahall-142d0.firebaseapp.com",
  projectId: "clinicahall-142d0",
  storageBucket: "clinicahall-142d0.appspot.com",
  messagingSenderId: "588094242731",
  appId: "1:588094242731:web:76cf7e298e9fbb28e1dcee",
  measurementId: "G-9XG3DHY2MK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
