import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { generalStyles } from "./styles/generalStyles";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import ScoreScreen from "./screens/ScoreScreen";

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#4f1699",
            tabBarInactiveTintColor: "gray",
            tabBarIconStyle: {size: 30},
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                return <Icon name="home" size={size} color={color} />;
              },
            }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                return <Icon name="dice" size={size} color={color} />;
              },
            }}
          />
          <Stack.Screen
            name="Score"
            component={ScoreScreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                return <Icon name="th-list" size={size} color={color} />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
