import { StyleSheet } from "react-native";
import { scaffoldColor } from "./styles";

export const layout = StyleSheet.create({
  scaffold: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: scaffoldColor,
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "600",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.2,
    width: "70%",
    alignItems: "center",
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#ad2e25",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: "100%",
    borderWidth: 1.3,
    padding: 20,
    borderTopStartRadius: 80,
    borderTopEndRadius: 80,
  },
  image: {
    width: 50,
    height: 50,
  },
  switch: {

    color: "#00f2ff",
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
});
