import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";
import { generalStyles } from "../styles/generalStyles";
import { homeStyles } from "../styles/homeStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomeScreen({ navigation}) {
  const [name, setName] = useState(null);
  const [isName, setIsName] = useState(false);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(null);

  useEffect(() => {
    let date = new Date().toLocaleDateString();
    (async () => {
      try {
        await AsyncStorage.setItem("date", date);
        setDate(date);
      } catch (error) {
        console.log(error);
      }
    }
    )();
    setLoading(false);
    }, []);

  const buttonHandler = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      setIsName(true);
    } catch (error) {
      console.log("Error saving name");
    }
  }


  if (loading) {
    return (
      <View style={[generalStyles.container, {justifyContent: 'space-between'}]}>
        <Header text={"Welcome!"} />
        <ActivityIndicator animating={true} color="white" size={"large"} />
        <Footer text={"Author: Severi Jokelainen"} />
      </View>
    );
  }
  if (!isName) {
    return (
      <View style={generalStyles.scaffold}>
        <Header text={"Welcome!" + date} />
        <View style={homeStyles.container}>
          <Text>Please enter player name:</Text>
          <TextInput
            style={homeStyles.input}
            mode="outlined"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <Button children="OK" mode="contained" onPress={buttonHandler} />
        </View>
        <Footer text={"Author: Severi Jokelainen"} />
      </View>
    );
  }
  return (
    <View style={generalStyles.scaffold}>
      <Header text={"Rules of the game"} />
      <View style={homeStyles.container}>
        <Text>Good luck {name}</Text>
        <Button
        children="Start game"
        mode="contained"
        onPress={() => navigation.navigate("Game")}
        />
      </View>
      <Footer text={"Author: Severi Jokelainen"} />
    </View>
  );
}
