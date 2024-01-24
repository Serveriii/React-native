import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Text, Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors, containers } from "./app/styles/mainStyles";

export default function WorkoutApp({ navigation }) {
  return (
    <View style={containers.scaffold}>
      <FontAwesome5 name="dumbbell" size={34} color={colors.primary} />
      <Text>WorkoutApp</Text>
      <Button onPress={() => navigation.navigate("Workouts")}>Workouts</Button>
    </View>
  );
}
