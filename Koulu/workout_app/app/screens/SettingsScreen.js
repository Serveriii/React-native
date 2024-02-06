import React, { useContext } from "react";
import { View, Text, StatusBar } from "react-native";
import { RadioButton, Button } from "react-native-paper";
import { colors } from "../styles/mainStyles";
import { WorkoutContext } from "../components/WorkoutContext";
import { settingStyle } from "../styles/settingStyle";

export default function SettingsScreen({ navigation }) {
  const context = useContext(WorkoutContext);

  // function miHandler(newValue) {
  //   context.setUnits(newValue);
  //   let updatedWorkouts = context.workouts.map((workout) => {
  //     return {
  //       ...workout,
  //       distance: Math.round(workout.distance * 0.62),
  //     };
  //   });
  //   context.setWorkouts(updatedWorkouts);
  // }

  // function kmHandler(newValue) {
  //   context.setUnits();
  //   let updatedWorkouts = context.workouts.map((workout) => {
  //     return {
  //       ...workout,
  //       distance: Math.round(workout.distance * 1.61),
  //     };
  //   });
  //   context.setWorkouts(updatedWorkouts);
  // }

  return (
    <View style={settingStyle.scaffold}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <RadioButton.Group value={context.units} onValueChange={(newValue) => {context.setUnits(newValue)}}>
        <View style={settingStyle.container}>
          <Text style={settingStyle.text}>Units</Text>
          <RadioButton.Item label="Kilometers" value="km" />
          <RadioButton.Item label="Miles" value="mi" />
        </View>
      </RadioButton.Group>
      <Button
        children={"Back"}
        mode="contained"
        textColor={colors.light}
        buttonColor={colors.primary}
        style={{ margin: 10, width: 180 }}
        onPress={() => {
          navigation.navigate("Start");
        }}
      />
    </View>
  );
}
