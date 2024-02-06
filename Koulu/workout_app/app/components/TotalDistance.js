import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Portal, Modal, Text } from "react-native-paper";
import { WorkoutContext } from "./WorkoutContext";
import { colors } from "../styles/mainStyles";
import { totalDistanceStyle} from "../styles/totalDistanceStyle";

export default function TotalDistance() {
  const sportList = useContext(WorkoutContext);
  const units = sportList.units;
  const workouts = sportList.workouts;
  const [modal, setModal] = useState(false);

  let totalRunDistance = workouts
    .filter((workout) => workout.sport === "Running")
    .reduce((sum, workout) => sum + Number(workout.distance), 0);
  let totalCycleDistance = workouts
    .filter((workout) => workout.sport === "Cycling")
    .reduce((sum, workout) => sum + Number(workout.distance), 0);
  let totalSwimDistance = workouts
    .filter((workout) => workout.sport === "Swimming")
    .reduce((sum, workout) => sum + Number(workout.distance), 0);
  let totalSkiDistance = workouts
    .filter((workout) => workout.sport === "Skiing")
    .reduce((sum, workout) => sum + Number(workout.distance), 0);
  if (units === "mi") {
    totalRunDistance = Math.round(totalRunDistance * 0.62);
    totalCycleDistance = Math.round(totalCycleDistance * 0.62);
    totalSwimDistance = Math.round(totalSwimDistance * 0.62);
    totalSkiDistance = Math.round(totalSkiDistance * 0.62);
  }

  const totalDistances = [
    { distance: totalRunDistance + units, icon: "run", label: "Running" },
    {
      distance: totalCycleDistance + units,
      icon: "bike",
      label: "Cycling",
    },
    {
      distance: totalSwimDistance + units,
      icon: "swim",
      label: "Swimming",
    },
    { distance: totalSkiDistance + units, icon: "ski", label: "Skiing" },
  ];

  return (
    <View style={totalDistanceStyle.container}>
      {totalDistances.map((item, id) => (
        <Button
          style={totalDistanceStyle.buttons}
          textColor={colors.dark}
          mode="contained-tonal"
          key={id}
          icon={item.icon}
          children={item.distance}
          onPress={() => {
            setModal(true);
          }}
        />
      ))}
      <Portal>
        <Modal visible={modal}>
          <View style={totalDistanceStyle.container}>
            <Text style={totalDistanceStyle.header}>Total sport distances</Text>
            {totalDistances.map((item) => (
              <Text style={totalDistanceStyle.text}>
                {item.label}: {item.distance}
              </Text>
            ))}
            <Button onPress={() => setModal(false)}>Close</Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
}


