import { StyleSheet } from 'react-native';


export const colors = {
  primary: "#093b99",
  secondary: "#75A5FF",
  dark: "#1B3566",
  light: "#A8C7FF",
};

export const containers = StyleSheet.create({
  scaffold: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 10,
    width: 200,
    height: 50,
    justifyContent: "center",
  },
  }
);
