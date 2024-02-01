import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import {Button} from "react-native-paper";
import { WorkoutContext } from "./WorkoutContext";



export default function TotalDistance() {
    const sportList = useContext(WorkoutContext);
    const workouts = sportList.workouts;

    const totalRunDistance = workouts
      .filter((workout) => workout.sport === "Running")
      .reduce((sum, workout) => sum + Number(workout.distance), 0);
    const totalCycleDistance = workouts
      .filter((workout) => workout.sport === "Cycling")
      .reduce((sum, workout) => sum + Number(workout.distance), 0);
    const totalSwimDistance = workouts
      .filter((workout) => workout.sport === "Swimming")
      .reduce((sum, workout) => sum + Number(workout.distance), 0);
    const totalSkiDistance = workouts
      .filter((workout) => workout.sport === "Skiing")
      .reduce((sum, workout) => sum + Number(workout.distance), 0);

    const totalDistances = [
        {distance: totalRunDistance + 'km', icon: "run"},
        {distance: totalCycleDistance + 'km', icon: "bike"},
        {distance: totalSwimDistance + 'km', icon: "swim"},
        { distance: totalSkiDistance + 'km', icon: "ski"},
    ]

  return (
    <View style={styles.container}>
        {totalDistances.map((item) => (
            <Button
            style={styles.buttons}
            mode="contained-tonal"
            key={item.sport}
            icon={item.icon}
            children={item.distance}
            onPress={() => {}}
          />
        ))
            }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 10,
    },
    buttons: {
        width: 180,
        margin: 5,
    }
})