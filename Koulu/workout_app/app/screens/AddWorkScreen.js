import { React, useState } from "react";
import { View, StatusBar } from "react-native";
import { Text, Button, SegmentedButtons } from "react-native-paper";
import { colors } from "../styles/mainStyles";
import { addWorkStyle } from "../styles/addWorkStyle";



export default function AddWorkoutScreen() {
  const [value, setValue] = useState("run");

  return (
    <View style={addWorkStyle.scaffold}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <View style={addWorkStyle.workoutContainer}>
        <SegmentedButtons
          theme={{ colors: { secondaryContainer: colors.dark } }}
          value={value}
          onValueChange={setValue}
          buttons={sportButtons}
          style={addWorkStyle.sportButton}
        />
      </View>
      <View style={addWorkStyle.container}>
        <Text>Distance</Text>
      </View>
      <View style={addWorkStyle.container}>
        <Text>Duration</Text>
      </View>
      <View style={addWorkStyle.container}>
        <Text>Calendar</Text>
      </View>
      <Button children={"Add workout"} mode="contained" />
    </View>
  );
}

{
  /* {sportButtons.map((button, index) => (
          <Button
            key={index}
            mode="contained"
            icon={button.icon}
            style={[buttons.sportButton, button.style]}
            onPress={() => console.log("pressed")}
            children={button.label}
            buttonColor={colors.dark}
            compact={true}
          />
        ))} */
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