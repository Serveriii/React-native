import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const darkColor = "white";
const lightTheme = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 5,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: darkColor,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: darkColor,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 5,
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: "#d68420",
    padding: 10,
    margin: 10,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

const darkTheme = StyleSheet.create({
  ...lightTheme,
  container: {
    ...lightTheme.container,
    backgroundColor: "blue",
  },
  title: {
    ...lightTheme.title,
    color: "black",
  },
});

export { lightTheme, darkTheme };
