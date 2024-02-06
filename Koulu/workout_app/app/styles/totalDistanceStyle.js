import { StyleSheet } from "react-native";
import { colors } from "./mainStyles";

export const totalDistanceStyle = StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: 20,
    margin: 10,
  },
  header: {
    color: colors.primary,
    fontSize: 30,
    margin: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
  },
  buttons: {
    width: '100%',
    margin: 5,
    backgroundColor: "#f0dbdb",
  },
});
