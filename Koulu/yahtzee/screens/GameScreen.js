import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { generalStyles } from "../styles/generalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { dices } from "../data/Dices";

let diceRow = [<Icon name="dice" size={60} />];

export default function GameScreen() {
  const [gameDice, setGameDice] = useState([diceRow]);
  const [outline, setOutline] = useState("-outline");

  const startGame = () => {
    diceRow = [];
    for (let i = 0; i < dices.NBR_OF_DICES; i++) {
      let random = Math.floor(Math.random() * 6) + 1;
      diceRow.push(
        <Pressable onPress={() => dicePress(i)}>
          <MaterialCommunityIcons
            name={"dice-" + [random] + outline}
            size={50}
            key={i}
          />
        </Pressable>
      );
    }
    setGameDice(diceRow);
  };

  const dicePress = (index) => {
    const updatedGameDice = [...gameDice];
    const updatedDice = React.cloneElement(updatedGameDice[index], {
      children: React.cloneElement(updatedGameDice[index].props.children, {
        name: "dice-" + index, // Replace with your desired new name
      }),
    });

    // Update the cloned array with the modified dice
    updatedGameDice[index] = updatedDice;

    setGameDice(updatedGameDice);
  };

  return (
    <View style={generalStyles.scaffold}>
      <Header text={"Mini-yahtzee"} />
      <View style={{ flexDirection: "row" }}>{gameDice}</View>
      <Text>Throws left: {dices.NBR_OF_THROWS}</Text>
      <Button children="Throw dices" mode="contained" onPress={startGame} />
      <Footer text={"Author: Severi Jokelainen"} />
    </View>
  );
}
