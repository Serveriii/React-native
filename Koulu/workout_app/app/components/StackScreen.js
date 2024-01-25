import StartScreen from "../screens/StartScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AddWorkScreen from "../screens/AddWorkScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../styles/mainStyles";


const Stack = createNativeStackNavigator();

export default function StackScreen() {

    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.light,
        }}
      >
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ title: "Workout App" }}
        />
        <Stack.Screen
          name="Workouts"
          component={WorkoutScreen}
          options={{ title: "Your workouts" }}
        />
        <Stack.Screen
          name="AddWork"
          component={AddWorkScreen}
          options={{ title: "Add workout" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
      </Stack.Navigator>
    );
}
