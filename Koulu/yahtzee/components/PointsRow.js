import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "../styles/gameStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const POINTS = 6;

export default function PointsRow(props, { navigation }) {
  board = props.board;

  useEffect(() => {
    const boardChecker = setInterval(() => {
      console.log(board);
    }, 1000);

    return() => {
      
    }
  }, []);

  const row = [];
  for (let i = 0; i < POINTS; i++) {
    row.push(
      <Pressable key={"row" + i} onPress={() => {}}>
        <MaterialCommunityIcons
          name={"numeric-" + (i + 1) + "-box"}
          key={"row" + i}
          size={40}
          color={"#6B4899"}
        ></MaterialCommunityIcons>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.points}>{props.board}</Text>
      <View style={styles.row}>
        {props.totals.map(
          (total, index) =>
            index < POINTS && (
              <Text key={index} style={styles.totaltext}>
                {total}
              </Text>
            )
        )}
      </View>
      <View style={styles.row}>{row}</View>
    </View>
  );
}
