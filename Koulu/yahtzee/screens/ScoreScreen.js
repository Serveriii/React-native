import React, { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { generalStyles } from "../styles/generalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { context } from "../components/Context";

export default function ScoreScreen({ navigation }) {
  const { totalSum, setTotalSum } = useContext(context);

  useEffect(() => {
   const showScores = navigation.addListener("focus", () => {
      getScoreboard();
    }
    );
    return showScores;
  }, [navigation]);

  const getScoreboard = async () => {
    try {
      const name = await AsyncStorage.getItem("@scoreboard:key, name");
      const date = await AsyncStorage.getItem("@scoreboard:key, date");
      const score = await AsyncStorage.getItem("@scoreboard:key, score");
      console.log(name, date, score);
    } catch (error) {
      console.log("Error getting scoreboard");
    }
  };

  return (
    <View style={generalStyles.container}>
      <Text style={generalStyles.totaltext}>Player:</Text>
      <Text style={generalStyles.totaltext}>Date:</Text>
      <Text style={generalStyles.totaltext}>Total score: </Text>
    </View>
  );
}
