import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { WorkoutContext } from "./WorkoutContext";
import { colors } from "../styles/mainStyles";

export function WorkoutLogger(props) {
  const sportList = useContext(WorkoutContext);

  const sportObject = {
    sport: props.sportvalue,
    distance: props.distance,
    duration: props.duration,
    date: props.date,
  };
  return (
    <View>
      {/* ADD ALERTS FOR BUTTONS */}
      <Button
        children={"Add workout"}
        mode="contained"
        textColor={colors.light}
        buttonColor={colors.primary}
        style={{ margin: 10, borderRadius: 20}}
        onPress={() => {
          sportList.setWorkouts([...sportList.workouts, sportObject]);
        }}
      />
    </View>
  );
}
