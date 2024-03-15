import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMTohnC7ov6J5GS2FKAzlZAJUczhykmnE",
  authDomain: "todo-auth-cb3a9.firebaseapp.com",
  projectId: "todo-auth-cb3a9",
  storageBucket: "todo-auth-cb3a9.appspot.com",
  messagingSenderId: "413963599921",
  appId: "1:413963599921:web:6b3a4a8047d13892431510",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(),
});
export { auth };
export const db = getFirestore(app);
export const AUTH_REF = "todos";
export const USERS_REF = "users";
