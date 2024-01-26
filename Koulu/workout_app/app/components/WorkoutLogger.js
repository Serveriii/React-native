import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { WorkoutContext } from "./WorkoutContext";



export function WorkoutLogger() {
    const sports = useContext(WorkoutContext);



     const sportObject = {
       sport: sports.sportValue,
       distance: sports.distance,
       duration: sports.duration,
       date: Date.now(),
     };
     console.log(sports.workouts);
    return (
      <View>
        <Button
          children={"Add workout"}
          mode="contained"
          onPress={() => {
            sports.setWorkouts([...sports.workouts, sportObject]);
          }}
        />
        <Button
        children={"Clear workouts"}
        mode="contained"
        onPress={() => {
          sports.setWorkouts([]);
        }}
        />
      </View>
    );
}
