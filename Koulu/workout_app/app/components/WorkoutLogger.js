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
  function buttonHandler () {
    if (sportObject.distance <= 0 || sportObject.duration <= 0) {
      alert("Distance and duration cannot be zero or negative.");
    } else if (sportObject.distance === "" || sportObject.duration === "") {
      alert("Distance and duration cannot be empty.");
    } else {
      alert("Workout added");
      sportList.setWorkouts([...sportList.workouts, sportObject]);
    }
  }
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
          buttonHandler();
        }}
      />
    </View>
  );
}
