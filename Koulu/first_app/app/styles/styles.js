import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const h = Constants.statusBarHeight + 5;
export const scaffoldColor = "#750400";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004ca3",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000000",
    padding: 10,
    marginTop: 10,
  },
  container: {
    backgroundColor: "#0a3c75",
    justifyContent: "space-evenly",
    width: "80%",
    height: 300,
    padding: 15,
    borderWidth: 1.3,
    borderRadius: 10,
  },
  scaffold: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: scaffoldColor,
  },
  text: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 15,
    color: "#ffffff",
  },
  textinput: {
    width: "100%",
    height: 40,
    padding: 0,
    activeOutlineColor: "#04428a",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "600",
    position: "absolute",
    top: 5,
    left: 10,
  },
});
