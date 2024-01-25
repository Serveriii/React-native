import { StyleSheet } from "react-native";
import { colors } from "./mainStyles";

export const addWorkStyle = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
  },
  sportButton: {
    justifyContent: "center",
    margin: 10,
    backgroundColor: colors.light,
    borderRadius: 20,
  },
  centerButton: {
    borderRadius: 0,
  },
  scaffold: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "stretch",
    backgroundColor: "red",
    width: "100%",
    margin: 40,
  },
  workoutContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
