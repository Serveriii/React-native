import React from "react";
import { View, StatusBar } from "react-native";
import { Text, Button } from "react-native-paper";

import { colors, containers } from "../styles/mainStyles";



export default function WorkoutScreen({ navigation }) {
  return (
    <View style={containers.scaffold}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Button onPress={() => navigation.navigate("Start")}>Home</Button>
    </View>
  );
}
