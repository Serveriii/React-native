import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import ScoreScreen from "./screens/ScoreScreen";

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabelStyle: { color: "#4f1699" },
              tabBarIcon: () => {
                return <Icon name="home" size={30} color={"#4f1699"} />;
              },
            }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{
              tabBarLabelStyle: { color: "#4f1699" },
              tabBarIcon: () => {
                return <Icon name="dice" size={30} color={"#4f1699"} />;
              },
            }}
          />
          <Stack.Screen
            name="Score"
            component={ScoreScreen}
            options={{
              tabBarActiveTintColor: "red",
              tabBarLabelStyle: { color: "#4f1699" },
              tabBarIcon: () => {
                return <Icon name="th-list" size={30} color={"#4f1699"} />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
