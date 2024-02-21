import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { generalStyles } from "../styles/generalStyles";
import { homeStyles } from "../styles/homeStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomeScreen() {
  const [name, setName] = useState(null);

  return (
    <View style={generalStyles.scaffold}>
      <Header text={"Welcome!"} />
      <View style={generalStyles.container}>
        <Text>Please enter player name:</Text>
        <TextInput
          style={homeStyles.input}
          mode="outlined"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Button
        children="OK"
          mode="contained"
          onPress={() => console.log("Button pressed")}
          />
      </View>
      <Footer text={"Author: Severi Jokelainen"} />
    </View>
  );
}
