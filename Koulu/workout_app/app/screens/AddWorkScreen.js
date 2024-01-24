import React from "react";
import { View, StatusBar } from "react-native";
import { Text, Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors, containers, buttons } from "../styles/mainStyles";

const sportButtons = [
  {
    label: "Run",
    icon: "run",
    style: { borderBottomRightRadius: 0, borderTopRightRadius: 0 },
  },
  { label: "Cycle", icon: "bike", style: buttons.centerButton },
  { label: "Swim", icon: "swim", style: buttons.centerButton },
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
        {sportButtons.map((button, index) => (
          <Button
            key={index}
            mode="contained"
            icon={button.icon}
            style={[buttons.sportButton, button.style]}
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
