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
      const name = await AsyncStorage.getItem("@scoreboard:key, name");
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      let scoreArray = [];
      result.forEach((item) => {
        if (item[0].includes("score")) {
          let score = JSON.parse(item[1]);
          scoreArray.push(score);
        }
      });
      setScores(scoreArray);
      
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
