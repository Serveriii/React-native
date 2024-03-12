import React, { useEffect, useContext, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { generalStyles } from "../styles/generalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { context } from "../components/Context";

export default function ScoreScreen({ navigation }) {
  const { totalSum, setTotalSum } = useContext(context);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const showScores = navigation.addListener("focus", () => {
      getScoreboard();
    });
    return showScores;
  }, [navigation]);

  const getScoreboard = async () => {
    try {
      let name = await AsyncStorage.getItem("name");
      let date = await AsyncStorage.getItem("date");
      let score = totalSum;
      if (name === null) {
        name = "Anonymous";
      } else if (score === 0) {
        return;
      }
      let newScore = { name: name, date: date, score: score };
      let newScores = [...scores, newScore];
      setScores((prevScores) => [...prevScores, newScore]);
      console.log(newScores);
    } catch (error) {
      console.log("Error getting scoreboard", error);
    }
  };

  const clearScores = async () => {
    try {
      await AsyncStorage.clear();
      setScores([]);
    } catch (error) {
      console.log("Error clearing scoreboard", error);
    }
  };

  return (
    <View style={generalStyles.container}>
      {scores.map((score, index) => (
        <View key={index}>
          <Text style={generalStyles.totaltext}>Player: {score.name}</Text>
          <Text style={generalStyles.totaltext}>Date: {score.date} </Text>
          <Text style={generalStyles.totaltext}>
            Total score: {score.score}
          </Text>
        </View>
      ))}
      <Button
        children="Clear scores"
        mode="contained"
        buttonColor="#4f1699"
        onPress={clearScores}
      />
    </View>
  );
}
