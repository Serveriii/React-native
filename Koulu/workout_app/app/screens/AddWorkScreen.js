import { React, useState, useContext } from "react";
import { View, StatusBar } from "react-native";
import { Text, Button, SegmentedButtons, TextInput } from "react-native-paper";
import { colors } from "../styles/mainStyles";
import { addWorkStyle } from "../styles/addWorkStyle";
import { WorkoutContext } from "../components/WorkoutContext";

export default function AddWorkoutScreen() {

  const sports = useContext(WorkoutContext);

  return (
    console.log(sports),
    <View style={addWorkStyle.scaffold}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <View style={addWorkStyle.workoutContainer}>
        <SegmentedButtons
          theme={{ colors: { secondaryContainer: colors.dark } }}
          value={sports.sportValue}
          onValueChange={sports.setsportValue}
          buttons={sportButtons}
          style={addWorkStyle.sportButton}
        />
      </View>
      <View style={addWorkStyle.container}>
        <TextInput
          label="Distance (km)"
          mode="outlined"
          value={sports.distance}
          onChangeText={(distance) => sports.setDistance(distance)}
          activeOutlineColor={colors.primary}
          maxLength={10}
          keyboardType="numeric"
        />
        <TextInput
          label="Duration(min)"
          mode="outlined"
          value={sports.duration}
          onChangeText={(duration) => sports.setDuration(duration)}
          activeOutlineColor={colors.primary}
          maxLength={10}
          keyboardType="numeric"
        />
      </View>
      <View style={addWorkStyle.container}>
        <Text>Calendar</Text>
      </View>
      <Button children={"Add workout"} mode="contained" />
    </View>
  );
}

const sportButtons = [
  {
    label: "Run",
    icon: "run",
    value: "run",
    checkedColor: "white",
  },
  {
    label: "Cycle",
    icon: "bike",
    value: "bike",
    checkedColor: "white",
  },
  {
    label: "Swim",
    icon: "swim",
    value: "swim",
    checkedColor: "white",
  },
  {
    label: "Ski",
    icon: "ski",
    value: "ski",
    checkedColor: "white",
  },
];
