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
import { db, TODOS_REF } from "../firebase/Config";
import { styles } from "../styles/style";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const dbQuery = query(collection(db, TODOS_REF), orderBy("todoItem"));
    onSnapshot(dbQuery, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  const addTodo = async () => {
    try {
      if (newTodo.trim() !== "") {
        await addDoc(collection(db, TODOS_REF), {
          done: false,
          todoItem: newTodo,
        });
        setNewTodo("");
      }
    } catch (error) {
      console.log("Error adding todo: ", error);
    }
  };

  const deleteTodo = async (id) => {
      try {
        await deleteDoc(doc(db, TODOS_REF, id));
      }
      catch (error) {
        console.log("Error deleting todo: ", error);
      }
  }

  const clearAllTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, TODOS_REF));
      querySnapshot.forEach((doc) => {
        deleteTodo(doc.id)
      });
    } catch (error) {
      console.log("Error clearing todos: ", error);
    }
  };

  const createTwoButtonAlert = () => Alert.alert(
  'Todolist', 'Remove all items?', [{
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel'
  }, {
    text: 'OK',
    onPress: () => clearAllTodos()
  }], {cancelable: false}
  );


  let todosKeys = Object.keys(todos);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todolist ({todosKeys.length})</Text>
      <View style={styles.newItem}>
        <TextInput
          style={styles.textInput}
          placeholder="Add new todo"
          value={newTodo}
          onChangeText={setNewTodo}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Add new Todo item" onPress={addTodo} />
        </View>
        <View style={styles.buttonStyle}>
        <Button title="Clear all Todo items" onPress={createTwoButtonAlert} />
        </View>
    </View>
  );
}
