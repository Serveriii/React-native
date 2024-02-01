import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { WorkoutContext } from "./WorkoutContext";

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
        onPress={() => {
          sportList.setWorkouts([...sportList.workouts, sportObject]);
        }}
      />
    </View>
  );
}
