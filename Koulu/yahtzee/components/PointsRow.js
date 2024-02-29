import React, { useEffect, useState, useCallback, useContext } from "react";
import { View, Text, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { context } from "./Context";
import { styles } from "../styles/gameStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { dices } from "../data/Dices";

const POINTS = 6;
let numbers = [];

export default function PointsRow(props) {
  const [counts, setCounts] = useState({});
  const { totalSum, setTotalSum } = useContext(context);
  const { pointState, setPointState } = useContext(context);
  const { throwsLeft, setThrowsLeft } = useContext(context);

  useEffect(() => {
    let numbers = props.board.map((item) => Number(item.match(/\d+/)[0]));

    let allNumbers = Array.from({ length: 6 }, (_, i) => i + 1);

    const countsObject = allNumbers.reduce((acc, num) => {
      acc[num] = numbers.filter((n) => n === num).length;
      return acc;
    }, {});

    for (let i = 1; i <= 6; i++) {
      if (countsObject[i]) {
        let sum = countsObject[i] * i;
        countsObject[i] = sum;
      }
    }
    setCounts(countsObject);
  }, [props]);

  let counters = Object.entries(counts).map(([number, count]) => (
    <Text key={number}>{`     ${count}   `}</Text>
  ));

  const selectPoints = (i, counts) => {
    if (pointState[i] === true) {
      alert("You have already selected this point.");
    } else if (Object.values(counts)[i] === 0) {
      alert(
        "You have to land this dice at least once before you can select this point."
      );
    }

    if (pointState[i] === false) {
      let newPointState = [...pointState];
      newPointState[i] = true;
      let sum = Object.values(counts)[i];
      let newTotalSum = totalSum + sum;
      setTotalSum(newTotalSum);
      setPointState(newPointState);
      props.throwDice();
      setThrowsLeft(dices.NBR_OF_THROWS - 1);
    }

    (async () => {
      try {
        await AsyncStorage.setItem("totalSum", totalSum.toString());
      } catch (error) {
        console.log("Error saving totalSum");
      }
    })();
  };

  const pointColor = (i, color) => {
    if (pointState[i] === true) {
      return "purple";
    }
    if (Object.values(counts)[i] === 0) {
      return color;
    } else {
      return "green";
    }
  };

  const points = [];
  for (let i = 0; i < POINTS; i++) {
    points.push(
      <Pressable key={"row" + i} onPress={() => selectPoints(i, counts)}>
        <MaterialCommunityIcons
          name={"numeric-" + (i + 1) + "-box"}
          key={"row" + i}
          size={40}
          color={pointColor(i)}
          state={pointState[i]}
        ></MaterialCommunityIcons>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Total points: {totalSum}</Text>
      <View style={styles.row}>{counters}</View>
      <View style={styles.row}>{points}</View>
    </View>
  );
}
