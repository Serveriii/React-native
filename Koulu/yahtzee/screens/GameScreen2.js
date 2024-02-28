import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { generalStyles } from "../styles/generalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { dices } from "../data/Dices";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

let board = [];

export default function GameScreen2() {
  const [logo, setLogo] = useState(null);
  const [gameDice, setGameDice] = useState([]);
  const [selectedDices, setSelectedDices] = useState(
    new Array(dices.NBR_OF_DICES).fill(false)
  );

  const row = [];


  useEffect(() => {
    setLogo(<Icon name="dice" size={60} key={"s"} color={'#4E1599'} />);

  }, []);

  for (let i = 0; i < dices.NBR_OF_DICES; i++) {
    row.push(
      <Pressable key={"row" + i} onPress={() => dicePress(i)}>
        <MaterialCommunityIcons
          name={board[i]}
          key={"row" + i}
          size={50}
          color={getDiceColor(i)}
        ></MaterialCommunityIcons>
      </Pressable>
    );
  }
  const throwDice = () => {
    setLogo(null);
    setGameDice(row);
    for (let i = 0; i < dices.NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        board[i] = "dice-" + randomNumber;
      }
    }
    console.log(board);
    
  };

    function getDiceColor(i) {
      if (board.every((val, i, arr) => val === arr[0])) {
        return "#ffd700";
      } else {
        return selectedDices[i] ? "#991584" : "#6B4899";
      }
    }

  const dicePress = (index) => {
    let dices = [...selectedDices];
    dices[index] = selectedDices[index] ? false : true;
    setSelectedDices(dices);
  };

  return (
    <View style={generalStyles.scaffold}>
      <Header text={"Mini-yahtzee"} />
      <View style={{ flexDirection: "row" }}>
        {logo}
        {row}
      </View>
      <Text>Throws left: {dices.NBR_OF_THROWS}</Text>
      <Button
        children="Throw dices"
        mode="contained"
        onPress={throwDice}
        buttonColor="#4f1699"
      />
      <Footer text={"Author: Severi Jokelainen"} />
    </View>
  );
}
