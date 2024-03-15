import { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Alert, ScrollView } from "react-native";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db, AUTH_REF } from "../firebase/Config2";
import { styles } from "../styles/style";

