import React, { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./app/components/StackScreen";
import { WorkoutContext } from "./app/components/WorkoutContext";

export default function App() {
  const [workouts, setWorkouts] = useState([
    {
      sport: "Running",
      distance: 10,
      duration: 30,
      date: Date.now(),
    },
    {
      sport: "Cycling",
      distance: 20,
      duration: 60,
      date: Date.now(),
    },
  ]);
  const providerValue = {workouts, setWorkouts};

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
