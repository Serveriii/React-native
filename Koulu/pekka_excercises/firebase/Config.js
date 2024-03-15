import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC-Lk-ilpdboUkqQheSL_BrcpPjmVMWDc",
  authDomain: "todo-c0adc.firebaseapp.com",
  projectId: "todo-c0adc",
  storageBucket: "todo-c0adc.appspot.com",
  messagingSenderId: "395285136991",
  appId: "1:395285136991:web:e04955c18426a849597dea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const TODOS_REF = "todos";