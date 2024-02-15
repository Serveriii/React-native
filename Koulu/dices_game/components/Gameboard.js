import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../styles/style";

let board = [];
const NUM_OF_DICES = 5;
const NUM_OF_THROWS = 5;
const WINNING_POINTS = 23;

export default Gameboard = () => {
  const [throwsLeft, setThrowsLeft] = useState(NUM_OF_THROWS);
  const [numOfWins, setNumOfWins] = useState(0);
  const [sum, setSum] = useState(0);
  const [status, setStatus] = useState("");

  const throwDices = () => {
    let sum = 0;
    for (let i = 0; i < NUM_OF_DICES; i++) {
      let random = Math.floor(Math.random() * 6) + 1;
      board[i] = "dice-" + random;
      sum += random;
    }
    setThrowsLeft(throwsLeft - 1);
    setSum(sum);
  };

  const checkWin = () => {
    if (sum >= WINNING_POINTS && throwsLeft > 0) {
      setNumOfWins(numOfWins + 1);
      setStatus("You won!");
    } else if (sum >= WINNING_POINTS && throwsLeft === 0) {
      setNumOfWins(numOfWins + 1);
      setStatus("You won, game over!");
    } else if (numOfWins > 0 && throwsLeft === 0) {
      setStatus("You won, game over!");
    } else if (throwsLeft === 0) {
      setStatus("Game over!");
    } else {
      setStatus("Keep throwing!");
    }
  };

  useEffect(() => {
    checkWin();
    if (throwsLeft === NUM_OF_THROWS) {
      setStatus("Waiting to start...");
    }
    if (throwsLeft < 0) {
      setThrowsLeft(NUM_OF_THROWS - 1);
      setNumOfWins(0);
    }
  }, [throwsLeft]);

  const rows = [];
  for (let i = 0; i < NUM_OF_DICES; i++) {
    rows.push(
      <MaterialCommunityIcons
        name={board[i]}
        size={50}
        color="blue"
        key={"row" + i}
      />
    );
  }

  return (
    <View style={styles.gameboard}>
      <View style={styles.flex}>{rows}</View>
      <Text style={styles.gameinfo}>Sum: {sum}</Text>
      <Text style={styles.gameinfo}>Throws left: {throwsLeft}</Text>
      <Text style={styles.gameinfo}>Wins: {numOfWins}</Text>
      <Text style={styles.gameinfo}>{status}</Text>
      <Pressable style={styles.button} onPress={() => throwDices()}>
        <Text style={styles.buttonText}>Throw dices</Text>
      </Pressable>
    </View>
  );
};
