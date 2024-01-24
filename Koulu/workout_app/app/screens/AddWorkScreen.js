import React from "react";
import { View, StatusBar } from "react-native";
import { Text, Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors, containers } from "../styles/mainStyles";

const buttons = [
  {
    label: "Run",
    icon: "run",
    style: { borderBottomRightRadius: 0, borderTopRightRadius: 0 },
  },
  { label: "Cycle", icon: "bike", style: containers.centerButton },
  { label: "Swim", icon: "swim", style: containers.centerButton },
  {
    label: "Ski",
    icon: "ski",
    style: { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 },
  },
];

export default function AddWorkoutScreen() {
  return (
    <View style={containers.scaffold}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={[containers.container, { flexDirection: "row" }]}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            mode="contained"
            icon={button.icon}
            style={[containers.button, button.style]}
            onPress={() => console.log("pressed")}
            children={button.label}
            buttonColor={colors.secondary}
            compact={true}
          />
        ))}
      </View>
    </View>
  );
}
