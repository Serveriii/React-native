import React, { useContext } from "react";
import { View, Text, StatusBar } from "react-native";
import { RadioButton, Button } from "react-native-paper";
import { colors } from "../styles/mainStyles";
import { WorkoutContext } from "../components/WorkoutContext";
import { settingStyle } from "../styles/settingStyle";

export default function SettingsScreen({ navigation }) {
  const context = useContext(WorkoutContext);

  return (
    <View style={settingStyle.scaffold}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <RadioButton.Group
        value={context.units}
        onValueChange={(newValue) => {
          context.setUnits(newValue);
        }}
      >
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
