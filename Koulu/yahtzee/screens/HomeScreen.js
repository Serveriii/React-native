import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";
import { generalStyles } from "../styles/generalStyles";
import { homeStyles } from "../styles/homeStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {dices} from "../data/Dices";

export default function HomeScreen({ navigation}) {
  const [name, setName] = useState(null);
  const [isName, setIsName] = useState(false);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(null);

  useEffect(() => {
    let date = new Date().toLocaleDateString();
    (async () => {
      try {
        await AsyncStorage.setItem("@scoreboard:key, date", date);
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
      await AsyncStorage.setItem("@scoreboard:key, name", name);
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
            maxLength={20}
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
        <Text style={{alignItems: 'center', padding: 20}}>
          THE GAME: Upper section of the classic Yahtzee dice game. You have{" "}
          {dices.NBR_OF_DICES} dices and for the every dice you have {dices.NBR_OF_THROWS}
          throws. After each throw you can keep dices in order to get same dice
          spot counts as many as possible. In the end of the turn you must
          select your points from {dices.MIN_SPOT} to {dices.MAX_SPOT}. Game ends when all
          points have been selected. The order for selecting those is free.
          POINTS: After each turn game calculates the sum for the dices you
          selected. Only the dices having the same spot count are calculated.
          Inside the game you can not select same points from
          {dices.MIN_SPOT} to {dices.MAX_SPOT} again. GOAL: To get points as much as
          possible.
          {dices.BONUS_POINTS_LIMIT} points is the limit of getting bonus which gives
          you {dices.BONUS_POINTS}
          points more.
        </Text>
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
