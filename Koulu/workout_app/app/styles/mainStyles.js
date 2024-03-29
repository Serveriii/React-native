import { StyleSheet } from 'react-native';


export const colors = {
  primary: "#093b99",
  secondary: "#75A5FF",
  dark: "#1B3566",
  light: "#A8C7FF",
};

export const buttons = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
  },
  sportButton: {
    width: 100,
    height: 50,
    justifyContent: "center",
  },
  centerButton: {
    borderRadius: 0,
  },
});


export const containers = StyleSheet.create({
  scaffold: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colors.dark,
  },
  workoutContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
} 
);
