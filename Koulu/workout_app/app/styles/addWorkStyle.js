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
    flex: 1,
    justifyContent: "stretch",
    width: "100%",
    padding: 10,
  },
  workoutContainer: {
    flex: 0.4,
    flexDirection: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  dateButton: {
    alignItems: "flex-start",
    marginTop: 5,
    marginBottom: 40,
    borderRadius: 3,
  }
});
