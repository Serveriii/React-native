import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles, scaffoldColor } from "./styles";

export default function HomeScreen() {
  return (
    <View style={styles.scaffold}>
      <StatusBar barStyle={"light-content"} backgroundColor={scaffoldColor} />
      <View style={styles.container}>
        <Text style={styles.header}>Personal information</Text>
        <Text style={styles.text}>First Name</Text>
        <TextInput style={styles.textinput} />
        <Text style={styles.text}>Last Name</Text>
        <TextInput style={styles.textinput} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Submit")}
        >
          <Text style={{ fontWeight: "bold" }}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
