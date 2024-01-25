import React from "react";
import { View, Text, StatusBar } from "react-native";
import { colors, containers } from "../styles/mainStyles";

export default function SettingsScreen() {
  return (
    <View style={containers.scaffold}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Text>Settings Screen</Text>
    </View>
  );
}
