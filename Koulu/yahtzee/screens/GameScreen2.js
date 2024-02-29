import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { generalStyles } from "../styles/generalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { dices } from "../data/Dices";
import PointsRow from "../components/PointsRow";

let board = [];
let totals = [0, 0, 0, 0, 0, 0];

export default function GameScreen2({ navigation }) {
  const [logo, setLogo] = useState(null);
  const [status, setStatus] = useState("");
  const [throwsLeft, setThrowsLeft] = useState(dices.NBR_OF_THROWS);
  const [selectedDices, setSelectedDices] = useState(
    new Array(dices.NBR_OF_DICES).fill(false)
  );

  const row = [];

  useEffect(() => {
    setLogo(<Icon name="dice" size={60} key={"s"} color={"#4E1599"} />);
  }, []);

  useEffect(() => {
    checkWinner();
    if (throwsLeft === dices.NBR_OF_THROWS) {
      setStatus("Game has not started");
    }
    if (throwsLeft < 0) {
      setThrowsLeft(dices.NBR_OF_THROWS - 1);
    }
  }, [throwsLeft]);

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
    if (throwsLeft === 0) {
      setSelectedDices(new Array(dices.NBR_OF_DICES).fill(false));
      for (let i = 0; i < dices.NBR_OF_DICES; i++) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        board[i] = "dice-" + randomNumber;
      }
    }
    for (let i = 0; i < dices.NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        board[i] = "dice-" + randomNumber;
      }
    }
    setThrowsLeft(throwsLeft - 1);
  };

  function getDiceColor(i) {
    if (board.every((val, i, arr) => val === arr[0])) {
      return "#D49C37";
    } else {
      return selectedDices[i] ? "#991584" : "#6B4899";
    }
  }

  const dicePress = (index) => {
    let dices = [...selectedDices];
    dices[index] = selectedDices[index] ? false : true;
    setSelectedDices(dices);
  };

  const checkWinner = () => {
    if (board.every((val, i, arr) => val === arr[0])) {
      setStatus("Yahtzee!");
    } else if (throwsLeft === 0) {
      setStatus("Round over.");
    } else {
      setStatus("Keep throwing!");
    }
  };

  const restartGame = () => {
    setLogo(
      <Icon name="dice" size={60} key={"s"} color={"#4E1599"}>
        {" "}
      </Icon>
    );
    setThrowsLeft(dices.NBR_OF_THROWS);
    setSelectedDices(new Array(dices.NBR_OF_DICES).fill(false));
    board = [];
  };

  return (
    <View style={generalStyles.scaffold}>
      <Header text={"Mini-yahtzee"} />
      <View style={{ flexDirection: "row" }}>
        {logo}
        {row}
      </View>
      <Text>Throws left: {throwsLeft}</Text>
      <Text>{status}</Text>
      <Button
        children="Throw dices"
        mode="contained"
        onPress={throwDice}
        buttonColor="#4f1699"
      />
      <PointsRow totals={totals} board={board} />
      <Button
        children="Restart game"
        mode="contained"
        buttonColor="#4f1699"
        onPress={restartGame}
      />
      <Footer text={"Author: Severi Jokelainen"} />
    </View>
  );
}
