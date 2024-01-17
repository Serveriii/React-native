import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

// const h = Constants.statusBarHeight + 5;

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004ca3",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ffffff",
    padding: 10,
    marginTop: 10,
  },
  container: {
    flex: 0.3,
    width: 300,
    height: 280,
    alignItems: "left",
    justifyContent: "space-evenly",
    backgroundColor: "#136788",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    borderColor: "#ffffff",
    position: "absolute",
    top: 50,
  },
  scaffold: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00445f",
  },
  textinput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ffffff",
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
