import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/gameStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const POINTS = 6;
let numbers = [];

export default function PointsRow(props) {
  const [counts, setCounts] = useState({});
  const [totalSum, setTotalSum] = useState(0);

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

  const selectPoints = (i, counts) => {
    console.log(Object.values(counts)[i]);
    props.restart();
    let sum = Object.values(counts)[i];
    let newTotalSum = totalSum + sum;
    setTotalSum(newTotalSum);

    (async () => {
      try {
        await AsyncStorage.setItem("totalSum", totalSum.toString());
      } catch (error) {
        console.log("Error saving totalSum");
      }
    })();
  };

  const pointColor = (i) => {
    if (Object.values(counts)[i] === 0) {
      return "black";
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
        ></MaterialCommunityIcons>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Total points: {totalSum}</Text>
      <View style={styles.row}>
        <Text>
          {Object.entries(counts).map(([number, count]) => (
            <Text key={number}>{`     ${count}   `}</Text>
          ))}
        </Text>
      </View>
      <View style={styles.row}>{points}</View>
    </View>
  );
}
