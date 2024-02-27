import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { generalStyles } from "../styles/generalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { dices } from "../data/Dices";

let diceRow = [<Icon name="dice" size={60} key={"s"} />];
let board = [];

export default function GameScreen() {
  const [gameDice, setGameDice] = useState([diceRow]);
  const [selectedDices, setSelectedDices] = useState(
    new Array(dices.NBR_OF_DICES).fill(false)
  );

  const throwDice = () => {
    console.log(selectedDices);

    diceRow = [];
    for (let i = 0; i < dices.NBR_OF_DICES; i++) {
      let diceNumb = Math.floor(Math.random() * 6) + 1;
      diceRow.push(
        <Pressable key={i} onPress={() => dicePress(i, diceNumb)}>
          <MaterialCommunityIcons
            name={"dice-" + diceNumb + "-outline"}
            size={50}
            key={i}
            color={"black"}
          />
        </Pressable>
      );
    }
    setGameDice(diceRow);
  };


  const dicePress = (index, diceNumb) => {
    let dices = [...selectedDices];
    dices[index] = selectedDices[index] ? false : true;
    setSelectedDices(dices);

    const updatedDiceRow = [...diceRow];
    const updatedDice = React.cloneElement(updatedDiceRow[index], {
      children: React.cloneElement(updatedDiceRow[index].props.children, {
        name: "dice-" + diceNumb,
      }),
    });

    updatedDiceRow[index] = updatedDice;

    setGameDice(updatedDiceRow);
  };

  return (
    <View style={generalStyles.scaffold}>
      <Header text={"Mini-yahtzee"} />
      <View style={{ flexDirection: "row" }}>{gameDice}</View>
      <Text>Throws left: {dices.NBR_OF_THROWS}</Text>
      <Button children="Throw dices" mode="contained" onPress={throwDice} />
      <Footer text={"Author: Severi Jokelainen"} />
    </View>
  );
}
