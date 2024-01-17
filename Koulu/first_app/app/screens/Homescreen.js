import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";

export default function HomeScreen() {
  return (
      <View style={styles.scaffold}>
        <StatusBar barStyle={"light-content"} backgroundColor={"#00445f"} />
        <View style={styles.container}>
          <Text style={styles.header}>Personal information</Text>
          <Text>First Name</Text>
          <TextInput style={styles.textinput} />
          <Text>Last Name</Text>
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
