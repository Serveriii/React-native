import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Text, Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors, containers, buttons } from "../styles/mainStyles";

const menuButtons = [
  {
    label: "New workout",
    navigate:"AddWork",
    icon: "dumbbell",
  },
  {
    label: "Your workouts",
    navigate: "Workouts",
    icon: "format-list-bulleted",
  },
  {
    label: "Settings",
    navigate: "Settings",
    icon: "cog",
  },
];

export default function StartScreen({ navigation }) {
  return (
    <View style={containers.scaffold}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      {menuButtons.map((button, index) => (
        <Button
          key={index}
          onPress={() => navigation.navigate(button.navigate)}
          icon={button.icon}
          mode="contained"
          buttonColor={colors.dark}
          children={button.label}
          style={buttons.button}
          labelStyle={{fontSize: 20}}
        />
      ))}
    </View>
  );
}
