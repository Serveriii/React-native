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
    fontSize: 20,
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
    backgroundColor: "#bd7800",
    justifyContent: "space-between",
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
});
