import React, { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./app/components/StackScreen";
import { WorkoutContext } from "./app/components/WorkoutContext";

export default function App() {
  const [sportValue, setsportValue] = useState("run");
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [workouts, setWorkouts] = useState([
    {
      sport: "run",
      distance: 10,
      duration: 30,
      date: Date.now(),
    },
    {
      sport: "bike",
      distance: 20,
      duration: 60,
      date: Date.now(),
    },
  ]);
  const providerValue = {
    sportValue,
    distance,
    duration,
    workouts,
    setDistance,
    setDuration,
    setsportValue,
    setWorkouts,
  };

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
