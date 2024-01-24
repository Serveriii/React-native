import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Text, Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors, containers } from "../styles/mainStyles";


export default function StartScreen({ navigation }) {
  return (
    <View style={containers.scaffold}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <FontAwesome5 name="dumbbell" size={70} color={colors.primary} />
      <Button onPress={() => navigation.navigate("AddWork")}>New workout</Button>
      <Button onPress={() => navigation.navigate("Workouts")}>Your workouts</Button>
    </View>
  );
}