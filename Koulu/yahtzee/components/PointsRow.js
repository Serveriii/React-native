import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/gameStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const POINTS = 6;

export default function PointsRow(props) {

  const row = [];
  for (let i = 0; i < POINTS; i++) {
    row.push(
      <MaterialCommunityIcons
        name={"numeric-" + (i + 1) + "-box"}
        key={"row" + i}
        size={40}
        color={"#6B4899"}
      ></MaterialCommunityIcons>
    );
  }

  return (
    <View style={styles.container}>
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
