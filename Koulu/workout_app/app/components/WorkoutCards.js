import React, { useContext } from "react";
import { Card, Text } from "react-native-paper";
import { WorkoutContext } from "./WorkoutContext";
import { workoutLogStyle } from "../styles/workoutLogStyle";

export default function WorkoutCards(props) {
  const context = useContext(WorkoutContext);
  const workouts = context.workouts;
  let miles;
miles = workouts.map((workout) => ({
  ...workout,
  distance: Math.round(workout.distance * 0.62),
}));


  if (context.units === "mi") {
    return (
      <Card.Content>
        <Text style={workoutLogStyle.text}>
          Distance: {miles.distance} {context.units}
        </Text>
        <Text style={workoutLogStyle.text}>
          Duration: {workouts.duration} min
        </Text>
      </Card.Content>
    );
  } else {
    return (
      <Card.Content>
        <Text style={workoutLogStyle.text}>
          Distance: {props.item.distance} {context.units}
        </Text>
        <Text style={workoutLogStyle.text}>
          Duration: {workouts.duration} min
        </Text>
      </Card.Content>
    );
  }
}
