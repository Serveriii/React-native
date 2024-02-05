import { StyleSheet } from "react-native";
import {colors} from "./mainStyles";

export const settingStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "left",
    borderWidth: 1,
    borderRadius: 10,
    width: 250,
    margin: 10,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    margin: 10,
  },
  scaffold: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "space-between",
  },
});