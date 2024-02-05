import React, { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./app/components/StackScreen";
import { WorkoutContext } from "./app/components/WorkoutContext";

export default function App() {
  const [units, setUnits] = useState("km");
  const [workouts, setWorkouts] = useState([
    {
      sport: "Running",
      distance: 10,
      duration: 30,
      date: '1.1.2021',
      icon: 'run',
    },
    {
      sport: "Cycling",
      distance: 20,
      duration: 60,
      date: '1.1.2024',
      icon: 'bike',
    },
  ]);
  const providerValue = {workouts, setWorkouts, units, setUnits};

  return (
    <PaperProvider>
      <WorkoutContext.Provider value={providerValue}>
        <NavigationContainer>
          <StackScreen />
        </NavigationContainer>
      </WorkoutContext.Provider>
    </PaperProvider>
  );
}
