import { StyleSheet } from "react-native";

export const components = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "#ffffff",
  },
  scaffold: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#528c93",
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 150,
    height: 50,
  },
  modal: {
    width: 300,
    height: 300,
    position: "absolute",
    top: 100,
    left: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
