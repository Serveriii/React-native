import { React, useState } from "react";
import { TextInput } from "react-native-paper";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles, scaffoldColor } from "../../styles/styles";

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    <View style={styles.scaffold}>
      <StatusBar barStyle={"light-content"} backgroundColor={scaffoldColor} />
      <View style={styles.container}>
        <Text style={styles.header}>Personal information</Text>
        <TextInput
          mode="outlined"
          label={" name"}
          style={styles.textinput}
          activeOutlineColor="#000000"
          value={text}
          onChange={(text) => setText(text)}
        />
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
