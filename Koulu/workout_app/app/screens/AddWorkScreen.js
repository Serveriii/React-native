import { React, useState, useContext } from "react";
import { View, StatusBar } from "react-native";
import { Text, Button, SegmentedButtons, TextInput } from "react-native-paper";
import { colors } from "../styles/mainStyles";
import { addWorkStyle } from "../styles/addWorkStyle";
import { WorkoutContext } from "../components/WorkoutContext";
import { WorkoutLogger } from "../components/WorkoutLogger";

export default function AddWorkoutScreen() {
  const [sportValue, setsportValue] = useState("Running");
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <View style={addWorkStyle.scaffold}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <View style={addWorkStyle.workoutContainer}>
        <SegmentedButtons
          theme={{ colors: { secondaryContainer: colors.dark } }}
          value={sportValue}
          onValueChange={setsportValue}
          buttons={sportButtons}
          style={addWorkStyle.sportButton}
        />
      </View>
      <View style={addWorkStyle.container}>
        <TextInput
          label="Distance (km)"
          mode="outlined"
          value={distance}
          onChangeText={(distance) => setDistance(distance)}
          activeOutlineColor={colors.primary}
          maxLength={10}
          keyboardType="numeric"
        />
        <TextInput
          label="Duration(min)"
          mode="outlined"
          value={duration}
          onChangeText={(duration) => setDuration(duration)}
          activeOutlineColor={colors.primary}
          maxLength={10}
          keyboardType="numeric"
        />
      </View>
      <View style={addWorkStyle.container}>
        <Text>Calendar</Text>
      </View>
      <WorkoutLogger
        sportvalue={sportValue}
        distance={distance}
        duration={duration}
      />
    </View>
  );
}

const sportButtons = [
  {
    label: "Run",
    icon: "run",
    value: "Running",
    checkedColor: "white",
  },
  {
    label: "Cycle",
    icon: "bike",
    value: "Cycling",
    checkedColor: "white",
  },
  {
    label: "Swim",
    icon: "swim",
    value: "Swimming",
    checkedColor: "white",
  },
  {
    label: "Ski",
    icon: "ski",
    value: "Skiing",
    checkedColor: "white",
  },
];
