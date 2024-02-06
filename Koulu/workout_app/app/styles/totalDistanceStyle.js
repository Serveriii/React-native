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
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
  },
  container: {
    height: 100,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  buttons: {
    width: 100,
    margin: 5,
    backgroundColor: "#f0dbdb",
  },
});
